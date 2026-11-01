import { Link } from 'react-router-dom'
import { props } from '../data/site.js'
import { money } from '../lib.js'

export default function Props() {
  return (
    <section id="properties" className="props wrap" aria-labelledby="props-h">
      <h2 id="props-h" className="title" data-rv>Villas, plots and new homes</h2>
      <div className="grid">
        {props.map(x => (
          <Link key={x.id} to={`/property/${x.id}`} className="card" data-rv>
            <span className="card-img"><img src={x.imgs[0]} alt="" loading="lazy" />{x.tag && <span className="tag">{x.tag}</span>}</span>
            <span className="card-row"><span className="card-title">{x.title}</span><b>{money(x.price)}</b></span>
            <span className="card-meta">{x.kind} · {x.area} · {x.size}{x.beds ? ` · ${x.beds} bed` : ''}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
