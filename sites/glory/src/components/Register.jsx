import { useId, useState } from 'react'
import { office, residences, wa } from '../data/site.js'

export default function Register() {
  const [want, setWant] = useState('A studio')
  const n = useId(), c = useId()
  const [name, setName] = useState(''), [country, setCountry] = useState('')
  const msg = `Hello Glory, I am ${name || '…'}${country ? ` from ${country}` : ''}. I am interested in ${want.toLowerCase()} at Breeze of Dilmunia. Please send the brochure and prices.`
  return (
    <section id="register" className="reg" aria-labelledby="reg-h">
      <h2 id="reg-h" className="title" data-rv>Book a viewing or request the brochure</h2>
      <p className="reg-sub">We answer on WhatsApp the same day, seven days a week.</p>
      <form className="reg-form" onSubmit={e => { e.preventDefault(); open(wa(msg), '_blank') }}>
        <label htmlFor={n}>Your name</label><input id={n} value={name} onChange={e => setName(e.target.value)} autoComplete="name" required />
        <label htmlFor={c}>Country</label><input id={c} value={country} onChange={e => setCountry(e.target.value)} autoComplete="country-name" />
        <fieldset className="want"><legend>Interested in</legend>{[...residences.map(r => r.type === 'Studio' ? 'A studio' : r.name), 'Not sure yet'].filter((v, i, a) => a.indexOf(v) === i).map(v => <label key={v}><input type="radio" name="want" checked={want === v} onChange={() => setWant(v)} /><span>{v}</span></label>)}</fieldset>
        <button className="gold gold-full" type="submit">Send on WhatsApp</button>
        <p className="fine">Prefer email? <a href={`mailto:${office.email}`}>{office.email}</a> · <a href={`tel:${office.tel}`}>{office.phone}</a></p>
      </form>
    </section>
  )
}
