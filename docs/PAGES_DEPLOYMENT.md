# Independent GitHub Pages preview

The static preview uses `index.html` and the existing Arabic Health Administration page. The official website and PHP CMS are untouched.

Expected URL after Pages is enabled: https://ramiqubati55-oss.github.io/Azal/

Repository administrator: **Settings → Pages → Build and deployment → Source: GitHub Actions**. This setting may require an initial manual selection. Then run the "Deploy independent preview to GitHub Pages" workflow if necessary.

The preview has no student-data integration. The existing Health Administration HTML contains external enrollment and WhatsApp links; those lead to third-party destinations. Audit academic claims and admission requirements before relying on them. `robots.txt` and meta noindex request exclusion from indexing but cannot guarantee it.

Do not configure a custom domain or modify the university's DNS. GitHub Pages deployment does not deploy to auhd.edu.ye.
