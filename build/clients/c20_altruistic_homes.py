# Idea: "altruistic" means putting the other person first. The page leads with the buyer's question, not the agency:
# "what can I afford, and where?" The calculator comes before the condos.
from _h import L, A, mortgage
SITE = dict(
  rank=20, slug="altruistic-homes", name="Altruistic Homes", short="Altruistic Homes", mark="Altruistic", city="Miami, FL",
  title="Altruistic Homes · Boutique real estate in South Florida",
  description="Altruistic Homes is a boutique brokerage for condos, homes and income property in South and Central Florida. Maria Teresa Toledo, broker.",
  email="info@altruistichomesfl.com", phone="786 731 2572", address="Brickell<br>Miami, FL 33131",
  hours=[("Monday to Saturday", "9:00 to 7:00"), ("Sunday", "By appointment"), ("Languages", "English · Español")],
  currency="USD", cta="Talk to Maria Teresa", data=dict(taxRate=0.02, insure=310),
  fonts=dict(url="family=Plus+Jakarta+Sans:wght@400;500;700", display="'Plus Jakarta Sans',system-ui,sans-serif", text="'Plus Jakarta Sans',system-ui,sans-serif"),
  tokens=dict(bg="#ffffff", surface="#f1f1f1", ink="#121212", muted="#555555", accent="#d42a2f", **{"accent-ink": "#ffffff",
    "field-1": "#d42a2f", "field-1-ink": "#ffffff", "field-2": "#121212", "field-2-ink": "#ffffff", "display-weight": "700",
    "display-track": "-0.045em", "display-lead": "0.92", "btn-radius": "0", "radius": "0", "foot-bg": "#d42a2f", "foot-ink": "#ffffff", "mark-size": "15vw", "brand-weight": "700"}),
  nav=[("Afford", "calculator"), ("Condos & homes", "homes"), ("Areas", "areas"), ("Contact", "visit")],
  hero=dict(v="sky", img="miami-bay", alt="Miami towers along the bay", title="You first,<br>then the house", scrim=.25,
    horizon=("Condos, homes and income property", "in South and Central Florida"), action="See what you can afford"),
  sections=[
    mortgage("Start with what you can afford", "Before you fall for a view, see the full monthly cost, with Florida tax and insurance in.", 585000, "Assumes 2% tax. Condo association fees are extra.", field="field", top=2500000, lo=150000),
    ("listings", dict(title="Condos and homes", intro="For sale and rent across Miami, with Central Florida on request.", style="index",
      max=[(400000, "$400k"), (700000, "$700k"), (1200000, "$1.2M"), (5000, "Rentals")])),
    ("areas", dict(title="Where in Miami?", intro="Pick a neighbourhood to see what it costs and how it lives.")),
    ("visit", dict(title="Talk to Maria Teresa", img="colonial-pool", alt="White house with a pool and palms", needs=["Buying a condo", "Buying a home", "Income property", "Selling"], action="Send", subject="Altruistic Homes enquiry")),
  ],
  areas=[
    A("Brickell", "towers-glass", "Towers, the bay and the financial district.", ("Median condo", "$650k"), ("Feel", "City"), ("Rent, 1-bed", "$3,600"), ("Walk", "Everything")),
    A("Edgewater", "miami-dusk", "New towers on the bay between Downtown and the Design District.", ("Median condo", "$720k"), ("Feel", "Bay views"), ("Rent, 1-bed", "$3,300"), ("Walk", "Parks")),
    A("Downtown", "apartments-white", "Close to the arena, the museums and Brightline.", ("Median condo", "$520k"), ("Feel", "Urban"), ("Rent, 1-bed", "$3,100"), ("Train", "Brightline")),
    A("Coral Way", "white-house-palm", "Single-family homes under old banyans.", ("Median home", "$880k"), ("Feel", "Leafy"), ("Rent, 3-bed", "$5,200"), ("Schools", "Good")),
  ],
  listings=[
    L("ah1", "Brickell one-bedroom", "Brickell", "Condo", 489000, 1, 1, "820 sq ft", ["living-loft", "kitchen-white"], "Bay view, pool and gym, walk to Brickell City Centre.", "New"),
    L("ah2", "Edgewater two-bedroom", "Edgewater", "Condo", 745000, 2, 2, "1,210 sq ft", ["living-bright", "bath-black"], "New tower on the bay with a wraparound balcony."),
    L("ah3", "Downtown investor studio", "Downtown", "Condo", 329000, 1, 1, "560 sq ft", ["living-grey"], "Rentals allowed, near Brightline station."),
    L("ah4", "Coral Way family home", "Coral Way", "House", 925000, 3, 2, "1,860 sq ft", ["white-house-palm", "living-classic"], "1950s home with a yard under a banyan tree."),
    L("ah5", "Brickell rental", "Brickell", "Condo", 3700, 1, 1, "790 sq ft", ["living-blue"], "Unfurnished one-bedroom, 12-month lease.", "Rent", True),
    L("ah6", "Duplex for income", "Coral Way", "Duplex", 1080000, 4, 3, "2,200 sq ft", ["colonial-pool", "living-dog"], "Live in one side and rent the other."),
  ],
  foot_cols=[["Altruistic Homes, LLC", "Boutique real estate"], ["Afford", "Condos & homes", "Areas"], ["786 731 2572", "info@altruistichomesfl.com"], ["Maria Teresa Toledo", "Broker"]],
)
