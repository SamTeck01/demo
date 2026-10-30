# Idea: Bahrain was built on pearl beds. The islands this agency sells (Reef, Amwaj, Muharraq) become the page's
# chapters, and the colours come from the pearl itself: oyster-shell black, nacre white, a blush of pink.
def L(i, t, a, ty, pr, bd, ba, sz, im, d, st=None):
    return dict(id=i, title=t, area=a, type=ty, price=pr, beds=bd, baths=ba, size=sz, img=im, desc=d, status=st)

SITE = dict(
  rank=1, slug="landmark-bahrain", name="Landmark Bahrain", short="Landmark", mark="Landmark", city="Manama, Bahrain",
  title="Landmark Bahrain · Freehold homes on Bahrain's islands",
  description="Landmark Bahrain sells and leases freehold homes on Reef Island, Amwaj, Bahrain Bay and Juffair. Search homes, plan a payment, book a viewing.",
  email="info@landmarkbahrain.com", phone="+973 1756 4600", address="Bahrain Bay, Manama<br>Kingdom of Bahrain",
  hours=[("Sunday to Thursday", "8:30 to 17:30"), ("Saturday", "9:00 to 14:00"), ("Friday", "By appointment")],
  currency="BHD", locale="en-BH", cta="Book a viewing",
  fonts=dict(url="family=Work+Sans:wght@300;400;500", display="'Work Sans',system-ui,sans-serif", text="'Work Sans',system-ui,sans-serif"),
  tokens=dict(bg="#0d0c10", surface="#1c1820", ink="#ecebe7", muted="#a59ca6", accent="#f4a7b9", **{"accent-ink": "#0c0a0e",
    "field-1": "#ecebe7", "field-1-ink": "#14121a", "field-2": "#2a1d27", "field-2-ink": "#ecebe7", "display-weight": "300",
    "display-track": "-0.035em", "display-lead": "1.0", "btn-radius": "0", "radius": "0", "foot-bg": "#ecebe7", "foot-ink": "#14121a", "mark-size": "19vw"}),
  nav=[("Homes", "homes"), ("Islands", "areas"), ("Payment plan", "calculator"), ("About", "story")],
  hero=dict(v="film", img="villa-terrace-pool", alt="White villa with a terrace pool under a clear sky",
    title="Landmark", sub="Freehold villas and apartments on Bahrain's islands, sold, leased and managed by people who live here.", action="See the homes", btn="paper"),
  sections=[
    ("statement", dict(title="Island homes", img="living-arches", alt="Living room with tall arched windows",
      text="Bahrain grew rich on its pearl beds. Today its islands hold homes: Reef Island by the old harbour, the lagoons of Amwaj, the towers of Bahrain Bay. We know every one.",
      note="Freehold ownership is open to every nationality in the designated areas we cover.")),
    ("listings", dict(title="Homes for sale and lease", intro="Every home below is on one of the islands. Save the ones you like and book a viewing in two taps.", style="mosaic",
      max=[(100000, "BHD 100,000"), (200000, "BHD 200,000"), (300000, "BHD 300,000"), (500000, "BHD 500,000")])),
    ("areas", dict(title="Choose an island", intro="Each island lives differently. Pick one to see what a morning there looks like and what homes cost.", field="field")),
    ("tool", dict(kind="plan", title="Plan your payments", id="calculator", text="Most new homes on the islands are sold on a payment plan: a deposit now, the balance in monthly instalments to handover. Move the sliders to see yours.",
      inputs=[("price", "Home price", 60000, 900000, 5000, 210000, "money"), ("down", "Deposit", 10, 60, 5, 20, "pct"), ("months", "Instalments", 12, 84, 6, 48, "n")],
      results=[("down", "Deposit"), ("monthly", "Each month"), ("months", "Paid over")], bars=["#f4a7b9", "#6b5f6d"], legend=["Pink: deposit", "Grey: instalments"],
      fine="Plans vary by developer; we confirm the exact schedule for each home.", action="Ask about this home's plan")),
    ("about", dict(title="Built around the islands", lead="Landmark was named for the buildings we wanted to bring to Bahrain. Our work includes marketing Le Reef, the freehold towers on Reef Island, and an Arabian Property Award for marketing.",
      img="towers-glass", alt="Glass towers against a blue sky", over="One team covers sale, lease and management, so the person who shows you the home is the person who looks after it.",
      tile="living-wood", tile_alt="Bright open-plan living room", facts=[("4", "Island districts"), ("2008", "Arabian Property Award"), ("3", "Services: sale, lease, care"), ("Every", "Nationality may own")])),
    ("visit", dict(title="Visit us at Bahrain Bay", img="villa-white-pool", alt="White villa beside a pool", needs=["Buying a home", "Leasing a home", "Selling or letting mine", "Property management"], action="Send my request", subject="Landmark enquiry")),
  ],
  areas=[
    dict(name="Reef Island", img="villa-pool-wood", text="A private island off Manama's old harbour, with a marina, a beach club and the Le Reef towers.", facts=[("From", "BHD 140,000"), ("Best for", "Marina living"), ("To the airport", "12 minutes"), ("Ownership", "Freehold")]),
    dict(name="Amwaj", img="villa-white-pool", text="Thirteen man-made islands on the north-east coast, built around lagoons, canals and the Lagoon promenade.", facts=[("From", "BHD 95,000"), ("Best for", "Families, water"), ("To Manama", "25 minutes"), ("Ownership", "Freehold")]),
    dict(name="Bahrain Bay", img="towers-up", text="The newest district, between the Four Seasons and the financial harbour, with towers on the water.", facts=[("From", "BHD 160,000"), ("Best for", "City life"), ("To the airport", "15 minutes"), ("Ownership", "Freehold")]),
    dict(name="Juffair", img="apartments-white", text="Manama's liveliest neighbourhood, close to schools, cafés and the Grand Mosque, with the best rental demand.", facts=[("From", "BHD 65,000"), ("Best for", "Investors"), ("Gross yield", "About 7%"), ("Ownership", "Freehold")]),
  ],
  listings=[
    L("lb1", "Marina-view apartment, Le Reef", "Reef Island", "Apartment", 185000, 2, 2, "142 m²", ["living-wood", "kitchen-white", "bath-black"], "Corner apartment on a high floor with a wraparound balcony over the marina, beach club membership and two parking bays.", "New"),
    L("lb2", "Lagoon villa with private pool", "Amwaj", "Villa", 420000, 4, 5, "410 m²", ["villa-pool-red", "living-bright", "bedroom-dark"], "Detached villa on the lagoon with its own jetty, a pool deck facing west, a maid's room and a two-car garage."),
    L("lb3", "Bay tower one-bedroom", "Bahrain Bay", "Apartment", 118000, 1, 2, "88 m²", ["living-loft", "kitchen-white"], "Furnished one-bedroom on the 31st floor with views across the bay to the Financial Harbour towers.", "Off-plan"),
    L("lb4", "Juffair investor studio", "Juffair", "Apartment", 68000, 1, 1, "61 m²", ["living-grey", "bath-black"], "Leased studio with a tenant in place until next summer. Gym, pool and 24-hour security in the building."),
    L("lb5", "Penthouse over the harbour", "Reef Island", "Penthouse", 495000, 4, 4, "320 m²", ["glass-stair-pool", "living-arches", "bedroom-dark"], "Two-level penthouse with a private plunge pool, a double-height living room and views to the King Fahd causeway.", "Exclusive"),
    L("lb6", "Townhouse on the canal", "Amwaj", "Townhouse", 235000, 3, 4, "260 m²", ["modern-gable", "living-dog"], "Three-floor townhouse on a quiet canal with a roof terrace and a garden that opens to the water."),
    L("lb7", "Family apartment near the mosque", "Juffair", "Apartment", 96000, 2, 2, "118 m²", ["living-classic", "kitchen-white"], "Bright two-bedroom close to schools and the Grand Mosque, with a covered parking bay and a large balcony."),
    L("lb8", "Waterfront duplex", "Bahrain Bay", "Apartment", 268000, 3, 3, "205 m²", ["living-bright", "stair-light", "bath-black"], "Duplex with floor-to-ceiling glass on the water's edge, a private lift lobby and concierge."),
  ],
  foot_cols=[["Landmark Bahrain", "Bahrain Bay, Manama"], ["Homes", "Islands", "Payment plan"], ["+973 1756 4600", "info@landmarkbahrain.com"], ["Sunday to Thursday", "8:30 to 17:30"]],
)
