import { useId, useState } from 'react'
import { office } from '../data/site.js'
import { mail, money } from '../lib.js'

// The question only a firm that both sells and leases can answer: sell now, or rent it out?
export default function Owners() {
  const [value, setValue] = useState(1200000)
  const [owed, setOwed] = useState(450000)
  const [rent, setRent] = useState(5200)
  const a = useId(), b = useId(), c = useId()
  const sellCost = value * 0.06 + 6000
  const cash = value - owed - sellCost
  const yearRent = rent * 11.5
  const yearCosts = yearRent * 0.08 + value * 0.019 + 2400
  const yearNet = yearRent - yearCosts
  const href = mail(office.email, 'Sell or lease: please run my numbers', [`Home value: ${money(value)}`, `Mortgage left: ${money(owed)}`, `Expected rent: ${money(rent)} a month`])
  return (
    <section id="owners" className="owners" aria-labelledby="owners-h">
      <div className="wrap">
        <h2 id="owners-h" className="title" data-rv>Sell it, or lease it?</h2>
        <div className="owners-grid">
          <div className="owners-in">
            <div className="range"><label htmlFor={a}>Home value</label><output htmlFor={a}>{money(value)}</output><input id={a} type="range" min="400000" max="4000000" step="10000" value={value} onChange={e => setValue(+e.target.value)} /></div>
            <div className="range"><label htmlFor={b}>Left on the mortgage</label><output htmlFor={b}>{money(owed)}</output><input id={b} type="range" min="0" max={value} step="5000" value={Math.min(owed, value)} onChange={e => setOwed(+e.target.value)} /></div>
            <div className="range"><label htmlFor={c}>Rent it would fetch</label><output htmlFor={c}>{money(rent)} a month</output><input id={c} type="range" min="1500" max="15000" step="50" value={rent} onChange={e => setRent(+e.target.value)} /></div>
            <p className="fine">Selling costs at about 6% plus closing. Leasing assumes 11.5 months let, our 8% management, 1.9% property tax and upkeep.</p>
          </div>
          <div className="owners-out" aria-live="polite">
            <div className="out out-sell"><h3>Sell now</h3><p className="out-n">{money(Math.max(cash, 0))}</p><p>cash to you at closing</p></div>
            <div className="out out-lease"><h3>Lease it</h3><p className="out-n">{money(yearNet)}</p><p>a year after costs, and you keep the home</p></div>
            <a className="btn btn-yellow" href={href}>Get both numbers from Kyle</a>
          </div>
        </div>
      </div>
    </section>
  )
}
