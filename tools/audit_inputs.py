#!/usr/bin/env python3
"""Read-only validation for AUHD CSV registries and sitemap. Standard library only."""
import argparse
import csv
import json
import xml.etree.ElementTree as ET
from collections import Counter
from pathlib import Path
from urllib.parse import urlparse

def read_csv(path):
    with open(path, encoding="utf-8-sig", newline="") as stream:
        reader = csv.DictReader(stream)
        return reader.fieldnames or [], list(reader)

def audit(faculty, archive, sitemap):
    result = {"faculty": {}, "archive": {}, "sitemap": {}, "warnings": []}
    columns, rows = read_csv(faculty)
    ids = [row.get("الرقم", "").strip() for row in rows]
    numeric = [int(value) for value in ids if value.isdigit()]
    result["faculty"] = {"rows": len(rows), "unique_ids": len(set(ids)), "min_id": min(numeric, default=None), "max_id": max(numeric, default=None), "missing_ids_1_to_179": sorted(set(range(1, 180)) - set(numeric)), "duplicate_ids": sorted(k for k, n in Counter(ids).items() if n > 1)}
    if len(rows) != 179 or len(set(ids)) != 179 or result["faculty"]["missing_ids_1_to_179"]:
        result["warnings"].append("Faculty register does not have exactly 179 unique sequential IDs.")
    columns, rows = read_csv(archive)
    keys = [(row.get("legacy_id", "").strip(), row.get("language", "").strip()) for row in rows]
    result["archive"] = {"rows": len(rows), "languages": dict(Counter(row.get("language", "").strip() for row in rows)), "duplicate_legacy_id_language": sum(n-1 for n in Counter(keys).values() if n > 1), "editorial_decisions": dict(Counter(row.get("editorial_decision", "").strip() for row in rows))}
    if result["archive"]["duplicate_legacy_id_language"]:
        result["warnings"].append("Archive contains repeated (legacy_id, language) keys; review before import.")
    root = ET.parse(sitemap).getroot()
    urls = [(node.text or "").strip() for node in root.iter() if node.tag.rsplit("}", 1)[-1] == "loc"]
    hosts = Counter(urlparse(url).netloc for url in urls)
    result["sitemap"] = {"urls": len(urls), "unique_urls": len(set(urls)), "duplicate_urls": len(urls)-len(set(urls)), "hosts": dict(hosts), "invalid_http_urls": [url for url in urls if urlparse(url).scheme not in ("http", "https") or not urlparse(url).netloc][:20]}
    return result

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--faculty", required=True, type=Path)
    parser.add_argument("--archive", required=True, type=Path)
    parser.add_argument("--sitemap", required=True, type=Path)
    args = parser.parse_args()
    print(json.dumps(audit(args.faculty, args.archive, args.sitemap), ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
