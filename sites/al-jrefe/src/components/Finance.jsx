import { useId, useState } from 'react'
import { districts, wa } from '../data/site.js'
import { money, monthly } from '../lib.js'

// Most villa buyers finance: show the month, by district, and send it on WhatsApp.
export default function Finance() {
  const [d, setD] = useState('al-narjis')
  const dist = districts.find(x => x.id === d)
  const [price, setPrice] = useState(dist.from)
  const [down, setDown] = useState(10)
  const [years, setYears] = useState(25)
  const a = useId(), b = useId(), c = useId(), e = useId()
  const m = monthly(price * (1 - down / 100), 5.5, years)
  const pick = id => { setD(id); setPrice(districts.find(x => x.id === id).from) }
  const msg = `Hello Al Jrefe, I am looking in ${dist.name} around ${money(price)} with ${down}% down over ${years} years (about ${money(m)} a month). Please send me options.`
  return (
    <section id="finance" className="fin wrap" aria-labelledby="fin-h">
      <div>
        <h2 id="fin-h" className="title" data-rv>Your monthly payment, by district</h2>
        <label className="field" htmlFor={a}><span>District</span><select id={a} value={d} onChange={ev => pick(ev.target.value)}>{districts.map(x => <option key={x.id} value={x.id}>{x.name}</option>)}</select></label>
        <div className="range"><label htmlFor={b}>Price</label><output htmlFor={b}>{money(price)}</output><input id={b} type="range" min="800000" max="6000000" step="50000" value={price} onChange={ev => setPrice(+ev.target.value)} /></div>
        <div className="range"><label htmlFor={c}>Down payment</label><output htmlFor={c}>{down}% · {money(price * down / 100)}</output><input id={c} type="range" min="5" max="50" step="1" value={down} onChange={ev => setDown(+ev.target.value)} /></div>
        <div className="range"><label htmlFor={e}>Term</label><output htmlFor={e}>{years} years</output><input id={e} type="range" min="10" max="30" step="1" value={years} onChange={ev => setYears(+ev.target.value)} /></div>
      </div>
      <div className="fin-out" aria-live="polite">
        <p className="big">{money(m)}</p>
        <p className="big-l">a month at a typical 5.5% bank rate</p>
        <a className="white-btn" href={wa(msg)} target="_blank" rel="noreferrer">Send me options on WhatsApp <span aria-hidden="true">↗</span></a>
        <p className="fine">Indicative. First-time Saudi buyers may qualify for Sakani support; your bank confirms the rate and terms.</p>
      </div>
    </section>
  )
}
