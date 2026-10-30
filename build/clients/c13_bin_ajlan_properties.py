# Idea: Bin Ajlan works from Salwa Road and the Industrial Area: warehouses, shops and homes. The page is a working
# inventory sheet: every unit in one dark index, with a yield tool for the investor who reads it.
from _h import L, A, yield_tool
SITE = dict(
  rank=13, slug="bin-ajlan-properties", name="Bin Ajlan Properties", short="Bin Ajlan", mark="Bin Ajlan", city="Doha, Qatar",
  title="Bin Ajlan Properties · Homes, shops and warehouses in Qatar",
  description="Licensed Qatari brokerage since 2008. Bin Ajlan Properties sells, leases, manages and values homes, shops and warehouses across Doha.",
  email="info@binajlan.net", phone="+974 4414 1464", address="Salwa Road, Industrial Area<br>Doha, State of Qatar",
  hours=[("Saturday to Thursday", "8:00 to 18:00"), ("Friday", "Closed"), ("Valuations", "By appointment")],
  currency="QAR", locale="en-QA", cta="Request a valuation",
  fonts=dict(url="family=Outfit:wght@300;400;600", display="'Outfit',system-ui,sans-serif", text="'Outfit',system-ui,sans-serif"),
  tokens=dict(bg="#0e1718", surface="#192527", ink="#eef2f1", muted="#9fb0ae", accent="#e8c26a", **{"accent-ink": "#0e1718",
    "field-1": "#e8c26a", "field-1-ink": "#0e1718", "field-2": "#eef2f1", "field-2-ink": "#0e1718", "display-weight": "300",
    "display-track": "-0.04em", "display-lead": "0.95", "btn-radius": "0", "radius": "0", "foot-bg": "#e8c26a", "foot-ink": "#0e1718", "mark-size": "19vw"}),
  nav=[("Inventory", "homes"), ("Locations", "areas"), ("Yield", "calculator"), ("Services", "how")],
  hero=dict(v="sky", img="towers-glass", alt="Glass towers rising into a blue sky", title="Every kind of<br>property in Qatar",
    horizon=("Homes, shops,", "warehouses and land"), action="Open the inventory", btn="", scrim=.42),
  sections=[
    ("listings", dict(title="The inventory", intro="Residential, commercial and industrial, for sale and lease. Hover a row to see it.", style="index",
      max=[(20000, "Leases"), (3000000, "QAR 3M"), (8000000, "QAR 8M"), (20000000, "QAR 20M")])),
    yield_tool("What does it return?", "Commercial units often earn more than homes. Compare any purchase in seconds.", 3500000, 24000, field="field", hi=20000000, rhi=120000, step=50000, rstep=500),
    ("areas", dict(title="Where we trade", intro="From the Industrial Area to the coast. Pick a location.")),
    ("process", dict(title="Four services, one office", id="how", steps=[("Brokerage", "Licensed in Qatar to sell and lease residential and commercial property."),
      ("Property management", "Tenants, rent and upkeep handled for owners of buildings and compounds."),
      ("Valuation", "Written valuations for banks, buyers, partners and estates."),
      ("Development", "Advice and delivery for owners building on their land.")])),
    ("visit", dict(title="Visit Salwa Road", img="apartments-dark", alt="Modern apartment block", needs=["Buy", "Lease", "Valuation", "Management"], action="Send", subject="Bin Ajlan enquiry")),
  ],
  areas=[
    A("Industrial Area", "towers-up", "Warehouses, workshops and labour accommodation off Salwa Road.", ("Best for", "Industry"), ("Units", "Warehouses"), ("Lease from", "QAR 25/m²"), ("Access", "Salwa Road")),
    A("Salwa Road", "towers-glass", "Showrooms and shops on Doha's busiest commercial road.", ("Best for", "Retail"), ("Units", "Showrooms"), ("Lease from", "QAR 120/m²"), ("Traffic", "Very high")),
    A("Al Wakrah", "villa-white-pool", "A coastal town with villas, the souq and the new stadium.", ("Best for", "Families"), ("Units", "Villas"), ("Villa rent", "QAR 12,000"), ("To Doha", "20 min")),
    A("Al Rayyan", "white-cubic", "Large plots, family villas and room to build.", ("Best for", "Land"), ("Units", "Villas, plots"), ("Villa rent", "QAR 14,000"), ("To Doha", "15 min")),
  ],
  listings=[
    L("ba1", "Warehouse, Street 24", "Industrial Area", "Warehouse", 32000, 0, 2, "1,200 m²", ["towers-up"], "High-bay warehouse with offices, loading ramps and three-phase power.", "Lease", True),
    L("ba2", "Showroom on Salwa Road", "Salwa Road", "Commercial", 9500000, 0, 2, "640 m²", ["towers-glass"], "Corner showroom with mezzanine and 14 m frontage."),
    L("ba3", "Al Wakrah villa", "Al Wakrah", "Villa", 12000, 5, 6, "420 m²", ["villa-white-pool", "living-classic"], "Standalone villa with a majlis, a garden and a maid's room.", "Lease", True),
    L("ba4", "Al Rayyan plot with villa", "Al Rayyan", "Villa", 4800000, 6, 7, "900 m² plot", ["white-cubic", "living-arches"], "Older villa on a large plot, ideal to renovate or rebuild."),
    L("ba5", "Labour accommodation block", "Industrial Area", "Commercial", 14500000, 0, 40, "2,800 m²", ["apartments-dark"], "Licensed accommodation block with 80 rooms and a canteen."),
    L("ba6", "Retail shop", "Salwa Road", "Commercial", 18000, 0, 1, "120 m²", ["towers-glass"], "Street-front shop in a busy parade.", "Lease", True),
  ],
  foot_cols=[["Bin Ajlan Properties", "Licensed brokerage since 2008"], ["Inventory", "Locations", "Services"], ["+974 4414 1464", "info@binajlan.net"], ["Salwa Road", "Industrial Area, Doha"]],
)
