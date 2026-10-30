import { useEffect, useMemo, useRef, useState, createContext, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'

// Every client is one JSON file in ./clients, loaded on demand so each site ships only its own data.
const files = import.meta.glob('./clients/*.json')
const Ctx = createContext(null)
const useSite = () => useContext(Ctx)

export default function Site() {
  const { path } = useParams()
  const [s, setS] = useState(null)
  const [missing, setMissing] = useState(false)
  useEffect(() => {
    const f = files[`./clients/${path}.json`]
    if (!f || path === 'index') { setMissing(true); return }
    f().then(m => setS(m.default))
  }, [path])
  useHead(s)
  if (missing) return <main className="wrap sect"><h1>Not found</h1><p><Link className="link" to="/">All demos</Link></p></main>
  if (!s) return null
  return <SiteBody s={s} />
}

function useHead(s) {
  useEffect(() => {
    if (!s) return
    document.title = s.title
    document.documentElement.lang = s.lang || 'en'
    const set = (sel, make) => { let el = document.head.querySelector(sel); if (!el) { el = make(); document.head.append(el) } return el }
    set('meta[name=description]', () => Object.assign(document.createElement('meta'), { name: 'description' })).content = s.description
    set('meta[name=theme-color]', () => Object.assign(document.createElement('meta'), { name: 'theme-color' })).content = s.tokens.bg
    set('link[data-font]', () => { const l = document.createElement('link'); l.rel = 'stylesheet'; l.dataset.font = ''; return l }).href = `https://fonts.googleapis.com/css2?${s.fonts.url}&display=swap`
    const r = document.documentElement.style
    Object.entries(s.tokens).forEach(([k, v]) => r.setProperty(`--${k}`, v))
    r.setProperty('--display-face', s.fonts.display); r.setProperty('--text-face', s.fonts.text)
    document.body.style.background = s.tokens.bg
  }, [s])
}

function SiteBody({ s }) {
  const money = useMemo(() => {
    const f = new Intl.NumberFormat(s.locale || 'en-US', { style: 'currency', currency: s.currency, maximumFractionDigits: 0 })
    return n => f.format(n)
  }, [s])
  const [favs, setFavs] = useState(() => { try { return new Set(JSON.parse(localStorage.getItem('favs:' + s.path) || '[]')) } catch { return new Set() } })
  const toggleFav = id => setFavs(prev => {
    const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id)
    try { localStorage.setItem('favs:' + s.path, JSON.stringify([...n])) } catch {}
    return n
  })
  const [open, setOpen] = useState(null)
  const [areaFilter, setAreaFilter] = useState('all')
  useReveal(s)
  const ctx = { s, money, favs, toggleFav, setOpen, areaFilter, setAreaFilter }
  return (
    <Ctx.Provider value={ctx}>
      <style>{s.css || ''}</style>
      <Nav />
      <main>
        <Hero />
        {s.sections.map((d, i) => { const C = SECTIONS[d.kind]; return C ? <C key={i} d={d} /> : null })}
      </main>
      <Footer />
      <PropertyDialog p={open} onClose={() => setOpen(null)} />
    </Ctx.Provider>
  )
}

// Entrances: each part rises once as it enters. Nothing stays hidden if the observer never fires.
function useReveal(s) {
  useEffect(() => {
    const els = () => [...document.querySelectorAll('.rv:not(.in)')]
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || innerHeight > 1800) { els().forEach(e => e.classList.add('in')); return }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { rootMargin: '0px 0px -8% 0px' })
    const watch = () => els().forEach((el, k) => { if (!el.style.getPropertyValue('--i')) el.style.setProperty('--i', k % 4); io.observe(el) })
    watch()
    const mo = new MutationObserver(watch); mo.observe(document.body, { childList: true, subtree: true })
    const t = setTimeout(() => els().forEach(e => { if (e.getBoundingClientRect().top < innerHeight * 3) e.classList.add('in') }), 2500)
    return () => { io.disconnect(); mo.disconnect(); clearTimeout(t) }
  }, [s])
}

function Pic({ src, alt, cls = '', eager = false, w = 1600, h = 1056 }) {
  return <div className={`ph ${cls}`}><img src={src} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} /></div>
}
const Html = ({ as: T = 'span', html, ...p }) => <T {...p} dangerouslySetInnerHTML={{ __html: html }} />

