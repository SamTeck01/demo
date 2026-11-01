import { Link } from 'react-router-dom'
import { heroImg } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <p className="hero-word" aria-hidden="true">Al Jrefe</p>
      <img className="hero-img" src={heroImg} alt="Modern white villa with a pool" fetchpriority="high" />
      <div className="hero-low">
        <h1 id="hero-h" className="hero-h">Villas and land where Riyadh is growing</h1>
        <p>Al Malqa, Hittin, Al Narjis, Al Yasmin and Olaya. Our office answers until ten at night.</p>
        <Link className="white-btn" to="/#homes">See the homes <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  )
}
