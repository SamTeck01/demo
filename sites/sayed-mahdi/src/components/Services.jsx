import { Link } from 'react-router-dom'
import { img } from '../data/site.js'

const svc = [
  ['Sale', 'Villas, land and homes across the Kingdom, priced on real comparables and sold to the buyers who fit.', img.saar, '/#properties'],
  ['Valuation', 'Formal reports for banks, inheritance, partnership and court, signed by a licensed valuer.', img.plot, '/#value'],
  ['Development', 'Housing schemes from plot to handover, sold with instalments families can manage.', img.garden, '/#development'],
]

export default function Services() {
  return (
    <section id="services" className="svc wrap" aria-labelledby="svc-h">
      <div className="svc-intro">
        <h2 id="svc-h" className="title" data-rv>Three things we do well</h2>
        <p className="lede" data-rv>We simplify the decision: what the property is worth, who it suits, and what it could become.</p>
      </div>
      <div className="svc-cards">
        {svc.map(([t, d, pic, to]) => (
          <Link key={t} to={to} className="svc-card" data-rv>
            <span className="half"><img src={pic} alt="" loading="lazy" /></span>
            <span className="svc-name">{t}</span>
            <span className="svc-text">{d}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