function Nav() {
  const { s } = useSite()
  const [open, setOpen] = useState(false)
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  const close = () => setOpen(false)
  return (
    <nav className={`nav${s.nav_solid ? ' solid' : ''}${open ? ' open' : ''}`} aria-label="Main">
      <a className="brand" href="#top" onClick={close}>{s.short}</a>
      <ul>{s.nav.map(([t, a]) => <li key={a}><a href={`#${a}`} onClick={close}>{t}</a></li>)}</ul>
      <a className="btn" href="#visit" onClick={close}>{s.cta || 'Book a viewing'}</a>
      <button className="menu-btn" type="button" aria-expanded={open} onClick={() => setOpen(o => !o)}>{open ? 'Close' : 'Menu'}</button>
    </nav>
  )
}

function Hero() {
  const { s } = useSite(); const h = s.hero
  const act = <a className={`btn ${h.btn || ''}`} href="#homes">{h.action || 'See the homes'}</a>
  if (h.v === 'film') return (
    <header className="hero hero-film" id="top" style={{ '--scrim': h.scrim ?? 0.3 }}>
      <Pic src={h.img} alt={h.alt} cls="scrim shutter" eager w={2400} h={1584} />
      <div className="top"><p className="lead sub">{h.sub}</p>{act}</div>
      <h1><span className="sr">{s.name}: </span><Html html={h.title} /></h1>
    </header>)
  if (h.v === 'sky') return (
    <header className="hero hero-sky" id="top" style={{ '--scrim': h.scrim ?? 0.18 }}>
      <Pic src={h.img} alt={h.alt} cls="scrim shutter" eager w={2400} h={1584} />
      <Html as="h1" html={h.title} />
      <div className="horizon"><p>{h.horizon[0]}</p><span /><p>{h.horizon[1]}</p></div>
      <div className="act">{act}</div>
    </header>)
  if (h.v === 'split') return (
    <header className="hero hero-split" id="top">
      <div className="copy">
        <Html as="h1" className="rv" html={h.title} /><p className="lead rv">{h.sub}</p>
        <div className="rv">{act}</div>
        <div className="facts rv">{(h.facts || []).map(([n, t]) => <div key={t}><b>{n}</b><span className="small soft">{t}</span></div>)}</div>
      </div>
      <div className="pic"><Pic src={h.img} alt={h.alt} cls="shutter" eager /></div>
    </header>)
  if (h.v === 'poster') return (
    <header className="hero hero-poster" id="top">
      <Html as="h1" html={h.title} /><Pic src={h.img} alt={h.alt} cls="shutter" eager />
      <p className="lead sub">{h.sub}</p>
      <div className="bar">{act}<a className="btn ghost" href="#visit">{h.second || 'Talk to us'}</a></div>
    </header>)
  if (h.v === 'editorial') return (
    <header className="hero hero-editorial" id="top">
      <div className="copy">
        <Html as="h1" className="rv" html={h.title} /><p className="lead rv">{h.sub}</p><div className="rv">{act}</div>
        <dl className="specs rv">{h.specs.map(([a, b]) => <div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}</dl>
      </div>
      <Pic src={h.img} alt={h.alt} cls="shutter" eager />
    </header>)
  return (
    <header className="hero hero-arch" id="top">
      <Pic src={h.img} alt={h.alt} cls="shutter" eager />
      <div className="copy"><Html as="h1" className="rv" html={h.title} /><p className="lead rv">{h.sub}</p><div className="rv">{act}</div></div>
    </header>)
}

function Statement({ d }) {
  return (
    <section className="sect statement wrap" id={d.id || 'about-us'} aria-labelledby="st-h">
      <div className="grid">
        <h2 id="st-h" className="rv">{d.title}</h2><p className="say rv">{d.text}</p>
        <Pic src={d.img} alt={d.alt} cls="rv" /><p className="note small soft rv">{d.note}</p>
      </div>
    </section>)
}

const heart = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></svg>

function Listings({ d }) {
  const { s, money, favs, toggleFav, setOpen, areaFilter, setAreaFilter } = useSite()
  const L = s.listings
  const [type, setType] = useState('all'); const [saved, setSaved] = useState(false)
  const [beds, setBeds] = useState(0); const [max, setMax] = useState(Infinity); const [sort, setSort] = useState('new')
  const areas = [...new Set(L.map(p => p.area))].sort(); const types = [...new Set(L.map(p => p.type))].sort()
  let r = L.filter(p => (areaFilter === 'all' || p.area === areaFilter) && (type === 'all' || p.type === type) && p.beds >= beds && p.price <= max && (!saved || favs.has(p.id)))
  if (sort === 'low') r = [...r].sort((a, b) => a.price - b.price)
  if (sort === 'high') r = [...r].sort((a, b) => b.price - a.price)
  const style = d.style || 'mosaic'
  const price = p => <>{money(p.price)}{p.rent && <small> /mo</small>}</>
  const [peek, setPeek] = useState(null)
  return (
    <section className={`sect wrap ${d.field || ''}`} id="homes" aria-labelledby="ls-h">
      <div className="sect-head"><h2 id="ls-h" className="rv">{d.title}</h2><p className="rv">{d.intro}</p></div>
      <div className="tools">
        <div className="chips" role="group" aria-label="Type">
          {['all', ...types].map(t => <button key={t} className="chip" type="button" aria-pressed={type === t && !saved} onClick={() => { setType(t); setSaved(false) }}>{t === 'all' ? 'All' : t}</button>)}
          <button className="chip" type="button" aria-pressed={saved} onClick={() => setSaved(v => !v)}>Saved</button>
        </div>
        <label>Area<select value={areaFilter} onChange={e => setAreaFilter(e.target.value)}><option value="all">Every area</option>{areas.map(a => <option key={a}>{a}</option>)}</select></label>
        <label>Bedrooms<select onChange={e => setBeds(+e.target.value)}><option value="0">Any</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option></select></label>
        <label>Up to<select onChange={e => setMax(+e.target.value || Infinity)}><option value="">Any price</option>{d.max.map(([v, t]) => <option key={v} value={v}>{t}</option>)}</select></label>
        <label>Sort<select onChange={e => setSort(e.target.value)}><option value="new">Newest</option><option value="low">Price, low to high</option><option value="high">Price, high to low</option></select></label>
        <span className="count" aria-live="polite">{r.length} of {L.length} homes</span>
      </div>
      {!r.length && <p className="empty">{saved ? 'Nothing saved yet. Tap the heart on any home to keep it here.' : 'No homes match those settings. Widen the price or clear a filter.'}</p>}
      {style === 'index' ? (
        <ol className="index" onPointerLeave={() => setPeek(null)}>
          {r.map(p => <li key={p.id}><button type="button" onClick={() => setOpen(p)}
            onPointerMove={e => matchMedia('(hover:hover)').matches && setPeek({ src: p.img[0], x: Math.min(e.clientX + 24, innerWidth - 320), y: e.clientY - 110 })}>
            <h3>{p.title}</h3><span>{p.area}</span><span>{p.beds ? `${p.beds} bd · ` : ''}{p.size}</span><span>{price(p)}</span></button></li>)}
          <div className={`peek ph${peek ? ' on' : ''}`} style={peek ? { left: peek.x, top: peek.y } : undefined}>{peek && <img src={peek.src} alt="" />}</div>
        </ol>
      ) : (
        <div className={style}>
          {r.map(p => (
            <article key={p.id} className="card rv" tabIndex={0} role="button" aria-label={`${p.title}, ${money(p.price)}`}
              onClick={() => setOpen(p)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(p) } }}>
              {p.status && <span className="tag">{p.status}</span>}
              <button className="fav" type="button" aria-pressed={favs.has(p.id)} aria-label={`Save ${p.title}`} onClick={e => { e.stopPropagation(); toggleFav(p.id) }}>{heart}</button>
              <Pic src={p.img[0]} alt={p.alt || p.title} w={1200} h={900} />
              <div className="row"><h3>{p.title}</h3><span className="price">{price(p)}</span></div>
              <div className="meta"><span>{p.area}</span>{p.beds > 0 && <span>{p.beds} bed</span>}{p.baths > 0 && <span>{p.baths} bath</span>}<span>{p.size}</span></div>
            </article>))}
        </div>
      )}
    </section>)
}

