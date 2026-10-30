def L(i, t, a, ty, pr, bd, ba, sz, im, d, st=None, rent=False):
    return dict(id=i, title=t, area=a, type=ty, price=pr, beds=bd, baths=ba, size=sz, img=im, desc=d, status=st, rent=rent)

def A(name, img, text, *facts):
    return dict(name=name, img=img, text=text, facts=list(facts))

def mortgage(title, text, price, tax_note, field="", top=2000000, lo=200000):
    return ("tool", dict(kind="mortgage", title=title, text=text, field=field,
      inputs=[("price", "Home price", lo, top, 5000, price, "money"), ("down", "Down payment", 3, 40, 1, 20, "pct"), ("rate", "Interest rate", 3, 9, 0.125, 6.5, "pct"), ("years", "Loan term", 15, 30, 15, 30, "yr")],
      results=[("pi", "Loan payment"), ("all", "With tax and insurance"), ("total", "Total interest")], bars=["var(--accent)", "var(--muted)", "var(--surface)"],
      legend=["Loan", "Property tax", "Insurance"], fine=tax_note, action="Talk to us about financing"))

def yield_tool(title, text, price, rent, field="", hi=3000000, rhi=30000, step=5000, rstep=50):
    return ("tool", dict(kind="yield", title=title, text=text, field=field,
      inputs=[("price", "Purchase price", step * 10, hi, step, price, "money"), ("rent", "Monthly rent", rstep * 4, rhi, rstep, rent, "money"), ("costs", "Running costs", 5, 35, 1, 15, "pct")],
      results=[("gross", "Gross yield"), ("net", "Net yield"), ("year", "Net income a year")], bars=["var(--accent)", "var(--muted)"],
      legend=["Income you keep", "Service charges, upkeep, vacancy"], fine="An estimate for comparing homes. We give you real figures for any listing.", action="Ask for this home's figures"))

def plan(title, text, price, months=48, field="", lo=40000, hi=900000, step=1000):
    return ("tool", dict(kind="plan", title=title, text=text, field=field,
      inputs=[("price", "Home price", lo, hi, step, price, "money"), ("down", "Deposit", 5, 60, 5, 20, "pct"), ("months", "Instalments", 12, 96, 6, months, "n")],
      results=[("down", "Deposit"), ("monthly", "Each month"), ("months", "Paid over")], bars=["var(--accent)", "var(--muted)"],
      legend=["Deposit", "Instalments"], fine="Developer plans differ. We confirm the schedule for each home.", action="Ask about a plan"))

def sell(title, text, price, field=""):
    return ("tool", dict(kind="sell", title=title, text=text, field=field,
      inputs=[("price", "Expected sale price", 300000, 8000000, 25000, 1450000, "money"), ("fee", "Commission", 2, 7, 0.25, 5.5, "pct")],
      results=[("net", "You'd take home"), ("fee", "Commission"), ("save", "Each 1% of price")], bars=["var(--accent)", "var(--muted)"],
      legend=["Your proceeds", "Commission"], fine="Illustration only; every listing agreement is set with you.", action="Get my home's value"))
