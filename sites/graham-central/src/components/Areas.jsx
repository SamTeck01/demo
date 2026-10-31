import { Link } from 'react-router-dom'
import { areas, homes } from '../data/site.js'

export default function Areas() {
  return (
    <section id="areas" className="areas wrap" aria-labelledby="areas-h">
      <h2 id="areas-h" className="title" data-rv>Where we work</h2>
      <ul className="area-list">
        {areas.map(a => {
          const n = homes.filter(h => h.area === a.id).length
          return (
            <li key={a.id} data-rv>
              <Link to={`/?area=${a.id}#listings`} className="area">
                <span className="area-name">{a.name}</span>
                <span className="area-note">{a.note}</span>
                <span className="area-facts">{a.median} · {a.school} · {n} {n === 1 ? 'listing' : 'listings'}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
