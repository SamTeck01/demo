import { useId, useState } from 'react'
import { office } from '../data/site.js'
import { mail } from '../lib.js'

const goals = ['Buy a home to live in', 'Buy a rental', 'Sell my property', 'Find tenants']

export default function Contact() {
  const [goal, setGoal] = useState(goals[0])
  const [sent, setSent] = useState(false)
  const n = useId(), ph = useId(), note = useId()
  const submit = e => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    location.href = mail(office.email, goal, [`Goal: ${goal}`, `Name: ${f.get('name')}`, `Phone: ${f.get('phone')}`, f.get('note') && `Note: ${f.get('note')}`])
    setSent(true)
  }
  return (
    <section id="contact" className="contact" aria-labelledby="contact-h">
      <div className="wrap contact-in">
        <div>
          <h2 id="contact-h" className="title" data-rv>Talk to Maria Teresa</h2>
          <p className="lede">She replies the same day, in English or Spanish.</p>
          <p className="contact-lines"><a href={`tel:${office.tel}`}>{office.phone}</a><a href={`mailto:${office.email}`}>{office.email}</a></p>
          <dl className="hours">{office.hours.map(([d, t]) => <div key={d}><dt>{d}</dt><dd>{t}</dd></div>)}</dl>
        </div>
        {sent ? <p className="sent" role="status">Your email is ready to send. Maria Teresa answers the same day.</p> : (
          <form className="form" onSubmit={submit}>
            <fieldset><legend>I want to</legend><div className="chips">{goals.map(g => <button key={g} type="button" aria-pressed={goal === g} onClick={() => setGoal(g)}>{g}</button>)}</div></fieldset>
            <label htmlFor={n}>Your name</label><input id={n} name="name" autoComplete="name" required />
            <label htmlFor={ph}>Phone or WhatsApp</label><input id={ph} name="phone" type="tel" autoComplete="tel" required />
            <label htmlFor={note}>Anything to add</label><textarea id={note} name="note" rows="3" />
            <button className="btn btn-ink btn-full" type="submit">Send to Maria Teresa</button>
          </form>
        )}
      </div>
    </section>
  )
}
