import { useId, useState } from 'react'
import { money, mail } from '../lib.js'
import { office } from '../data/site.js'

export default function Owners() {
  const [rent, setRent] = useState(750)
  const [months, setMonths] = useState(11)
  const r = useId(), m = useId()
  const year = rent * months, fee = year * 0.08
  const href = mail(office.email, 'Leasing and management proposal', [`Expected rent: ${money(rent)} a month`, `Months let a year: ${months}`, 'Please send a proposal for my property.'])
  return (
    <section id="owners" className="owners" aria-labelledby="owners-h">
      <div className="wrap owners-in">
        <div>
          <h2 id="owners-h" className="title" data-rv>Own a home here? We let it and look after it.</h2>
          <p className="lede" data-rv>Tenant search, contracts, EWA, repairs and rent collection. One statement a month, and no calls at midnight.</p>
          <ul className="owners-list" data-rv>
            <li>Tenants found, checked and moved in for you</li>
            <li>Rent paid to your account every month, wherever you live</li>
            <li>Repairs arranged and approved with you first</li>
          </ul>
        </div>
        <div className="owners-panel">
          <h3 className="subtitle panel-h">Your year as an owner</h3>
          <p className="big-figure" aria-live="polite"><span>{money(year - fee)}</span>a year paid to you</p>
          <div className="range">
            <label htmlFor={r}>Monthly rent</label><output htmlFor={r}>{money(rent)}</output>
            <input id={r} type="range" min="300" max="3000" step="25" value={rent} onChange={e => setRent(+e.target.value)} />
          </div>
          <div className="range">
            <label htmlFor={m}>Months let a year</label><output htmlFor={m}>{months}</output>
            <input id={m} type="range" min="6" max="12" step="1" value={months} onChange={e => setMonths(+e.target.value)} />
          </div>
          <dl className="ledger">
            <div><dt>Rent a year</dt><dd>{money(year)}</dd></div>
            <div><dt>Management fee (sample 8%)</dt><dd>−{money(fee)}</dd></div>
            </dl>
          
          <a className="btn btn-bronze" href={href}>Ask for a written proposal</a>
        </div>
      </div>
    </section>
  )
}
