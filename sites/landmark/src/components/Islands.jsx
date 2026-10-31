import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Arrow } from './Nav.jsx'
import { homes, islands } from '../data/site.js'
import { money } from '../lib.js'

export default function Islands() {
  const [id, setId] = useState(islands[0].id)
  const isle = islands.find(i => i.id === id)
  const count = homes.filter(h => h.island === id).length
  return (
    <section id="islands" className="isles" aria-labelledby="isles-h">
      <div className="wrap isles-in">
        <div className="isles-pick">
          <h2 id="isles-h" className="title" data-rv>Four islands, four ways to live</h2>
          <div className="isles-tabs" role="tablist" aria-label="Islands">
            {islands.map(i => (
              <button key={i.id} type="button" role="tab" aria-selected={i.id === id} aria-controls="isle-panel" onClick={() => setId(i.id)}>
                <span>{i.name}</span><span className="isles-from">from {money(i.from)}</span>
              </button>
            ))}
          </div>
        </div>
        <div id="isle-panel" className="isles-panel" role="tabpanel" aria-label={isle.name}>
          <div className="isles-photo" key={isle.id}><img src={isle.img} alt={`Homes on ${isle.name}`} loading="lazy" /></div>
          <div className="isles-facts">
            <p className="isles-line">{isle.line}</p>
            <dl>
              <div><dt>Homes from</dt><dd>{money(isle.from)}</dd></div>
              <div><dt>Best for</dt><dd>{isle.best}</dd></div>
              <div><dt>Getting about</dt><dd>{isle.drive}</dd></div>
              <div><dt>Typical gross yield</dt><dd>{isle.yield}</dd></div>
            </dl>
            <Link className="btn btn-ink" to={`/?island=${isle.id}#homes`}>See {count} {count === 1 ? 'home' : 'homes'} on {isle.name} <Arrow /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
