import { Link } from 'react-router-dom'
import { flats } from '../data/site.js'
import { money } from '../lib.js'

export default function Flats() {
  return (
    <section id="flats" className="flats wrap" aria-labelledby="flats-h">
      <h2 id="flats-h" className="title" data-rv>Flats for rent in our buildings</h2>
      <div className="grid">
        {flats.map(f => (
          <Link key={f.id} to={`/flat/${f.id}`} className="card" data-rv>
            <span className="card-img"><img src={f.imgs[0]} alt="" loading="lazy" />{f.status && <span className="tag">{f.status}</span>}</span>
            <span className="card-row"><span className="card-title">{f.title}</span><b>{money(f.rent)}/mo</b></span>
            <span className="card-meta">{f.beds} bed · {f.baths} bath · {f.size} m²</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
