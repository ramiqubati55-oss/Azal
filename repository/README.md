# AUHD Research Repository — Open Deposit Preparation

**Official institution:** Azal University for Human Development (AUHD), Sana'a, Yemen  
**ROR:** https://ror.org/02zv8ns48  
**Contact:** rankings@auhd.edu.ye  
**Public pages:** https://ramiqubati55-oss.github.io/Azal/repository/ (Arabic) and https://ramiqubati55-oss.github.io/Azal/en/repository.html (English).

## Scope and current status (2026-11-13)
This directory provides evidence-linked **metadata**, deposit guidance and interoperability planning. It is a *pre-repository preparation layer*, not a registered OpenDOAR or OpenAIRE data source.

- Five example journal publications are included in `records.json` as **publisher-reported affiliation evidence** from the curated source page `research-affiliation-verified.html`. No publisher full texts are hosted by AUHD here.
- A separate exploratory index has 725 heterogeneous bibliographic records; this does NOT establish 725 verified university-affiliated, peer-reviewed publications. See `data/research-index/issue-01/README.md`.
- No dedicated OAI-PMH v2.0 service or selective `openaire` set has been implemented on GitHub Pages. JSON and CSV are **not** OAI-PMH endpoints.
- Do not apply to OpenDOAR as a standalone repository until substantive, authorized full scholarly content is available and all inclusion conditions are met. OpenDOAR submissions are currently paused pending a January 2027 update.

## Scholarly deposit checklist
1. University editor and academic reviewer establish a transparent provenance record.
2. Confirm authorship, venue, publication date, original DOI/URL, institutional affiliation evidence and the version of the manuscript.
3. Confirm written deposit permission or compatible open-access license **for the exact version being deposited**.
4. Remove confidential, personal, patient, embargoed or third-party content lacking permission.
5. Obtain institutional approval of public publication, metadata, reuse terms and takedown procedures.
6. Deposit **complete, downloadable** licensed academic materials. Do not count publisher outbound links as deposits.
7. Maintain correction, withdrawal, accessibility, retention and metadata revision history.

## Fields recommended for each future full-text deposit
- Stable local item ID, title, abstract, keywords, authors and authenticated ORCID identifiers (if available).
- Institution name and ROR, direct proof of affiliation, record type, year, language.
- DOI (if applicable), permanent item URL, original source URL, edition/version, funder.
- License URI and verified copyright basis; access rights and embargo period.
- File URLs, formats and checksums; approval date, provenance log and takedown contact.

## OpenAIRE alignment
For OpenAIRE literature repositories, follow the OpenAIRE repository guidelines and OAI-PMH 2.0; `oai_dc` is expected and selective harvesting uses the `openaire` set per the OpenAIRE literature instructions. For research data archives, metadata/profile and set requirements differ (e.g. `oai_datacite`). Use a repository platform supporting real request/response OAI-PMH and validation; static GitHub Pages alone is insufficient.

- https://guidelines.openaire.eu/en/latest/literature/use_of_oai_pmh.html
- https://guidelines.openaire.eu/en/latest/data/use_of_oai_pmh.html
- https://opendoar.ac.uk/help/inclusion-criteria
- https://provide.openaire.eu/

## Linked existing collection
The university has a collection inside **Harvard Dataverse**, https://dataverse.harvard.edu/dataverse/auhd-research. It is not the same as running a standalone AUHD OAI-PMH repository. Only *published* eligible records can be expected in a host harvesting workflow. Work with Dataverse administrators on any collection-specific OAI set and precise host attribution.

## Status of policies
This document is operational guidance for editorial/technical preparation, **not** evidence of formally approved AUHD institutional policies. Until rights, licensing, responsible officials and archival commitments are approved, do not claim this portal is a certified repository or that full-text rights have been cleared.

## Governance and removal requests
Contact rankings@auhd.edu.ye to report incorrect attribution, broken source links, licensing concerns, private data or removal requests; treat requests as pending institutional review. Preserve correction history and do not silently alter citable files.
