import { useState } from 'react'
import { Link } from 'react-router-dom'
import FloorPlan from './Plan.jsx'
import { buildings, units } from '../data/site.js'

const Arr = ({ d }) => <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><path d={d} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>

// The reference's residence panel, turned into a picker for the three buildings.
export default function Hero() {
  const [b, setB] = useState(0)
  const [p, setP] = useState(0)
  const x = buildings[b]
  const n = units.filter(u => u.building === x.id).length
  const go = d => { setB((b + d + buildings.length) % buildings.length); setP(0) }
  return (
    <section id="top" className="hero" aria-labelledby="hero-h">
      <div className="panel" aria-live="polite">
        <div className="panel-top" key={x.id}>
          <h1 id="hero-h" className="hero-h">{x.name}</h1>
          <p className="hero-line">{x.line}</p>
          <dl className="specs">{x.specs.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          <Link className="box box-solid" to={`/?building=${x.id}#units`}>{n} {n === 1 ? 'unit' : 'units'} available</Link>
        </div>
        <div className="panel-plan">
          <FloorPlan kind={x.plan} label={`Typical floor plan at ${x.name}`} />
          <div className="switch">
            <button type="button" onClick={() => go(-1)} aria-label="Previous building"><Arr d="m12 5-5 5 5 5" /></button>
            <span>Building {b + 1} of {buildings.length}</span>
            <button type="button" onClick={() => go(1)} aria-label="Next building"><Arr d="m8 5 5 5-5 5" /></button>
          </div>
        </div>
      </div>
      <div className="photo">
        <img key={x.photos[p]} src={x.photos[p]} alt={`${x.name}, photo ${p + 1}`} fetchpriority="high" />
        <div className="photo-foot">
          <span>{x.place}, Qatar</span>
          <span className="switch">
            <button type="button" onClick={() => setP((p - 1 + x.photos.length) % x.photos.length)} aria-label="Previous photo"><Arr d="m12 5-5 5 5 5" /></button>
            <b>Photo {p + 1} of {x.photos.length}</b>
            <button type="button" onClick={() => setP((p + 1) % x.photos.length)} aria-label="Next photo"><Arr d="m8 5 5 5-5 5" /></button>
          </span>
        </div>
      </div>
    </section>
  )
}
