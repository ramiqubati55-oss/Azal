# AUHD audit inputs and deployment boundary

This repository currently contains a standalone Arabic Health Administration HTML page, **not** the PHP source for the production AUHD CMS. Do not paste PHP snippets into CMS HTML fields or deploy speculative fixes.

## Reviewed reference inputs (25 October 2026)
- AUHD-PHP-Administrator-Repair-Report-2026-10-23.html
- AUHD-Progress-Report-2026-10-23-1.html
- AUHD-Comprehensive-Audit-2026-10-19.html
- QAAC_AUHD_Final_EN.html
- auhd-academic-verification-register-179-1.csv (179 rows)
- AUHD_archive_quality_gate_1270.csv (1,270 rows)
- sitemap (2).xml (1,957 distinct loc values)

Source reports identify historical issues: old events appearing in the homepage calendar, faculty card images linking home, invalid Android footer link, phone field rendered as numeric, and bilingual inconsistencies. These findings are **not** proof of their current production status.

## Safe validation
Run the read-only script against local input files (the inputs are intentionally not committed):

```sh
python3 tools/audit_inputs.py --faculty "auhd-academic-verification-register-179-1.csv" --archive "AUHD_archive_quality_gate_1270.csv" --sitemap "sitemap (2).xml"
```

It checks counts, faculty IDs, archive duplicate composite keys, and sitemap syntax/duplicates. It does **not** verify external identities, URL availability, accreditation, or content accuracy.

## Pending work requiring the actual CMS source
- Calendar event queries and bilingual templates, with archive preservation and date normalization.
- Faculty image link templates and official Android download target.
- Phone field and backend validation / database column type.
- News selection, sliders, and bilingual SEO templates.

No production deployment is authorized by this branch. Review and test in staging before merging.