function useCalc(kind, v, s) {
  if (kind === 'mortgage') {
    const P = v.price * (1 - v.down / 100), i = v.rate / 1200, n = v.years * 12
    const m = i ? P * i / (1 - Math.pow(1 + i, -n)) : P / n, tax = v.price * (s.data?.taxRate ?? 0.018) / 12, ins = s.data?.insure ?? 150
    return { out: { pi: m, all: m + tax + ins, total: m * n - P }, parts: [m, tax, ins] }
  }
  if (kind === 'yield') {
    const rent = v.rent * 12, cost = rent * v.costs / 100, net = rent - cost
    return { out: { gross: `${(rent / v.price * 100).toFixed(1)}%`, net: `${(net / v.price * 100).toFixed(1)}%`, year: net }, parts: [net, cost] }
  }
  if (kind === 'plan') {
    const down = v.price * v.down / 100
    return { out: { down, monthly: (v.price - down) / v.months, months: `${v.months} months` }, parts: [down, v.price - down] }
  }
  const fee = v.price * v.fee / 100
  return { out: { net: v.price - fee, fee, save: v.price * 0.01 }, parts: [v.price - fee, fee] }
}

function Tool({ d }) {
  const { s, money } = useSite()
  const [v, setV] = useState(() => Object.fromEntries(d.inputs.map(([n, , , , , val]) => [n, val])))
  const { out, parts } = useCalc(d.kind, v, s)
  const total = parts.reduce((a, b) => a + b, 0) || 1
  const fmt = (f, x) => f === 'pct' ? `${x}%` : f === 'yr' ? `${x} years` : f === 'n' ? x : money(x)
  return (
    <section className={`sect wrap ${d.field || ''}`} id={d.id || 'calculator'} aria-labelledby="tl-h">
      <div className="tool">
        <div className="rv"><h2 id="tl-h">{d.title}</h2><p className="lead" style={{ marginTop: 24 }}>{d.text}</p><p className="small soft" style={{ marginTop: 20 }}>{d.fine || 'Estimates for planning only.'}</p></div>
        <div className="panel rv">
          {d.inputs.map(([n, label, mn, mx, st, , f]) => (
            <div className="range" key={n}>
              <div className="top"><label htmlFor={`r-${n}`}>{label}</label><output htmlFor={`r-${n}`}>{fmt(f, v[n])}</output></div>
              <input id={`r-${n}`} type="range" min={mn} max={mx} step={st} value={v[n]} onChange={e => setV(o => ({ ...o, [n]: +e.target.value }))} />
            </div>))}
          <div className="result">{d.results.map(([k, t]) => <div key={k}><b>{typeof out[k] === 'number' ? money(out[k]) : out[k]}</b><span>{t}</span></div>)}</div>
          <div><div className="bars">{parts.map((x, k) => <i key={k} style={{ width: `${x / total * 100}%`, background: d.bars[k] }} />)}</div><p className="small" style={{ marginTop: 10 }}>{d.legend.join(' · ')}</p></div>
          <a className="btn" href="#visit">{d.action || 'Talk this through with us'}</a>
        </div>
      </div>
    </section>)
}

