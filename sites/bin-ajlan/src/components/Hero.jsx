import { Link } from 'react-router-dom'
import { heroImgs } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="hero-field" aria-hidden="true" />
      <div className="hero-pics">
        <img src={heroImgs[0]} alt="Warehouse aisles stacked with goods" fetchpriority="high" />
        <img src={heroImgs[1]} alt="White villa with a pool" />
      </div>
      <h1 id="hero-h" className="hero-h">Space for business in Doha</h1>
      <div className="hero-foot">
        <p>Warehouses, showrooms, shops and villas, leased, sold, managed and valued by a licensed Qatari brokerage since 2008.</p>
        <Link className="pill pill-white pill-big" to="/#finder">Find space <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  )
}
