import { Link } from 'react-router-dom'
import { office } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-cols">
          <nav aria-label="Footer"><Link to="/#homes">Homes</Link><Link to="/#numbers">Invest</Link><Link to="/#areas">Areas</Link><Link to="/#about">About</Link><Link to="/saved">Saved</Link></nav>
          <p><a href={`tel:${office.tel}`}>{office.phone}</a><br /><a href={`mailto:${office.email}`}>{office.email}</a><br />{office.address.join(', ')}</p>
        </div>
        <p className="foot-word" aria-hidden="true">Altruistic</p>
        <div className="foot-small"><span>© 2026 Altruistic Homes · {office.broker}, Broker</span><span>Equal housing opportunity</span><span>Concept design. Listings are samples. Photographs: Unsplash.</span></div>
      </div>
    </footer>
  )
}
