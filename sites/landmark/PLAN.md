# Landmark Bahrain — plan

**Client:** Landmark Bahrain, which sells, leases and manages freehold homes on Reef Island, Amwaj, Bahrain Bay and Juffair. info@landmarkbahrain.com, +973 1756 4600.
**Who pays them:**
- Expat and Gulf buyers of freehold homes (sales commission).
- Tenants (letting fees).
- Owners who hand over a home to be leased and managed (recurring fees).

**Their current site:** it shows gambling spam. The demo is the fix.
**Dribbble reference:** "Lumière Estates — Luxury Real Estate Landing Page" (dribbble.com/shots/27718771). It has:
- a full-bleed villa with an infinity pool
- a large serif headline at the left
- one bronze pill button
- a frosted card for the featured property at the top right
- a location tag at the bottom right
- thin, light navigation

## Idea
Bahrain's islands are the product. Every home is filed under its island, and the buyer's first question gets a live answer: "Can I buy here, and what will it really cost me?"

## Sitemap
- `/landmark/`: home
- `/landmark/property/:id`: one page per property, with gallery, facts, costs and a viewing booking
- `/landmark/saved`: the homes the visitor has saved with the heart

## Home, top to bottom
1. **Nav:** logo mark and LANDMARK, then Buy · Rent · Islands · Owners · About, a saved-homes heart with its count, and a "Book a viewing" button. On phones: the logo, the heart and a Menu sheet.
2. **Hero:**
   - The villa photo fills the screen.
   - Headline: "Island homes in Bahrain. Freehold for all."
   - One supporting line and an "Explore properties" button.
   - A frosted card cycles through the featured homes (price, beds, a link).
   - A location tag at the bottom right.
3. **Search bar:** overlaps the bottom of the hero. Buy/Rent, island, type, budget and a Search button that filters the listings below.
4. **Properties:** a result count, sort, cards with a photo, status, heart, price in BHD, island, beds, baths and m². Swipe on phones.
5. **Islands:** pick Reef Island, Amwaj, Bahrain Bay or Juffair. The large picture and the facts swap. A "See N homes here" link jumps to filtered results.
6. **Buying as a foreigner (the live calculator):**
   - The visitor enters a price and a deposit.
   - It shows the 2% registration fee, the monthly mortgage, the cash needed, and whether the home qualifies for the Golden Residency (BHD 200,000 or more).
7. **Owners:** rent, months let and service, then a statement of what the owner receives and a request for a proposal.
8. **How a purchase works:** an ordered list from viewing to the title deed.
9. **Questions:** real FAQs about freehold zones, residency and fees.
10. **Contact:** office hours, phone, email and a viewing form.
11. **Footer:** the full-width wordmark and photo credits.
12. **Phone bar:** Call · Email · Book a viewing.

## Checks
- `taste-skill` inspector at 1440, 768 and 390.
- `design-auditor`: the slop detector and the contrast checker.
- Playwright at 390 and 1440: no sideways scroll and no console errors.
