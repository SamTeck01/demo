import { Link } from 'react-router-dom'
import { areas, homes } from '../data/site.js'

export default function Areas() {
  return (
    <section id="areas" className="areas wrap" aria-labelledby="areas-h">
      <h2 id="areas-h" className="title" data-rv>Four places by the water</h2>
      <ul className="area-list">
        {areas.map(a => {
          const n = homes.filter(h => h.area === a.id).length
          return <li key={a.id} data-rv><Link to={`/?area=${a.id}#homes`}><span className="area-name">{a.name}</span><span className="area-note">{a.note}</span><span className="area-meta">{a.rent} · {n} {n === 1 ? 'home' : 'homes'}</span></Link></li>
        })}
      </ul>
    </section>
  )
}
