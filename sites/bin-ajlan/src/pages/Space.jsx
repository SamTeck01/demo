import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { spaces as homes, office, typeName } from '../data/site.js'
import { mail, money } from '../lib.js'

export default function Space() {
  const { id } = useParams()
  const h = homes.find(x => x.id === id)
  const [i, setI] = useState(0)
  useEffect(() => { setI(0); if (h) document.title = `${h.title} · Bin Ajlan Properties` }, [id])
  if (!h) return <section className="wrap page-top"><h1 className="title">That space has gone</h1><Link className="pill pill-orange" to="/#stock">See all spaces</Link></section>
  const tier = null
  return (
    <section className="wrap page-top prop" aria-labelledby="prop-h">
      <Link to="/#stock" className="back">← All spaces</Link>
      <div className="gallery">
        <div className="gallery-main"><img key={i} src={h.imgs[i]} alt={`${h.title}, photo ${i + 1}`} />{h.status && <span className="tag">{h.status}</span>}</div>
        <div className="gallery-thumbs" role="group" aria-label="Photos">{h.imgs.map((s, n) => <button key={n} type="button" aria-pressed={n === i} aria-label={`Photo ${n + 1}`} onClick={() => setI(n)}><img src={s} alt="" /></button>)}</div>
      </div>
      <div className="prop-body">
        <div>
          <h1 id="prop-h" className="title">{h.title}</h1>
          <p className="prop-price">{money(h.price)}{h.lease ? ' a month' : ''}</p>
          <dl className="facts"><div><dt>Type</dt><dd>{typeName(h.type)}</dd></div><div><dt>Area</dt><dd>{h.area}</dd></div><div><dt>Deal</dt><dd>{h.lease ? 'Lease' : 'Sale'}</dd></div><div><dt>Size</dt><dd>{h.size} m²</dd></div></dl>
          <p className="prop-text">{h.text}</p>
          {tier && <p className="tier-note">This purchase qualifies for: <b>{tier}</b></p>}
        </div>
        <aside className="side prop-side">
          <h2 className="out-h">Arrange a site visit</h2>
          <a className="pill pill-orange" href={mail(office.email, `Viewing: ${h.title}`, [`${h.title}, ${money(h.price)}`, 'Please call me to arrange a viewing.'])}>Email the office</a>
          <a className="pill" href={`tel:${office.tel}`}>Call {office.phone}</a>
        </aside>
      </div>
    </section>
  )
}
