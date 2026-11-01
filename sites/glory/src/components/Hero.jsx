import { useState } from 'react'
import { Link } from 'react-router-dom'
import { heroImg } from '../data/site.js'

// Day or night on the island: the reference's atmosphere switch, kept.
export default function Hero() {
  const [night, setNight] = useState(false)
  return (
    <section className={'hero' + (night ? ' is-night' : '')} aria-labelledby="hero-h">
      <img className="hero-img" src={heroImg} alt="Calm sea and white sand at sunrise on the Bahrain coast" fetchpriority="high" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-copy">
        <h1 id="hero-h" className="hero-h">Island freehold from BHD 63,000</h1>
        <p className="hero-lede">Breeze of Dilmunia, Bahrain. Studios, apartments and beach townhouses with five years to pay at 0% interest. Every nationality may buy.</p>
        <div className="hero-act">
          <Link className="gold" to="/#plan">Plan my payments</Link>
          <Link className="line" to="/#residences">See the residences</Link>
        </div>
      </div>
      <div className="atmos" role="group" aria-label="Atmosphere">
        <button type="button" aria-pressed={!night} onClick={() => setNight(false)}>Day</button>
        <button type="button" aria-pressed={night} onClick={() => setNight(true)}>Night</button>
      </div>
    </section>
  )
}
