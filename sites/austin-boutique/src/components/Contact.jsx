import Tour from './Tour.jsx'
import { office } from '../data/site.js'

export default function Contact() {
  return (
    <section id="contact" className="contact wrap" aria-labelledby="contact-h">
      <div className="tile contact-info" data-rv>
        <h2 id="contact-h" className="title">Book a visit</h2>
        <ul className="ways-list"><li><a href={`tel:${office.tel}`}>{office.phone}</a></li><li><a href={`mailto:${office.email}`}>{office.email}</a></li><li>{office.address.join(', ')}</li></ul>
        <dl className="hours">{office.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
      </div>
      <div className="tile contact-form" data-rv><h3 className="tile-h">Choose a time</h3><Tour /></div>
    </section>
  )
}
