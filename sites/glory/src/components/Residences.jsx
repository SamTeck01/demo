import { Link } from 'react-router-dom'
import { residences } from '../data/site.js'
import { money } from '../lib.js'

export default function Residences() {
  return (
    <section id="residences" className="res wrap" aria-labelledby="res-h">
      <h2 id="res-h" className="title" data-rv>Choose your residence</h2>
      <div className="res-grid">
        {residences.map(r => (
          <Link key={r.id} to={`/residence/${r.id}`} className="res-card" data-rv>
            <span className="res-img"><img src={r.imgs[0]} alt="" loading="lazy" />{r.tag && <span className="tag">{r.tag}</span>}</span>
            <span className="res-name">{r.name}</span>
            <span className="res-meta">{r.size} m² · {r.beds ? `${r.beds} bed` : 'Studio'} · {r.baths} bath</span>
            <span className="res-price">{money(r.price)} <small>or {money(r.price * 0.8 / 60)} a month</small></span>
          </Link>
        ))}
      </div>
    </section>
  )
}
