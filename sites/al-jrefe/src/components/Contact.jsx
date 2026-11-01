import { office, wa } from '../data/site.js'

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-h">
      <div className="wrap contact-in">
        <h2 id="contact-h" className="title" data-rv>Talk to us tonight</h2>
        <div>
          <p className="contact-act"><a className="white-btn" href={wa('Hello Al Jrefe.')} target="_blank" rel="noreferrer">WhatsApp {office.phone}</a><a className="line-btn" href={`tel:${office.tel}`}>Call</a></p>
          <dl className="hours">{office.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
          <p className="addr">{office.address}</p>
        </div>
      </div>
    </section>
  )
}
