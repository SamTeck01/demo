import { Link } from 'react-router-dom'
import { homes } from '../data/site.js'
import { money } from '../lib.js'

// One home shown as large as the screen allows, as in a shop window.
export default function Featured() {
  const h = homes[0]
  return (
    <section id="homes" className="bento wrap" aria-labelledby="feat-h">
      <Link to={`/home/${h.id}`} className="tile tile-photo tile-wide" data-rv aria-label={h.title}><img src={h.imgs[0]} alt="" loading="lazy" /><span className="tag">{h.status}</span></Link>
      <div className="tile tile-figure" data-rv>
        <p className="big">{(h.sqft / 1000).toFixed(1)}k</p>
        <p>square feet on Rollingwood Drive, with a guest house and a pool.</p>
      </div>
      <div className="tile tile-text" data-rv>
        <h2 id="feat-h" className="tile-h">{h.title}</h2>
        <p className="tile-price">{money(h.price)}</p>
        <p>{h.beds} bedrooms · {h.baths} baths · {h.area}</p>
        <p className="tile-desc">{h.text}</p>
        <Link className="pill pill-light" to={`/home/${h.id}`}>See the estate</Link>
      </div>
      <img className="tile tile-photo tile-tall" src={h.imgs[1]} alt="Living room of the Rollingwood estate" loading="lazy" data-rv />
    </section>
  )
}
