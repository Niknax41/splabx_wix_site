# SPLABX Wix-compatible website build

## Included
- `index.html` — production-ready standalone HTML5 build.
- `styles.css` — responsive SPLABX visual system: Bubblegum Hazard pink, action yellow, heavy typographic hierarchy, X-anchor, CTA structure.
- `script.js` — mobile nav and light scroll reveal interactions.
- `wix-embed.html` — single-file version for a Wix **Embed HTML iframe**.
- `custom-element/splabx-site.js` — Wix Studio **Custom Element** version.
- `custom-element/velo-page-code.js` — Velo registration snippet.
- `assets/SPLABX_WEBPAGE.png` — original visual mockup reference.

## Wix Studio implementation options

### Option A — Fastest: Embed HTML
1. Wix Studio → Add → Embed Code → Embed HTML.
2. Paste the full contents of `wix-embed.html`.
3. Set the embed width to 100% and height to at least `3600px`, or split sections into multiple embeds for cleaner editing.

### Option B — Cleaner: Custom Element
1. Enable Dev Mode / Velo.
2. Upload `custom-element/splabx-site.js` to Public files or host it externally.
3. Add a Custom Element to the page.
4. Set tag name: `splabx-site`.
5. Connect the script URL.
6. Use the code in `custom-element/velo-page-code.js` to confirm registration.

## Build rationale
The site translates the mockup into scalable web sections rather than a flat image: sticky navigation, hero, selected work, about, services, process, CTA, and footer. The oversized X functions as the recurring brand anchor, while yellow/pink blocks direct attention toward CTAs and portfolio proof.
