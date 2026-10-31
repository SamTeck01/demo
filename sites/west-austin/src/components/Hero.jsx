import { Link } from 'react-router-dom'
import { Chev } from './Nav.jsx'
import { heroImg } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="hero-frame">
        <img src={heroImg} alt="Timber and stone home lit at dusk among trees" fetchpriority="high" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <h1 id="hero-h" className="hero-h">West of MoPac, since 1979</h1>
          <p className="hero-lede">Laura Duggan has sold homes in Tarrytown, Westlake and Rollingwood for 45 years. Today her daughter Katy sells beside her.</p>
          <div className="hero-act">
            <span className="pair"><Link className="sq-btn sq-light" to="/#homes">View current homes</Link><Link className="sq-btn sq-light sq-icon" to="/#homes" aria-label="View current homes"><Chev /></Link></span>
            <Link className="ul-link" to="/#contact">Book a private tour</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
