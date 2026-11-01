import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { areas, homes, areaName } from '../data/site.js'
import { money } from '../lib.js'

export default function Homes() {
  const [q] = useSearchParams()
  const go = useNavigate()
  const a = q.get('area') || ''
  const shown = homes.filter(h => !a || h.area === a)
  return (
    <section id="homes" className="homes wrap" aria-labelledby="homes-h">
      <div className="homes-head">
        <h2 id="homes-h" className="title" data-rv>Homes for sale</h2>
        <div className="chips" role="group" aria-label="Neighbourhood">
          <button type="button" aria-pressed={!a} onClick={() => go('/#homes', { replace: true })}>All</button>
          {areas.map(x => <button key={x.id} type="button" aria-pressed={a === x.id} onClick={() => go(`/?area=${x.id}#homes`, { replace: true })}>{x.name}</button>)}
        </div>
      </div>
      <div className="grid">
        {shown.map(h => (
          <Link key={h.id} to={`/home/${h.id}`} className="card" data-rv>
            <span className="card-img"><img src={h.imgs[0]} alt="" loading="lazy" />{h.status && <span className="tag">{h.status}</span>}</span>
            <span className="card-title">{h.title}</span>
            <span className="card-row"><span>{areaName(h.area)} · {h.beds} bed · {h.sqft.toLocaleString('en-US')} sq ft</span><b>{money(h.price)}</b></span>
          </Link>
        ))}
      </div>
    </section>
  )
}
