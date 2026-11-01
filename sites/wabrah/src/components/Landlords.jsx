import { useId, useState } from 'react'
import { office } from '../data/site.js'
import { mail, money } from '../lib.js'

export default function Landlords() {
  const [rent, setRent] = useState(12000)
  const id = useId()
  const year = rent * 12, fee = year * 0.05
  return (
    <section id="landlords" className="land" aria-labelledby="land-h">
      <div className="wrap land-in">
        <div>
          <h2 id="land-h" className="title" data-rv>Lease your property through Wabrah</h2>
          <p className="lede" data-rv>Tenant search, contracts, Kahramaa transfer and rent collection, handled by one office.</p>
        </div>
        <div className="land-out">
          <p className="land-n"><span>{money(year - fee)}</span>a year to you, after a sample 5% fee</p>
          <div className="range"><label htmlFor={id}>Monthly rent</label><output htmlFor={id}>{money(rent)}</output><input id={id} type="range" min="4000" max="60000" step="500" value={rent} onChange={e => setRent(+e.target.value)} /></div>
          <a className="btn" href={mail(office.email, 'Leasing my property', [`Expected rent: ${money(rent)} a month`, 'Please call me.'])}>List my property</a>
        </div>
      </div>
    </section>
  )
}
