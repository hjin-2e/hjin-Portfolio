# MIRI Studio dashboard

This folder is copied by Vite from `public/miri/` to `dist/miri/` during `npm run build`.

- Portfolio: `https://www.hamong.site/`
- Dashboard after deployment: `https://www.hamong.site/miri/`
- Preview branch: `feature/miri-dashboard` (not deployed automatically)
- Data source: `public/miri/data/status.json`

## Status data schema

```json
{
  "schemaVersion": 1,
  "updatedAt": "2026-11-09",
  "items": [
    {
      "elementName": "눈사람",
      "style": "Cute 3D Icon",
      "fileName": "snowman_cute_3d_icon.png",
      "status": "planned",
      "updatedAt": "2026-11-09"
    }
  ]
}
```

Allowed status values: `planned`, `ready`, `approved`, `rejected`, `review`.
The committed initial dataset is empty on purpose; the example above is documentation only.

## Build and deploy

Run `npm ci && npm run build`. Verify `dist/miri/index.html` and `dist/miri/data/status.json`.
The existing package.json deploy script publishes `dist` to the `gh-pages` branch.
**Do not deploy this feature branch until reviewed.**

## Security and limitations

GitHub Pages is public. Do not commit Gmail tokens, session cookies, secrets, private mail content, or unpublished private artwork.
This is a read-only dashboard. It does not generate images, call ChatGPT Plus, download PNGs, send emails, or upload to DesignHub.
The ChatGPT scheduled tasks are separate from this GitHub Pages site.
