import { useState } from 'react'
import { Link } from 'react-router-dom'
import { habitats, homes } from '../data/site.js'
import { money } from '../lib.js'

// A field guide entry per neighbourhood: what lives there, what it costs, how far it is.
export default function Guide() {
  const [id, setId] = useState(habitats[0].id)
  const h = habitats.find(x => x.id === id)
  const n = homes.filter(x => x.habitat === id).length
  return (
    <section id="guide" className="guide" aria-labelledby="guide-h">
      <div className="wrap">
        <div className="guide-head">
          <h2 id="guide-h" className="title" data-rv>A field guide to Austin</h2>
          <div className="tabs" role="tablist" aria-label="Neighbourhoods">
            {habitats.map(x => <button key={x.id} type="button" role="tab" aria-selected={x.id === id} aria-controls="entry" onClick={() => setId(x.id)}>{x.name}</button>)}
          </div>
        </div>
        <article id="entry" className="entry" role="tabpanel" aria-label={h.name} key={h.id}>
          <div className="entry-photo"><img src={h.img} alt={`A home in ${h.name}`} loading="lazy" /></div>
          <div className="entry-text">
            <h3 className="entry-name">{h.name}</h3>
            <p className="entry-line">{h.line}</p>
            <dl className="entry-facts">
              <div><dt>Median price</dt><dd>{money(h.median)}</dd></div>
              <div><dt>Typical homes</dt><dd>{h.homes}</dd></div>
              <div><dt>Schools</dt><dd>{h.school}</dd></div>
              <div><dt>Commute</dt><dd>{h.commute}</dd></div>
            </dl>
            <Link className="btn btn-cream" to={`/?habitat=${h.id}#homes`}>{n ? `See ${n} ${n === 1 ? 'home' : 'homes'} in ${h.name}` : `Ask about ${h.name}`}</Link>
          </div>
        </article>
      </div>
    </section>
  )
}
