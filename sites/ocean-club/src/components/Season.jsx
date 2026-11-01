import { useId, useState } from 'react'
import { office, towers } from '../data/site.js'
import { mail, money } from '../lib.js'

const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May']
const peak = { Dec: 1.15, Jan: 1.2, Feb: 1.25, Mar: 1.2 }

// Owners choose the months to let; peak months earn more. Our fee comes off the top.
export default function Season() {
  const [tower, setTower] = useState('ocean-tower-one')
  const [on, setOn] = useState(new Set(['Dec', 'Jan', 'Feb', 'Mar']))
  const sel = useId()
  const t = towers.find(x => x.id === tower)
  const gross = months.filter(m => on.has(m)).reduce((s, m) => s + t.season * (peak[m] || 0.85), 0)
  const fee = gross * 0.15
  const toggle = m => setOn(s => { const n = new Set(s); n.has(m) ? n.delete(m) : n.add(m); return n })
  const href = mail(office.email, 'Seasonal rental for my unit', [`Tower: ${t.name}`, `Months: ${months.filter(m => on.has(m)).join(', ')}`, `Online estimate: ${money(gross - fee)}`])
  return (
    <section id="season" className="season" aria-labelledby="season-h">
      <div className="wrap season-in">
        <div>
          <h2 id="season-h" className="title" data-rv>Own here? Let it for the season.</h2>
          <p className="lede" data-rv>We find the guests, check them in, clean between stays and look after the unit from the office downstairs.</p>
          <label className="field" htmlFor={sel}><span>Your tower</span>
            <select id={sel} value={tower} onChange={e => setTower(e.target.value)}>{towers.map(x => <option key={x.id} value={x.id}>{x.name}</option>)}</select>
          </label>
          <fieldset className="months"><legend>Months to let</legend>
            {months.map(m => <label key={m} className="month"><input type="checkbox" checked={on.has(m)} onChange={() => toggle(m)} /><span>{m}</span></label>)}
          </fieldset>
        </div>
        <div className="season-out" aria-live="polite">
          <h3 className="panel-h">Your season</h3>
          <p className="season-n">{money(gross - fee)}</p>
          <p className="season-l">to you this season, after our 15% management</p>
          <dl className="ledger">
            <div><dt>Rent for {on.size} {on.size === 1 ? 'month' : 'months'}</dt><dd>{money(gross)}</dd></div>
            <div><dt>Management</dt><dd>−{money(fee)}</dd></div>
          </dl>
          <a className="pill pill-full" href={href}>Ask us to let it</a>
          <p className="fine">Sample rates. Peak months from December to March earn more.</p>
        </div>
      </div>
    </section>
  )
}
