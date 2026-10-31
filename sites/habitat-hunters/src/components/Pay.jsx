import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { money, monthly } from '../lib.js'

// Austin's property tax is the number buyers forget. This puts it in the bar, next to the loan.
export default function Pay() {
  const [price, setPrice] = useState(625000)
  const [down, setDown] = useState(20)
  const [rate, setRate] = useState(6.5)
  const a = useId(), b = useId(), c = useId()
  const loan = monthly(price * (1 - down / 100), rate, 30), tax = price * 0.019 / 12, ins = 180
  const total = loan + tax + ins
  const parts = [['Loan', loan, 'var(--brown)'], ['Property tax', tax, 'var(--clay)'], ['Insurance', ins, 'var(--sage)']]
  return (
    <section id="pay" className="pay wrap" aria-labelledby="pay-h">
      <div className="pay-copy">
        <h2 id="pay-h" className="title" data-rv>What would you pay a month?</h2>
        <p className="lede" data-rv>Austin taxes surprise people, so this adds them in with insurance. The number you see is the number to budget.</p>
        <p className="pay-total" aria-live="polite"><span>{money(total)}</span>a month, all in</p>
        <div className="stack" aria-hidden="true">{parts.map(([t, v, col]) => <span key={t} style={{ flexGrow: v, background: col }} />)}</div>
        <ul className="legend">{parts.map(([t, v, col]) => <li key={t}><i style={{ background: col }} />{t} <b>{money(v)}</b></li>)}</ul>
      </div>
      <div className="panel">
        <div className="range"><label htmlFor={a}>Home price</label><output htmlFor={a}>{money(price)}</output><input id={a} type="range" min="250000" max="2000000" step="5000" value={price} onChange={e => setPrice(+e.target.value)} /></div>
        <div className="range"><label htmlFor={b}>Down payment</label><output htmlFor={b}>{down}% · {money(price * down / 100)}</output><input id={b} type="range" min="3" max="40" step="1" value={down} onChange={e => setDown(+e.target.value)} /></div>
        <div className="range"><label htmlFor={c}>Interest rate</label><output htmlFor={c}>{rate.toFixed(2)}%</output><input id={c} type="range" min="4" max="9" step="0.125" value={rate} onChange={e => setRate(+e.target.value)} /></div>
        <p className="fine">30-year loan. Tax at a 1.9% Travis County estimate. Your lender confirms the real figures.</p>
        <Link className="btn btn-ink btn-full" to={`/?max=${[450000, 650000, 900000, 1500000].find(v => v >= price) || ''}#homes`}>See homes at this price</Link>
      </div>
    </section>
  )
}
