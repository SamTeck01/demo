import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { homes, districtName } from '../data/site.js'
import { money } from '../lib.js'

export default function Homes() {
  const [q] = useSearchParams()
  const go = useNavigate()
  const deal = q.get('deal') === 'lease' ? 'lease' : q.get('deal') === 'buy' ? 'buy' : ''
  const d = q.get('district') || ''
  const set = v => { const p = new URLSearchParams(q); v ? p.set('deal', v) : p.delete('deal'); go(`/?${p}#homes`, { replace: true }) }
  const shown = homes.filter(h => (!deal || h.lease === (deal === 'lease')) && (!d || h.district === d))
  return (
    <section id="homes" className="homes wrap" aria-labelledby="homes-h">
      <div className="homes-head">
        <h2 id="homes-h" className="title" data-rv>Featured homes{d ? ` in ${districtName(d)}` : ''}</h2>
        <div className="homes-side">
          <p>Every home visited by our agents before it appears here.</p>
          <div className="seg" role="group" aria-label="Buy or lease">
            {[['', 'All'], ['buy', 'Buy'], ['lease', 'Lease']].map(([k, t]) => <button key={k} type="button" aria-pressed={deal === k} onClick={() => set(k)}>{t}</button>)}
          </div>
        </div>
      </div>
      <div className="cards">
        {shown.map(h => (
          <Link key={h.id} to={`/home/${h.id}`} className="card" data-rv>
            <img src={h.imgs[0]} alt="" loading="lazy" />
            <span className="card-txt">
              <span className="card-row"><span className="card-title">{h.title}</span><b>{money(h.price)}{h.lease ? '/mo' : ''}</b></span>
              <span className="card-meta">{h.beds} bed · {h.baths} bath · {h.size} m² · {districtName(h.district)}</span>
            </span>
          </Link>
        ))}
      </div>
      {!shown.length && <p className="empty">Nothing here right now. <Link to="/#contact">Tell us what you need</Link> and we will look.</p>}
    </section>
  )
}
