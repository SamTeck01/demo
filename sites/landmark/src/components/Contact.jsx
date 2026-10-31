import Viewing from './Viewing.jsx'
import { office } from '../data/site.js'

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-h">
      <div className="wrap contact-in">
        <div>
          <h2 id="contact-h" className="title" data-rv>Book a viewing this week</h2>
          <p className="lede" data-rv>Choose a time and we meet you at the home, or walk you through it on a video call.</p>
          <ul className="contact-ways">
            <li><a href={`tel:${office.tel}`}>{office.phone}</a></li>
            <li><a href={`mailto:${office.email}`}>{office.email}</a></li>
            <li>{office.address.join(', ')}</li>
          </ul>
          <dl className="ledger ledger-quiet">{office.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
        </div>
        <div className="contact-panel"><Viewing /></div>
      </div>
    </section>
  )
}
