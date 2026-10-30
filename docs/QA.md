# Quality checks

## What was run

- **taste-skill inspector** (`.claude/skills/taste-skill/scripts/inspect.mjs`) on the production build of every route, at 1440, 768 and 390 pixels. It measures headline line counts, type sizes, contrast, sideways scrolling, empty screens, eyebrow labels, emoji, picture count and how much moves.
- **Real-browser load of all 20 routes**: no script errors, listings, headline animation and footer present on each.
- **Visual review** of every hero at desktop and phone width, plus full-page screenshots.

## Result

All 20 routes: **0 FAIL**. The warnings left are judgement calls, mostly:
- no video on the page (no honest clip of each client's own homes exists);
- more than five type sizes on some pages (listing cards and calculators add sizes);
- a cream-leaning ground on a few palettes that suit the client's material.

Re-run any site:

```bash
npm run build
```

```bash
npx vite preview --port 4173
```

```bash
CHROME_PATH=/path/to/chrome node .claude/skills/taste-skill/scripts/inspect.mjs http://localhost:4173/landmark
```

## Fixed during review

- Editorial and arch heroes stretched their photo behind the text.
- Film heroes showed the name small instead of full width.
- Poster heroes let the photo cut into the headline; the nav was unreadable on lime and gold fields.
- Headline words lost their spaces after the word-by-word animation was added.
- Footer wordmark started invisible and read as an empty screen.
- Listing titles wrapped to four lines in the scrolling rows.
- Small labels sat above big figures (read as eyebrows); filter labels moved inside the controls.
- Over-long headlines on Aria Global, Taskeen, Bin Ajlan and Sayed Mahdi.
- Sideways scroll on Sayed Mahdi at 768px; a ★ emoji on Aria Global.
- Too few pictures on Bin Ajlan and Altruistic (added a photo section to each).

## Swap before a client launch

- **Listings are samples.** Titles, prices, sizes and descriptions were written to show the design at full density. Replace with the client's real inventory.
- **Photos are Unsplash**, chosen as real homes and interiors, never presented as the client's own. Replace with the client's photography. The Gulf sites use villa and interior photos rather than city skylines, because no honest skyline photo of Bahrain, Doha or Kuwait was available in the session.
- **Opening hours** are typical for each market, not confirmed.
- **Gulf Avenues' phone** is a placeholder (`+974 4000 0000`): no number was found.
- **Forms** open the visitor's email app; connect a form service to collect enquiries.
- Facts quoted on the pages (sales counts, years, awards, review scores) come from Zillow, Homes.com, HAR, Birdeye, Property Finder, Wamda and TradeArabia, checked in October 2026. Confirm each with the client.
