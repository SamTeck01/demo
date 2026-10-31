import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { money, monthly } from '../lib.js'

const GOLDEN = 200000

// The question every overseas buyer asks first: can I buy, and what does it really cost?
export default function Costs() {
  const [price, setPrice] = useState(235000)
  const [dep, setDep] = useState(30)
  const [years, setYears] = useState(20)
  const p = useId(), d = useId(), y = useId()
  const deposit = price * dep / 100, fee = price * 0.02, loan = price - deposit
  const pay = monthly(loan, 6.25, years)
  const golden = price >= GOLDEN
  return (
    <section id="costs" className="costs" aria-labelledby="costs-h">
      <div className="wrap costs-in">
        <div className="costs-copy">
          <h2 id="costs-h" className="title" data-rv>Buying from abroad? Here is the whole cost.</h2>
          <p className="lede" data-rv>Every nationality can own freehold on the islands. Move the price and the deposit to see the cash you need, the fees and the monthly payment.</p>
          <div className={'golden' + (golden ? ' is-yes' : '')} aria-live="polite">
            <strong>{golden ? 'This home qualifies for a Golden Residency visa.' : `Add ${money(GOLDEN - price)} to qualify for a Golden Residency visa.`}</strong>
            <span>A 10-year renewable residency for owners of property worth BHD 200,000 or more. We handle the application.</span>
          </div>
        </div>
        <div className="costs-panel">
          <h3 className="subtitle panel-h">Your costs</h3>
          <p className="big-figure" aria-live="polite"><span>{dep === 100 ? 'No mortgage' : money(pay)}</span>{dep === 100 ? 'Paid in cash' : 'a month on the mortgage'}</p>
          <div className="range">
            <label htmlFor={p}>Property price</label><output htmlFor={p}>{money(price)}</output>
            <input id={p} type="range" min="60000" max="600000" step="5000" value={price} onChange={e => setPrice(+e.target.value)} />
          </div>
          <div className="range">
            <label htmlFor={d}>Deposit</label><output htmlFor={d}>{dep}%</output>
            <input id={d} type="range" min="20" max="100" step="5" value={dep} onChange={e => setDep(+e.target.value)} />
          </div>
          <div className="range">
            <label htmlFor={y}>Mortgage term</label><output htmlFor={y}>{years} years</output>
            <input id={y} type="range" min="5" max="25" step="1" value={years} disabled={dep === 100} onChange={e => setYears(+e.target.value)} />
          </div>
          <dl className="ledger">
            <div><dt>Deposit</dt><dd>{money(deposit)}</dd></div>
            <div><dt>Registration fee (2%)</dt><dd>{money(fee)}</dd></div>
            <div className="is-sum"><dt>Cash needed at signing</dt><dd>{money(deposit + fee)}</dd></div>
            </dl>
          
          <p className="fine">At 6.25% from a Bahraini bank. Your lender confirms the rate.</p>
          <Link className="btn btn-bronze" to={`/?max=${Math.ceil(price / 100000) * 100000 > 500000 ? '' : Math.ceil(price / 100000) * 100000}#homes`}>Show homes at this price</Link>
        </div>
      </div>
    </section>
  )
}
