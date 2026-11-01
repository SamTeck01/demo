import { Link } from 'react-router-dom'
import { heroImg } from '../data/site.js'

const figs = [['2001', 'Founded in Doha'], ['4', 'Districts we cover'], ['Sale', 'and lease, one office']]

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <img className="hero-img" src={heroImg} alt="White villa with a pool at dusk" fetchpriority="high" />
      <div className="hero-shade" aria-hidden="true" />
      <h1 id="hero-h" className="hero-h">Homes in Doha, <em>handled with care</em></h1>
      <div className="hero-foot">
        <dl className="figs">{figs.map(([n, l]) => <div key={l}><dt>{l}</dt><dd>{n}</dd></div>)}</dl>
        <div className="hero-act">
          <p>For more than twenty years Wabrah has helped families and investors buy, sell and lease in The Pearl, Lusail, West Bay and Al Waab.</p>
          <Link className="btn" to="/#homes">Explore properties <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  )
}
