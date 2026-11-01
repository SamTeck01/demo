import { useId, useState } from 'react'
import { office, valImg } from '../data/site.js'
import { mail } from '../lib.js'

const uses = [['bank', 'Bank or mortgage'], ['sale', 'Sale or purchase'], ['estate', 'Inheritance'], ['dispute', 'Dispute or court']]

export default function Valuations() {
  const [use, setUse] = useState('bank')
  const [sent, setSent] = useState(false)
  const n = useId(), p = useId(), a = useId()
  const submit = e => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    location.href = mail(office.email, 'Licensed valuation request', [`Purpose: ${uses.find(u => u[0] === use)[1]}`, `Property: ${f.get('asset')}`, `Name: ${f.get('name')}`, `Phone: ${f.get('phone')}`])
    setSent(true)
  }
  return (
    <section id="valuations" className="val wrap" aria-labelledby="val-h">
      <img src={valImg} alt="Glass office towers" loading="lazy" data-rv />
      <div>
        <h2 id="val-h" className="title" data-rv>Licensed valuations</h2>
        <p className="lede" data-rv>Reports accepted by Qatari banks, courts and families, for homes, land and commercial property.</p>
        {sent ? <p className="sent" role="status">Your email is ready to send. A valuer calls to arrange the site visit.</p> : (
          <form className="form" onSubmit={submit}>
            <fieldset className="uses"><legend>What is it for?</legend>{uses.map(([k, t]) => <label key={k}><input type="radio" name="use" checked={use === k} onChange={() => setUse(k)} /><span>{t}</span></label>)}</fieldset>
            <label htmlFor={a}>The property</label><input id={a} name="asset" placeholder="Type, area, plot number" required />
            <label htmlFor={n}>Your name</label><input id={n} name="name" autoComplete="name" required />
            <label htmlFor={p}>Phone</label><input id={p} name="phone" type="tel" autoComplete="tel" required />
            <button className="pill pill-orange" type="submit">Request the valuation</button>
          </form>
        )}
      </div>
    </section>
  )
}
