import { Link } from 'react-router-dom'
import { heroImg } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="hero-top">
        <h1 id="hero-h" className="hero-word">Altruistic</h1>
        <p className="hero-sub">Condos, homes and income property in South and Central Florida. In English or Spanish.</p>
      </div>
      <div className="hero-frame">
        <img className="hero-img" src={heroImg} alt="A modern white villa with a pool at dusk in South Florida" fetchpriority="high" />
        <p className="hero-tag"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" stroke="currentColor" stroke-width="1.4"/></svg>One broker from first showing to closing, and after</p>
        <div className="hero-stats">
          <div className="stat"><b>5.0</b><span>rating from every client review on Homes.com</span></div>
          <div className="stat stat-go"><b>16</b><span>homes sold, many to buyers who now rent them out</span><Link to="/#homes" aria-label="See homes for sale" className="stat-arrow">↘</Link></div>
        </div>
      </div>
    </section>
  )
}
