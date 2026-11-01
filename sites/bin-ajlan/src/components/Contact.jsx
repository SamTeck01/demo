import { office } from '../data/site.js'

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-h">
      <div className="wrap contact-in">
        <h2 id="contact-h" className="title" data-rv>Call our Salwa Road office</h2>
        <div>
          <ul className="ways"><li><a href={`tel:${office.tel}`}>{office.phone}</a></li><li><a href={`mailto:${office.email}`}>{office.email}</a></li><li>{office.address}</li></ul>
          <dl className="hours">{office.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
          <p className="owners">Own a warehouse, shop or villa? We lease it, collect the rent and manage it. <a href={`mailto:${office.email}?subject=Management`}>Ask about management</a></p>
        </div>
      </div>
    </section>
  )
}
