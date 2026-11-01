import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { office } from '../data/site.js'
import { mail } from '../lib.js'

export default function Footer() {
  const [sent, setSent] = useState(false)
  const n = useId(), p = useId(), m = useId()
  const submit = e => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    location.href = mail(office.email, 'Viewing request', [`Name: ${f.get('name')}`, `Phone: ${f.get('phone')}`, `Looking for: ${f.get('msg')}`])
    setSent(true)
  }
  return (
    <footer id="contact" className="foot">
      <div className="wrap foot-in">
        <div>
          <h2 className="foot-h">Speak to an agent</h2>
          <p><a href={`mailto:${office.email}`}>{office.email}</a><br />{office.address}</p>
          <dl className="hours">{office.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
          <nav aria-label="Footer"><Link to="/#homes">Homes</Link><Link to="/#match">Districts</Link><Link to="/#landlords">Landlords</Link></nav>
        </div>
        {sent ? <p className="sent" role="status">Your email is ready to send. An agent replies the same working day.</p> : (
          <form className="form" onSubmit={submit}>
            <label htmlFor={n}>Your name</label><input id={n} name="name" autoComplete="name" required />
            <label htmlFor={p}>Phone or WhatsApp</label><input id={p} name="phone" type="tel" autoComplete="tel" required />
            <label htmlFor={m}>What are you looking for?</label><input id={m} name="msg" placeholder="e.g. 2-bed to rent in Lusail" />
            <button className="peach" type="submit">Send <span aria-hidden="true">→</span></button>
          </form>
        )}
      </div>
      <p className="foot-word" aria-hidden="true">Gulf Avenues</p>
      <p className="foot-small wrap">© 2026 Gulf Avenues Real Estate · Concept design. Listings and rents are samples. Photographs: Unsplash.</p>
    </footer>
  )
}
