import { useId, useState } from 'react'
import { apts, wa } from '../data/site.js'
import { money } from '../lib.js'

// Short stays cost more each month; a yearly lease is the base rent.
const premium = m => m >= 12 ? 1 : m >= 6 ? 1.1 : m >= 3 ? 1.2 : 1.35

export default function Stay() {
  const [id, setId] = useState('one-bedroom-coastal')
  const [months, setMonths] = useState(3)
  const s = useId(), m = useId()
  const a = apts.find(x => x.id === id)
  const monthly = Math.round(a.rent * premium(months) / 5) * 5
  const msg = `Hello Mareena Tower, I would like ${a.title.toLowerCase()} for ${months} ${months === 1 ? 'month' : 'months'} from about ${money(monthly)} a month. Is it available?`
  return (
    <section id="stay" className="stay" aria-labelledby="stay-h">
      <div className="wrap stay-in">
        <div>
          <h2 id="stay-h" className="title" data-rv>Plan your stay</h2>
          <label className="field" htmlFor={s}><span>Apartment</span><select id={s} value={id} onChange={e => setId(e.target.value)}>{apts.map(x => <option key={x.id} value={x.id}>{x.title}</option>)}</select></label>
          <div className="range"><label htmlFor={m}>How long</label><output htmlFor={m}>{months} {months === 1 ? 'month' : 'months'}</output><input id={m} type="range" min="1" max="12" step="1" value={months} onChange={e => setMonths(+e.target.value)} /></div>
          <p className="fine">Monthly stays from one month, furnished only. Yearly leases get the base rent.</p>
        </div>
        <div className="stay-out" aria-live="polite">
          <p className="big">{money(monthly)}<span>a month for {months} {months === 1 ? 'month' : 'months'}{months < 12 ? `, ${money(monthly * months)} in total` : ', yearly lease'}</span></p>
          <a className="boxbtn" href={wa(msg)} target="_blank" rel="noreferrer">Send to reception on WhatsApp <span aria-hidden="true">»</span></a>
          <p className="fine">Sample rates. Reception confirms availability, usually within minutes.</p>
        </div>
      </div>
    </section>
  )
}
