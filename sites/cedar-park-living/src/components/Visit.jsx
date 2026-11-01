import Showing from './Showing.jsx'
import { office } from '../data/site.js'

export default function Visit() {
  return (
    <section id="visit" className="visit" aria-labelledby="visit-h">
      <div className="wrap visit-in">
        <div>
          <h2 id="visit-h" className="title" data-rv>Talk to Christina &amp; Stephanie</h2>
          <ul className="ways"><li><a href={`tel:${office.tel}`}>{office.phone}</a></li><li><a href={`mailto:${office.email}`}>{office.email}</a></li><li>{office.address.join(', ')}</li></ul>
          <dl className="hours">{office.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
        </div>
        <div className="panel"><h3 className="panel-h">Book a tour</h3><Showing /></div>
      </div>
    </section>
  )
}
