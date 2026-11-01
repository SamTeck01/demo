import { office, wa } from '../data/site.js'

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-h">
      <div className="wrap contact-in">
        <h2 id="contact-h" className="title" data-rv>Talk to leasing</h2>
        <div>
          <p className="contact-actions"><a className="box box-solid" href={wa('Hello PrimeState leasing.')} target="_blank" rel="noreferrer">WhatsApp {office.phone}</a><a className="box" href={`mailto:${office.email}`}>{office.email}</a></p>
          <dl className="ledger">{office.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
        </div>
      </div>
    </section>
  )
}
