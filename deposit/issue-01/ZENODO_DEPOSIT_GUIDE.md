# AUHD Zenodo Community — Deposit Instructions for Issue 01

This document prepares a **single, bibliographic metadata dataset** for the existing public AUHD research community: https://zenodo.org/communities/auhd-research/records

## Verified external metadata
- Existing publisher/host: Harvard Dataverse.
- Registered DOI: https://doi.org/10.7910/DVN/WU0FVP
- DOI state checked through DataCite on 13 November 2026: **findable**, registered 11 November 2026.
- DataCite license for the existing Harvard-hosted dataset: **CC0 1.0**. This license applies to the deposited bibliographic dataset, not to publisher PDFs, books, or other original cited works.
- DataCite creator name: Rami Alkubati; affiliation: Azal University for Human Development (AUHD). Organizational producer: Azal University for Human Development.
- ROR: https://ror.org/02zv8ns48
- Public research-index release: https://github.com/ramiqubati55-oss/Azal/releases/tag/auhd-index-issue-01-v1.0.0
- The GitHub archive contains source bibliographic metadata and descriptive files, not the copyright-protected full texts.

## Manual authenticated Zenodo deposit (only once)
Zenodo's public community has no published records as checked on 13 November 2026. An authorized community depositor must use their own signed-in Zenodo account, or an approved Zenodo API access token not included in this package.

1. Sign in at https://zenodo.org, open https://zenodo.org/uploads/new and choose **Dataset** (not Journal Article or Software).
2. Upload the *bibliographic metadata dataset package*, or the original CSV plus normalized JSONL and documentation, rather than the 725 referenced publisher PDFs.
3. Set the title to "Azal University for Human Development (AUHD): Institutional Research and Academic Works Index — Issue 01 (725 Bibliographic Records)" and version 1.0.0.
4. Set creator **Rami Alkubati**, affiliated with Azal University for Human Development. Add the organization's ROR, 02zv8ns48, where supported. Do not invent the 724 missing article-author fields in the source dataset.
5. Use **CC0 1.0** only for the bibliographic dataset compilation and metadata, consistent with its already-published Harvard Dataverse DataCite record; do **not** claim CC0 for the source papers.
6. Set Harvard's DOI `10.7910/DVN/WU0FVP` as a **related identifier** / source reference. Do not paste it into the primary Zenodo DOI field unless using an official supported import of an already-registered identifier. Zenodo generally mints its own DOI for published Zenodo records.
7. Select the existing **Azal University for Human Development (AUHD) — Research Community**, slug `auhd-research`; if community curation is enabled, await approval.
8. Review that the deposition is a bibliographic dataset, not 725 claimed fully verified peer-reviewed manuscripts, and publish with the authenticated account. Record the resulting Zenodo DOI/URL and link it from the GitHub portal and Harvard citation metadata as appropriate.

## Suggested abstract
Issue 01 of the Azal University for Human Development Institutional Research and Academic Works Index provides 725 bibliographic and academic-work records across multiple disciplines and types. The institution's representative confirms a completed review of the catalog. The supplied source CSV includes 654 DOI URLs, 73 publisher/source URLs and 3 open-copy references; most records lack explicit authorship fields. The dataset preserves original titles and identifiers and is made available for discovery, metadata reuse, and source-aware institutional cataloguing. It contains metadata rather than copies of the referenced copyrighted scholarly works.

## Publication notes
- A GitHub release does not automatically publish a Zenodo record unless the repository is connected to Zenodo for GitHub integration **before** a release is created. For this index, manual dataset upload is preferred so the Zenodo record describes the correct dataset rather than the complete university website repository.
- Independent registration of a GitHub Pages site as an OpenAIRE literature repository is not supported by this guide; a real OAI-PMH source and relevant repository registry entry are needed.
- The existing Harvard Dataverse collection remains the preferred primary archival source.
