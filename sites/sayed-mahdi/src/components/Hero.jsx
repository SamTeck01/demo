import { Link } from 'react-router-dom'
import { img } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="hero-frame">
        <img src={img.hero} alt="Modern Bahraini home with a timber-clad upper floor under a large tree" fetchpriority="high" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <h1 id="hero-h" className="hero-h">Advice for better property decisions</h1>
          <p>Sale, valuation and development across Bahrain, from a family firm whose name Bahrainis have known for generations.</p>
          <Link className="pill pill-light" to="/#value">What is my property worth?</Link>
        </div>
      </div>
    </section>
  )
}
