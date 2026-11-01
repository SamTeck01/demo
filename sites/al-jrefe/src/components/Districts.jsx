import { Link } from 'react-router-dom'
import { districts } from '../data/site.js'
import { money } from '../lib.js'

export default function Districts() {
  return (
    <section id="districts" className="dist" aria-labelledby="dist-h">
      <div className="wrap">
        <h2 id="dist-h" className="title" data-rv>Know the district before you buy</h2>
        <div className="dist-rail">
          {districts.map(d => (
            <Link key={d.id} to={`/?district=${d.id}#homes`} className="dist-card" data-rv>
              <img src={d.img} alt="" loading="lazy" />
              <span className="dist-name">{d.name}</span>
              <span className="dist-note">{d.note}</span>
              <span className="dist-meta">{d.id === 'olaya' ? 'Apartments' : 'Villas'} from {money(d.from)} · {d.kafd} min to KAFD</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
