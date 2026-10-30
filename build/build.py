"""Builds every client site from build/clients/*.py into sites/<slug>/ (self-contained, deployable alone)."""
import importlib.util, json, shutil, html, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
B = ROOT / "build"
U = "https://images.unsplash.com/photo-{}?w={}&q=80&auto=format&fit=crop"

# Photographs checked by eye. Homes, rooms and cities only; captions never claim a photo is the client's own listing.
P = {
  "villa-white-pool": "1600596542815-ffad4c1539a9", "modern-dark-tree": "1600585154340-be6161a56a0c",
  "villa-pool-wood": "1613490493576-7fde63acd811", "white-house-palm": "1512917774080-9991f1c4c750",
  "colonial-pool": "1564013799919-ab600027ffc6", "villa-pool-red": "1580587771525-78b9dba3b914",
  "timber-modern": "1600566753190-17f0baa2a6c3", "modern-cedar": "1600047509807-ba8f99d2cdde",
  "villa-tall-pool": "1602343168117-bb8ffe3e2e9f", "brick-suburban": "1605276374104-dee2a0ed3cd6",
  "villa-terrace-pool": "1613977257363-707ba9348227", "modern-tree-lawn": "1600607688969-a5bfcd646154",
  "farmhouse-white": "1570129477492-45c003edd2be", "white-cubic": "1523217582562-09d0def993a6",
  "cabin-woods": "1449844908441-8829872d2607", "mansion-dusk": "1505843513577-22bb7d21e455",
  "tuscan-pool": "1599809275671-b5942cabc7a2", "ranch-dusk": "1558036117-15d82a90b9b1",
  "modern-black": "1600585154526-990dced4db0d", "modern-gable": "1600563438938-a9a27216b4f5",
  "suburb-dusk": "1494526585095-c41746248156", "bungalow": "1572120360610-d971b9d7767c",
  "red-roof-cottage": "1576941089067-2de3c901e126",
  "living-wood": "1600607687939-ce8a6c25118c", "living-loft": "1600210492486-724fe5c67fb0",
  "glass-stair-pool": "1600573472550-8090b5e0745e", "living-dog": "1600566753086-00f18fb6b3ea",
  "bedroom-dark": "1616594039964-ae9021a400a0", "living-arches": "1600210491892-03d54c0aaf87",
  "bath-black": "1600566752355-35792bedcfea", "kitchen-white": "1484154218962-a197022b5858",
  "living-blue": "1493809842364-78817add7ffb", "living-bright": "1560448204-e02f11c3d0e2",
  "living-grey": "1600121848594-d8644e57abab", "stair-light": "1502005229762-cf1b2da7c5d6",
  "office-living": "1595846519845-68e298c2edd8", "living-classic": "1505691938895-1758d7feb511",
  "apartments-white": "1597047084897-51e81819a499", "apartments-dark": "1545324418-cc1a3fa10c00",
  "towers-up": "1486406146926-c627a92ad1ab", "towers-glass": "1582407947304-fd86f028f716",
  "austin-skyline": "1531218150217-54595bc2b934", "miami-bay": "1506966953602-c20cc11f75e3",
  "miami-dusk": "1535498730771-e735b998cd64", "atlanta-dusk": "1575917649705-5b59aaa12e6b",
  "riyadh-day": "1586724237569-f3d0c1dee8c6", "white-mosque": "1578895101408-1a36b834405b",
}
def img(key, w=1600):
    return U.format(P[key], w)

esc = html.escape

def load(path):
    spec = importlib.util.spec_from_file_location(path.stem, path)
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m.SITE

def nav(s):
    links = "".join(f'<li><a href="#{a}">{t}</a></li>' for t, a in s["nav"])
    return f'''<nav class="nav{' solid' if s.get('nav_solid') else ''}" aria-label="Main"><a class="brand" href="#top">{esc(s['short'])}</a>
<ul>{links}</ul><a class="btn" href="#visit">{s.get('cta','Book a viewing')}</a><button class="menu-btn" type="button" aria-expanded="false">Menu</button></nav>'''

def pic(key, alt, cls="", w=1600, eager=False):
    return f'<div class="ph {cls}"><img src="{img(key,w)}" alt="{esc(alt)}" width="{w}" height="{int(w*.66)}"{"" if eager else " loading=\"lazy\""}></div>'

