import { office } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <p className="foot-word">Glory <span>Dilmunia</span></p>
        <p>Breeze of Dilmunia sales by Glory Real Estate, Bahrain. Founder Gulnaz Amangeldinova.</p>
        <p><a href={`tel:${office.tel}`}>{office.phone}</a> · <a href={`mailto:${office.email}`}>{office.email}</a><br />{office.address}</p>
        <dl>{office.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
      </div>
      <p className="foot-small wrap">© 2026 Glory Real Estate · Concept design. Sizes and photographs are samples (Unsplash); prices from the launch material.</p>
    </footer>
  )
}
