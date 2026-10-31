import { Link } from 'react-router-dom'
import { heroImg } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="hero-frame">
        <img src={heroImg} alt="Modern timber and glass home under a gum tree at dusk" fetchpriority="high" />
        <div className="hero-shade" aria-hidden="true" />
        <p className="hero-word" aria-hidden="true">Boutique</p>
        <div className="hero-side">
          <h1 id="hero-h" className="hero-h">Fewer homes. Sold personally.</h1>
          <p>Drew Buchanan takes on a handful of homes at a time in Tarrytown, Rollingwood and central Austin, and handles each one himself.</p>
          <Link className="pill pill-light" to="/#homes">See the homes</Link>
        </div>
      </div>
    </section>
  )
}
