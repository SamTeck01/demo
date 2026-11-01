import { useId, useState } from 'react'
import { office } from '../data/site.js'
import { mail, money } from '../lib.js'

// Khiran chalets let by the weekend. Owners see the season before they hand over the keys.
export default function Chalets() {
  const [weekends, setWeekends] = useState(30)
  const [rate, setRate] = useState(250)
  const [weekdays, setWeekdays] = useState(false)
  const a = useId(), b = useId()
  const gross = weekends * rate + (weekdays ? weekends * 0.5 * rate * 0.6 : 0)
  const fee = gross * 0.15
  return (
    <section id="chalets" className="chal" aria-labelledby="chal-h">
      <div className="wrap chal-in">
        <div>
          <h2 id="chal-h" className="title" data-rv>Own a chalet in Khiran? Let it by the weekend.</h2>
          <p className="lede" data-rv>We take the bookings, check guests in, clean between stays and keep the pool and garden ready.</p>
          <div className="range"><label htmlFor={a}>Weekends let a year</label><output htmlFor={a}>{weekends}</output><input id={a} type="range" min="8" max="52" value={weekends} onChange={e => setWeekends(+e.target.value)} /></div>
          <div className="range"><label htmlFor={b}>Weekend rate (Thursday to Saturday)</label><output htmlFor={b}>{money(rate)}</output><input id={b} type="range" min="120" max="600" step="10" value={rate} onChange={e => setRate(+e.target.value)} /></div>
          <label className="check"><input type="checkbox" checked={weekdays} onChange={e => setWeekdays(e.target.checked)} /><span>Also let some weekdays</span></label>
        </div>
        <div className="chal-out" aria-live="polite">
          <p className="big">{money(gross - fee)}</p>
          <p className="big-l">a year to you, after our 15% management</p>
          <a className="btn btn-light" href={mail(office.email, 'Letting my Khiran chalet', [`Weekends a year: ${weekends}`, `Weekend rate: ${money(rate)}`, `Weekdays too: ${weekdays ? 'yes' : 'no'}`])}>Let my chalet with La’ala</a>
          <p className="fine">Sample rates; summer and holiday weekends earn more.</p>
        </div>
      </div>
    </section>
  )
}
