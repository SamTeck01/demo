import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import HomeCard from './HomeCard.jsx'
import { habitats, homes, habitatName } from '../data/site.js'

const caps = [['', 'Any price'], ['450000', 'Under $450k'], ['650000', 'Under $650k'], ['900000', 'Under $900k'], ['1500000', 'Under $1.5M']]
const bedsOpt = [['', 'Any beds'], ['2', '2+ beds'], ['3', '3+ beds'], ['4', '4+ beds']]

// Filters live in the address bar so a search can be texted to a partner.
export default function Homes() {
  const [q] = useSearchParams()
  const go = useNavigate()
  const hab = q.get('habitat') || '', max = q.get('max') || '', beds = q.get('beds') || ''
  const set = (k, v) => { const p = new URLSearchParams(q); v ? p.set(k, v) : p.delete(k); go(`/?${p}#homes`, { replace: true }) }
  const shown = homes.filter(h => (!hab || h.habitat === hab) && (!max || h.price <= +max) && (!beds || h.beds >= +beds))
  return (
    <section id="homes" className="homes wrap" aria-labelledby="homes-h">
      <div className="homes-head">
        <h2 id="homes-h" className="title" data-rv>{hab ? `Homes in ${habitatName(hab)}` : 'Homes we’re showing now'}</h2>
        <p className="homes-count" aria-live="polite">{shown.length} of {homes.length} homes</p>
      </div>
      <div className="filters" role="group" aria-label="Filter homes">
        <div className="chips" role="group" aria-label="Neighbourhood">
          <button type="button" aria-pressed={!hab} onClick={() => set('habitat', '')}>All Austin</button>
          {habitats.map(x => <button key={x.id} type="button" aria-pressed={hab === x.id} onClick={() => set('habitat', x.id)}>{x.name}</button>)}
        </div>
        <div className="selects">
          <label><span className="sr">Price</span><select value={max} onChange={e => set('max', e.target.value)}>{caps.map(([v, t]) => <option key={v} value={v}>{t}</option>)}</select></label>
          <label><span className="sr">Bedrooms</span><select value={beds} onChange={e => set('beds', e.target.value)}>{bedsOpt.map(([v, t]) => <option key={v} value={v}>{t}</option>)}</select></label>
        </div>
      </div>
      {shown.length ? <div className="cards">{shown.map(h => <HomeCard key={h.id} h={h} />)}</div> : (
        <div className="empty"><p>Nothing matches yet. Our agents see homes before they list; tell us what you are hunting for.</p><div className="empty-act"><Link className="btn btn-ink" to="/#homes">Show all homes</Link><Link className="btn btn-line" to="/#visit">Tell an agent</Link></div></div>
      )}
    </section>
  )
}