function Areas({ d }) {
  const { s, setAreaFilter } = useSite()
  const [k, setK] = useState(0); const a = s.areas[k]
  return (
    <section className={`sect wrap ${d.field || ''}`} id="areas" aria-labelledby="ar-h">
      <div className="sect-head"><h2 id="ar-h" className="rv">{d.title}</h2><p className="rv">{d.intro}</p></div>
      <div className="areas">
        <ol className="rv">{s.areas.map((x, i) => <li key={x.name}><button type="button" aria-current={i === k} onClick={() => setK(i)}>{x.name}</button></li>)}</ol>
        <div className="detail rv">
          <Pic src={a.img} alt={a.name} w={1000} h={1250} />
          <p>{a.text}</p>
          <dl>{a.facts.map(([l, x]) => <div key={l}><dt>{l}</dt><dd>{x}</dd></div>)}</dl>
          <a className="btn ghost" href="#homes" onClick={() => setAreaFilter(s.listings.some(p => p.area === a.name) ? a.name : 'all')}>See homes here</a>
        </div>
      </div>
    </section>)
}

function About({ d }) {
  return (
    <section className={`sect wrap about ${d.field || ''}`} id={d.id || 'story'} aria-labelledby="ab-h">
      <div className="grid">
        <h2 id="ab-h" className="rv">{d.title}</h2><p className="lead rv">{d.lead}</p>
        <div className="wide rv"><Pic src={d.img} alt={d.alt} cls="drift" /><p className="over">{d.over}</p></div>
        <div className="tile rv"><Pic src={d.tile} alt={d.tile_alt} w={900} h={1125} /><div className="facts4">{d.facts.map(([n, t]) => <div key={t}><b>{n}</b><span>{t}</span></div>)}</div></div>
      </div>
    </section>)
}

function Process({ d }) {
  return (
    <section className={`sect wrap ${d.field || ''}`} id={d.id || 'how'} aria-labelledby="pr-h">
      <div className="process"><h2 id="pr-h" className="rv">{d.title}</h2>
        <ol>{d.steps.map(([t, x]) => <li key={t} className="rv"><h3>{t}</h3><p>{x}</p></li>)}</ol></div>
    </section>)
}

