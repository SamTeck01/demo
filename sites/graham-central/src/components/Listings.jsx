import { Link, useSearchParams } from 'react-router-dom'
import { homes, areaName } from '../data/site.js'
import { money } from '../lib.js'

export default function Listings() {
  const [q] = useSearchParams()
  const area = q.get('area'), deal = q.get('deal'), type = q.get('type'), beds = +q.get('beds') || 0
  const shown = homes.filter(h => (!area || h.area === area) && (!deal || (deal === 'lease') === h.lease) && (!type || h.type === type) && h.beds >= beds)
  return (
    <section id="listings" className="listings wrap" aria-labelledby="list-h">
      <div className="list-head">
        <h2 id="list-h" className="title" data-rv>{deal === 'lease' ? 'For lease' : deal === 'buy' ? 'For sale' : 'Listings'}</h2>
        <p aria-live="polite">{shown.length} {shown.length === 1 ? 'home' : 'homes'}{area ? ` in ${areaName(area)}` : ''} · <Link to="/#listings">Clear</Link></p>
      </div>
      {shown.length ? (
        <div className="grid">
          {shown.map(h => (
            <Link key={h.id} to={`/home/${h.id}`} className="card" data-rv>
              <span className="card-img"><img src={h.imgs[0]} alt="" loading="lazy" />{h.status && <span className="tag">{h.status}</span>}</span>
              <span className="card-title">{h.title}</span>
              <span className="card-price">{money(h.price)}{h.lease ? ' a month' : ''}</span>
              <span className="card-meta">{areaName(h.area)} · {h.beds} bed · {h.baths} bath · {h.sqft.toLocaleString('en-US')} sq ft</span>
            </Link>
          ))}
        </div>
      ) : <div className="empty"><p>Nothing matches that search. New homes and leases come in every week.</p><Link className="btn btn-black" to="/#contact">Tell us what you need</Link></div>}
    </section>
  )
}
