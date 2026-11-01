import { useState } from 'react'
import { Link } from 'react-router-dom'
import { heroImg, towers } from '../data/site.js'
import { money } from '../lib.js'

const Arrow = ({ d }) => <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><path d={d} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>

// The black panel from the reference becomes a tower picker, measured in steps to the sand.
export default function Hero() {
  const [i, setI] = useState(0)
  const t = towers[i]
  const go = n => setI((i + n + towers.length) % towers.length)
  return (
    <section className="hero" aria-labelledby="hero-h">
      <img className="hero-img" src={heroImg} alt="Residential towers against a deep blue sky" fetchpriority="high" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-copy">
        <h1 id="hero-h" className="hero-h">Steps from the sand</h1>
        <p className="hero-lede">The independent office inside the Ocean Club on Key Biscayne. We sell and rent in every tower and villa, and can walk you there now.</p>
      </div>
      <aside className="picker" aria-label="Towers" aria-live="polite">
        <div className="picker-in" key={t.id}>
          <p className="picker-n">{t.steps} steps</p>
          <h2 className="picker-name">{t.name}</h2>
          <p className="picker-meta">Facing {t.faces} · {t.homes} · from {money(t.from)}</p>
        </div>
        <div className="picker-ctl">
          <button type="button" className="round" onClick={() => go(-1)} aria-label="Previous tower"><Arrow d="m12 5-5 5 5 5" /></button>
          <button type="button" className="round" onClick={() => go(1)} aria-label="Next tower"><Arrow d="m8 5 5 5-5 5" /></button>
          <Link className="picker-link" to={`/?tower=${t.id}#homes`}>Homes here</Link>
        </div>
      </aside>
    </section>
  )
}
