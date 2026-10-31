import { useState } from 'react'
import { office } from '../data/site.js'
import { mail } from '../lib.js'

const options = [
  { id: 'prep', name: 'Repairs and touch-ups', weeks: 2, step: 'Drew walks the house with you and books the trades he trusts.' },
  { id: 'stage', name: 'Staging', weeks: 1, step: 'Furniture and styling so every room photographs at its best.' },
  { id: 'photo', name: 'Photography and film', weeks: 1, step: 'A full day of photography and a short film of the home.' },
  { id: 'twilight', name: 'Twilight shoot', weeks: 0, step: 'One evening session for the lit-up exterior.' },
  { id: 'soon', name: 'Coming-soon preview', weeks: 1, step: 'A week shown only to agents and buyers before it goes public.' },
]

// The seller ticks what the home needs and sees the weeks to market Drew would run.
export default function Plan() {
  const [on, setOn] = useState(new Set(['prep', 'photo', 'soon']))
  const toggle = id => setOn(s => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n })
  const chosen = options.filter(o => on.has(o.id))
  const steps = [{ name: 'Pricing visit', weeks: 0, step: 'Drew prices the home on recent sales on your street.' }, ...chosen, { name: 'On the market', weeks: 0, step: 'Showings, offers and negotiation, all handled by Drew.' }]
  let w = 0
  const timeline = steps.map(s => { const start = w; w += s.weeks; return { ...s, start } })
  const href = mail(office.email, 'A launch plan for my home', ['I would like this plan:', ...chosen.map(c => `· ${c.name}`), `About ${w} weeks to market.`])
  return (
    <section id="plan" className="plan wrap" aria-labelledby="plan-h">
      <div className="plan-pick">
        <h2 id="plan-h" className="title" data-rv>Plan your launch</h2>
        <p className="lede" data-rv>Tick what your home needs. Drew runs every step himself.</p>
        <fieldset className="opts"><legend className="sr">Services</legend>
          {options.map(o => (
            <label key={o.id} className="opt"><input type="checkbox" checked={on.has(o.id)} onChange={() => toggle(o.id)} /><span className="opt-box" aria-hidden="true" /><span>{o.name}</span><span className="opt-w">{o.weeks ? `${o.weeks} wk` : 'same week'}</span></label>
          ))}
        </fieldset>
      </div>
      <div className="plan-out" aria-live="polite">
        <p className="plan-total"><span>{w === 0 ? 'This week' : `${w} ${w === 1 ? 'week' : 'weeks'}`}</span>to the market</p>
        <ol className="timeline">
          {timeline.map(s => <li key={s.name}><span className="tl-week">Week {s.start + 1}</span><div><h3>{s.name}</h3><p>{s.step}</p></div></li>)}
        </ol>
        <a className="pill pill-light" href={href}>Ask Drew for this plan</a>
      </div>
    </section>
  )
}
