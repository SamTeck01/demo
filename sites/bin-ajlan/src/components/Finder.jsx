import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { office, spaces, types } from '../data/site.js'
import { mail, money } from '../lib.js'

// Businesses ask three things: what type, how big, where. The rent follows.
export default function Finder() {
  const [type, setType] = useState('warehouse')
  const t = types.find(x => x.id === type)
  const areas = Object.keys(t.rate)
  const [area, setArea] = useState(areas[0])
  const [size, setSize] = useState(t.start)
  const s = useId(), a = useId()
  const pick = id => { const n = types.find(x => x.id === id); setType(id); setArea(Object.keys(n.rate)[0]); setSize(n.start) }
  const rate = t.rate[area] ?? t.rate[Object.keys(t.rate)[0]]
  const rent = size * rate
  const matches = spaces.filter(x => x.type === type && x.lease)
  const href = mail(office.email, `Shortlist request: ${t.name}`, [`Type: ${t.name}`, `Size: about ${size} ${t.unit}`, `Area: ${area}`, `Budget: about ${money(rent)} a month`])
  return (
    <section id="finder" className="finder wrap" aria-labelledby="finder-h">
      <h2 id="finder-h" className="title" data-rv>What space do you need?</h2>
      <div className="finder-grid">
        <div className="finder-in">
          <div className="tiles" role="group" aria-label="Type of space">{types.map(x => <button key={x.id} type="button" aria-pressed={type === x.id} onClick={() => pick(x.id)}><img src={x.img} alt="" /><span>{x.name}</span></button>)}</div>
          <div className="range"><label htmlFor={s}>Size</label><output htmlFor={s}>{size.toLocaleString('en-US')} {t.unit}</output><input id={s} type="range" min={t.min} max={t.max} step={t.step} value={size} onChange={e => setSize(+e.target.value)} /></div>
          <label className="field" htmlFor={a}><span>Area</span><select id={a} value={area} onChange={e => setArea(e.target.value)}>{areas.map(x => <option key={x}>{x}</option>)}</select></label>
        </div>
        <div className="finder-out" aria-live="polite">
          <h3 className="out-h">Likely rent</h3>
          <p className="big">{money(rent)}<span>a month, at about {money(rate)} per {t.unit}</span></p>
          <p>{matches.length ? <>{matches.length} {t.name.toLowerCase()} {matches.length === 1 ? 'space' : 'spaces'} to lease now. <Link to={`/?type=${type}#stock`}>See them</Link></> : 'Nothing listed today; we often have off-market space.'}</p>
          <a className="pill pill-orange" href={href}>Send me a shortlist</a>
          <p className="fine">Sample asking rents. Your shortlist uses live availability.</p>
        </div>
      </div>
    </section>
  )
}
