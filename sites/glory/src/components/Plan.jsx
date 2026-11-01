import { useId, useState } from 'react'
import { residences, wa } from '../data/site.js'
import { money } from '../lib.js'

// The number that sells the launch: pick a home and a deposit, see the month, send it on WhatsApp.
export default function Plan() {
  const [id, setId] = useState('studio')
  const [dep, setDep] = useState(20)
  const [yrs, setYrs] = useState(5)
  const d = useId(), y = useId()
  const r = residences.find(x => x.id === id)
  const deposit = r.price * dep / 100, m = (r.price - deposit) / (yrs * 12)
  const msg = `Hello Glory, I would like to reserve: ${r.name}. Price ${money(r.price)}, deposit ${dep}% (${money(deposit)}), ${yrs} years at 0%, ${money(m)} a month.`
  return (
    <section id="plan" className="plan" aria-labelledby="plan-h">
      <div className="wrap plan-in">
        <div>
          <h2 id="plan-h" className="title" data-rv>Your plan, to the dinar</h2>
          <fieldset className="pick"><legend>Residence</legend>
            {residences.map(x => <label key={x.id} className="pick-i"><input type="radio" name="res" checked={id === x.id} onChange={() => setId(x.id)} /><span><b>{x.name}</b>{money(x.price)}</span></label>)}
          </fieldset>
        </div>
        <div className="plan-out" aria-live="polite">
          <h3 className="side-h">Your month</h3>
          <p className="plan-n"><span>{money(m)}</span>a month for {yrs} years, no interest</p>
          <div className="range"><label htmlFor={d}>Deposit</label><output htmlFor={d}>{dep}% · {money(deposit)}</output><input id={d} type="range" min="10" max="60" step="5" value={dep} onChange={e => setDep(+e.target.value)} /></div>
          <div className="range"><label htmlFor={y}>Years to pay</label><output htmlFor={y}>{yrs}</output><input id={y} type="range" min="1" max="5" step="1" value={yrs} onChange={e => setYrs(+e.target.value)} /></div>
          <a className="gold gold-full" href={wa(msg)} target="_blank" rel="noreferrer">Reserve this plan on WhatsApp</a>
          <p className="fine">Indicative. Final terms are in the sale agreement.</p>
        </div>
      </div>
    </section>
  )
}
