import { Link } from 'react-router-dom'
import { heroImg } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="hero-frame">
        <img src={heroImg} alt="White apartment building against a blue sky" fetchpriority="high" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <h1 id="hero-h" className="hero-h">Your building, managed.</h1>
          <p>Taskeen collects the rent, fixes what breaks and reports every month. Owners across Kuwait watch it all in one app.</p>
        </div>
        <Link className="hero-arrow" to="/#app" aria-label="See the owner app"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path d="M12 5v14m-6-6 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg></Link>
      </div>
    </section>
  )
}
