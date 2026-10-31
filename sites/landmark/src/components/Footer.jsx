import { Link } from 'react-router-dom'
import { office } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-cols">
          <nav aria-label="Footer"><Link to="/#homes">Buy</Link><Link to="/?deal=rent#homes">Rent</Link><Link to="/#islands">Islands</Link><Link to="/#owners">Owners</Link><Link to="/saved">Saved homes</Link></nav>
          <p><a href={`tel:${office.tel}`}>{office.phone}</a><br /><a href={`mailto:${office.email}`}>{office.email}</a><br />{office.address.join(', ')}</p>
        </div>
        <p className="foot-mark" aria-hidden="true">Landmark</p>
        <div className="foot-small"><span>© 2026 Landmark Bahrain</span><span>Concept design. Homes, prices and fees shown are samples. Photographs: Unsplash.</span></div>
      </div>
    </footer>
  )
}
