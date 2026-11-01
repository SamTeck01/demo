import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { flats, office } from '../data/site.js'
import { mail, money } from '../lib.js'

export default function Flat() {
  const { id } = useParams()
  const f = flats.find(x => x.id === id)
  const [i, setI] = useState(0)
  useEffect(() => { setI(0); if (f) document.title = `${f.title} · Taskeen Al Oula` }, [id])
  if (!f) return <section className="wrap page-top"><h1 className="title">That flat has been let</h1><Link className="btn btn-dark" to="/#flats">See all flats</Link></section>
  return (
    <section className="wrap page-top prop" aria-labelledby="prop-h">
      <Link to="/#flats" className="back">← All flats</Link>
      <div className="gallery">
        <div className="gallery-main"><img key={i} src={f.imgs[i]} alt={`${f.title}, photo ${i + 1}`} />{f.status && <span className="tag">{f.status}</span>}</div>
        <div className="gallery-thumbs" role="group" aria-label="Photos">{f.imgs.map((s, n) => <button key={n} type="button" aria-pressed={n === i} aria-label={`Photo ${n + 1}`} onClick={() => setI(n)}><img src={s} alt="" /></button>)}</div>
      </div>
      <div className="prop-body">
        <div>
          <h1 id="prop-h" className="title">{f.title}</h1>
          <p className="prop-price">{money(f.rent)} a month</p>
          <dl className="facts"><div><dt>Area</dt><dd>{f.area}</dd></div><div><dt>Bedrooms</dt><dd>{f.beds}</dd></div><div><dt>Baths</dt><dd>{f.baths}</dd></div><div><dt>Size</dt><dd>{f.size} m²</dd></div></dl>
          <p className="prop-text">{f.text} Rent is paid in the Taskeen app, and maintenance answers 24 hours a day.</p>
        </div>
        <aside className="prop-side">
          <h2 className="out-h">Ask about this flat</h2>
          <a className="btn btn-orange" href={mail(office.email, `Flat enquiry: ${f.title}`, [`Flat: ${f.title}, ${money(f.rent)} a month`, 'Please call me to arrange a viewing.'])}>Email leasing</a>
          <a className="btn btn-line" href={`tel:${office.tel}`}>Call {office.phone}</a>
        </aside>
      </div>
    </section>
  )
}
