import { useId, useState } from 'react'
import { suburbs as habitats, office } from '../data/site.js'
import { mail, money } from '../lib.js'

const conditions = [['dated', 'Needs work', 0.9], ['good', 'Good', 1], ['updated', 'Updated', 1.1]]

// Sellers are the business. A range in seconds, then a real valuation from an agent.
export default function Sell() {
  const [hab, setHab] = useState('cedar-park')
  const [sqft, setSqft] = useState(1800)
  const [cond, setCond] = useState('good')
  const [sent, setSent] = useState(false)
  const s = useId(), a = useId(), n = useId(), p = useId()
  const rate = habitats.find(h => h.id === hab).rate * conditions.find(c => c[0] === cond)[2]
  const lo = Math.round(sqft * rate * 0.95 / 5000) * 5000, hi = Math.round(sqft * rate * 1.05 / 5000) * 5000
  const submit = e => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    location.href = mail(office.email, 'Valuation request', [`Address: ${f.get('address')}`, `Neighbourhood: ${habitats.find(h => h.id === hab).name}`, `Size: ${sqft} sq ft`, `Condition: ${cond}`, `Online range: ${money(lo)} to ${money(hi)}`, `Name: ${f.get('name')}`, `Phone: ${f.get('phone')}`])
    setSent(true)
  }
  return (
    <section id="sell" className="sell" aria-labelledby="sell-h">
      <div className="wrap sell-in">
        <div>
          <h2 id="sell-h" className="title" data-rv>What is your home worth today?</h2>
          <p className="lede" data-rv>Selling first? Get a range now, then Christina or Stephanie confirm it with a free walkthrough.</p>
          <p className="sell-range" aria-live="polite"><span>{money(lo)} to {money(hi)}</span>estimated range today</p>
        </div>
        <form className="panel" onSubmit={submit}>
          <fieldset className="field-set"><legend>Neighbourhood</legend>
            <div className="chips chips-wrap">{habitats.map(h => <label key={h.id} className="chip"><input type="radio" name="hab" checked={hab === h.id} onChange={() => setHab(h.id)} /><span>{h.name}</span></label>)}</div>
          </fieldset>
          <div className="range"><label htmlFor={s}>Size</label><output htmlFor={s}>{sqft.toLocaleString('en-US')} sq ft</output>
            <input id={s} type="range" min="700" max="4500" step="50" value={sqft} onChange={e => setSqft(+e.target.value)} /></div>
          <fieldset className="field-set"><legend>Condition</legend>
            <div className="chips chips-wrap">{conditions.map(([k, t]) => <label key={k} className="chip"><input type="radio" name="cond" checked={cond === k} onChange={() => setCond(k)} /><span>{t}</span></label>)}</div>
          </fieldset>
          {sent ? <p className="sent" role="status">Your email is ready to send. Christina or Stephanie will call to book the walkthrough.</p> : <>
            <div className="fields">
              <label htmlFor={a}>Street address</label><input id={a} name="address" autoComplete="street-address" required />
              <label htmlFor={n}>Your name</label><input id={n} name="name" autoComplete="name" required />
              <label htmlFor={p}>Phone</label><input id={p} name="phone" type="tel" autoComplete="tel" required />
            </div>
            <button className="btn btn-mint btn-full" type="submit">Send me the full valuation</button>
          </>}
        </form>
      </div>
    </section>
  )
}
