import { useId, useState } from 'react'
import { units, buildingOf, wa } from '../data/site.js'
import { money } from '../lib.js'

// What a tenant pays on signing: no agency fee, because the lease is with the owner.
export default function Cost() {
  const leases = units.filter(u => u.lease)
  const [id, setId] = useState(leases[0].id)
  const [cheques, setCheques] = useState(12)
  const s = useId()
  const u = leases.find(x => x.id === id)
  const first = u.price * (12 / cheques), deposit = u.price, kahramaa = u.bills.includes('included') ? 0 : 2000
  const total = first + deposit + kahramaa
  return (
    <section id="cost" className="cost" aria-labelledby="cost-h">
      <div className="wrap cost-in">
        <div>
          <h2 id="cost-h" className="title" data-rv>What you pay to move in</h2>
          <p className="lede" data-rv>No agency fee: you lease directly from the owner.</p>
          <label className="field" htmlFor={s}><span>Unit</span><select id={s} value={id} onChange={e => setId(e.target.value)}>{leases.map(x => <option key={x.id} value={x.id}>{buildingOf(x.building).name}, {x.title}, {money(x.price)}/mo</option>)}</select></label>
          <fieldset className="cheq"><legend>Cheques a year</legend>{[12, 6, 4, 2].map(n => <label key={n}><input type="radio" name="cq" checked={cheques === n} onChange={() => setCheques(n)} /><span>{n}</span></label>)}</fieldset>
        </div>
        <div className="cost-out" aria-live="polite">
          <p className="big">{money(total)}<span>to pay on signing</span></p>
          <dl className="ledger">
            <div><dt>First cheque ({12 / cheques} {12 / cheques === 1 ? 'month' : 'months'})</dt><dd>{money(first)}</dd></div>
            <div><dt>Security deposit (one month)</dt><dd>{money(deposit)}</dd></div>
            <div><dt>Kahramaa deposit</dt><dd>{kahramaa ? money(kahramaa) : 'Included'}</dd></div>
            <div><dt>Agency fee</dt><dd>None</dd></div>
          </dl>
          <a className="box box-solid" href={wa(`Hello PrimeState, I am interested in ${buildingOf(u.building).name}, ${u.title} at ${money(u.price)} a month, with ${cheques} cheques. Can I book a viewing?`)} target="_blank" rel="noreferrer">Book a viewing on WhatsApp</a>
          <p className="fine">Typical terms; the lease states the final figures.</p>
        </div>
      </div>
    </section>
  )
}