def hero(s):
    h = s["hero"]; v = h["v"]
    act = f'<a class="btn {h.get("btn","")}" href="#homes">{h.get("action","See the homes")}</a>'
    if v == "film":
        return f'''<header class="hero hero-film" id="top" style="--scrim:{h.get('scrim',.3)}">{pic(h['img'],h['alt'],'scrim shutter',2400,True)}
<div class="top"><p class="lead sub">{h['sub']}</p>{act}</div><h1><span class="sr">{esc(s['name'])}: </span>{h['title']}</h1></header>'''
    if v == "sky":
        a, b = h["horizon"]
        return f'''<header class="hero hero-sky" id="top" style="--scrim:{h.get('scrim',.18)}">{pic(h['img'],h['alt'],'scrim shutter',2400,True)}
<h1>{h['title']}</h1><div class="horizon"><p>{a}</p><span></span><p>{b}</p></div><div class="act">{act}</div></header>'''
    if v == "split":
        facts = "".join(f"<div><b>{n}</b><span class='small soft'>{t}</span></div>" for n, t in h.get("facts", []))
        return f'''<header class="hero hero-split" id="top"><div class="copy"><h1 class="rv">{h['title']}</h1><p class="lead rv">{h['sub']}</p>
<div class="rv"><a class="btn" href="#homes">{h.get('action','See the homes')}</a></div><div class="facts rv">{facts}</div></div>
<div class="pic">{pic(h['img'],h['alt'],'shutter',1600,True)}</div></header>'''
    if v == "poster":
        return f'''<header class="hero hero-poster" id="top"><h1>{h['title']}</h1>{pic(h['img'],h['alt'],'shutter',1800,True)}
<p class="lead sub">{h['sub']}</p><div class="bar">{act}<a class="btn ghost" href="#visit">{h.get('second','Talk to us')}</a></div></header>'''
    if v == "editorial":
        specs = "".join(f"<div><dt>{a}</dt><dd>{b}</dd></div>" for a, b in h["specs"])
        return f'''<header class="hero hero-editorial" id="top"><div class="copy"><h1 class="rv">{h['title']}</h1><p class="lead rv">{h['sub']}</p>
<div class="rv">{act}</div><dl class="specs rv">{specs}</dl></div>{pic(h['img'],h['alt'],'shutter',1400,True)}</header>'''
    if v == "arch":
        return f'''<header class="hero hero-arch" id="top">{pic(h['img'],h['alt'],'shutter',1400,True)}<div class="copy"><h1 class="rv">{h['title']}</h1>
<p class="lead rv">{h['sub']}</p><div class="rv">{act}</div></div></header>'''
    raise ValueError(v)

def statement(s, d):
    return f'''<section class="sect statement wrap" id="{d.get('id','about-us')}" aria-labelledby="st-h"><div class="grid">
<h2 id="st-h" class="rv">{d['title']}</h2><p class="say rv">{d['text']}</p>
{pic(d['img'],d['alt'],'rv',900)}<p class="note small soft rv">{d['note']}</p></div></section>'''

def listings(s, d):
    L = s["listings"]
    areas = sorted({p["area"] for p in L}); types = sorted({p["type"] for p in L})
    opts = "".join(f'<option>{esc(a)}</option>' for a in areas)
    chips = "".join(f'<button class="chip" type="button" data-chip="type" data-v="{t}" aria-pressed="false">{t}</button>' for t in types)
    style = d.get("style", "mosaic")
    tag = "ol" if style == "index" else "div"
    cls = {"index": "index", "rail": "rail", "mosaic": "mosaic"}[style]
    maxes = "".join(f'<option value="{v}">{t}</option>' for v, t in d["max"])
    return f'''<section class="sect wrap {d.get('field','')}" id="homes" aria-labelledby="ls-h"><div class="sect-head"><h2 id="ls-h" class="rv">{d['title']}</h2><p class="rv">{d['intro']}</p></div>
<div class="tools"><div class="chips" role="group" aria-label="Type"><button class="chip" type="button" data-chip="type" data-v="all" aria-pressed="true">All</button>{chips}
<button class="chip" type="button" data-chip="saved" data-v="true" aria-pressed="false">Saved</button></div>
<label>Area<select data-filter="area"><option value="all">Every area</option>{opts}</select></label>
<label>Bedrooms<select data-filter="beds"><option value="0">Any</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option></select></label>
<label>Up to<select data-filter="max"><option value="">Any price</option>{maxes}</select></label>
<label>Sort<select data-filter="sort"><option value="new">Newest</option><option value="low">Price, low to high</option><option value="high">Price, high to low</option></select></label>
<span class="count" data-count aria-live="polite"></span></div>
<{tag} class="{cls}" data-listings="{style}"></{tag}></section>'''

