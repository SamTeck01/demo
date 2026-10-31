import { Link } from 'react-router-dom'
import { office } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <p className="foot-word" aria-hidden="true">West Austin</p>
        <div className="foot-cols">
          <nav aria-label="Footer"><Link to="/#homes">Current homes</Link><Link to="/#sell">Selling</Link><Link to="/#family">The family</Link><Link to="/#areas">Neighbourhoods</Link></nav>
          <p><a href={`tel:${office.tel}`}>{office.phone}</a> · <a href={`mailto:${office.email}`}>{office.email}</a></p>
        </div>
        <div className="foot-small"><span>© 2026 West Austin Properties</span><a href="https://www.trec.texas.gov/forms/information-about-brokerage-services" rel="noreferrer">Information about brokerage services</a><a href="https://www.trec.texas.gov/forms/consumer-protection-notice" rel="noreferrer">Consumer protection notice</a><span>Concept design. Listings are samples. Photographs: Unsplash.</span></div>
      </div>
    </footer>
  )
}
