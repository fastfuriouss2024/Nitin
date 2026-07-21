Trade Widget Replica

Files:
- index.html — main HTML file
- styles.css — styling to match the screenshot
- script.js — placeholders and simple API to replace links/images
- assets/logo.svg — placeholder logo you can replace

How to use

1. Open `index.html` in a browser to preview.
2. Replace `assets/logo.svg` with your logo image (same filename), or edit `script.js` config to point to a remote image URL.
3. Edit `script.js` top `config` object to set `channelLink` and `freeLink`.

Quick override via URL (useful for testing):

- `index.html?logo=https://example.com/logo.png&channel=https://t.me/yourchannel&free=https://t.me/yourfree`

Or from console:

```js
setConfig({ logo: 'https://example.com/new.png', channelLink: 'https://t.me/yourchannel' })
```

Preview

Open `index.html` in your browser (double-click or use a local dev server).
