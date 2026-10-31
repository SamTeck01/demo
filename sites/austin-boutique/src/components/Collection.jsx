import { Link } from 'react-router-dom'
import { homes } from '../data/site.js'
import { money } from '../lib.js'

export default function Collection() {
  const rest = homes.slice(1)
  return (
    <section className="coll wrap" aria-labelledby="coll-h">
      <h2 id="coll-h" className="title" data-rv>On the market now</h2>
      <div className="coll-grid">
        {rest.map((h, n) => (
          <Link key={h.id} to={`/home/${h.id}`} className={'coll-item' + (n === 0 ? ' is-big' : '')} data-rv>
            <span className="coll-img"><img src={h.imgs[0]} alt="" loading="lazy" />{h.status && <span className="tag">{h.status}</span>}</span>
            <span className="coll-row"><span className="coll-title">{h.title}</span><span className="coll-price">{money(h.price)}</span></span>
            <span className="coll-meta">{h.area} · {h.beds} bed · {h.sqft.toLocaleString('en-US')} sq ft</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
