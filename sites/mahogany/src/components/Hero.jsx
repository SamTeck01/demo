import { Link } from 'react-router-dom'
import { heroImg } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="hero-frame">
        <img src={heroImg} alt="Living room with a walnut-panelled wall and a long sofa" fetchpriority="high" />
        <div className="hero-shade" aria-hidden="true" />
        <h1 id="hero-h" className="hero-h">231 homes sold</h1>
        <div className="hero-side">
          <p className="hero-it">Yours could be next.</p>
          <p>Angellet Minard has helped Atlanta families buy and sell for 21 years, from her office on Court Square in Decatur.</p>
          <Link className="pill" to="/#doors">What’s my home worth?</Link>
        </div>
      </div>
    </section>
  )
}
