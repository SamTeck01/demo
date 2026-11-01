import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { homes, office, areaName as districtName } from '../data/site.js'
import { mail, money } from '../lib.js'

export default function HomePage() {
  const { id } = useParams()
  const h = homes.find(x => x.id === id)
  const [i, setI] = useState(0)
  useEffect(() => { setI(0); if (h) document.title = `${h.title} · La’ala Al Kuwait` }, [id])
  if (!h) return <section className="wrap page-top"><h1 className="title">That home is no longer available</h1><Link className="btn" to="/#homes">See all homes</Link></section>
  const tier = null
  return (
    <section className="wrap page-top prop" aria-labelledby="prop-h">
      <Link to="/#homes" className="back">← All homes</Link>
      <div className="gallery">
        <div className="gallery-main"><img key={i} src={h.imgs[i]} alt={`${h.title}, photo ${i + 1}`} />{h.status && <span className="tag">{h.status}</span>}</div>
        <div className="gallery-thumbs" role="group" aria-label="Photos">{h.imgs.map((s, n) => <button key={n} type="button" aria-pressed={n === i} aria-label={`Photo ${n + 1}`} onClick={() => setI(n)}><img src={s} alt="" /></button>)}</div>
      </div>
      <div className="prop-body">
        <div>
          <h1 id="prop-h" className="title">{h.title}</h1>
          <p className="prop-price">{money(h.price)}{h.lease ? ' a month' : ''}</p>
          <dl className="facts"><div><dt>Area</dt><dd>{districtName(h.area)}</dd></div><div><dt>Bedrooms</dt><dd>{h.beds}</dd></div><div><dt>Baths</dt><dd>{h.baths}</dd></div><div><dt>Size</dt><dd>{h.size} m²</dd></div></dl>
          <p className="prop-text">{h.text}</p>
          {tier && <p className="tier-note">This purchase qualifies for: <b>{tier}</b></p>}
        </div>
        <aside className="side prop-side">
          <h2 className="out-h">Book a viewing</h2>
          <a className="btn" href={mail(office.email, `Viewing: ${h.title}`, [`${h.title}, ${money(h.price)}`, 'Please call me to arrange a viewing.'])}>Email Bader</a>
          <a className="btn btn-ghost" href={`tel:${office.tel}`}>Call {office.phone}</a>
        </aside>
      </div>
    </section>
  )
}
