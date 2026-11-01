import { useId, useState } from 'react'
import { office } from '../data/site.js'
import { mail } from '../lib.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const n = useId(), p = useId(), m = useId()
  const submit = e => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    location.href = mail(office.email, 'For Bader', [`Name: ${f.get('name')}`, `Phone: ${f.get('phone')}`, `Message: ${f.get('msg')}`])
    setSent(true)
  }
  return (
    <section id="contact" className="contact wrap" aria-labelledby="contact-h">
      <div>
        <h2 id="contact-h" className="title" data-rv>Speak to Bader</h2>
        <p className="lede">Bader Al-Bahar answers every enquiry himself.</p>
        <ul className="ways"><li><a href={`tel:${office.tel}`}>{office.phone}</a></li><li><a href={`mailto:${office.email}`}>{office.email}</a></li></ul>
        <dl className="hours">{office.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
      </div>
      {sent ? <p className="sent" role="status">Your email is ready to send. Bader replies the same working day.</p> : (
        <form className="form" onSubmit={submit}>
          <label htmlFor={n}>Your name</label><input id={n} name="name" autoComplete="name" required />
          <label htmlFor={p}>Phone</label><input id={p} name="phone" type="tel" autoComplete="tel" required />
          <label htmlFor={m}>What are you looking for?</label><textarea id={m} name="msg" rows="3" />
          <button className="btn" type="submit">Send to Bader</button>
        </form>
      )}
    </section>
  )
}
