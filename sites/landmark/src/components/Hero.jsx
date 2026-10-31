import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Arrow } from './Nav.jsx'
import { heroImg, homes, islandName } from '../data/site.js'
import { priceLabel } from '../lib.js'

const featured = homes.filter(h => ['amwaj-lagoon-villa', 'reef-harbour-penthouse', 'bay-waterfront-duplex'].includes(h.id))

export default function Hero() {
  const [i, setI] = useState(0)
  const h = featured[i]
  // The card turns on its own unless the visitor prefers stillness.
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setI(n => (n + 1) % featured.length), 6000)
    return () => clearTimeout(t)
  }, [i])
  return (
    <section className="hero" aria-labelledby="hero-h">
      <img className="hero-img" src={heroImg} alt="White villa with a long pool at a Bahrain island resort" fetchpriority="high" />
      <div className="hero-veil" aria-hidden="true" />
      <div className="hero-copy wrap">
        <h1 id="hero-h" className="display">Freehold island homes in Bahrain</h1>
        <p className="hero-lede">Villas and apartments on Reef Island, Amwaj, Bahrain Bay and Juffair, sold, let and looked after by people who live here.</p>
        <Link to="/#homes" className="btn btn-bronze btn-lg">Explore properties <Arrow /></Link>
      </div>
      <aside className="hero-card" aria-label="Featured home" aria-live="polite">
        <div className="hero-card-in" key={h.id}>
          <h2 className="hero-card-title">{h.title}</h2>
          <p className="hero-card-price">{priceLabel(h)}</p>
          <p className="hero-card-meta">{h.beds} bed · {h.baths} bath · {h.size} m² · {islandName(h.island)}</p>
        </div>
        <div className="hero-card-ctl">
          <Link className="round" to={`/property/${h.id}`} aria-label={`View ${h.title}`}><Arrow /></Link>
          <button type="button" className="round round-ghost" onClick={() => setI((i + 1) % featured.length)} aria-label="Next featured home">
            <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="m8 5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>
        </div>
      </aside>
      <p className="hero-place"><svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M10 18s6-5.2 6-10a6 6 0 0 0-12 0c0 4.8 6 10 6 10z" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="10" cy="8" r="2" fill="currentColor" /></svg>Kingdom of Bahrain</p>
    </section>
  )
}
