import { Link } from 'react-router-dom'
import { office } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <p className="foot-word" aria-hidden="true">Mahogany</p>
        <div className="foot-cols">
          <nav aria-label="Footer"><Link to="/#homes">Homes</Link><Link to="/#doors">Sell or buy</Link><Link to="/#about">About</Link><Link to="/#visit">Visit</Link></nav>
          <p>{office.address.join(', ')} · <a href={`tel:${office.tel}`}>{office.phone}</a></p>
        </div>
        <p className="foot-small">© 2026 Mahogany Real Estate · Concept design. Listings are samples. Photographs: Unsplash.</p>
      </div>
    </footer>
  )
}
