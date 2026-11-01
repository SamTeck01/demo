import { office } from '../data/site.js'

export default function Contact() {
  return (
    <section id="contact" className="contact wrap" aria-labelledby="contact-h">
      <h2 id="contact-h" className="title" data-rv>Speak to Wabrah</h2>
      <ul className="ways"><li><a href={`tel:${office.tel}`}>{office.phone}</a></li><li><a href={`mailto:${office.email}`}>{office.email}</a></li><li>{office.address}</li></ul>
      <dl className="hours">{office.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
    </section>
  )
}
