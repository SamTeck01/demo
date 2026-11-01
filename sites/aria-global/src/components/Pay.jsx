import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from './Lang.jsx'
import { money, monthly } from '../lib.js'

// Buying from abroad changes the deal: a bigger down payment and a higher rate.
export default function Pay() {
  const { t } = useLang()
  const [who, setWho] = useState('local')
  const [price, setPrice] = useState(720000)
  const [down, setDown] = useState(20)
  const a = useId(), b = useId()
  const abroad = who === 'abroad'
  const d = abroad ? Math.max(down, 30) : down
  const rate = abroad ? 7.6 : 6.6
  const m = monthly(price * (1 - d / 100), rate, 30) + price * 0.02 / 12 + 330
  const pick = w => { setWho(w); if (w === 'abroad' && down < 30) setDown(30) }
  return (
    <section id="pay" className="pay" aria-labelledby="pay-h">
      <div className="pay-out">
        <h2 id="pay-h" className="title" data-rv>{t.payH}</h2>
        <p className="pay-n" aria-live="polite"><b>{money(m)}</b>{t.perMonth}</p>
        <dl className="pay-facts">
          <div><dt>{t.cash}</dt><dd>{money(price * d / 100)}</dd></div>
          <div><dt>{t.income}</dt><dd>{money(m / 0.31 * 12)} {t.year}</dd></div>
          <div><dt>{t.rate}</dt><dd>{rate.toFixed(1)}%</dd></div>
        </dl>
      </div>
      <div className="pay-in">
        <p className="pay-note">{t.payNote}</p>
        <div className="seg" role="group" aria-label={t.who}>
          {[['local', t.local], ['abroad', t.abroad]].map(([k, l]) => <button key={k} type="button" aria-pressed={who === k} onClick={() => pick(k)}>{l}</button>)}
        </div>
        <div className="range"><label htmlFor={a}>{t.price}</label><output htmlFor={a}>{money(price)}</output><input id={a} type="range" min="250000" max="3000000" step="10000" value={price} onChange={e => setPrice(+e.target.value)} /></div>
        <div className="range"><label htmlFor={b}>{t.down}</label><output htmlFor={b}>{d}%</output><input id={b} type="range" min={abroad ? 30 : 3} max="60" step="1" value={d} onChange={e => setDown(+e.target.value)} /></div>
        {abroad && <p className="fine">{t.abroadNote}</p>}
        <Link className="btn btn-ink" to={`/?kind=sale#homes`}>{t.match}</Link>
      </div>
    </section>
  )
}
