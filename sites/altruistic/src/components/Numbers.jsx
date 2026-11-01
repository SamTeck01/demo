import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { money, monthly } from '../lib.js'

const RATE = 6.75, TAX = 0.02, INS = 310

function Field({ label, value, set, min, max, step, fmt }) {
  const id = useId()
  return (
    <div className="field">
      <label htmlFor={id}><span>{label}</span><output htmlFor={id}>{fmt(value)}</output></label>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={e => set(+e.target.value)} />
    </div>
  )
}

// Two questions Miami buyers ask first: what can I afford, and will a rental pay for itself.
export default function Numbers() {
  const [tab, setTab] = useState('rent')
  const [income, setIncome] = useState(140000), [debts, setDebts] = useState(600), [down, setDown] = useState(80000)
  const [price, setPrice] = useState(449000), [rent, setRent] = useState(3700), [hoa, setHoa] = useState(0), [pct, setPct] = useState(35)

  // Affordability: housing at 36% of gross income less debts, Florida tax and insurance included.
  const budget = income / 12 * 0.36 - debts
  const perDollar = monthly(1, RATE, 30) + TAX / 12
  const maxPrice = Math.max(0, (budget - INS + down * monthly(1, RATE, 30)) / perDollar)

  // Cash flow: rent less mortgage, tax, insurance, HOA, 8% management and 5% vacancy.
  const loan = price * (1 - pct / 100)
  const cost = monthly(loan, RATE + 0.5, 30) + price * TAX / 12 + INS + hoa + rent * 0.13
  const flow = rent - cost
  const cap = (rent * 12 * 0.87 - (price * TAX + INS * 12 + hoa * 12)) / price * 100

  return (
    <section id="numbers" className="nums" aria-labelledby="nums-h">
      <div className="wrap nums-in">
        <div className="nums-copy">
          <h2 id="nums-h" className="title" data-rv>Run the numbers first</h2>
          <p className="lede">Most of Maria Teresa’s buyers either live in the home or rent it out. Here is the honest math for both, at today’s rates.</p>
          <div className="tabs" role="tablist" aria-label="Calculator">
            <button role="tab" type="button" aria-selected={tab === 'rent'} onClick={() => setTab('rent')}>Rental cash flow</button>
            <button role="tab" type="button" aria-selected={tab === 'buy'} onClick={() => setTab('buy')}>What I can afford</button>
          </div>
        </div>
        {tab === 'buy' ? (
          <div className="calc" role="tabpanel" aria-label="What I can afford">
            <Field label="Household income a year" value={income} set={setIncome} min={50000} max={500000} step={5000} fmt={money} />
            <Field label="Car and card payments a month" value={debts} set={setDebts} min={0} max={4000} step={50} fmt={money} />
            <Field label="Cash for the down payment" value={down} set={setDown} min={10000} max={500000} step={5000} fmt={money} />
            <div className="calc-out" aria-live="polite">
              <p className="calc-big">{money(Math.round(maxPrice / 5000) * 5000)}</p>
              <p className="fine">A price you can carry at {money(budget)} a month for housing, with {RATE}% interest, Florida tax and insurance included.</p>
              <Link className="btn btn-ink" to={`/?max=${Math.round(maxPrice / 100000) * 100000}#homes`}>See homes in budget</Link>
            </div>
          </div>
        ) : (
          <div className="calc" role="tabpanel" aria-label="Rental cash flow">
            <Field label="Purchase price" value={price} set={setPrice} min={200000} max={2000000} step={5000} fmt={money} />
            <Field label="Monthly rent" value={rent} set={setRent} min={1500} max={12000} step={50} fmt={money} />
            <Field label="HOA a month" value={hoa} set={setHoa} min={0} max={2000} step={10} fmt={money} />
            <Field label="Down payment" value={pct} set={setPct} min={20} max={100} step={5} fmt={v => `${v}%`} />
            <div className="calc-out" aria-live="polite">
              <p className={'calc-big' + (flow < 0 ? ' is-neg' : '')}>{flow < 0 ? '−' : '+'}{money(Math.abs(flow))}<small> a month</small></p>
              <p className="fine">Cap rate {cap.toFixed(1)}%. After mortgage at {RATE + 0.5}% investor rate, tax, insurance, HOA, 8% management and 5% vacancy.</p>
              <Link className="btn btn-ink" to="/?type=income#homes">See income property</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