// No backend in a demo: forms open the visitor's email app with every field filled in.
function EnquiryForm({ subject, children, button }) {
  const { s } = useSite(); const [sent, setSent] = useState(false)
  const submit = e => {
    e.preventDefault()
    const body = [...new FormData(e.target)].filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n')
    location.href = `mailto:${s.email}?subject=${encodeURIComponent('Enquiry: ' + subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  const id = useRef('f' + Math.random().toString(36).slice(2, 7)).current
  return (
    <form className={`form${sent ? ' sent' : ''}`} onSubmit={submit}>
      <label className="sr" htmlFor={`${id}-n`}>Your name</label><input id={`${id}-n`} name="name" required placeholder="Your name" autoComplete="name" />
      <label className="sr" htmlFor={`${id}-c`}>Email or phone</label><input id={`${id}-c`} name="contact" required placeholder="Email or phone" autoComplete="email" />
      {children}
      <button className="btn" type="submit">{button}</button>
      <p className="ok" role="status">Thank you. Your email app is opening with this filled in.</p>
    </form>)
}

function Visit({ d }) {
  const { s } = useSite()
  return (
    <section className="visit" id="visit" aria-labelledby="vi-h">
      <Pic src={d.img} alt={d.alt} w={2000} h={1320} />
      <div className="card-v rv">
        <h2 id="vi-h">{d.title}</h2><Html as="p" html={s.address} />
        <table aria-label="Opening hours"><tbody>{s.hours.map(([a, b]) => <tr key={a}><td>{a}</td><td>{b}</td></tr>)}</tbody></table>
        <p><a className="link" href={`tel:${s.phone.replace(/\s/g, '')}`}>{s.phone}</a><br /><a className="link" href={`mailto:${s.email}`}>{s.email}</a></p>
        <EnquiryForm subject={d.subject || 'A conversation'} button={d.action || 'Send'}>
          <label className="sr" htmlFor="v-need">What you need</label>
          <select id="v-need" name="need">{d.needs.map(o => <option key={o}>{o}</option>)}</select>
        </EnquiryForm>
      </div>
    </section>)
}

function Footer() {
  const { s } = useSite()
  return (
    <footer className="foot">
      <div className="cols">{s.foot_cols.map((c, i) => <div key={i}>{c.map(x => <p key={x}>{x}</p>)}</div>)}</div>
      <div className="mark" aria-hidden="true">{s.mark}</div>
      <div className="legal"><span>© {new Date().getFullYear()} {s.name}</span><span className="demo-note">Concept website prepared as a demo. Listings and figures are samples. Photography: Unsplash.</span></div>
    </footer>)
}

function PropertyDialog({ p, onClose }) {
  const { money } = useSite(); const ref = useRef(null); const [k, setK] = useState(0)
  useEffect(() => { const d = ref.current; if (!d) return; if (p) { setK(0); if (!d.open) d.showModal() } else if (d.open) d.close() }, [p])
  return (
    <dialog className="prop" ref={ref} aria-label="Property details" onClose={onClose} onClick={e => e.target === ref.current && onClose()}>
      {p && <>
        <button className="close" type="button" aria-label="Close" onClick={onClose}>×</button>
        <div className="in">
          <div className="gal">
            <Pic src={p.img[k]} alt={p.title} eager w={1200} h={900} />
            <div className="thumbs">{p.img.map((src, i) => <button key={src} type="button" aria-label={`Photo ${i + 1}`} aria-current={i === k} onClick={() => setK(i)}><img src={src} alt="" loading="lazy" /></button>)}</div>
          </div>
          <div className="body">
            <p className="soft">{p.area}{p.status ? ` · ${p.status}` : ''}</p><h3>{p.title}</h3>
            <p className="price lead">{money(p.price)}{p.rent ? ' per month' : ''}</p>
            <dl><div><dt>Bedrooms</dt><dd>{p.beds || '–'}</dd></div><div><dt>Bathrooms</dt><dd>{p.baths || '–'}</dd></div><div><dt>Size</dt><dd>{p.size}</dd></div></dl>
            <p>{p.desc}</p>
            <EnquiryForm subject={p.title} button="Book a viewing">
              <label className="sr" htmlFor="d-when">Preferred viewing day</label><input id="d-when" name="when" type="date" />
            </EnquiryForm>
          </div>
        </div>
      </>}
    </dialog>)
}

const SECTIONS = { statement: Statement, listings: Listings, tool: Tool, areas: Areas, about: About, process: Process, visit: Visit }
