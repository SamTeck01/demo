import { useId, useState } from 'react'
import { areas, office } from '../data/site.js'
import { mail } from '../lib.js'

const ways = {
  public: { name: 'Fully marketed', what: 'Photography, film, MLS, open houses and our buyer list on day one.', who: 'Every buyer and agent in Austin.', time: 'Usually 3 to 6 weeks to contract.', best: 'Getting the widest field of offers.' },
  soon: { name: 'Coming soon', what: 'A short preview to agents and our buyers before the home goes on the MLS.', who: 'Serious buyers who are already looking.', time: 'Two weeks of preview, then public.', best: 'Testing price before you commit.' },
  private: { name: 'Private sale', what: 'No sign, no MLS, no photographs online. We bring buyers to you, one at a time.', who: 'A short list of qualified buyers only.', time: 'As long as it takes to find the one.', best: 'Privacy above everything.' },
}

// The decision a $2M seller actually faces: how public to be.
export default function Sell() {
  const [w, setW] = useState('soon')
  const [sent, setSent] = useState(false)
  const n = useId(), p = useId(), ad = useId(), ar = useId()
  const way = ways[w]
  const submit = e => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    location.href = mail(office.email, 'Private valuation request', [`Address: ${f.get('address')}`, `Neighbourhood: ${f.get('area')}`, `Preferred way to sell: ${way.name}`, `Name: ${f.get('name')}`, `Phone: ${f.get('phone')}`])
    setSent(true)
  }
  return (
    <section id="sell" className="sell" aria-labelledby="sell-h">
      <div className="wrap">
        <h2 id="sell-h" className="title title-light" data-rv>Three ways to sell. You choose how public.</h2>
        <div className="ways" role="radiogroup" aria-label="Ways to sell">
          {Object.entries(ways).map(([k, v]) => (
            <button key={k} type="button" role="radio" aria-checked={w === k} className="way" onClick={() => setW(k)}>
              <span className="way-name">{v.name}</span><span className="way-best">{v.best}</span>
            </button>
          ))}
        </div>
        <div className="sell-grid">
          <dl className="way-detail" aria-live="polite" key={w}>
            <div><dt>What happens</dt><dd>{way.what}</dd></div>
            <div><dt>Who sees it</dt><dd>{way.who}</dd></div>
            <div><dt>Typical timeline</dt><dd>{way.time}</dd></div>
          </dl>
          {sent ? <p className="sent" role="status">Your email is ready to send. Laura or Katy will call you to arrange a visit.</p> : (
            <form className="panel" onSubmit={submit}>
              <h3 className="panel-h">Ask for a private valuation</h3>
              <div className="fields">
                <label htmlFor={ad}>Street address</label><input id={ad} name="address" autoComplete="street-address" required />
                <label htmlFor={ar}>Neighbourhood</label><select id={ar} name="area">{areas.map(a => <option key={a.id}>{a.name}</option>)}<option>Elsewhere west of MoPac</option></select>
                <label htmlFor={n}>Your name</label><input id={n} name="name" autoComplete="name" required />
                <label htmlFor={p}>Phone</label><input id={p} name="phone" type="tel" autoComplete="tel" required />
              </div>
              <button className="sq-btn sq-full" type="submit">Request a {way.name.toLowerCase()} valuation</button>
              <p className="fine">Confidential. Nothing is listed or shared without your say.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
