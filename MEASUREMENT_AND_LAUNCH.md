# AUHD Portal — Search Console, Analytics & Publication Checklist

## Status (2026-10-25)
- Bilingual researcher/publication and student-project directories are populated from cited public sources. Full texts and project files have **not** been copied.
- Analytics scripts are present but **disabled**, with no measurement ID; no tracking starts until the university provides a real GA4 ID and enables the feature.
- Search Console ownership is **not verified**. Verification requires a token issued for the property to its authorized owner.
- Main portal pages remain `noindex` until the university authorizes publication and content quality is reviewed.
- A live visual test and GA4 Realtime validation remain pending.

## Google Analytics 4 setup
1. University owner signs into https://analytics.google.com/ and creates/chooses a GA4 web data stream for the **exact published portal URL**.
2. Obtain the actual measurement ID (format `G-XXXXXXXXXX`). It is a public measurement identifier, not an API secret.
3. Edit `assets/analytics-config.js` to set `measurementId` and `enabled:true` after approving the privacy notice and cookie/consent language.
4. Visit the published portal, opt in, and check **GA4 → Reports → Realtime**. Test Arabic and English pages and ensure no GA network request occurs before consent.
5. Link GA4 and Search Console only after both properties are verified and the university authorizes access.

## Search Console setup
1. Visit https://search.google.com/search-console and add a **URL-prefix property** for `https://ramiqubati55-oss.github.io/Azal/` while the portal uses GitHub Pages.
2. Choose **HTML tag** or **HTML file upload**. Copy the *exact* token/file provided by Google; do not invent one.
3. Insert the HTML meta tag into the public homepage `<head>` (or upload the provided HTML file at the required path). Follow Google's verification UI and confirm ownership.
4. If the university later moves the portal to a university-controlled subdomain, verify that property separately (or verify its domain using DNS TXT with the authorized domain administrator).
5. Do not remove `noindex` until original content and publication rights are reviewed. Then enable indexing only for approved unique research and project pages; add sitemap.xml listing those canonical public URLs and submit it in Search Console.
6. Record baseline impressions, clicks, CTR, queries, indexed pages and official-site referrals monthly.

## Post-deployment visual/functional QA
Test on desktop at 1440px and mobile at 390px, in Chrome and Firefox if possible:
- Arabic RTL and English LTR, language switch, typography and correct local AUHD logo.
- Home, resources, research, projects, impact and their English equivalents.
- Search and empty states, links to original source, metadata and authors.
- Images, horizontal overflow, mobile navigation, focus states and contrast.
- Network: all first-party assets load (200); no JavaScript errors; no third-party analytics without consent.
- Validate Google Search Console verification, GA4 Realtime, `noindex` and robots behavior according to launch policy.
- Check links to the official university and the DOI resolver; verify attribution.
- Capture screenshots and Lighthouse reports for both languages **after actual deployment**.

## Important safeguards
Researcher affiliation and bibliometric counts can change. News-documented student projects are *not* automatically open-source or licensed for redistribution. The independent article about AUHD is not evidence its authors are current AUHD faculty. Keep full texts and project code out of the repository unless permission and rights are confirmed.
