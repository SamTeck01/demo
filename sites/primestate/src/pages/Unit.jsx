import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { units, buildingOf, wa } from '../data/site.js'
import { money } from '../lib.js'

export default function Unit() {
  const { id } = useParams()
  const u = units.find(x => x.id === id)
  const [i, setI] = useState(0)
  useEffect(() => { setI(0); if (u) document.title = `${buildingOf(u.building).name}, ${u.title} · PrimeState` }, [id])
  if (!u) return <section className="wrap page-top"><h1 className="title">That unit has been let</h1><Link className="box box-solid" to="/#units">See units</Link></section>
  const b = buildingOf(u.building)
  return (
    <section className="wrap page-top prop" aria-labelledby="prop-h">
      <Link to="/#units" className="back">← All units</Link>
      <div className="gallery">
        <div className="gallery-main"><img key={i} src={u.imgs[i]} alt={`${u.title}, photo ${i + 1}`} /></div>
        <div className="gallery-thumbs" role="group" aria-label="Photos">{u.imgs.map((s, n) => <button key={n} type="button" aria-pressed={n === i} aria-label={`Photo ${n + 1}`} onClick={() => setI(n)}><img src={s} alt="" /></button>)}</div>
      </div>
      <div className="prop-body">
        <div>
          <h1 id="prop-h" className="title">{b.name}, {u.title.toLowerCase()}</h1>
          <p className="prop-price">{money(u.price)}{u.lease ? ' a month' : ''}</p>
          <dl className="ledger">
            <div><dt>Bedrooms</dt><dd>{u.beds}</dd></div><div><dt>Bathrooms</dt><dd>{u.baths}</dd></div><div><dt>Size</dt><dd>{u.size} m²</dd></div>
            {u.bills && <div><dt>Bills</dt><dd>{u.bills}</dd></div>}<div><dt>Location</dt><dd>{b.place}</dd></div>
          </dl>
          <p className="prop-text">{u.text}</p>
        </div>
        <aside className="cost-out prop-side">
          <h2 className="out-h">See it this week</h2>
          <a className="box box-solid" href={wa(`Hello PrimeState, I would like to view ${b.name}, ${u.title} (${money(u.price)}${u.lease ? ' a month' : ''}).`)} target="_blank" rel="noreferrer">Book on WhatsApp</a>
          <Link className="box" to="/#cost">Work out the move-in cost</Link>
        </aside>
      </div>
    </section>
  )
}
