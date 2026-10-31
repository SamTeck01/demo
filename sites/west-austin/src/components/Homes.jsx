import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Chev } from './Nav.jsx'
import { areas, homes, areaName } from '../data/site.js'
import { money } from '../lib.js'

// Few homes, shown large: an editorial list, not a grid of thumbnails.
export default function Homes() {
  const [q] = useSearchParams()
  const go = useNavigate()
  const a = q.get('area') || ''
  const shown = homes.filter(h => !a || h.area === a)
  return (
    <section id="homes" className="homes wrap" aria-labelledby="homes-h">
      <div className="homes-head">
        <h2 id="homes-h" className="title" data-rv>Current homes</h2>
        <div className="chips" role="group" aria-label="Neighbourhood">
          <button type="button" aria-pressed={!a} onClick={() => go('/#homes', { replace: true })}>All</button>
          {areas.map(x => <button key={x.id} type="button" aria-pressed={a === x.id} onClick={() => go(`/?area=${x.id}#homes`, { replace: true })}>{x.name}</button>)}
        </div>
      </div>
      <div className="list">
        {shown.map(h => (
          <article key={h.id} className="row" data-rv>
            <Link to={`/home/${h.id}`} className="row-img" aria-label={h.title}><img src={h.imgs[0]} alt="" loading="lazy" />{h.status && <span className="tag">{h.status}</span>}</Link>
            <div className="row-text">
              <h3 className="row-title"><Link to={`/home/${h.id}`}>{h.title}</Link></h3>
              <p className="row-price">{money(h.price)}</p>
              <p className="row-meta">{areaName(h.area)} · {h.beds} bedrooms · {h.baths} baths · {h.sqft.toLocaleString('en-US')} sq ft · built {h.year}</p>
              <p className="row-desc">{h.text}</p>
              <span className="pair"><Link className="sq-btn" to={`/home/${h.id}`}>See the home</Link><Link className="sq-btn sq-icon" to={`/home/${h.id}`} aria-label={`See ${h.title}`}><Chev /></Link></span>
            </div>
          </article>
        ))}
      </div>
      <p className="homes-note">Some of our homes are never advertised. <Link className="ul-link" to="/#contact">Ask to see the private list</Link></p>
    </section>
  )
}
