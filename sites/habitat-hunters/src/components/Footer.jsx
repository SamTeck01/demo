import { Link } from 'react-router-dom'
import { office } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-cols">
          <nav aria-label="Footer"><Link to="/#homes">Homes</Link><Link to="/#sell">Sell</Link><Link to="/#guide">Field guide</Link><Link to="/#pay">Payments</Link><Link to="/saved">Saved</Link></nav>
          <p><a href={`tel:${office.tel}`}>{office.phone}</a><br /><a href={`mailto:${office.email}`}>{office.email}</a><br />{office.address.join(', ')}</p>
        </div>
        <p className="foot-word" aria-hidden="true">Habitat</p>
        <div className="foot-small"><span>© 2026 Habitat Hunters</span><a href="https://www.trec.texas.gov/forms/information-about-brokerage-services" rel="noreferrer">Information about brokerage services</a><a href="https://www.trec.texas.gov/forms/consumer-protection-notice" rel="noreferrer">Consumer protection notice</a><span>Concept design. Listings are samples. Photographs: Unsplash.</span></div>
      </div>
    </footer>
  )
}
