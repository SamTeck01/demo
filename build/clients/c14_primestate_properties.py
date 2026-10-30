# Idea: PrimeState calls its buildings "our gems". Each tower is shown like a jewel in its own setting, under an arch.
from _h import L, A, yield_tool
SITE = dict(
  rank=14, slug="primestate-properties", name="PrimeState Properties", short="PrimeState", mark="PrimeState", city="Doha, Qatar",
  title="PrimeState Properties · Residences in Lusail and Viva Bahriya",
  description="PrimeState Properties leases and sells residences in Lusail Residence, Jasmine Tower and Viva Bahriya on The Pearl, Qatar.",
  email="leasing@primestateproperties.qa", phone="+974 5201 7893", address="Lusail<br>State of Qatar",
  hours=[("Sunday to Thursday", "8:30 to 17:30"), ("Saturday", "10:00 to 14:00"), ("Viewings", "Every day by booking")],
  currency="QAR", locale="en-QA", cta="Book a viewing",
  fonts=dict(url="family=Italiana&family=Inter:wght@400;500", display="'Italiana',Georgia,serif", text="'Inter',system-ui,sans-serif"),
  tokens=dict(bg="#f4f3ef", surface="#e7e4dc", ink="#1c1a16", muted="#5f5a52", accent="#1c1a16", **{"accent-ink": "#f4f3ef",
    "field-1": "#2d4a43", "field-1-ink": "#f4f3ef", "field-2": "#d9cfb8", "field-2-ink": "#1c1a16", "display-weight": "400",
    "display-track": "0", "display-lead": "1.0", "btn-radius": "999px", "radius": "0", "foot-bg": "#2d4a43", "foot-ink": "#f4f3ef", "mark-size": "17vw"}),
  nav=[("Residences", "homes"), ("Our gems", "areas"), ("Returns", "calculator"), ("Contact", "visit")],
  hero=dict(v="arch", img="living-arches", alt="Living room with tall arched windows", title="Our gems in Qatar",
    sub="Three residential buildings in Lusail and on The Pearl, leased and sold directly by the people who run them.", action="See the residences"),
  sections=[
    ("areas", dict(title="Three buildings", intro="Each building has its own setting. Choose one to see what it offers.", field="field")),
    ("listings", dict(title="Residences available", intro="One to four bedrooms, for lease and for sale, priced in Qatari riyals.", style="rail",
      max=[(10000, "QAR 10,000/mo"), (20000, "QAR 20,000/mo"), (3000000, "QAR 3M")])),
    yield_tool("Buying at Viva Bahriya?", "Freehold for every nationality on The Pearl. See the return on a typical apartment.", 1450000, 8500, hi=6000000, rhi=40000, step=25000, rstep=250),
    ("visit", dict(title="Book a viewing", img="villa-pool-wood", alt="Villa with a pool and terrace", needs=["Lusail Residence", "Jasmine Tower", "Viva Bahriya"], action="Request a viewing", subject="PrimeState viewing")),
  ],
  areas=[
    A("Lusail Residence", "towers-up", "Residential building in Lusail with one to three bedroom apartments.", ("Homes", "1–3 BDR"), ("Use", "Residential"), ("Terms", "Lease"), ("Near", "Lusail tram")),
    A("Jasmine Tower", "apartments-white", "A residential tower with two to four bedroom apartments.", ("Homes", "2–4 BDR"), ("Use", "Residential"), ("Terms", "Lease"), ("Feel", "Family")),
    A("Viva Bahriya", "villa-tall-pool", "Beachfront towers on The Pearl, buildings 20, 21 and 23, freehold for all.", ("Homes", "1 BDR +"), ("Use", "Sale and lease"), ("Terms", "Freehold"), ("Beach", "Private")),
  ],
  listings=[
    L("ps1", "Lusail Residence one-bedroom", "Lusail Residence", "Apartment", 7500, 1, 1, "78 m²", ["living-loft", "kitchen-white"], "Bright one-bedroom near the tram, with gym and pool.", "Lease", True),
    L("ps2", "Lusail Residence three-bedroom", "Lusail Residence", "Apartment", 13500, 3, 3, "165 m²", ["living-classic", "bedroom-dark"], "Family apartment with a maid's room and two parking bays.", "Lease", True),
    L("ps3", "Jasmine Tower two-bedroom", "Jasmine Tower", "Apartment", 9800, 2, 2, "120 m²", ["living-grey", "bath-black"], "Two bedrooms with a balcony on a high floor.", "Lease", True),
    L("ps4", "Jasmine Tower four-bedroom", "Jasmine Tower", "Apartment", 18500, 4, 4, "240 m²", ["living-wood", "kitchen-white"], "Large family apartment with city views.", "Lease", True),
    L("ps5", "Viva Bahriya 23, one-bedroom", "Viva Bahriya", "Apartment", 1450000, 1, 2, "92 m²", ["living-bright", "glass-stair-pool"], "Freehold, beach access and sea views.", "For sale"),
    L("ps6", "Viva Bahriya 20, beach apartment", "Viva Bahriya", "Apartment", 11500, 2, 3, "145 m²", ["living-arches"], "Beachfront two-bedroom on The Pearl.", "Lease", True),
  ],
  foot_cols=[["PrimeState Properties", "Lusail · The Pearl"], ["Residences", "Our gems", "Returns"], ["+974 5201 7893", "leasing@primestateproperties.qa"], ["Viewings", "Every day"]],
)
