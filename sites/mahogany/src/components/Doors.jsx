import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { areas, office } from '../data/site.js'
import { mail, money, monthly } from '../lib.js'

// Two doors, the two ways Angellet earns: sellers and first-time buyers.
export default function Doors() {
  const [door, setDoor] = useState('sell')
  return (
    <section id="doors" className="doors" aria-labelledby="doors-h">
      <div className="wrap">
        <h2 id="doors-h" className="title" data-rv>Selling or buying?</h2>
        <div className="seg" role="tablist" aria-label="Choose">
          <button type="button" role="tab" aria-selected={door === 'sell'} onClick={() => setDoor('sell')}>I’m selling</button>
          <button type="button" role="tab" aria-selected={door === 'buy'} onClick={() => setDoor('buy')}>I’m buying my first home</button>
        </div>
        <div role="tabpanel" key={door} className="door-panel">{door === 'sell' ? <Sell /> : <Buy />}</div>
      </div>
    </section>
  )
}

function Sell() {
  const [area, setArea] = useState('decatur')
  const [sqft, setSqft] = useState(1800)
  const a = useId(), b = useId()
  const r = areas.find(x => x.id === area).rate
  const lo = Math.round(sqft * r * 0.95 / 5000) * 5000, hi = Math.round(sqft * r * 1.05 / 5000) * 5000
  const href = mail(office.email, 'Free market analysis', [`Neighbourhood: ${areas.find(x => x.id === area).name}`, `Size: ${sqft} sq ft`, `Online range: ${money(lo)} to ${money(hi)}`])
  return (
    <div className="door">
      <div className="door-in">
        <label className="field" htmlFor={a}><span>Neighbourhood</span><select id={a} value={area} onChange={e => setArea(e.target.value)}>{areas.map(x => <option key={x.id} value={x.id}>{x.name}</option>)}</select></label>
        <div className="range"><label htmlFor={b}>Size</label><output htmlFor={b}>{sqft.toLocaleString('en-US')} sq ft</output><input id={b} type="range" min="700" max="4500" step="50" value={sqft} onChange={e => setSqft(+e.target.value)} /></div>
      </div>
      <div className="door-out" aria-live="polite">
        <p className="big">{money(lo)} – {money(hi)}</p>
        <p>An online range from recent sales. Angellet confirms it with a free market analysis.</p>
        <a className="pill" href={href}>Send me the full analysis</a>
      </div>
    </div>
  )
}

function Buy() {
  const [price, setPrice] = useState(365000)
  const [dpa, setDpa] = useState(true)
  const a = useId()
  const down = price * 0.035, assist = dpa ? Math.min(10000, price * 0.05) : 0
  const m = monthly(price - down, 6.6, 30) + price * 0.013 / 12 + 140
  return (
    <div className="door">
      <div className="door-in">
        <div className="range"><label htmlFor={a}>Home price</label><output htmlFor={a}>{money(price)}</output><input id={a} type="range" min="150000" max="700000" step="5000" value={price} onChange={e => setPrice(+e.target.value)} /></div>
        <label className="check"><input type="checkbox" checked={dpa} onChange={e => setDpa(e.target.checked)} /><span>Use Georgia Dream down-payment assistance</span></label>
        <p className="fine">FHA loan with 3.5% down, 6.6% rate, DeKalb tax and insurance. Assistance shown up to $10,000; eligibility depends on income.</p>
      </div>
      <div className="door-out" aria-live="polite">
        <p className="big">{money(m)}</p>
        <p>a month, with tax and insurance</p>
        <dl className="ledger">
          <div><dt>Down payment</dt><dd>{money(down)}</dd></div>
          <div><dt>Assistance</dt><dd>−{money(assist)}</dd></div>
          <div className="is-sum"><dt>Cash you bring for the down payment</dt><dd>{money(Math.max(down - assist, 0))}</dd></div>
        </dl>
        <Link className="pill" to="/#homes">See homes in this budget</Link>
      </div>
    </div>
  )
}
