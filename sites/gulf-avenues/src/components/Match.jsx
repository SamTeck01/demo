import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { districts, homes } from '../data/site.js'
import { money } from '../lib.js'

// Rank the districts by what the visitor told us: buy or rent, budget, and where they work.
export default function Match() {
  const [deal, setDeal] = useState('rent')
  const [budget, setBudget] = useState(9000)
  const [work, setWork] = useState('west-bay')
  const b = useId()
  const buying = deal === 'buy'
  const range = buying ? [600000, 5000000, 50000] : [4000, 25000, 250]
  const val = Math.min(Math.max(budget, range[0]), range[1])
  const ranked = districts.map(d => {
    const from = buying ? d.buyFrom : d.rentFrom
    const ok = buying ? d.freehold && from <= val : from <= val
    const commute = work === 'west-bay' ? d.toWestBay : d.toLusail
    return { ...d, ok, commute, score: (ok ? 0 : 100) + commute }
  }).sort((a, c) => a.score - c.score)
  const pick = v => { setDeal(v); setBudget(v === 'buy' ? 1500000 : 9000) }
  return (
    <section id="match" className="match" aria-labelledby="match-h">
      <div className="wrap">
        <h2 id="match-h" className="title" data-rv>Which avenue suits you?</h2>
        <div className="match-in">
          <div className="match-q">
            <div className="seg seg-dark" role="group" aria-label="Buy or rent">{[['rent', 'Rent'], ['buy', 'Buy']].map(([k, t]) => <button key={k} type="button" aria-pressed={deal === k} onClick={() => pick(k)}>{t}</button>)}</div>
            <div className="range"><label htmlFor={b}>{buying ? 'Budget' : 'Monthly budget'}</label><output htmlFor={b}>{money(val)}</output><input id={b} type="range" min={range[0]} max={range[1]} step={range[2]} value={val} onChange={e => setBudget(+e.target.value)} /></div>
            <fieldset className="work"><legend>I work in</legend>{[['west-bay', 'West Bay'], ['lusail', 'Lusail']].map(([k, t]) => <label key={k}><input type="radio" name="work" checked={work === k} onChange={() => setWork(k)} /><span>{t}</span></label>)}</fieldset>
          </div>
          <ol className="ranked" aria-live="polite">
            {ranked.map((d, i) => {
              const n = homes.filter(h => h.district === d.id && h.lease === !buying).length
              return (
                <li key={d.id} className={d.ok ? '' : 'is-out'}>
                  <img src={d.img} alt="" loading="lazy" />
                  <div>
                    <h3>{i === 0 && d.ok ? 'Best fit: ' : ''}{d.name}</h3>
                    <p>{d.ok ? d.why : buying && !d.freehold ? 'Not a freehold area for foreign buyers.' : `From ${money(buying ? d.buyFrom : d.rentFrom)}${buying ? '' : ' a month'}.`}</p>
                    <p className="ranked-meta">{d.commute} min to work{d.ok && n ? <> · <Link to={`/?deal=${buying ? 'buy' : 'lease'}&district=${d.id}#homes`}>{n} {n === 1 ? 'home' : 'homes'}</Link></> : ''}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
