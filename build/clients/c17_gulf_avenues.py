# Idea: "Avenues": the firm's name is a street. The page is laid out like an avenue of addresses, one big street sign after another.
from _h import L, A, yield_tool
SITE = dict(
  rank=17, slug="gulf-avenues", name="Gulf Avenues Real Estate", short="Gulf Avenues", mark="Gulf Avenues", city="Doha, Qatar",
  title="Gulf Avenues Real Estate · Doha sales and leasing",
  description="Gulf Avenues Real Estate sells and leases apartments and villas across Doha: The Pearl, Lusail, West Bay and Al Sadd.",
  email="info@gulfavenues.com", phone="+974 4000 0000", address="Doha<br>State of Qatar",
  hours=[("Sunday to Thursday", "8:30 to 17:30"), ("Saturday", "10:00 to 14:00"), ("Friday", "Closed")],
  currency="QAR", locale="en-QA", cta="Speak to an agent",
  fonts=dict(url="family=Familjen+Grotesk:wght@400;500;700", display="'Familjen Grotesk',system-ui,sans-serif", text="'Familjen Grotesk',system-ui,sans-serif"),
  tokens=dict(bg="#121212", surface="#1e1e1e", ink="#f2efe9", muted="#a8a39a", accent="#d9b26f", **{"accent-ink": "#121212",
    "field-1": "#d9b26f", "field-1-ink": "#121212", "field-2": "#f2efe9", "field-2-ink": "#121212", "display-weight": "700",
    "display-track": "-0.045em", "display-lead": "0.88", "btn-radius": "0", "radius": "0", "foot-bg": "#d9b26f", "foot-ink": "#121212", "mark-size": "13vw", "brand-weight": "700"}),
  nav=[("Homes", "homes"), ("Districts", "areas"), ("Returns", "calculator"), ("Contact", "visit")],
  hero=dict(v="poster", img="towers-glass", alt="Glass towers against a blue sky", title="Every avenue in Doha",
    sub="Apartments and villas for sale and lease across Qatar's capital, from agents who know each district street by street.", action="Browse homes", second="Speak to an agent"),
  sections=[
    ("areas", dict(title="Pick a district", intro="Each part of Doha has a different rhythm. Choose one.")),
    ("listings", dict(title="Homes on the market", intro="Sale and lease, in Qatari riyals.", style="mosaic",
      max=[(12000, "Leases"), (2000000, "QAR 2M"), (5000000, "QAR 5M")])),
    yield_tool("Buying to let?", "See the yield on a freehold home in The Pearl or Lusail.", 1600000, 9000, field="field", hi=10000000, rhi=50000, step=25000, rstep=250),
    ("visit", dict(title="Talk to us", img="villa-white-pool", alt="White villa with a pool", needs=["Buying", "Leasing", "Investing"], action="Send", subject="Gulf Avenues enquiry")),
  ],
  areas=[
    A("The Pearl", "villa-pool-wood", "Marinas, cafés and freehold towers on the island.", ("Ownership", "Freehold"), ("2-bed rent", "QAR 10,500"), ("Feel", "Marina"), ("To West Bay", "15 min")),
    A("Lusail", "towers-up", "Qatar's new city, the tram and the waterfront boulevard.", ("Ownership", "Freehold"), ("2-bed rent", "QAR 9,000"), ("Feel", "New"), ("To West Bay", "20 min")),
    A("West Bay", "towers-glass", "Towers, offices and the Corniche.", ("Ownership", "Freehold zones"), ("2-bed rent", "QAR 9,500"), ("Feel", "Business"), ("Airport", "20 min")),
    A("Al Sadd", "apartments-white", "Central, busy and close to everything.", ("Ownership", "Lease"), ("2-bed rent", "QAR 7,000"), ("Feel", "Central"), ("Malls", "Walkable")),
  ],
  listings=[
    L("ga1", "Pearl two-bedroom, Porto Arabia", "The Pearl", "Apartment", 10500, 2, 3, "140 m²", ["living-bright", "kitchen-white"], "Marina views, furnished, two parking spaces.", "Lease", True),
    L("ga2", "Lusail one-bedroom", "Lusail", "Apartment", 1050000, 1, 2, "84 m²", ["living-loft"], "Freehold one-bedroom near the tram.", "For sale"),
    L("ga3", "West Bay three-bedroom", "West Bay", "Apartment", 2450000, 3, 4, "190 m²", ["living-grey", "bedroom-dark"], "High floor with a Corniche view.", "For sale"),
    L("ga4", "Al Sadd family apartment", "Al Sadd", "Apartment", 7200, 3, 3, "160 m²", ["living-classic"], "Central, unfurnished, near the malls.", "Lease", True),
    L("ga5", "Pearl townhouse", "The Pearl", "Townhouse", 3950000, 3, 4, "280 m²", ["modern-gable", "glass-stair-pool"], "Waterfront townhouse in Viva Bahriya.", "For sale"),
  ],
  foot_cols=[["Gulf Avenues Real Estate", "Doha, Qatar"], ["Homes", "Districts", "Returns"], ["info@gulfavenues.com", "Doha"], ["Sunday to Thursday", "8:30 to 17:30"]],
)
