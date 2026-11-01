import { useId, useState } from 'react'
import { office } from '../data/site.js'
import { mail } from '../lib.js'

export default function Enquire() {
  const [who, setWho] = useState('owner')
  const [sent, setSent] = useState(false)
  const n = useId(), p = useId(), m = useId()
  const submit = e => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    location.href = mail(office.email, who === 'owner' ? 'Building owner enquiry' : 'Tenant enquiry', [`Name: ${f.get('name')}`, `Phone: ${f.get('phone')}`, f.get('msg') && `Message: ${f.get('msg')}`])
    setSent(true)
  }
  return (
    <section id="enquire" className="enq wrap" aria-labelledby="enq-h">
      <div>
        <h2 id="enq-h" className="title" data-rv>Every enquiry read by a person</h2>
        <p className="lede">No automated replies. An owners’ manager calls you back within one working day.</p>
        <p className="enq-alt"><a className="btn btn-line" href={`tel:${office.tel}`}>Call {office.phone}</a><a className="btn btn-line" href={`mailto:${office.email}`}>Email us</a></p>
      </div>
      {sent ? <p className="sent" role="status">Your email is ready to send. We call back within one working day.</p> : (
        <form className="form" onSubmit={submit}>
          <div className="seg" role="group" aria-label="I am">
            <button type="button" aria-pressed={who === 'owner'} onClick={() => setWho('owner')}>I own a building</button>
            <button type="button" aria-pressed={who === 'tenant'} onClick={() => setWho('tenant')}>I want a flat</button>
          </div>
          <label htmlFor={n}>Your name</label><input id={n} name="name" autoComplete="name" required />
          <label htmlFor={p}>Phone</label><input id={p} name="phone" type="tel" autoComplete="tel" required />
          <label htmlFor={m}>{who === 'owner' ? 'Where is the building, and how many flats?' : 'Area, size and budget'}</label><textarea id={m} name="msg" rows="3" />
          <button className="btn btn-dark" type="submit">Send message</button>
        </form>
      )}
    </section>
  )
}
