import { Link } from 'react-router-dom'
import { office } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <p className="foot-word" aria-hidden="true">Ocean Club</p>
        <div className="foot-cols">
          <nav aria-label="Footer"><Link to="/#homes">Homes</Link><Link to="/?deal=rent#homes">Rentals</Link><Link to="/#season">Owners</Link><Link to="/#office">The office</Link></nav>
          <p><a href={`tel:${office.tel}`}>{office.phone}</a> · {office.address.join(', ')}</p>
        </div>
        <p className="foot-small">© 2026 Ocean Club Realty · Concept design. Listings, steps and rates are samples. Photographs: Unsplash.</p>
      </div>
    </footer>
  )
}
