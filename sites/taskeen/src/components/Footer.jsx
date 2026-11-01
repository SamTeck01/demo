import { Link } from 'react-router-dom'
import { office } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-cols">
          <p>Building management for Kuwaiti owners. Part of 3s International.</p>
          <nav aria-label="Footer"><Link to="/#app">The app</Link><Link to="/#owners">For owners</Link><Link to="/#flats">Flats for rent</Link><Link to="/#enquire">Enquiries</Link></nav>
          <p><a href={`tel:${office.tel}`}>{office.phone}</a><br /><a href={`mailto:${office.email}`}>{office.email}</a><br />{office.address}</p>
        </div>
        <p className="foot-small">© 2026 Taskeen Al Oula Real Estate · Concept design. Flats, figures and photographs (Unsplash) are samples.</p>
        <p className="foot-word" aria-hidden="true">Taskeen</p>
      </div>
    </footer>
  )
}
