// Page plan per client: which sections appear, in what order, and the words in them.
// Each order follows how that business makes money: seller leads for US agents,
// landlord mandates for Gulf leasing firms, registrations for off-plan launches.
// Contacts, listings and areas come from ./clients/<path>.json.

const skins = {
  glass: { hero: 'glass' },
  card: { hero: 'split' },
  editorial: { hero: 'editorial' },
}

export const plans = {
  landmark: {
    skin: 'editorial', model: 'Freehold sales, leasing and management for expats',
    tokens: { bg: '#f4f1ea', surface: '#fff', ink: '#14231f', muted: '#5b6762', accent: '#1f5c4f', 'accent-ink': '#fff', dark: '#14231f' },
    fonts: ['family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Inter+Tight:wght@400;500;600', "'Fraunces',Georgia,serif", "'Inter Tight',system-ui,sans-serif"],
    whatsapp: false,
    hero: { kicker: 'Freehold homes in Bahrain', title: 'Own a home on the', accent: "Kingdom's islands.", sub: 'Villas and apartments on Reef Island, Amwaj, Bahrain Bay and Juffair. Sold, leased and managed by people who live here.', primary: ['See homes for sale', 'homes'], secondary: ['Let my property', 'owners'] },
    sections: [
      { type: 'listings', title: 'Homes on the islands', filter: 'type', cta: 'Book a viewing' },
      { type: 'areas', title: 'Which island suits you', sub: 'Every island here is freehold for every nationality.' },
      { type: 'owners', title: 'Own a home here? We lease it and look after it.', sub: 'Tenant search, rent collection, maintenance and a statement every month.', rent: 650, fee: 8, units: 1, unitWord: 'homes' },
      { type: 'proof', stats: [['4', 'Islands we sell on'], ['100%', 'Freehold for all nationalities'], ['48 h', 'To list a home for rent'], ['7 days', 'A week we answer']] },
      { type: 'faq', title: 'Buying in Bahrain', items: [['Can foreigners buy?', 'Yes. Reef Island, Amwaj, Bahrain Bay and Juffair are freehold zones open to every nationality.'], ['Does buying give residency?', 'Property worth BHD 200,000 or more can qualify you for a Golden Residency visa. We help with the application.'], ['What are the costs on top?', 'A 2% transfer fee to the Survey and Land Registration Bureau, paid at completion.']] },
      { type: 'contact', title: 'Book a viewing this week' },
    ],
  },

  'habitat-hunters': {
    skin: 'glass', model: 'Austin buyer and seller agency, 11 agents since 1972',
    tokens: { bg: '#0d1310', surface: '#161e19', ink: '#f2efe6', muted: '#a9b2a9', accent: '#d9f27e', 'accent-ink': '#16210b', light: '#f2efe6', 'light-ink': '#141a15' },
    fonts: ['family=Instrument+Serif&family=Geist:wght@400;500;600', "'Instrument Serif',Georgia,serif", "'Geist',system-ui,sans-serif"],
    hero: { kicker: 'Austin since 1972', title: 'Find the street that', accent: 'suits your life.', sub: 'Eleven agents, one office on Koenig Lane, and more than fifty years of knowing Crestview from Allandale.', primary: ["What's my home worth?", 'value'], secondary: ['Browse homes', 'homes'], card: ['Why Habitat Hunters', ['Locally owned since 1972', '11 full-time agents', 'Seller prep and staging', 'Off-market buyers list', 'Lender and inspector network', 'One office, one standard']] },
    sections: [
      { type: 'valuation', title: 'Thinking of selling? Start with a number.', sub: 'Tell us about your home and get a range in a minute. An agent confirms it after a free walkthrough.', rates: { Crestview: 410, Allandale: 455, Brentwood: 430, 'Hyde Park': 480, 'Wells Branch': 285 } },
      { type: 'listings', title: 'Homes our agents are showing', filter: 'beds', cta: 'Book a showing' },
      { type: 'proof', stats: [['1972', 'Founded in Austin'], ['11', 'Full-time agents'], ['50+', 'Years on Koenig Lane'], ['5.0', 'Google rating']], quotes: [['They knew which block of Crestview we wanted before we did.', 'Buyer, Crestview'], ['Listed on Thursday, four offers by Monday.', 'Seller, Allandale']] },
      { type: 'areas', title: 'Neighborhoods we sell most', sub: 'Pick one to see what homes there cost and who they suit.' },
      { type: 'mortgage', title: 'What would you pay each month?', rate: 6.6, tax: 1.9, ins: 160, price: 625000 },
      { type: 'contact', title: 'Talk to an agent today' },
    ],
  },

  'west-austin': {
    skin: 'editorial', model: 'Family brokerage, high-value West Austin homes since 1979',
    tokens: { bg: '#f3efe7', surface: '#fff', ink: '#1d1a16', muted: '#6b645a', accent: '#8a5a2b', 'accent-ink': '#fff', dark: '#1d1a16' },
    fonts: ['family=Cormorant+Garamond:wght@500;600&family=Manrope:wght@400;500;600', "'Cormorant Garamond',Georgia,serif", "'Manrope',system-ui,sans-serif"],
    hero: { kicker: 'Since 1979', title: 'West of MoPac,', accent: 'three generations deep.', sub: 'Laura Duggan has sold homes in Tarrytown, Westlake and Rollingwood for 45 years. Today her daughter Katy sells beside her.', primary: ['Request a private valuation', 'value'], secondary: ['See current homes', 'homes'] },
    sections: [
      { type: 'listings', title: 'Current homes', filter: 'area', cta: 'Arrange a private showing' },
      { type: 'valuation', title: 'What would your home sell for now?', sub: 'A confidential range for your street. Laura or Katy will walk the house with you before anything is listed.', rates: { Tarrytown: 720, 'Northwest Hills': 450, Westlake: 640, Rollingwood: 690, 'Bryker Woods': 700 } },
      { type: 'person', name: 'Laura Duggan & Katy', role: 'Broker and agent, mother and daughter', text: 'Laura started selling west of MoPac in 1979. Many of her clients are now selling the homes she sold them, and their children call Katy.', creds: ['45 years in West Austin', 'Family-run, no franchise', 'Off-market sales by referral'] },
      { type: 'proof', stats: [['1979', 'First sale west of MoPac'], ['2', 'Generations selling'], ['5', 'Neighborhoods, nothing else']] },
      { type: 'contact', title: 'Call Laura or Katy' },
    ],
  },

  'austin-boutique': {
    skin: 'editorial', model: 'Boutique broker, a few central Austin homes sold personally',
    tokens: { bg: '#f1ede6', surface: '#fff', ink: '#171512', muted: '#6a645b', accent: '#171512', 'accent-ink': '#f1ede6', dark: '#171512' },
    fonts: ['family=Playfair+Display:wght@400;500&family=DM+Sans:wght@400;500;600', "'Playfair Display',Georgia,serif", "'DM Sans',system-ui,sans-serif"],
    hero: { kicker: 'Tarrytown · Rollingwood · Central Austin', title: 'Fewer homes.', accent: 'Sold personally.', sub: 'Drew Buchanan takes on a handful of homes at a time and handles each one himself, from pricing to closing.', primary: ['Sell with Drew', 'value'], secondary: ['See the homes', 'homes'] },
    sections: [
      { type: 'listings', title: 'On the market now', filter: false, cta: 'Ask Drew about this home', big: true },
      { type: 'services', title: 'What a small brokerage does differently', items: [['One agent, start to close', 'You never get handed to a junior. Drew answers his own phone.'], ['A plan for every home', 'Repairs, staging and photography planned before the first showing.'], ['Priced on real comps', 'Recent sales on your street, not an automated estimate.']] },
      { type: 'valuation', title: 'Ask for a pricing plan', sub: 'Get a range now. Drew follows up with a written plan within a day.', rates: { Tarrytown: 700, Rollingwood: 650, 'Central Austin': 520 } },
      { type: 'person', name: 'Drew Buchanan', role: 'Broker', text: 'I keep the business small on purpose, so every seller gets the time a home this important deserves.', creds: ['Licensed Texas broker', 'Office in 78703', 'Limited number of listings'] },
      { type: 'contact', title: 'Call Drew' },
    ],
  },

  'graham-central': {
    skin: 'card', model: 'Central Austin sales plus leasing and property management',
    tokens: { bg: '#ecebe7', surface: '#fff', ink: '#141414', muted: '#5f5f5a', accent: '#d7261e', 'accent-ink': '#fff', soft: '#fde047', dark: '#141414' },
    fonts: ['family=Inter+Tight:wght@400;500;600;700', "'Inter Tight',system-ui,sans-serif", "'Inter Tight',system-ui,sans-serif"],
    hero: { kicker: 'Central Austin & Hill Country', title: 'Buy, sell or rent out', accent: 'your Austin home.', sub: 'Sales and leasing across Tarrytown, Bryker Woods and the Hill Country, from a team that has worked these streets for years.', primary: ['Find a home', 'homes'], secondary: ['Rent out my home', 'owners'], stats: [['Sales', 'and leasing'], ['Austin', 'and Hill Country']] },
    sections: [
      { type: 'listings', title: 'For sale and for lease', filter: 'kind', cta: 'Schedule a tour' },
      { type: 'owners', title: 'Rent out your home without the calls at midnight.', sub: 'We find and screen tenants, collect rent and handle repairs.', rent: 3200, fee: 8, units: 1, unitWord: 'homes' },
      { type: 'valuation', title: 'Or see what it would sell for', sub: 'A quick range for your neighborhood.', rates: { Tarrytown: 700, 'Bryker Woods': 690, 'Northwest Hills': 450, 'Hill Country': 330 } },
      { type: 'contact', title: 'Call the office' },
    ],
  },

  'ocean-club': {
    skin: 'glass', model: 'On-site sales and rentals inside one Key Biscayne community',
    tokens: { bg: '#071518', surface: '#0e2226', ink: '#eef6f5', muted: '#9fb6b6', accent: '#7fd6d0', 'accent-ink': '#062022', light: '#eef6f5', 'light-ink': '#0b1b1d' },
    fonts: ['family=Cormorant:wght@500;600&family=Inter:wght@400;500;600', "'Cormorant',Georgia,serif", "'Inter',system-ui,sans-serif"],
    hero: { kicker: 'Inside the Ocean Club, Key Biscayne', title: 'We are steps away', accent: 'from every home.', sub: "The independent office inside the Ocean Club. We sell and rent in all three towers and the villas, and we can walk you there now.", primary: ['See available homes', 'homes'], secondary: ['Rent out my unit', 'owners'], card: ['The Ocean Club', ['Ocean Tower One', 'Club Tower', 'Lake Tower', 'Lakefront villas', 'Beach club and spa', 'Office on the grounds']] },
    sections: [
      { type: 'buildings', title: 'Choose your tower' },
      { type: 'listings', title: 'Available now', filter: 'kind', cta: 'Book a walkthrough' },
      { type: 'owners', title: 'Own a unit? We rent it season after season.', sub: 'Seasonal and annual rentals, guest check-in and upkeep, handled from the office downstairs.', rent: 9500, fee: 10, units: 1, unitWord: 'units' },
      { type: 'contact', title: 'Stop by the office in the club' },
    ],
  },

  'aria-global': {
    skin: 'card', model: 'Bilingual Miami agent; relocators and Spanish-speaking buyers',
    tokens: { bg: '#e4e4e2', surface: '#fff', ink: '#111', muted: '#555', accent: '#0e8a9a', 'accent-ink': '#fff', soft: '#cfeef1', dark: '#111' },
    fonts: ['family=Inter+Tight:wght@400;500;600', "'Inter Tight',system-ui,sans-serif", "'Inter Tight',system-ui,sans-serif"],
    hero: { kicker: 'Hablamos español', title: 'Your home in Miami,', accent: 'in your language.', sub: 'Maria Medina has closed 94 sales across Miami and Coral Gables, in English and Spanish. Tu hogar en Miami, a tu ritmo.', primary: ['Call Maria · Llamar', 'contact'], secondary: ['Browse homes', 'homes'], stats: [['94', 'sales closed'], ['71', 'five-star reviews']] },
    sections: [
      { type: 'listings', title: 'Homes for sale and rent · En venta y alquiler', filter: 'kind', cta: 'Book a showing · Agendar' },
      { type: 'mortgage', title: 'Your monthly payment · Su pago mensual', rate: 6.6, tax: 2.0, ins: 330, price: 720000 },
      { type: 'valuation', title: 'Selling? Know your price · ¿Vende?', sub: 'A range in a minute, then a free visit from Maria.', rates: { 'Coral Gables': 640, Brickell: 560, Doral: 380, Kendall: 360 } },
      { type: 'areas', title: 'Where to live in Miami · Dónde vivir' },
      { type: 'proof', quotes: [['Maria explained every step in Spanish to my parents. We closed in 30 days.', 'Buyer, Doral'], ['Sold above asking in Coral Gables.', 'Seller, Coral Gables']] },
      { type: 'contact', title: 'Talk to Maria · Hable con María' },
    ],
  },

  'cedar-park-living': {
    skin: 'glass', model: 'Two-agent team for families relocating to north-west Austin',
    tokens: { bg: '#0b0f0b', surface: '#141a14', ink: '#f4f7f1', muted: '#a8b3a6', accent: '#8ee59b', 'accent-ink': '#0b2a10', light: '#f3f5ef', 'light-ink': '#111' },
    fonts: ['family=Geist:wght@400;500;600', "'Geist',system-ui,sans-serif", "'Geist',system-ui,sans-serif"],
    hero: { kicker: 'Cedar Park · Leander · Round Rock', title: 'Find your place in Cedar Park. Live with', accent: 'pride & confidence.', sub: 'Christina and Stephanie have helped families buy, sell and relocate here since 2004: the lake, the trails, the schools, then the house.', primary: ['Explore homes', 'homes'], secondary: ['Plan my move', 'steps'], card: ['Why Cedar Park Living', ['Licensed since 2004', '45+ five-star reviews', 'School-zone advice', 'Relocation tours by video', 'Fair market pricing', 'Help to closing day']] },
    sections: [
      { type: 'listings', title: "Homes we're showing now", filter: 'beds', cta: 'Book a tour' },
      { type: 'steps', title: 'Moving from out of town? Here is the plan.', items: [['Video call', 'Tell us about work, schools and budget.'], ['Shortlist', 'We send 5 to 8 homes that fit, with school zones.'], ['Tour weekend', 'One weekend, every home, in person or by video.'], ['Keys', 'Inspections, lender and closing handled.']] },
      { type: 'valuation', title: 'What is your home worth today?', sub: 'Selling first? Get a range now, confirmed with a free walkthrough.', rates: { 'Cedar Park': 238, Leander: 226, 'Round Rock': 231, 'Lago Vista': 250 } },
      { type: 'proof', stats: [['2004', 'Licensed since'], ['45+', 'Five-star reviews'], ['2', 'Agents, one team']], quotes: [['We bought from Seattle without flying in twice. They thought of everything.', 'Relocating family, Leander']] },
      { type: 'areas', title: 'Where families settle' },
      { type: 'contact', title: 'Talk to Christina & Stephanie' },
    ],
  },

  mahogany: {
    skin: 'editorial', model: 'Metro Atlanta buyer and seller broker, 231 sales',
    tokens: { bg: '#f5efe8', surface: '#fff', ink: '#2a1610', muted: '#715b52', accent: '#6b2a1a', 'accent-ink': '#fff', soft: '#c49a5a', dark: '#2a1610' },
    fonts: ['family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500&family=Figtree:wght@400;500;600', "'Bodoni Moda',Georgia,serif", "'Figtree',system-ui,sans-serif"],
    hero: { kicker: 'Decatur · Metro Atlanta', title: '231 homes sold.', accent: 'Yours could be next.', sub: 'Angellet Minard has helped Atlanta families buy and sell for 21 years, from her office on Court Square in Decatur.', primary: ["What's my home worth?", 'value'], secondary: ['Buy your first home', 'pay'] },
    sections: [
      { type: 'valuation', title: 'Find out what your home would sell for', sub: 'A range in one minute. Angellet confirms it with a free market analysis.', rates: { Decatur: 330, 'East Atlanta': 300, 'Stone Mountain': 190, Newnan: 175 } },
      { type: 'listings', title: 'Homes for sale', filter: 'area', cta: 'Book a showing' },
      { type: 'mortgage', title: 'First home? See your real monthly payment.', rate: 6.6, tax: 1.3, ins: 140, price: 365000, note: 'Ask about Georgia down-payment assistance programs.' },
      { type: 'person', name: 'Angellet Minard', role: 'Broker and owner since 2013', text: 'I started in 2004 and opened Mahogany in 2013. I still answer my own phone, and I still walk every buyer through every page they sign.', creds: ['231 homes sold', '21 years in metro Atlanta', 'Court Square, Decatur'] },
      { type: 'contact', title: "Let's talk" },
    ],
  },

  glory: {
    skin: 'editorial', model: 'Off-plan launch: Breeze of Dilmunia',
    tokens: { bg: '#f2f4f3', surface: '#fff', ink: '#0f2930', muted: '#46606a', accent: '#e0663e', 'accent-ink': '#fff', dark: '#0f5e6e' },
    fonts: ['family=Marcellus&family=Jost:wght@400;500', "'Marcellus',Georgia,serif", "'Jost',system-ui,sans-serif"],
    whatsapp: '97338226666',
    hero: { kicker: 'Breeze of Dilmunia · Bahrain', title: 'Island freehold from', accent: 'BHD 63,000.', sub: 'Five years to pay at 0% interest, about BHD 735 a month. Every nationality may buy. Crypto accepted.', primary: ['Plan my payments', 'plan'], secondary: ['Register on WhatsApp', 'contact'] },
    sections: [
      { type: 'plan', title: 'Your payment plan, at 0% interest', down: 20, years: 5 },
      { type: 'listings', title: 'Choose your residence', filter: 'type', cta: 'Reserve on WhatsApp' },
      { type: 'services', title: 'Why buyers choose Dilmunia', items: [['Freehold for everyone', 'Any nationality can own outright.'], ['0% for five years', 'Pay monthly with no bank and no interest.'], ['Crypto accepted', 'Pay deposits in major cryptocurrencies.'], ['Golden Residency', 'Homes from BHD 200,000 can qualify for a 10-year visa.']] },
      { type: 'faq', title: 'Questions buyers ask', items: [['When is handover?', 'Ask us for the current schedule for each building.'], ['Can I buy from abroad?', 'Yes. Reserve on WhatsApp, sign digitally, and visit when you like.'], ['Is there a service charge?', 'Yes, set per building. We send the figures with the brochure.']] },
      { type: 'contact', title: 'Register your interest' },
    ],
  },

  taskeen: {
    skin: 'card', model: 'Building management for Kuwaiti landlords',
    tokens: { bg: '#eceef0', surface: '#fff', ink: '#0d1b2a', muted: '#53606d', accent: '#1d4ed8', 'accent-ink': '#fff', soft: '#dbe6ff', dark: '#0d1b2a' },
    fonts: ['family=Manrope:wght@400;500;600;700', "'Manrope',system-ui,sans-serif", "'Manrope',system-ui,sans-serif"],
    hero: { kicker: 'Part of 3s International', title: 'Your building, managed.', accent: 'Your rent, on time.', sub: 'Taskeen collects the rent, fixes what breaks and sends a report every month. Owners across Kuwait watch it all in one app.', primary: ['Manage my building', 'owners'], secondary: ['Find a flat', 'homes'], stats: [['24/7', 'maintenance'], ['1 app', 'for every owner']] },
    sections: [
      { type: 'owners', title: 'What would management add to your month?', sub: 'Enter your building. We show what lower vacancy and on-time rent are worth.', rent: 350, fee: 7, units: 24, unitWord: 'flats', vacancyGain: 8 },
      { type: 'services', title: 'Everything an owner hands over', items: [['Rent collection', 'Tenants pay in the app. You see every payment.'], ['24-hour maintenance', 'Our own technicians, day and night.'], ['Leasing', 'We fill empty flats and check every tenant.'], ['Monthly report', 'Income, repairs and arrears, in Arabic and English.']] },
      { type: 'steps', title: 'Handover in four steps', items: [['Visit', 'We inspect the building and tenancy files.'], ['Proposal', 'A fixed fee in writing within 3 days.'], ['Onboarding', 'Tenants move to the app.'], ['Report', 'Your first statement at month end.']] },
      { type: 'listings', title: 'Flats for rent in our buildings', filter: 'type', cta: 'Ask about this flat' },
      { type: 'contact', title: 'Speak to the owners team' },
    ],
  },

  wabrah: {
    skin: 'editorial', model: 'Doha sales, leasing and management since 2001',
    tokens: { bg: '#f5f0ea', surface: '#fff', ink: '#2b0f14', muted: '#6e5559', accent: '#7a1f2b', 'accent-ink': '#fff', dark: '#2b0f14' },
    fonts: ['family=Cormorant+Garamond:wght@500;600&family=Plus+Jakarta+Sans:wght@400;500;600', "'Cormorant Garamond',Georgia,serif", "'Plus Jakarta Sans',system-ui,sans-serif"],
    hero: { kicker: 'A Qatari house since 2001', title: 'Homes in Doha,', accent: 'handled with care.', sub: 'For more than twenty years Wabrah has helped families and investors buy, sell and lease in The Pearl, Lusail, West Bay and Al Waab.', primary: ['Find a home', 'homes'], secondary: ['List my property', 'owners'] },
    sections: [
      { type: 'listings', title: 'For sale and for lease', filter: 'kind', cta: 'Book a viewing' },
      { type: 'owners', title: 'Lease your property through Wabrah', sub: 'Tenant search, contracts, Kahramaa and rent collection, all by one office.', rent: 12000, fee: 5, units: 1, unitWord: 'properties' },
      { type: 'proof', stats: [['2001', 'Founded in Doha'], ['4', 'Districts we cover'], ['20+', 'Years of tenants and owners']] },
      { type: 'contact', title: 'Speak to Wabrah' },
    ],
  },

  'bin-ajlan': {
    skin: 'glass', model: 'Commercial and residential brokerage and valuation, Doha',
    tokens: { bg: '#0f0f0e', surface: '#1a1a18', ink: '#f3f1ec', muted: '#a7a39a', accent: '#c9a25b', 'accent-ink': '#1a1406', light: '#f3f1ec', 'light-ink': '#141412' },
    fonts: ['family=Cormorant:wght@500;600&family=Inter:wght@400;500;600', "'Cormorant',Georgia,serif", "'Inter',system-ui,sans-serif"],
    hero: { kicker: 'Licensed in Qatar since 2008', title: 'Warehouses, showrooms', accent: 'and homes across Doha.', sub: 'Bin Ajlan sells, leases, manages and values property from Salwa Road to the Industrial Area.', primary: ['Request a valuation', 'value'], secondary: ['Browse spaces', 'homes'], card: ['What we handle', ['Warehouses and yards', 'Showrooms and shops', 'Villas and compounds', 'Licensed valuations', 'Property management', 'Since 2008']] },
    sections: [
      { type: 'listings', title: 'Available spaces', filter: 'type', cta: 'Ask about this space' },
      { type: 'valuation', title: 'Licensed valuation for banks, sales and disputes', sub: 'Give us the basics for an indicative range. A licensed valuer issues the report.', rates: { 'Industrial Area': 2400, 'Salwa Road': 5200, 'Al Wakrah': 4300, 'Al Rayyan': 4700 }, unit: 'm²', min: 100, max: 5000, step: 50, start: 800 },
      { type: 'owners', title: 'Lease and manage your commercial property', sub: 'Tenant search, contracts and collection for warehouses, shops and villas.', rent: 18000, fee: 5, units: 4, unitWord: 'units' },
      { type: 'contact', title: 'Call our Salwa Road office' },
    ],
  },

  primestate: {
    skin: 'card', model: 'Owner-operator leasing three buildings',
    tokens: { bg: '#efece6', surface: '#fff', ink: '#1a1a1a', muted: '#666', accent: '#9a7b4f', 'accent-ink': '#fff', soft: '#efe3cf', dark: '#1a1a1a' },
    fonts: ['family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Inter:wght@400;500;600', "'Fraunces',Georgia,serif", "'Inter',system-ui,sans-serif"],
    whatsapp: '97452017893',
    hero: { kicker: 'Lusail · The Pearl', title: 'Three buildings.', accent: 'Leased by the people who run them.', sub: 'Lusail Residence, Jasmine Tower and Viva Bahriya. No middleman: view today, sign this week, move in.', primary: ['See available units', 'homes'], secondary: ['WhatsApp leasing', 'contact'], stats: [['3', 'buildings'], ['Direct', 'from the owner']] },
    sections: [
      { type: 'buildings', title: 'Our gems' },
      { type: 'listings', title: 'Units available now', filter: 'area', cta: 'Book a viewing on WhatsApp' },
      { type: 'steps', title: 'From viewing to keys', items: [['View', 'Same-day viewings, seven days a week.'], ['Reserve', 'Hold the unit with a deposit.'], ['Sign', 'Contract and Kahramaa set up by us.'], ['Move in', 'Keys on the agreed date.']] },
      { type: 'faq', title: 'Leasing questions', items: [['Are bills included?', 'It depends on the unit. Each listing says so.'], ['How many cheques?', 'Usually 12 post-dated cheques. Ask about fewer.'], ['Can I sign as a company?', 'Yes, corporate leases are welcome.']] },
      { type: 'contact', title: 'Talk to leasing' },
    ],
  },

  mareena: {
    skin: 'glass', model: 'Single tower rentals, open 24/7',
    tokens: { bg: '#060b16', surface: '#0f1626', ink: '#eef2fb', muted: '#9aa6c0', accent: '#f3c969', 'accent-ink': '#1b1404', light: '#eef2fb', 'light-ink': '#0b1120' },
    fonts: ['family=Outfit:wght@300;400;500;600', "'Outfit',system-ui,sans-serif", "'Outfit',system-ui,sans-serif"],
    whatsapp: '96566946640',
    hero: { kicker: 'Coastal Road, Al-Mahboula', title: 'Sea-view apartments,', accent: 'open every hour of the year.', sub: 'Furnished and unfurnished flats in Mareena Tower, with reception, security and maintenance 24 hours a day.', primary: ['See apartments', 'homes'], secondary: ['WhatsApp us now', 'contact'], card: ['In the tower', ['24/7 reception', 'Security and CCTV', 'On-site maintenance', 'Furnished options', 'Sea views', 'Parking']] },
    sections: [
      { type: 'listings', title: 'Apartments available', filter: 'type', cta: 'Ask on WhatsApp' },
      { type: 'faq', title: 'Before you move in', items: [['Monthly or yearly?', 'Both. Furnished flats can be rented monthly.'], ['Can I view at night?', 'Yes. Reception is open 24 hours, every day.'], ['Is electricity included?', 'Ask about the unit; furnished flats usually include it.']] },
      { type: 'contact', title: 'Come and see it tonight' },
    ],
  },

  'sayed-mahdi': {
    skin: 'editorial', model: 'Family firm: sales, valuation and development, Bahrain',
    tokens: { bg: '#f3f0e8', surface: '#fff', ink: '#0f1e3a', muted: '#58627a', accent: '#0f1e3a', 'accent-ink': '#f3f0e8', soft: '#b8954a', dark: '#0f1e3a' },
    fonts: ['family=Libre+Caslon+Text:wght@400;700&family=Inter:wght@400;500;600', "'Libre Caslon Text',Georgia,serif", "'Inter',system-ui,sans-serif"],
    hero: { kicker: 'A name Bahrain has known for generations', title: 'Sale, valuation', accent: 'and development.', sub: 'Villas, land and housing schemes across the Kingdom, from a family firm that has done this longer than most.', primary: ['Book a valuation', 'value'], secondary: ['See properties', 'homes'] },
    sections: [
      { type: 'valuation', title: 'What is your villa or land worth?', sub: 'An indicative range now. A formal valuation follows a site visit.', rates: { Saar: 420, Janabiya: 380, Riffa: 340, Muharraq: 300, Seef: 520 }, unit: 'm²', min: 200, max: 2000, step: 10, start: 500 },
      { type: 'listings', title: 'Villas, plots and new homes', filter: 'type', cta: 'Book a consultation' },
      { type: 'services', title: 'Three things we do', items: [['Sale', 'Villas, land and housing across Bahrain.'], ['Valuation', 'For banks, inheritance and sales.'], ['Development', 'Housing schemes from plot to handover, with instalments.']] },
      { type: 'contact', title: 'Book a consultation' },
    ],
  },

  'gulf-avenues': {
    skin: 'card', model: 'Doha sales and leasing agency',
    tokens: { bg: '#e9ece9', surface: '#fff', ink: '#101814', muted: '#56605a', accent: '#1f6b4f', 'accent-ink': '#fff', soft: '#d6ebe0', dark: '#101814' },
    fonts: ['family=Plus+Jakarta+Sans:wght@400;500;600;700', "'Plus Jakarta Sans',system-ui,sans-serif", "'Plus Jakarta Sans',system-ui,sans-serif"],
    hero: { kicker: 'The Pearl · Lusail · West Bay · Al Sadd', title: 'Find your next home', accent: 'in Doha.', sub: 'Apartments and villas for sale and lease, from agents who know each district street by street.', primary: ['Browse homes', 'homes'], secondary: ['List my property', 'owners'], stats: [['4', 'districts'], ['Sale', 'and lease']] },
    sections: [
      { type: 'listings', title: 'Homes for sale and lease', filter: 'kind', cta: 'Book a viewing' },
      { type: 'owners', title: 'Landlords: we fill your unit and manage it', sub: 'Marketing, viewings, tenant checks and rent collection.', rent: 9000, fee: 5, units: 1, unitWord: 'units' },
      { type: 'contact', title: 'Speak to an agent' },
    ],
  },

  laala: {
    skin: 'editorial', model: 'Kuwait sales and leasing, sea-front homes',
    tokens: { bg: '#eef1f3', surface: '#fff', ink: '#0a2236', muted: '#55687a', accent: '#0a2236', 'accent-ink': '#eef1f3', soft: '#cdd9e2', dark: '#0a2236' },
    fonts: ['family=DM+Serif+Display&family=DM+Sans:wght@400;500;600', "'DM Serif Display',Georgia,serif", "'DM Sans',system-ui,sans-serif"],
    hero: { kicker: "La'ala means pearls", title: 'Discover the beauty', accent: 'of living by the sea.', sub: 'Homes for sale and lease in Kuwait City, Salmiya, Fintas and Khiran, chosen one at a time by Bader Al-Bahar.', primary: ['See the homes', 'homes'], secondary: ['Lease my property', 'owners'] },
    sections: [
      { type: 'listings', title: 'Our pearls', filter: 'kind', cta: 'Speak to Bader' },
      { type: 'owners', title: 'Lease your home or chalet through us', sub: 'Annual leases or seasonal chalet rentals in Khiran, handled end to end.', rent: 900, fee: 5, units: 1, unitWord: 'properties' },
      { type: 'contact', title: 'Speak to Bader' },
    ],
  },

  'al-jrefe': {
    skin: 'glass', model: 'North Riyadh sales and leasing, villas and land',
    tokens: { bg: '#0e0d0b', surface: '#1a1815', ink: '#f4efe6', muted: '#aaa196', accent: '#d8b27a', 'accent-ink': '#1d1407', light: '#f4efe6', 'light-ink': '#15130f' },
    fonts: ['family=Syne:wght@500;600;700&family=Inter:wght@400;500;600', "'Syne',system-ui,sans-serif", "'Inter',system-ui,sans-serif"],
    whatsapp: '966558119449', rentPeriod: 'year',
    hero: { kicker: 'North Riyadh', title: 'Villas, apartments and land', accent: "where the city is growing.", sub: 'Al Malqa, Hittin, Al Narjis, Al Yasmin and Olaya. Our office answers until ten at night.', primary: ['Browse by district', 'homes'], secondary: ['WhatsApp us', 'contact'], card: ['Districts', ['Al Malqa', 'Hittin', 'Al Narjis', 'Al Yasmin', 'Olaya', 'Open until 10 pm']] },
    sections: [
      { type: 'listings', title: 'For sale and rent', filter: 'area', cta: 'Ask on WhatsApp' },
      { type: 'areas', title: 'Know the district before you buy' },
      { type: 'owners', title: 'Sell or lease your villa or land with us', sub: 'We market it to buyers already searching in your district.', rent: 120000, fee: 2.5, units: 1, unitWord: 'properties', period: 'year' },
      { type: 'contact', title: 'Talk to us tonight' },
    ],
  },

  altruistic: {
    skin: 'card', model: 'Boutique Florida broker; condos and income property',
    tokens: { bg: '#efe9e1', surface: '#fff', ink: '#1d1b18', muted: '#6a645c', accent: '#c4552b', 'accent-ink': '#fff', soft: '#f3dccd', dark: '#1d1b18' },
    fonts: ['family=Instrument+Serif&family=Inter:wght@400;500;600', "'Instrument Serif',Georgia,serif", "'Inter',system-ui,sans-serif"],
    hero: { kicker: 'South & Central Florida', title: 'You first,', accent: 'then the condo.', sub: 'Maria Teresa Toledo starts with what you can afford and what you want the home to earn. Then she finds it.', primary: ['See what I can afford', 'pay'], secondary: ['Browse homes', 'homes'], stats: [['5.0', 'on Homes.com'], ['16', 'recent sales']] },
    sections: [
      { type: 'mortgage', title: 'What can you afford, and what would it earn?', rate: 6.8, tax: 1.9, ins: 380, price: 485000, rent: 3100 },
      { type: 'listings', title: 'Condos, homes and income property', filter: 'kind', cta: 'Ask Maria Teresa' },
      { type: 'person', name: 'Maria Teresa Toledo', role: 'Broker', text: 'Most of my clients are buying their first Florida property or their next rental. I run the numbers with you before we look at a single home.', creds: ['5.0 on Homes.com', 'English and Spanish', 'Investors welcome'] },
      { type: 'contact', title: 'Talk to Maria Teresa' },
    ],
  },
}

export const skinHero = name => skins[name].hero
