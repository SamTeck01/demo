import { Link } from 'react-router-dom'
import { areas } from '../data/site.js'
import { money } from '../lib.js'

export default function Areas() {
  return (
    <section id="areas" className="areas wrap" aria-labelledby="areas-h">
      <h2 id="areas-h" className="title" data-rv>Where we buy and sell</h2>
      <div className="area-list">
        {areas.map(a => (
          <Link key={a.id} to={`/?area=${a.id}#homes`} className="area" data-rv>
            <img src={a.img} alt="" loading="lazy" />
            <span className="area-body">
              <span className="area-name">{a.name}</span>
              <span className="area-line">{a.line}</span>
              <span className="area-facts"><span>{money(a.median)} median</span><span>{money(a.rent)} typical rent</span><span>{a.kind}</span></span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
