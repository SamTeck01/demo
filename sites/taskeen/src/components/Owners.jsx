import { useId, useState } from 'react'
import { office } from '../data/site.js'
import { mail, money } from '../lib.js'

// What management is worth, in the owner's own numbers.
export default function Owners() {
  const [flats, setFlats] = useState(24)
  const [rent, setRent] = useState(380)
  const [vacant, setVacant] = useState(3)
  const [late, setLate] = useState(15)
  const a = useId(), b = useId(), c = useId(), d = useId()
  const full = flats * rent * 12
  const now = (flats - vacant) * rent * 12 * (1 - late / 100 * 0.5)
  const after = Math.min(flats, flats - vacant + Math.ceil(vacant * 0.7)) * rent * 12 * 0.99
  const fee = after * 0.07
  const href = mail(office.email, 'Management proposal request', [`Flats: ${flats}`, `Average rent: ${money(rent)}`, `Empty today: ${vacant}`, `Late payers: ${late}%`])
  return (
    <section id="owners" className="owners" aria-labelledby="owners-h">
      <div className="wrap owners-in">
        <div>
          <h2 id="owners-h" className="title" data-rv>Your year, with Taskeen</h2>
          <div className="ranges">
            <div className="range"><label htmlFor={a}>Flats in the building</label><output htmlFor={a}>{flats}</output><input id={a} type="range" min="4" max="120" value={flats} onChange={e => { setFlats(+e.target.value); setVacant(v => Math.min(v, +e.target.value)) }} /></div>
            <div className="range"><label htmlFor={b}>Average rent</label><output htmlFor={b}>{money(rent)}</output><input id={b} type="range" min="150" max="900" step="10" value={rent} onChange={e => setRent(+e.target.value)} /></div>
            <div className="range"><label htmlFor={c}>Empty today</label><output htmlFor={c}>{vacant}</output><input id={c} type="range" min="0" max={flats} value={vacant} onChange={e => setVacant(+e.target.value)} /></div>
            <div className="range"><label htmlFor={d}>Tenants who pay late</label><output htmlFor={d}>{late}%</output><input id={d} type="range" min="0" max="50" step="5" value={late} onChange={e => setLate(+e.target.value)} /></div>
          </div>
        </div>
        <div className="owners-out" aria-live="polite">
          <h3 className="out-h">Your year</h3>
          <p className="gain"><span>+{money(Math.max(after - fee - now, 0))}</span>a year more to you</p>
          <dl className="ledger">
            <div><dt>If every flat paid in full</dt><dd>{money(full)}</dd></div>
            <div><dt>What you likely collect today</dt><dd>{money(now)}</dd></div>
            <div><dt>With Taskeen, before our fee</dt><dd>{money(after)}</dd></div>
            <div><dt>Our fee (sample 7%)</dt><dd>−{money(fee)}</dd></div>
          </dl>
          <a className="btn btn-orange" href={href}>Ask for a written proposal</a>
          <p className="fine">Assumes we let 70% of empty flats and bring late payers onto app payment. Your proposal uses your real rent roll.</p>
        </div>
      </div>
    </section>
  )
}
