# Cedar Park Living — site plan

Client: Christina Legrand & Stephanie Reyna, a two-agent team (Venture Partners R.E.), licensed since 2004, 45+ five-star reviews.
Who pays them: families relocating to north-west Austin (buyers) and local owners moving up (sellers).
Dribbble reference: BrightHome — full-bleed dusk house in a rounded frame, glass pill nav, frosted feature card, mint accent.

## Sitemap

- `/cedar-park-living` — home
- `/cedar-park-living/homes/:id` — one page per home: gallery, facts, payment, book a tour

## Home, section by section (wireframe)

1. **Nav** — glass pills: Buy · Sell · Relocate · Team · Contact, white "Home value" button. Phone: logo + Menu sheet.
2. **Hero** — framed dusk photo; frosted "Why Cedar Park Living" card (top right on desktop, under the nav on phones); headline "Find your place in Cedar Park. Live with *pride & confidence*."; **search bar**: area · beds · max price · Search. Search fills the results below.
3. **Homes for sale** — result count, filter chips, sort; listing cards (photo, status, save heart, price, address, beds/baths/sq ft). Each card opens its home page.
4. **Relocating? Compare the suburbs** — table of Cedar Park, Leander, Round Rock, Lago Vista, Brushy Creek: median price, school district, commute, best for. Phones: one card per suburb, swipe.
5. **The relocation plan** — 4 steps, video call to keys.
6. **Sell: what's your home worth** — address, area, sq ft, beds → range → "send me the full valuation".
7. **Team** — Christina & Stephanie, monogram portraits (no fake photos), credentials, review count linking to Google.
8. **Contact** — phone, email, hours, short form.
9. **Footer** — Texas IABS and Consumer Protection Notice links (required on Texas agent sites).
10. **Phone action bar** — Call · Text · Book a tour.

## Home page (wireframe)

Back link → gallery (swipe on phones) → price, address, beds/baths/sq ft → description → monthly payment estimate → **Book a tour** (next 7 days, time slots, name, phone) → similar homes.

## Checks

Playwright at 390px and 1440px: no sideways scroll, no console errors, tap targets ≥44px, contrast on glass text.
