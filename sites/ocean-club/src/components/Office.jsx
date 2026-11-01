import Viewing from './Viewing.jsx'
import { office } from '../data/site.js'

export default function Office() {
  return (
    <section id="office" className="office wrap" aria-labelledby="office-h">
      <div>
        <h2 id="office-h" className="title" data-rv>Our office is in the club</h2>
        <p className="lede" data-rv>Stop by on your way to the beach. We hold the keys to most homes for sale and can show you today.</p>
        <ul className="ways"><li><a href={`tel:${office.tel}`}>{office.phone}</a></li><li><a href={`mailto:${office.email}`}>{office.email}</a></li><li>{office.address.join(', ')}</li></ul>
        <dl className="hours">{office.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
      </div>
      <div className="panel"><h3 className="panel-h">Book a viewing</h3><Viewing /></div>
    </section>
  )
}
