import { useId, useMemo, useState } from 'react'
import { mail } from '../lib.js'
import { office } from '../data/site.js'

const times = ['9:30', '11:00', '13:00', '15:30', '17:00']

function days(n) {
  const out = [], d = new Date()
  while (out.length < n) {
    d.setDate(d.getDate() + 1)
    if (d.getDay() === 5) continue // Fridays by appointment only
    out.push({ key: d.toDateString(), dow: d.toLocaleDateString('en-GB', { weekday: 'short' }), day: d.getDate(), mon: d.toLocaleDateString('en-GB', { month: 'short' }) })
  }
  return out
}

// A viewing request: pick a day and a time, leave a name and number, and it opens an email ready to send.
export default function Viewing({ home }) {
  const list = useMemo(() => days(7), [])
  const [day, setDay] = useState(list[0].key)
  const [time, setTime] = useState(times[1])
  const [sent, setSent] = useState(false)
  const n = useId(), ph = useId()
  const submit = e => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    location.href = mail(office.email, `Viewing request${home ? `: ${home.title}` : ''}`, [home && `Home: ${home.title}`, `Day: ${day}`, `Time: ${time}`, `Name: ${f.get('name')}`, `Phone: ${f.get('phone')}`, f.get('note') && `Note: ${f.get('note')}`])
    setSent(true)
  }
  if (sent) return <p className="sent" role="status">Your email is ready to send. We confirm every viewing by phone within office hours.</p>
  return (
    <form className="viewing" onSubmit={submit}>
      <fieldset>
        <legend>Day</legend>
        <div className="days">
          {list.map(d => (
            <label key={d.key} className="day"><input type="radio" name="day" checked={day === d.key} onChange={() => setDay(d.key)} /><span><small>{d.dow}</small><b>{d.day}</b><small>{d.mon}</small></span></label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Time</legend>
        <div className="times">
          {times.map(t => <label key={t} className="time"><input type="radio" name="time" checked={time === t} onChange={() => setTime(t)} /><span>{t}</span></label>)}
        </div>
      </fieldset>
      <div className="fields">
        <label htmlFor={n}>Your name</label><input id={n} name="name" autoComplete="name" required />
        <label htmlFor={ph}>Phone or WhatsApp</label><input id={ph} name="phone" type="tel" autoComplete="tel" required />
      </div>
      <button className="btn btn-bronze btn-full" type="submit">Request this viewing</button>
    </form>
  )
}
