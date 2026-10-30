# Idea: La'ala Al Kuwait means "the pearls of Kuwait". Each home is a pearl lifted from the Gulf: one at a time, lustre on deep water.
from _h import L, A, yield_tool
SITE = dict(
  rank=18, slug="laala-al-kuwait", name="La'ala Al Kuwait Real Estate", short="La'ala Al Kuwait", mark="La'ala", city="Kuwait City, Kuwait",
  title="La'ala Al Kuwait Real Estate · The pearls of Kuwait",
  description="La'ala Al Kuwait Real Estate sells and leases homes in Kuwait City, Salmiya, Fintas and Khiran.",
  email="info@laalaalkuwait.com", phone="+965 2224 0000", address="Kuwait City<br>State of Kuwait",
  hours=[("Sunday to Thursday", "8:00 to 17:00"), ("Saturday", "9:00 to 13:00"), ("Friday", "Closed")],
  currency="KWD", locale="en-KW", cta="Speak to Bader",
  fonts=dict(url="family=Gloock&family=Inter:wght@400;500", display="'Gloock',Georgia,serif", text="'Inter',system-ui,sans-serif"),
  tokens=dict(bg="#0d2526", surface="#163536", ink="#f1efe9", muted="#a9bcb9", accent="#e9d8ad", **{"accent-ink": "#0d2526",
    "field-1": "#f1efe9", "field-1-ink": "#0d2526", "field-2": "#1d4546", "field-2-ink": "#f1efe9", "display-weight": "400",
    "display-track": "-0.02em", "display-lead": "0.95", "btn-radius": "999px", "radius": "0", "foot-bg": "#f1efe9", "foot-ink": "#0d2526", "mark-size": "24vw"}),
  nav=[("Homes", "homes"), ("Areas", "areas"), ("Returns", "calculator"), ("Contact", "visit")],
  hero=dict(v="sky", img="villa-tall-pool", alt="White villa above a blue pool", title="The pearls<br>of Kuwait",
    horizon=("Homes chosen one at a time,", "from the city to Khiran"), action="See the homes", scrim=.25),
  sections=[
    ("listings", dict(title="This season's pearls", intro="Every home here was chosen by our team before it was listed.", style="rail",
      max=[(500, "Leases"), (150000, "KWD 150,000"), (400000, "KWD 400,000")])),
    ("areas", dict(title="Where to live", intro="From the towers of the city to the chalets of Khiran.", field="field")),
    yield_tool("What will it earn?", "Kuwaiti investors buy for income. See the return on any home.", 220000, 1150, field="field-2", hi=1500000, rhi=8000, step=5000, rstep=25),
    ("visit", dict(title="Find your pearl", img="villa-white-pool", alt="White villa with a pool", needs=["Buying", "Leasing", "Selling", "Investing"], action="Send to Bader", subject="La'ala Al Kuwait enquiry")),
  ],
  areas=[
    A("Kuwait City", "towers-glass", "Towers, the souq and the Gulf Road.", ("Homes", "Apartments"), ("Feel", "City"), ("2-bed rent", "KWD 550"), ("To airport", "20 min")),
    A("Salmiya", "apartments-white", "Shops, the Marina Mall and the sea.", ("Homes", "Apartments"), ("Feel", "Busy"), ("2-bed rent", "KWD 420"), ("Beach", "Walkable")),
    A("Fintas", "living-bright", "Coastal family apartments to the south.", ("Homes", "Apartments"), ("Feel", "Family"), ("2-bed rent", "KWD 360"), ("To city", "25 min")),
    A("Khiran", "villa-pool-wood", "Chalets and waterfront homes for weekends.", ("Homes", "Chalets"), ("Feel", "Escape"), ("Chalet", "From KWD 180,000"), ("To city", "75 min")),
  ],
  listings=[
    L("la1", "Khiran waterfront chalet", "Khiran", "Chalet", 245000, 4, 4, "320 m²", ["villa-pool-wood", "living-wood"], "Chalet on the canal with a private pool and boat mooring.", "New"),
    L("la2", "Salmiya sea-view apartment", "Salmiya", "Apartment", 420, 2, 2, "115 m²", ["living-bright", "kitchen-white"], "Two bedrooms over the Gulf, near the Marina Mall.", "Lease", True),
    L("la3", "City tower three-bedroom", "Kuwait City", "Apartment", 165000, 3, 3, "175 m²", ["living-grey", "bedroom-dark"], "High floor with long views over the Gulf Road."),
    L("la4", "Fintas family flat", "Fintas", "Apartment", 360, 3, 2, "130 m²", ["living-classic"], "Coastal family apartment, unfurnished.", "Lease", True),
    L("la5", "Khiran villa", "Khiran", "Villa", 390000, 5, 6, "450 m²", ["villa-tall-pool", "glass-stair-pool"], "Five-bedroom villa with a pool facing the sea."),
  ],
  foot_cols=[["La'ala Al Kuwait Real Estate Co.", "Kuwait City"], ["Homes", "Areas", "Returns"], ["+965 2224 0000", "info@laalaalkuwait.com"], ["Bader Al-Bahar", "Head of Real Estate"]],
)