def tool(s, d):
    rngs = ""
    for name, label, mn, mx, st, val, fmt in d["inputs"]:
        rngs += f'''<div class="range"><div class="top"><label for="r-{name}">{label}</label><output for="r-{name}"></output></div>
<input id="r-{name}" name="{name}" type="range" min="{mn}" max="{mx}" step="{st}" value="{val}" data-fmt="{fmt}"></div>'''
    res = "".join(f'<div><b data-out="{k}">–</b><span>{t}</span></div>' for k, t in d["results"])
    bars = "".join(f'<i style="background:{c}"></i>' for c in d["bars"])
    legend = " · ".join(d["legend"])
    return f'''<section class="sect wrap {d.get('field','')}" id="{d.get('id','calculator')}" aria-labelledby="tl-h"><div class="tool">
<div class="rv"><h2 id="tl-h">{d['title']}</h2><p class="lead" style="margin-top:24px">{d['text']}</p><p class="small soft" style="margin-top:20px">{d.get('fine','Estimates for planning only.')}</p></div>
<div class="panel rv" data-tool="{d['kind']}">{rngs}<div class="result">{res}</div><div><div class="bars">{bars}</div><p class="small" style="margin-top:10px">{legend}</p></div>
<a class="btn" href="#visit">{d.get('action','Talk this through with us')}</a></div></div></section>'''

def areas(s, d):
    items = "".join(f'<li><button type="button" data-area="{k}" aria-current="false">{esc(a["name"])}</button></li>' for k, a in enumerate(s["areas"]))
    a0 = s["areas"][0]
    facts = "".join(f'<div><dt data-a-l>{l}</dt><dd data-a-k>{v}</dd></div>' for l, v in a0["facts"])
    return f'''<section class="sect wrap {d.get('field','')}" id="areas" aria-labelledby="ar-h"><div class="sect-head"><h2 id="ar-h" class="rv">{d['title']}</h2><p class="rv">{d['intro']}</p></div>
<div class="areas"><ol class="rv">{items}</ol><div class="detail rv"><div class="ph"><img src="{img(a0['img'],1000)}" alt="{esc(a0['name'])}" loading="lazy" width="1000" height="1250"></div>
<p data-a="text">{a0['text']}</p><dl>{facts}</dl><button class="btn ghost" type="button" data-a="filter">See homes here</button></div></div></section>'''

def about(s, d):
    facts = "".join(f"<div><b>{n}</b><span>{t}</span></div>" for n, t in d["facts"])
    return f'''<section class="sect wrap about {d.get('field','')}" id="{d.get('id','story')}" aria-labelledby="ab-h"><div class="grid">
<h2 id="ab-h" class="rv">{d['title']}</h2><p class="lead rv">{d['lead']}</p>
<div class="wide rv">{pic(d['img'],d['alt'],'drift',1600)}<p class="over">{d['over']}</p></div>
<div class="tile rv">{pic(d['tile'],d['tile_alt'],'',900)}<div class="facts4">{facts}</div></div></div></section>'''

def process(s, d):
    steps = "".join(f'<li class="rv"><h3>{t}</h3><p>{x}</p></li>' for t, x in d["steps"])
    return f'''<section class="sect wrap {d.get('field','')}" id="{d.get('id','how')}" aria-labelledby="pr-h"><div class="process"><h2 id="pr-h" class="rv">{d['title']}</h2><ol>{steps}</ol></div></section>'''

def visit(s, d):
    hours = "".join(f"<tr><td>{a}</td><td>{b}</td></tr>" for a, b in s["hours"])
    return f'''<section class="visit" id="visit" aria-labelledby="vi-h">{pic(d['img'],d['alt'],'',2000)}<div class="card-v rv">
<h2 id="vi-h">{d['title']}</h2><p>{s['address']}</p><table aria-label="Opening hours">{hours}</table>
<p><a class="link" href="tel:{s['phone'].replace(' ','')}">{s['phone']}</a><br><a class="link" href="mailto:{s['email']}">{s['email']}</a></p>
<form class="form" data-enquire="{esc(d.get('subject','A conversation'))}"><label class="sr" for="v-name">Your name</label><input id="v-name" name="name" required placeholder="Your name" autocomplete="name">
<label class="sr" for="v-c">Email or phone</label><input id="v-c" name="contact" required placeholder="Email or phone" autocomplete="email">
<label class="sr" for="v-w">What you need</label><select id="v-w" name="need">{''.join(f'<option>{o}</option>' for o in d['needs'])}</select>
<button class="btn" type="submit">{d.get('action','Send')}</button><p class="ok" role="status">Thank you. Your email app is opening with this filled in.</p></form></div></section>'''

