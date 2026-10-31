import { Link } from 'react-router-dom'
import { office } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <p className="foot-word" aria-hidden="true">Boutique</p>
        <div className="foot-cols">
          <nav aria-label="Footer"><Link to="/#homes">The homes</Link><Link to="/#plan">Launch plan</Link><Link to="/#drew">Drew</Link><Link to="/#contact">Contact</Link></nav>
          <p><a href={`tel:${office.tel}`}>{office.phone}</a> · {office.address.join(', ')}</p>
        </div>
        <div className="foot-small"><span>© 2026 Austin Boutique Realty</span><a href="https://www.trec.texas.gov/forms/information-about-brokerage-services" rel="noreferrer">Information about brokerage services</a><a href="https://www.trec.texas.gov/forms/consumer-protection-notice" rel="noreferrer">Consumer protection notice</a><span>Concept design. Listings are samples. Photographs: Unsplash.</span></div>
      </div>
    </footer>
  )
}
