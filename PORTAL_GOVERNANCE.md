# AUHD Open Knowledge Portal — Publication & Governance

This GitHub Pages project is a **companion knowledge and academic-projects portal**, not an alternative official university website. Authoritative institutional information remains on https://www.auhd.edu.ye/ (Arabic) and https://www.auhd.edu.ye/en/ (English).

## Scope
- Curated links to original, authoritative sources.
- Researcher profiles and publications only after verification of affiliation, identifiers, metadata, licensing and consent.
- Student projects only with written permission, author attribution and safe removal of private data.
- Sustainability evidence only when supported by approved source documents.
- No fabricated rankings, impact figures, publication counts or accreditation claims.

## Content workflow
1. Receive content from the relevant university unit.
2. Check author, title, date, institution, original URL, license, DOI/ORCID where applicable.
3. Verify copyright and personal-data consent; exclude passwords, student IDs, unpublished grades, patient information and confidential research.
4. Obtain institutional editorial approval.
5. Add an entry to a reviewed structured catalog; link to the official university source wherever available.
6. Recheck links and metadata quarterly and withdraw or correct outdated records.

## Search indexing
- Indexability varies by page: some preview/institutional duplicates use `noindex`, while the open knowledge landing pages, research directory and repository readiness guides may be indexable. Being indexable does **not** mean that the site is a verified full-text repository or approved by OpenAIRE/OpenDOAR.
- Once the university approves unique, substantive and properly licensed academic materials, selectively enable indexing for those resources; avoid indexing duplicate institutional pages.
- Keep official university pages authoritative and link back to them; where duplicate content must exist, use appropriate canonical handling.

## Suggested measurement
- Google Search Console: impressions, clicks, indexed original pages and referral queries.
- Analytics (privacy-aware and with appropriate notices): unique visitors, referral traffic to the official site, resource clicks.
- Content quality: verified publications, researcher profiles with ORCID, student projects with permission, broken-link rate.
- Research impact should use trusted bibliometric sources, not raw site visits.

## Operational dependencies
- Assign a university editor and an academic reviewer.
- Approve the catalog, privacy policy, publication license and takedown channel.
- Connect a university-controlled GitHub organization or official subdomain only with institutional authorization.
- Keep the current project as an independent preview until university governance approves publication.

## Repository preparation (13 November 2026)
- Arabic and English repository readiness pages at `/repository/` and `/en/repository.html`.
- `repository/records.json` contains five selected publisher affiliation-evidence metadata records, none marked as locally hosted full text or rights-cleared for re-publication.
- Operational deposit instructions in `repository/README.md` are not a formal university-approved policy.
- There is currently **no dedicated OAI-PMH endpoint**, and the pages are **not** registered as a repository with OpenAIRE or OpenDOAR.
- Before applying, collect approved full scholarly files, check licensing, implement a compliant harvesting endpoint in a supported repository platform, and document university-level governance and editorship.
