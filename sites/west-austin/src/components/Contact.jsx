import Tour from './Tour.jsx'
import { office } from '../data/site.js'

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-h">
      <div className="wrap contact-in">
        <div>
          <h2 id="contact-h" className="title title-light" data-rv>Ask either of us about any street</h2>
          <ul className="ways-list">
            <li><a href={`tel:${office.tel}`}>{office.phone}</a></li>
            <li><a href={`mailto:${office.email}`}>{office.email}</a></li>
          </ul>
          <dl className="hours">{office.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
        </div>
        <div className="panel"><h3 className="panel-h">Book a private tour</h3><Tour /></div>
      </div>
    </section>
  )
}
