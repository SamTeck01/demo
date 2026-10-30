# Realty demos

Twenty demo websites for real estate agencies, one React app, one route per client.

| Route | Client | City |
| --- | --- | --- |
| `/landmark` | Landmark Bahrain | Manama |
| `/habitat-hunters` | Habitat Hunters | Austin |
| `/west-austin` | West Austin Properties | Austin |
| `/austin-boutique` | Austin Boutique Realty | Austin |
| `/graham-central` | Graham Central Properties | Austin |
| `/ocean-club` | Ocean Club Realty | Key Biscayne |
| `/aria-global` | Aria Global Realty | Miami |
| `/cedar-park-living` | Cedar Park Living | Cedar Park |
| `/mahogany` | Mahogany Real Estate | Decatur / Atlanta |
| `/glory` | Glory Real Estate | Bahrain |
| `/taskeen` | Taskeen Al Oula | Kuwait City |
| `/wabrah` | Wabrah Real Estate | Doha |
| `/bin-ajlan` | Bin Ajlan Properties | Doha |
| `/primestate` | PrimeState Properties | Doha |
| `/mareena` | Mareena Towers | Kuwait |
| `/sayed-mahdi` | Sayed Mahdi Real Estate | Manama |
| `/gulf-avenues` | Gulf Avenues Real Estate | Doha |
| `/laala` | La'ala Al Kuwait | Kuwait City |
| `/al-jrefe` | Al Jrefe Real Estate | Riyadh |
| `/altruistic` | Altruistic Homes | Miami |

The root `/` is an internal index of all twenty. Send each client only their own link.

## Run it

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

## Read next

- `docs/DEPLOY.md`: putting it on Vercel.
- `docs/EDITING.md`: changing a client's copy, listings, photos, colours or layout.
- `docs/CLIENTS.md`: why each agency was picked, its idea, and the opening line for your outreach.
- `docs/QA.md`: the design checks that were run and what still needs swapping before a client launch.
- Verified contact details are kept out of this repo on purpose (they are personal data). They live in the research folder of the session that built this.

## How it is built

- **React 18 + Vite + React Router.** `src/Site.jsx` holds every component; `src/site.css` holds the look.
- **One JSON file per client** in `src/clients/`. Each file sets that site's idea, hero layout, section order, palette, typefaces, copy, listings and neighbourhoods. A client's data loads only on its own route.
- **Design system** from the skills in `.claude/skills/` (taste-skill, impeccable, Emil Kowalski's design engineering), with layouts studied from the most-liked real estate work on Dribbble.
