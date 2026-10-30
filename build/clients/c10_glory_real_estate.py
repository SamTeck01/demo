# Idea: Dilmun, Bahrain's ancient name, was the "land of the living". Glory sells Breeze of Dilmunia on the new island:
# the page is one launch, read like a project brochure: the island, the homes, the plan, and BHD 735 a month.
from _h import L, A, plan
SITE = dict(
  rank=10, slug="glory-real-estate", name="Glory Real Estate", short="Glory Real Estate", mark="Dilmunia", city="Manama, Bahrain",
  title="Glory Real Estate · Breeze of Dilmunia, freehold from BHD 63,000",
  description="Freehold island residences at Breeze of Dilmunia, Bahrain, from BHD 63,000 with a five-year plan at 0% interest. Every nationality may buy.",
  email="info@glorybh.com", phone="+973 3822 6666", address="Dilmunia Island<br>Muharraq, Kingdom of Bahrain",
  hours=[("Saturday to Thursday", "9:00 to 18:00"), ("Friday", "WhatsApp only"), ("Site visits", "Daily, by booking")],
  currency="BHD", locale="en-BH", cta="Register interest",
  fonts=dict(url="family=Marcellus&family=Jost:wght@400;500", display="'Marcellus',Georgia,serif", text="'Jost',system-ui,sans-serif"),
  tokens=dict(bg="#f2f4f3", surface="#dde6e5", ink="#0f2930", muted="#46606a", accent="#e0663e", **{"accent-ink": "#ffffff",
    "field-1": "#0f5e6e", "field-1-ink": "#f2f4f3", "field-2": "#0f2930", "field-2-ink": "#f2f4f3", "display-weight": "400",
    "display-track": "-0.01em", "display-lead": "0.95", "btn-radius": "999px", "radius": "0", "foot-bg": "#0f5e6e", "foot-ink": "#f2f4f3", "mark-size": "17vw"}),
  nav=[("Residences", "homes"), ("Payment plan", "calculator"), ("The island", "about-us"), ("Visit", "visit")],
  hero=dict(v="poster", img="villa-terrace-pool", alt="White residence with a terrace pool", title="Breeze of Dilmunia",
    sub="Freehold island homes from BHD 63,000. Five years to pay at 0% interest, about BHD 735 a month. Every nationality welcome.", action="See the residences", second="WhatsApp us"),
  sections=[
    ("statement", dict(title="The land of the living", img="glass-stair-pool", alt="Glass staircase beside a pool",
      text="Bahrain's oldest name is Dilmun. Dilmunia is its newest island: beaches, a promenade and a health district, ten minutes from the airport.",
      note="Freehold title for buyers of every nationality. Crypto payments accepted.")),
    ("listings", dict(title="Choose your residence", intro="Studios to townhouses. Every price below includes the 0% five-year plan.", style="rail",
      max=[(70000, "BHD 70,000"), (100000, "BHD 100,000"), (150000, "BHD 150,000")])),
    plan("Your plan, to the dinar", "Set a deposit and the term. Glory's standard plan is five years with no interest.", 63000, 60, field="field", lo=40000, hi=250000),
    ("process", dict(title="From first look to keys", id="how", steps=[("Register interest", "Send a WhatsApp or the form below. We reply the same day."),
      ("Visit the island", "We meet you at the show apartment on Dilmunia and walk the promenade."),
      ("Reserve and sign", "A small reservation fee holds the unit; the sale contract follows within the week."),
      ("Pay monthly, move in", "Instalments run over five years at 0% interest, with handover on completion.")])),
    ("visit", dict(title="Visit the show home", img="villa-white-pool", alt="White villa beside a pool", needs=["A studio", "A one-bedroom", "A two-bedroom", "A townhouse"], action="Register my interest", subject="Breeze of Dilmunia interest")),
  ],
  listings=[
    L("gr1", "Studio with sea breeze", "Dilmunia", "Studio", 63000, 1, 1, "48 m²", ["living-bright", "bath-black"], "The entry home: a studio with a balcony, a fitted kitchen and residents' pool. From BHD 735 a month.", "From"),
    L("gr2", "One-bedroom, pool view", "Dilmunia", "Apartment", 89000, 1, 2, "76 m²", ["living-loft", "kitchen-white"], "One bedroom with a long balcony over the residents' pool."),
    L("gr3", "Two-bedroom corner", "Dilmunia", "Apartment", 128000, 2, 2, "118 m²", ["living-wood", "bedroom-dark"], "Corner apartment with light on two sides and a view to the beach."),
    L("gr4", "Three-bedroom family home", "Dilmunia", "Apartment", 165000, 3, 3, "156 m²", ["living-classic", "kitchen-white"], "Family-sized apartment with a maid's room and two parking bays."),
    L("gr5", "Beach townhouse", "Dilmunia", "Townhouse", 228000, 3, 4, "210 m²", ["modern-gable", "glass-stair-pool"], "Townhouse a short walk from the beach, with a roof terrace and garden.", "Limited"),
  ],
  foot_cols=[["Glory Real Estate", "Breeze of Dilmunia sales"], ["Residences", "Payment plan", "Visit"], ["+973 3822 6666", "info@glorybh.com"], ["Gulnaz Amangeldinova", "Founder"]],
)
