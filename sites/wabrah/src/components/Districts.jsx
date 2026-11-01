import { Link } from 'react-router-dom'
import { districts } from '../data/site.js'

export default function Districts() {
  return (
    <section id="districts" className="dist wrap" aria-labelledby="dist-h">
      <h2 id="dist-h" className="title" data-rv>Four districts we know by the street</h2>
      <div className="dist-grid">
        {districts.map(d => (
          <Link key={d.id} to={`/?district=${d.id}#homes`} className="dist-card" data-rv>
            <img src={d.img} alt="" loading="lazy" />
            <span className="dist-txt"><span className="dist-name">{d.name}</span><span>{d.feel} · {d.own}</span><span>{d.drive}</span><span>{d.rent}</span></span>
          </Link>
        ))}
      </div>
    </section>
  )
}
