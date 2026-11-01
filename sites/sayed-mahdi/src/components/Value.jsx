import { useId, useState } from 'react'
import { kinds, office } from '../data/site.js'
import { mail, money } from '../lib.js'

// An indicative range in seconds; the formal valuation is the paid service it leads to.
export default function Value() {
  const [k, setK] = useState('villa')
  const kind = kinds.find(x => x.id === k)
  const areas = Object.keys(kind.rates)
  const [area, setArea] = useState(areas[0])
  const [size, setSize] = useState(kind.start)
  const [sent, setSent] = useState(false)
  const a = useId(), s = useId(), n = useId(), p = useId()
  const pick = id => { const x = kinds.find(y => y.id === id); setK(id); setArea(Object.keys(x.rates)[0]); setSize(x.start) }
  const r = kind.rates[area] ?? Object.values(kind.rates)[0]
  const lo = Math.round(size * r * 0.92 / 1000) * 1000, hi = Math.round(size * r * 1.08 / 1000) * 1000
  const submit = e => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    location.href = mail(office.email, 'Formal valuation request', [`Property: ${kind.name}, ${area}, ${size} ${kind.unit}`, `Indicative range: ${money(lo)} to ${money(hi)}`, `Name: ${f.get('name')}`, `Phone: ${f.get('phone')}`])
    setSent(true)
  }
  return (
    <section id="value" className="value" aria-labelledby="value-h">
      <div className="wrap value-in">
        <div>
          <h2 id="value-h" className="title" data-rv>What is it worth today?</h2>
          <div className="seg" role="group" aria-label="Property type">{kinds.map(x => <button key={x.id} type="button" aria-pressed={k === x.id} onClick={() => pick(x.id)}>{x.name}</button>)}</div>
          <label className="field" htmlFor={a}><span>Area</span><select id={a} value={area} onChange={e => setArea(e.target.value)}>{areas.map(x => <option key={x}>{x}</option>)}</select></label>
          <div className="range"><label htmlFor={s}>Size</label><output htmlFor={s}>{size.toLocaleString('en-US')} {kind.unit}</output><input id={s} type="range" min={kind.min} max={kind.max} step="10" value={size} onChange={e => setSize(+e.target.value)} /></div>
        </div>
        <div className="value-out" aria-live="polite">
          <p className="big">{money(lo)} – {money(hi)}</p>
          <p className="big-l">Indicative range today</p>
          {sent ? <p className="sent" role="status">Your email is ready to send. We call to book the site visit.</p> : (
            <form className="form" onSubmit={submit}>
              <label htmlFor={n}>Your name</label><input id={n} name="name" autoComplete="name" required />
              <label htmlFor={p}>Phone</label><input id={p} name="phone" type="tel" autoComplete="tel" required />
              <button className="pill pill-light" type="submit">Book a formal valuation</button>
            </form>
          )}
          <p className="fine">Sample rates per m². A formal valuation follows a site visit and uses recent registered sales.</p>
        </div>
      </div>
    </section>
  )
}
