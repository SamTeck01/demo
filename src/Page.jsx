import { useEffect, useMemo, useRef, useState, createContext, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { plans, skinHero } from './plans.js'

// One page per client: data from ./clients/<path>.json, structure from plans.js.
const files = import.meta.glob('./clients/*.json')
const Ctx = createContext(null)
const use = () => useContext(Ctx)
const digits = p => (p || '').replace(/\D/g, '')

export default function Page() {
  const { path } = useParams()
  const [s, setS] = useState(null)
  const [missing, setMissing] = useState(false)
  useEffect(() => {
    const f = files[`./clients/${path}.json`]
    if (!f || !plans[path]) { setMissing(true); return }
    f().then(m => setS({ ...m.default, plan: plans[path] }))
  }, [path])
  useHead(s)
  if (missing) return <main className="pg-missing"><h1>Not found</h1><Link to="/">All demos</Link></main>
  if (!s) return null
  return <Body s={s} />
}

function useHead(s) {
  useEffect(() => {
    if (!s) return
    const p = s.plan
    document.title = s.title
    const meta = (name, v) => {
      let el = document.head.querySelector(`meta[name=${name}]`)
      if (!el) { el = document.createElement('meta'); el.name = name; document.head.append(el) }
      el.content = v
    }
    meta('description', s.description); meta('theme-color', p.tokens.bg)
    let l = document.head.querySelector('link[data-font]')
    if (!l) { l = document.createElement('link'); l.rel = 'stylesheet'; l.dataset.font = ''; document.head.append(l) }
    l.href = `https://fonts.googleapis.com/css2?${p.fonts[0]}&display=swap`
    const r = document.documentElement
    r.dataset.skin = p.skin
    Object.entries(p.tokens).forEach(([k, v]) => r.style.setProperty(`--${k}`, v))
    r.style.setProperty('--display', p.fonts[1]); r.style.setProperty('--text', p.fonts[2])
  }, [s])
}

function Body({ s }) {
  const p = s.plan
  const money = useMemo(() => {
    const f = new Intl.NumberFormat(s.locale || 'en-US', { style: 'currency', currency: s.currency, maximumFractionDigits: 0 })
    return n => f.format(n)
  }, [s])
  const [open, setOpen] = useState(null)
  const wa = p.whatsapp ? `https://wa.me/${p.whatsapp}` : null
  // A lead goes where this client actually answers: WhatsApp if they use it, email otherwise.
  const send = (subject, lines) => {
    const text = [subject, ...lines.filter(Boolean)].join('\n')
    const url = wa ? `${wa}?text=${encodeURIComponent(text)}` : `mailto:${s.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, wa ? '_blank' : '_self')
  }
  useReveal()
  const ctx = { s, p, money, setOpen, wa, send }
  return (
    <Ctx.Provider value={ctx}>
      <a className="pg-skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        {p.sections.map((x, i) => { const C = kinds[x.type]; return <C key={i} x={x} /> })}
      </main>
      <Footer />
      <MobileBar />
      {open && <Dialog l={open} onClose={() => setOpen(null)} />}
    </Ctx.Provider>
  )
}

const anchors = { listings: ['Homes', 'homes'], valuation: ['Sell', 'value'], owners: ['Owners', 'owners'], mortgage: ['Payments', 'pay'], plan: ['Payment plan', 'plan'], areas: ['Areas', 'areas'], buildings: ['Buildings', 'buildings'], person: ['About', 'about'], steps: ['How it works', 'steps'], services: ['Services', 'services'], faq: ['FAQ', 'faq'], contact: ['Contact', 'contact'] }

function Nav() {
  const { s, p } = use()
  const [menu, setMenu] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { document.body.style.overflow = menu ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [menu])
  const links = p.sections.map(x => anchors[x.type]).filter(a => a && a[1] !== 'contact').slice(0, 5)
  return (
    <header className={'pg-nav' + (solid ? ' is-solid' : '')}>
      <a href="#top" className="pg-logo">{s.short}</a>
      <nav aria-label="Main" className="pg-links">{links.map(([t, h]) => <a key={h} href={'#' + h}>{t}</a>)}</nav>
      <a className="pg-btn pg-nav-cta" href="#contact">{s.cta}</a>
      <button className="pg-menu" type="button" aria-expanded={menu} aria-controls="pg-sheet" onClick={() => setMenu(true)}>Menu</button>
      <div id="pg-sheet" className={'pg-sheet' + (menu ? ' is-open' : '')} hidden={!menu} onClick={e => { if (e.target.tagName === 'A' || e.target === e.currentTarget) setMenu(false) }}>
        <div className="pg-sheet-in">
          <button className="pg-close" type="button" onClick={() => setMenu(false)}>Close</button>
          {links.map(([t, h]) => <a key={h} href={'#' + h}>{t}</a>)}
          <a href="#contact">Contact</a>
          <a className="pg-btn" href={`tel:+${digits(s.phone).replace(/^0+/, '')}`}>Call {s.phone}</a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const { s, p } = use()
  const h = p.hero, v = skinHero(p.skin)
  const img = s.hero.img
  const ctas = (
    <div className="pg-ctas">
      <a className="pg-btn pg-btn-accent" href={'#' + h.primary[1]}>{h.primary[0]}</a>
      <a className="pg-btn pg-btn-ghost" href={'#' + h.secondary[1]}>{h.secondary[0]}</a>
    </div>
  )
  const title = <h1 className="pg-h1 rv">{h.title} <em>{h.accent}</em></h1>
  if (v === 'glass') return (
    <section id="top" className="pg-hero-glass">
      <img src={img} alt={s.hero.alt || ''} fetchpriority="high" />
      <div className="pg-shade" />
      {h.card && <aside className="pg-glasscard" aria-label={h.card[0]}><b>{h.card[0]}</b><ul>{h.card[1].map(t => <li key={t}>{t}</li>)}</ul></aside>}
      <div className="pg-hero-copy">
        <p className="pg-kicker">{h.kicker}</p>{title}<p className="pg-lede">{h.sub}</p>{ctas}
      </div>
    </section>
  )
  if (v === 'split') return (
    <section id="top" className="pg-hero-split">
      <div className="pg-split-copy">
        <p className="pg-kicker">{h.kicker}</p>{title}<p className="pg-lede">{h.sub}</p>{ctas}
      </div>
      <div className="pg-split-photo">
        <img src={img} alt={s.hero.alt || ''} fetchpriority="high" />
        {h.stats && <div className="pg-split-stats">{h.stats.map(([n, l]) => <span key={l}><b>{n}</b> {l}</span>)}</div>}
      </div>
    </section>
  )
  return (
    <section id="top" className="pg-hero-ed">
      <div className="pg-ed-top">
        <p className="pg-kicker">{h.kicker}</p>{title}
        <div className="pg-ed-side"><p className="pg-lede">{h.sub}</p>{ctas}</div>
      </div>
      <div className="pg-ed-photo"><img src={img} alt={s.hero.alt || ''} fetchpriority="high" /></div>
    </section>
  )
}

function Head({ id, title, sub, children }) {
  return (
    <div className="pg-head">
      <div><h2 id={id + '-h'} className="pg-h2 rv">{title}</h2>{sub && <p className="pg-sub">{sub}</p>}</div>
      {children}
    </div>
  )
}

function Chips({ label, items, value, set }) {
  return (
    <div className="pg-chips" role="group" aria-label={label}>
      {items.map(([k, t]) => <button key={k} type="button" aria-pressed={value === k} onClick={() => set(k)}>{t}</button>)}
    </div>
  )
}

function Listings({ x }) {
  const { s, money, setOpen, p } = use()
  const [f, setF] = useState('all')
  const L = s.listings
  const opts = {
    beds: [['all', 'Any beds'], ['2', '2 bed'], ['3', '3 bed'], ['4', '4+ bed']],
    kind: [['all', 'All'], ['sale', 'For sale'], ['rent', 'For rent']],
    type: [['all', 'All'], ...[...new Set(L.map(l => l.type))].map(t => [t, t])],
    area: [['all', 'All'], ...[...new Set(L.map(l => l.area))].map(t => [t, t])],
  }[x.filter]
  const test = l => f === 'all' || (x.filter === 'beds' ? (f === '4' ? l.beds >= 4 : l.beds === +f) : x.filter === 'kind' ? (f === 'rent') === !!l.rent : l[x.filter] === f)
  const shown = L.filter(test)
  return (
    <section id="homes" aria-labelledby="homes-h" className={'pg-sect' + (x.big ? ' pg-big' : '')}>
      <Head id="homes" title={x.title}>{opts && opts.length > 2 && <Chips label="Filter homes" items={opts} value={f} set={setF} />}</Head>
      <div className="pg-rail">
        {shown.map(l => (
          <article key={l.id} className="pg-home rv">
            <button type="button" className="pg-home-btn" onClick={() => setOpen({ ...l, cta: x.cta })} aria-label={`${l.title}, details`}>
              <span className="pg-home-img"><img src={l.img[0]} alt="" loading="lazy" />{l.status && <i>{l.status}</i>}</span>
              <span className="pg-home-row"><b>{l.title}</b><span>{money(l.price)}{l.rent ? (p.rentPeriod === 'year' ? '/yr' : '/mo') : ''}</span></span>
              <span className="pg-meta">{l.area} · {l.beds} bed · {l.baths} bath · {l.size}</span>
            </button>
          </article>
        ))}
        {!shown.length && <p className="pg-sub">Nothing matches right now. Ask us: new homes come in every week.</p>}
      </div>
    </section>
  )
}

function Dialog({ l, onClose }) {
  const { money, s, p } = use()
  const ref = useRef()
  const [i, setI] = useState(0)
  useEffect(() => {
    const d = ref.current; d.showModal()
    const k = e => { if (e.key === 'ArrowRight') setI(n => (n + 1) % l.img.length); if (e.key === 'ArrowLeft') setI(n => (n - 1 + l.img.length) % l.img.length) }
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [l])
  return (
    <dialog ref={ref} className="pg-dialog" onClose={onClose} onClick={e => { if (e.target === ref.current) ref.current.close() }} aria-labelledby="dlg-h">
      <div className="pg-dlg-img">
        <img src={l.img[i]} alt={`${l.title}, photo ${i + 1} of ${l.img.length}`} />
        {l.img.length > 1 && <div className="pg-dots">{l.img.map((_, n) => <button key={n} type="button" aria-label={`Photo ${n + 1}`} aria-pressed={n === i} onClick={() => setI(n)} />)}</div>}
      </div>
      <div className="pg-dlg-body">
        <button type="button" className="pg-close" onClick={() => ref.current.close()}>Close</button>
        <p className="pg-kicker">{l.area} · {l.type}</p>
        <h2 id="dlg-h" className="pg-h3">{l.title}</h2>
        <p className="pg-price">{money(l.price)}{l.rent ? (p.rentPeriod === 'year' ? ' a year' : ' a month') : ''}</p>
        <p className="pg-meta">{l.beds} bed · {l.baths} bath · {l.size}</p>
        <p>{l.desc}</p>
        <Lead subject={`${l.cta}: ${l.title}`} button={l.cta} fields={['name', 'phone', 'when']} extra={[`Home: ${l.title} (${money(l.price)})`]} />
        <p className="pg-small">Or call <a href={`tel:+${digits(s.phone)}`}>{s.phone}</a></p>
      </div>
    </dialog>
  )
}

function Lead({ subject, button, fields = ['name', 'phone'], extra = [] }) {
  const { send } = use()
  const [done, setDone] = useState(false)
  const labels = { name: 'Your name', phone: 'Phone or WhatsApp', email: 'Email', when: 'Best day to view', note: 'Anything we should know' }
  const auto = { name: 'name', phone: 'tel', email: 'email' }
  const submit = e => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    send(subject, [...extra, ...fields.map(f => d.get(f) && `${labels[f]}: ${d.get(f)}`)])
    setDone(true)
  }
  if (done) return <p className="pg-done" role="status">Thank you. We will reply within the hour during office time.</p>
  return (
    <form className="pg-form" onSubmit={submit}>
      {fields.map(f => (
        <label key={f}><span>{labels[f]}</span>
          {f === 'note' ? <textarea name={f} rows={3} /> : <input name={f} type={f === 'phone' ? 'tel' : f === 'email' ? 'email' : 'text'} autoComplete={auto[f] || 'off'} required={f === 'name' || f === 'phone'} />}
        </label>
      ))}
      <button className="pg-btn pg-btn-accent" type="submit">{button}</button>
    </form>
  )
}

function Range({ label, value, min, max, step, set, show }) {
  return (
    <label className="pg-range"><span><span>{label}</span><b>{show}</b></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => set(+e.target.value)} />
    </label>
  )
}

function Valuation({ x }) {
  const { money } = use()
  const areas = Object.keys(x.rates)
  const [area, setArea] = useState(areas[0])
  const [size, setSize] = useState(x.start || 2000)
  const [when, setWhen] = useState('3 months')
  const v = size * x.rates[area]
  const lo = Math.round(v * 0.94 / 1000) * 1000, hi = Math.round(v * 1.06 / 1000) * 1000
  const unit = x.unit || 'sq ft'
  return (
    <section id="value" aria-labelledby="value-h" className="pg-sect pg-band">
      <div className="pg-two">
        <div>
          <h2 id="value-h" className="pg-h2 rv">{x.title}</h2>
          <p className="pg-sub">{x.sub}</p>
          <div className="pg-estimate" aria-live="polite"><small>Estimated range</small><strong>{money(lo)} – {money(hi)}</strong></div>
        </div>
        <div className="pg-panel">
          <Chips label="Area" items={areas.map(a => [a, a])} value={area} set={setArea} />
          <Range label={`Size (${unit})`} value={size} min={x.min || 800} max={x.max || 6000} step={x.step || 50} set={setSize} show={size.toLocaleString('en-US')} />
          <Chips label="When are you selling" items={[['Now', 'Now'], ['3 months', 'In 3 months'], ['Just curious', 'Just curious']]} value={when} set={setWhen} />
          <Lead subject="Valuation request" button="Send me the full valuation" fields={['name', 'phone', 'email']} extra={[`Area: ${area}`, `Size: ${size} ${unit}`, `Timing: ${when}`, `Online range: ${money(lo)} – ${money(hi)}`]} />
        </div>
      </div>
    </section>
  )
}

function Owners({ x }) {
  const { money } = use()
  const [units, setUnits] = useState(x.units)
  const [rent, setRent] = useState(x.rent)
  const per = x.period === 'year' ? 'a year' : 'a month'
  const gross = units * rent
  const gain = gross * (x.vacancyGain || 6) / 100
  const fee = gross * x.fee / 100
  return (
    <section id="owners" aria-labelledby="owners-h" className="pg-sect pg-dark">
      <div className="pg-two">
        <div>
          <h2 id="owners-h" className="pg-h2 rv">{x.title}</h2>
          <p className="pg-sub">{x.sub}</p>
          <dl className="pg-ledger">
            <div><dt>Rent roll</dt><dd>{money(gross)} {per}</dd></div>
            <div><dt>Recovered from fewer empty {x.unitWord}</dt><dd>+{money(gain)}</dd></div>
            <div><dt>Our fee ({x.fee}%)</dt><dd>−{money(fee)}</dd></div>
            <div className="is-total"><dt>You receive</dt><dd>{money(gross + gain - fee)} {per}</dd></div>
          </dl>
        </div>
        <div className="pg-panel">
          <Range label={`Number of ${x.unitWord}`} value={units} min={1} max={x.units > 1 ? 120 : 20} step={1} set={setUnits} show={units} />
          <Range label={`Rent per unit, ${per}`} value={rent} min={Math.round(x.rent * 0.3)} max={x.rent * 3} step={Math.max(10, Math.round(x.rent / 100) * 5)} set={setRent} show={money(rent)} />
          <Lead subject="Property management enquiry" button="Get a written proposal" fields={['name', 'phone', 'note']} extra={[`${units} ${x.unitWord} at ${money(rent)} ${per}`]} />
        </div>
      </div>
    </section>
  )
}

function Mortgage({ x }) {
  const { money } = use()
  const [price, setPrice] = useState(x.price)
  const [down, setDown] = useState(10)
  const [rate, setRate] = useState(x.rate)
  const P = price * (1 - down / 100), i = rate / 1200
  const pi = P * i / (1 - Math.pow(1 + i, -360))
  const m = pi + price * x.tax / 100 / 12 + x.ins
  const income = m / 0.28 * 12
  return (
    <section id="pay" aria-labelledby="pay-h" className="pg-sect pg-band">
      <div className="pg-two">
        <div>
          <h2 id="pay-h" className="pg-h2 rv">{x.title}</h2>
          <div className="pg-estimate" aria-live="polite"><small>Monthly, with tax and insurance</small><strong>{money(m)}</strong></div>
          <dl className="pg-ledger">
            <div><dt>Cash to close (down payment)</dt><dd>{money(price * down / 100)}</dd></div>
            <div><dt>Household income lenders look for</dt><dd>{money(income)} a year</dd></div>
            {x.rent && <div className="is-total"><dt>Cash flow if rented at {money(x.rent)}</dt><dd>{money(x.rent - m)} a month</dd></div>}
          </dl>
          {x.note && <p className="pg-sub">{x.note}</p>}
        </div>
        <div className="pg-panel">
          <Range label="Home price" value={price} min={Math.round(x.price * 0.4 / 5000) * 5000} max={x.price * 3} step={5000} set={setPrice} show={money(price)} />
          <Range label="Down payment" value={down} min={3} max={40} step={1} set={setDown} show={down + '%'} />
          <Range label="Interest rate" value={rate} min={4} max={9} step={0.1} set={setRate} show={rate.toFixed(1) + '%'} />
          <Lead subject="Buyer consultation" button="Get matched with homes in this budget" fields={['name', 'phone']} extra={[`Budget: ${money(price)}, ${down}% down`]} />
        </div>
      </div>
    </section>
  )
}

function Plan({ x }) {
  const { s, money } = use()
  const opts = s.listings.map(l => [l.id, l.title])
  const [id, setId] = useState(opts[0][0])
  const [down, setDown] = useState(x.down)
  const l = s.listings.find(l => l.id === id)
  const m = l.price * (1 - down / 100) / (x.years * 12)
  return (
    <section id="plan" aria-labelledby="plan-h" className="pg-sect pg-dark">
      <div className="pg-two">
        <div>
          <h2 id="plan-h" className="pg-h2 rv">{x.title}</h2>
          <div className="pg-estimate" aria-live="polite"><small>Monthly for {x.years} years</small><strong>{money(m)}</strong></div>
          <dl className="pg-ledger">
            <div><dt>Price</dt><dd>{money(l.price)}</dd></div>
            <div><dt>Deposit ({down}%)</dt><dd>{money(l.price * down / 100)}</dd></div>
            <div className="is-total"><dt>Interest</dt><dd>0%</dd></div>
          </dl>
        </div>
        <div className="pg-panel">
          <Chips label="Residence" items={opts} value={id} set={setId} />
          <Range label="Deposit" value={down} min={10} max={60} step={5} set={setDown} show={down + '%'} />
          <Lead subject="Register interest, Breeze of Dilmunia" button="Reserve this plan on WhatsApp" fields={['name', 'phone']} extra={[`${l.title}: ${money(l.price)}, ${down}% deposit, ${money(m)} a month`]} />
        </div>
      </div>
    </section>
  )
}

function Areas({ x }) {
  const { s } = use()
  const [i, setI] = useState(0)
  const a = s.areas[i]
  if (!a) return null
  return (
    <section id="areas" aria-labelledby="areas-h" className="pg-sect">
      <Head id="areas" title={x.title} sub={x.sub}><Chips label="Area" items={s.areas.map((a, n) => [n, a.name])} value={i} set={setI} /></Head>
      <div className="pg-area" key={i}>
        <img src={a.img} alt={a.name} loading="lazy" />
        <div><h3 className="pg-h3">{a.name}</h3><p>{a.text}</p>{a.facts && <dl className="pg-ledger">{a.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>}</div>
      </div>
    </section>
  )
}

function Buildings({ x }) {
  const { s } = use()
  return (
    <section id="buildings" aria-labelledby="buildings-h" className="pg-sect">
      <Head id="buildings" title={x.title} />
      <div className="pg-rail pg-rail-tall">
        {s.areas.map(a => (
          <a key={a.name} href="#homes" className="pg-bldg rv"><img src={a.img} alt="" loading="lazy" /><span><b>{a.name}</b><small>{a.text}</small></span></a>
        ))}
      </div>
    </section>
  )
}

function Proof({ x }) {
  return (
    <section aria-label="Track record" className="pg-sect">
      {x.stats && <div className="pg-stats">{x.stats.map(([n, l]) => <div key={l} className="rv"><b>{n}</b><span>{l}</span></div>)}</div>}
      {x.quotes && <div className="pg-quotes">{x.quotes.map(([q, w]) => <figure key={w} className="rv"><blockquote>“{q}”</blockquote><figcaption>{w}</figcaption></figure>)}</div>}
    </section>
  )
}

function Services({ x }) {
  return (
    <section id="services" aria-labelledby="services-h" className="pg-sect">
      <Head id="services" title={x.title} />
      <div className="pg-cards">{x.items.map(([t, d], n) => <div key={t} className="pg-card rv"><small>0{n + 1}</small><h3 className="pg-h4">{t}</h3><p>{d}</p></div>)}</div>
    </section>
  )
}

function Steps({ x }) {
  return (
    <section id="steps" aria-labelledby="steps-h" className="pg-sect">
      <Head id="steps" title={x.title} />
      <ol className="pg-steps">{x.items.map(([t, d]) => <li key={t} className="rv"><h3 className="pg-h4">{t}</h3><p>{d}</p></li>)}</ol>
    </section>
  )
}

function Person({ x }) {
  return (
    <section id="about" aria-labelledby="about-h" className="pg-sect pg-band">
      <div className="pg-two">
        <div className="pg-mono" aria-hidden="true">{x.name.split(' ').map(w => w[0]).join('').slice(0, 2)}</div>
        <div>
          <p className="pg-kicker">{x.role}</p>
          <h2 id="about-h" className="pg-h2 rv">{x.name}</h2>
          <p className="pg-quote">“{x.text}”</p>
          <ul className="pg-creds">{x.creds.map(c => <li key={c}>{c}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}

function Faq({ x }) {
  return (
    <section id="faq" aria-labelledby="faq-h" className="pg-sect">
      <Head id="faq" title={x.title} />
      <div className="pg-faq">{x.items.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
    </section>
  )
}

function Contact({ x }) {
  const { s, wa } = use()
  return (
    <section id="contact" aria-labelledby="contact-h" className="pg-sect pg-dark">
      <div className="pg-two">
        <div>
          <h2 id="contact-h" className="pg-h2 rv">{x.title}</h2>
          <ul className="pg-contact">
            {s.phone && <li><a href={`tel:+${digits(s.phone)}`}>{s.phone}</a></li>}
            {wa && <li><a href={wa} target="_blank" rel="noreferrer">WhatsApp</a></li>}
            <li><a href={`mailto:${s.email}`}>{s.email}</a></li>
            <li dangerouslySetInnerHTML={{ __html: s.address }} />
          </ul>
          {s.hours && <dl className="pg-ledger">{s.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl>}
        </div>
        <div className="pg-panel"><Lead subject={`Enquiry for ${s.name}`} button={wa ? 'Send on WhatsApp' : 'Send'} fields={['name', 'phone', 'email', 'note']} /></div>
      </div>
    </section>
  )
}

function Footer() {
  const { s } = use()
  return (
    <footer className="pg-foot">
      <b className="pg-foot-mark">{s.short}</b>
      <div><span>© 2026 {s.name}</span><span>Concept design. Listings and figures are samples.</span></div>
    </footer>
  )
}

// Phones get the two actions that make money one thumb away.
function MobileBar() {
  const { s, wa } = use()
  return (
    <div className="pg-bar">
      <a href={`tel:+${digits(s.phone)}`}>Call</a>
      {wa ? <a href={wa} target="_blank" rel="noreferrer">WhatsApp</a> : <a href={`mailto:${s.email}`}>Email</a>}
      <a className="is-main" href="#contact">{s.cta}</a>
    </div>
  )
}

function useReveal() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const els = [...document.querySelectorAll('.rv:not(.in):not(.pre)')]
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { rootMargin: '0px 0px -8% 0px' })
    els.forEach(el => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('in'); else { el.classList.add('pre'); io.observe(el) } })
    return () => io.disconnect()
  })
}

const kinds = { listings: Listings, valuation: Valuation, owners: Owners, mortgage: Mortgage, plan: Plan, areas: Areas, buildings: Buildings, proof: Proof, services: Services, steps: Steps, person: Person, faq: Faq, contact: Contact }
