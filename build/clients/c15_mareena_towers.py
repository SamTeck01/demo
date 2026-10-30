# Idea: one tower on the coastal road at Al-Mahboula, open 24/7/365. The page is the tower at night: lit windows on a dark sea.
from _h import L, A, yield_tool
SITE = dict(
  rank=15, slug="mareena-towers", name="Mareena Towers Real Estate", short="Mareena Towers", mark="Mareena", city="Al-Mahboula, Kuwait",
  title="Mareena Towers · Furnished apartments on Kuwait's coastal road",
  description="Furnished and unfurnished apartments in Mareena Tower on the coastal road at Al-Mahboula, Kuwait. Open 24 hours, every day.",
  email="info@mareenatowers.com", phone="+965 6694 6640", address="Block 2, Building 22, Tower 20<br>Coastal Road, Al-Mahboula, Kuwait",
  hours=[("Reception", "24 hours, 365 days"), ("Sales office", "Saturday to Thursday"), ("Friday", "Reception only")],
  currency="KWD", locale="en-KW", cta="Reserve",
  fonts=dict(url="family=Josefin+Sans:wght@300;400;600", display="'Josefin Sans',system-ui,sans-serif", text="'Josefin Sans',system-ui,sans-serif"),
  tokens=dict(bg="#07131d", surface="#10212f", ink="#e9f1f6", muted="#94aab9", accent="#ffd166", **{"accent-ink": "#07131d",
    "field-1": "#e9f1f6", "field-1-ink": "#07131d", "field-2": "#123247", "field-2-ink": "#e9f1f6", "display-weight": "300",
    "display-track": "-0.03em", "display-lead": "0.95", "btn-radius": "0", "radius": "0", "foot-bg": "#123247", "foot-ink": "#e9f1f6", "mark-size": "21vw"}),
  nav=[("Apartments", "homes"), ("The tower", "about-us"), ("Investors", "calculator"), ("Reserve", "visit")],
  hero=dict(v="film", img="towers-up", alt="Tower lit against the sky", title="Mareena", scrim=.45,
    sub="Furnished apartments on the coastal road at Al-Mahboula, with reception, security and maintenance 24 hours a day, every day of the year.", action="See apartments"),
  sections=[
    ("statement", dict(title="Open all night", img="living-loft", alt="Furnished apartment living room",
      text="Most buildings close their office at five. Ours never closes. Reception, security and maintenance work around the clock, 365 days a year.",
      note="Daily, monthly and yearly stays. Logistics and moving services on request.")),
    ("listings", dict(title="Apartments", intro="Furnished and unfurnished, by the month, in Kuwaiti dinars.", style="mosaic",
      max=[(300, "KWD 300"), (450, "KWD 450"), (700, "KWD 700")])),
    yield_tool("For owners and investors", "Thinking of buying a unit to let? See what a furnished coastal apartment can return.", 95000, 520, field="field", hi=500000, rhi=3000, step=1000, rstep=10),
    ("visit", dict(title="Reserve an apartment", img="apartments-dark", alt="Apartment tower at dusk", needs=["A furnished apartment", "An unfurnished apartment", "A short stay", "Buying a unit"], action="Send my reservation", subject="Mareena Tower reservation")),
  ],
  listings=[
    L("mt1", "Sea-view studio, furnished", "Mareena Tower", "Studio", 260, 1, 1, "50 m²", ["living-bright", "bath-black"], "Furnished studio with a sea view, internet and weekly cleaning.", "Available", True),
    L("mt2", "One-bedroom, coastal side", "Mareena Tower", "Apartment", 340, 1, 1, "72 m²", ["living-loft", "kitchen-white"], "Furnished one-bedroom facing the Gulf.", None, True),
    L("mt3", "Two-bedroom family apartment", "Mareena Tower", "Apartment", 450, 2, 2, "110 m²", ["living-grey", "bedroom-dark"], "Two bedrooms, a living room and a balcony.", None, True),
    L("mt4", "Three-bedroom, high floor", "Mareena Tower", "Apartment", 620, 3, 3, "150 m²", ["living-classic", "kitchen-white"], "High floor with long sea views and a maid's room.", "New", True),
    L("mt5", "Unfurnished two-bedroom", "Mareena Tower", "Apartment", 380, 2, 2, "110 m²", ["living-blue"], "Unfurnished, for a yearly lease.", None, True),
  ],
  foot_cols=[["Mareena Tower Real Estate Co.", "Coastal Road, Al-Mahboula"], ["Apartments", "The tower", "Reserve"], ["+965 6694 6640", "+965 6705 3106"], ["Open 24/7/365", "After hours: 2372 9858"]],
)
