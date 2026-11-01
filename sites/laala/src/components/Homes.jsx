import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { homes, areas, areaName } from '../data/site.js'
import { money } from '../lib.js'

export default function Homes() {
  const [q] = useSearchParams()
  const go = useNavigate()
  const deal = q.get('deal') || '', area = q.get('area') || ''
  const set = (k, v) => { const p = new URLSearchParams(q); v ? p.set(k, v) : p.delete(k); go(`/?${p}#homes`, { replace: true }) }
  const shown = homes.filter(h => (!deal || h.lease === (deal === 'lease')) && (!area || h.area === area))
  return (
    <section id="homes" className="homes wrap" aria-labelledby="homes-h">
      <h2 id="homes-h" className="title" data-rv>Our pearls</h2>
      <div className="filters">
        <div className="seg" role="group" aria-label="Buy or lease">{[['', 'All'], ['buy', 'Buy'], ['lease', 'Lease']].map(([k, t]) => <button key={k} type="button" aria-pressed={deal === k} onClick={() => set('deal', k)}>{t}</button>)}</div>
        <div className="seg" role="group" aria-label="Area"><button type="button" aria-pressed={!area} onClick={() => set('area', '')}>Everywhere</button>{areas.map(a => <button key={a.id} type="button" aria-pressed={area === a.id} onClick={() => set('area', a.id)}>{a.name}</button>)}</div>
      </div>
      <div className="grid">
        {shown.map(h => (
          <Link key={h.id} to={`/home/${h.id}`} className="card" data-rv>
            <span className="card-img"><img src={h.imgs[0]} alt="" loading="lazy" /></span>
            <span className="card-body">
              <span className="card-title">{h.title}</span>
              <span className="card-meta">{areaName(h.area)} · {h.beds} bed · {h.size} m²</span>
              <span className="card-price">{money(h.price)}{h.lease ? ' a month' : ''}</span>
            </span>
          </Link>
        ))}
      </div>
      {!shown.length && <p className="empty">Nothing in that view today. <Link to="/#contact">Ask Bader</Link>; many homes are offered privately first.</p>}
    </section>
  )
}
