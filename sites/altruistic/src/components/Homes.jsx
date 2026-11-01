import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import HomeCard from './HomeCard.jsx'
import { areas, homes, types, areaName } from '../data/site.js'

const caps = [['', 'Any price'], ['500000', 'Under $500k'], ['800000', 'Under $800k'], ['1200000', 'Under $1.2M']]

// Filters live in the address bar so a search can be sent on WhatsApp.
export default function Homes() {
  const [q] = useSearchParams()
  const go = useNavigate()
  const area = q.get('area') || '', type = q.get('type') || '', max = q.get('max') || ''
  const set = (k, v) => { const p = new URLSearchParams(q); v ? p.set(k, v) : p.delete(k); go(`/?${p}#homes`, { replace: true }) }
  const shown = homes.filter(h => (!area || h.area === area) && (!type || h.type === type) && (!max || h.price <= +max))
  return (
    <section id="homes" className="homes wrap" aria-labelledby="homes-h">
      <div className="homes-head">
        <h2 id="homes-h" className="title" data-rv>{area ? `For sale in ${areaName(area)}` : 'For sale now'}</h2>
        <p className="homes-count" aria-live="polite">{shown.length} of {homes.length} properties</p>
      </div>
      <div className="filters" role="group" aria-label="Filter homes">
        <div className="chips" role="group" aria-label="Type">
          <button type="button" aria-pressed={!type} onClick={() => set('type', '')}>All</button>
          {types.map(([v, t]) => <button key={v} type="button" aria-pressed={type === v} onClick={() => set('type', v)}>{t}</button>)}
        </div>
        <div className="selects">
          <label><span className="sr">Area</span><select value={area} onChange={e => set('area', e.target.value)}><option value="">All areas</option>{areas.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}</select></label>
          <label><span className="sr">Price</span><select value={max} onChange={e => set('max', e.target.value)}>{caps.map(([v, t]) => <option key={v} value={v}>{t}</option>)}</select></label>
        </div>
      </div>
      {shown.length ? <div className="cards">{shown.map(h => <HomeCard key={h.id} h={h} />)}</div> : (
        <div className="empty"><p>Nothing matches yet. Maria Teresa hears about homes before they list; tell her what you need.</p><div className="empty-act"><Link className="btn btn-ink" to="/#homes">Show all</Link><Link className="btn btn-line" to="/#contact">Tell Maria Teresa</Link></div></div>
      )}
    </section>
  )
}
