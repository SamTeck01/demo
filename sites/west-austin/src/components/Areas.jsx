import { Link } from 'react-router-dom'
import { areas, homes } from '../data/site.js'
import { money } from '../lib.js'

export default function Areas() {
  return (
    <section id="areas" className="areas wrap" aria-labelledby="areas-h">
      <h2 id="areas-h" className="title" data-rv>Five neighbourhoods, nothing else</h2>
      <ul className="area-list">
        {areas.map(a => {
          const n = homes.filter(h => h.area === a.id).length
          return (
            <li key={a.id} data-rv>
              <Link to={`/?area=${a.id}#homes`} className="area">
                <img src={a.img} alt="" loading="lazy" />
                <span className="area-name">{a.name}</span>
                <span className="area-note">{a.note}</span>
                <span className="area-facts"><span>Median {money(a.median)}</span><span>{a.school}</span><span>{n} {n === 1 ? 'home' : 'homes'} now</span></span>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
