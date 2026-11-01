import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { homes } from '../data/site.js'
import { money } from '../lib.js'

// Qatar links some property purchases to residency. The checker shows what a price unlocks.
const tiers = [
  { min: 0, name: 'No residency link', text: 'You can still own freehold in the designated zones; residency comes through work or family.' },
  { min: 730000, name: 'Residence permit', text: 'Owning property of QAR 730,000 or more lets you apply for a residence permit for you and your family, renewed while you own it.' },
  { min: 3650000, name: 'Permanent residency benefits', text: 'From QAR 3,650,000, owners can apply for residency with benefits including education, health care and some investment rights.' },
]

export default function Residency() {
  const [price, setPrice] = useState(1850000)
  const id = useId()
  const tier = [...tiers].reverse().find(t => price >= t.min)
  const n = homes.filter(h => !h.lease && h.price >= tier.min).length
  return (
    <section id="residency" className="res" aria-labelledby="res-h">
      <div className="wrap res-in">
        <div>
          <h2 id="res-h" className="title" data-rv>Buy a home, gain residency</h2>
          <p className="lede" data-rv>Move the price to see what the purchase can unlock for you and your family in Qatar.</p>
          <div className="range"><label htmlFor={id}>Property price</label><output htmlFor={id}>{money(price)}</output><input id={id} type="range" min="300000" max="8000000" step="10000" value={price} onChange={e => setPrice(+e.target.value)} /></div>
          <ol className="tiers">{tiers.map(t => <li key={t.name} className={price >= t.min ? 'is-on' : ''}><b>{t.name}</b><span>{t.min ? `From ${money(t.min)}` : 'Any price'}</span></li>)}</ol>
        </div>
        <div className="res-out" aria-live="polite">
          <h3 className="out-h">{tier.name}</h3>
          <p>{tier.text}</p>
          <Link className="btn" to={`/?min=${tier.min}#homes`}>{n} {n === 1 ? 'home' : 'homes'} for sale at this level</Link>
          <p className="fine">Rules set by the Ministry of Interior and the Real Estate Registration Department; Wabrah checks the current requirements for your case.</p>
        </div>
      </div>
    </section>
  )
}