def foot(s):
    cols = "".join("<div>" + "".join(f"<p>{x}</p>" for x in c) + "</div>" for c in s["foot_cols"])
    return f'''<footer class="foot"><div class="cols">{cols}</div><div class="mark" aria-hidden="true">{esc(s['mark'])}</div>
<div class="legal"><span>© <span data-year></span> {esc(s['name'])}</span><span class="demo-note">Concept website prepared as a demo. Listings and figures are samples. Photography: Unsplash.</span></div></footer>'''

PATHS = {"landmark-bahrain":"landmark","west-austin-properties":"west-austin","austin-boutique-realty":"austin-boutique","graham-central-properties":"graham-central","ocean-club-realty":"ocean-club","aria-global-realty":"aria-global","mahogany-real-estate":"mahogany","glory-real-estate":"glory","taskeen-al-oula":"taskeen","wabrah-real-estate":"wabrah","bin-ajlan-properties":"bin-ajlan","primestate-properties":"primestate","mareena-towers":"mareena","sayed-mahdi-real-estate":"sayed-mahdi","laala-al-kuwait":"laala","al-jrefe-real-estate":"al-jrefe","altruistic-homes":"altruistic"}

SECT = {"statement": statement, "listings": listings, "tool": tool, "areas": areas, "about": about, "process": process, "visit": visit}

def page(s):
    f = s["fonts"]
    tokens = ";".join(f"--{k}:{v}" for k, v in s["tokens"].items())
    body = "".join(SECT[kind](s, d) for kind, d in s["sections"])
    L = []
    for t in s["listings"]:
        L.append({**t, "img": [img(k, 1400) for k in t["img"]]})
    data = {"listings": L, "areas": [{**a, "img": img(a["img"], 1000)} for a in s.get("areas", [])],
            "email": s["email"], "currency": s["currency"], "locale": s.get("locale", "en-US"), **s.get("data", {})}
    return f'''<!doctype html><html lang="{s.get('lang','en')}" class="no-js"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(s['title'])}</title><meta name="description" content="{esc(s['description'])}">
<meta name="theme-color" content="{s['tokens']['bg']}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?{f['url']}&display=swap" rel="stylesheet"><link rel="preconnect" href="https://images.unsplash.com">
<link rel="stylesheet" href="site.css"><style>:root{{{tokens};--display-face:{f['display']};--text-face:{f['text']}}}{s.get('css','')}</style></head>
<body>{nav(s)}<main>{hero(s)}{body}</main>{foot(s)}<dialog class="prop" aria-label="Property details"></dialog>
<script>window.SITE={json.dumps(data, ensure_ascii=False)}</script><script src="site.js" defer></script></body></html>'''

def main():
    out = ROOT
    index = []
    sys.path.insert(0, str(B / "clients"))
    for p in sorted(x for x in (B / "clients").glob("*.py") if not x.name.startswith("_")):
        s = load(p); s["path"] = PATHS.get(s["slug"], s["slug"]); d = out / s["path"]; d.mkdir(exist_ok=True)
        (d / "index.html").write_text(page(s), encoding="utf-8")
        for f in ("site.css", "site.js"): shutil.copy(B / "shared" / f, d / f)
        index.append((s["rank"], s["path"], s["name"], s["city"]))
    rows = "".join(f'<li><a href="/{sl}">{esc(n)}</a> <span>{esc(c)}</span></li>' for _, sl, n, c in sorted(index))
    (ROOT / "index.html").write_text(f'<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Realty demos</title><style>body{{font:18px/1.6 system-ui;margin:40px;background:#111;color:#eee}}a{{color:#fff}}span{{opacity:.6}}</style><h1>Demo sites</h1><ol>{rows}</ol>', encoding="utf-8")
    print("built", len(index))

if __name__ == "__main__":
    main()
