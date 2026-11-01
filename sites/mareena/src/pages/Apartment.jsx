import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { apts, wa } from '../data/site.js'
import { money } from '../lib.js'

export default function Apartment() {
  const { id } = useParams()
  const a = apts.find(x => x.id === id)
  const [i, setI] = useState(0)
  useEffect(() => { setI(0); if (a) document.title = `${a.title} · Mareena Tower` }, [id])
  if (!a) return <section className="wrap page-top"><h1 className="title">That apartment is taken</h1><Link className="boxbtn" to="/#apartments">See the others</Link></section>
  return (
    <section className="wrap page-top prop" aria-labelledby="prop-h">
      <Link to="/#apartments" className="back">← All apartments</Link>
      <div className="gallery">
        <div className="gallery-main"><img key={i} src={a.imgs[i]} alt={`${a.title}, photo ${i + 1}`} /></div>
        <div className="gallery-thumbs" role="group" aria-label="Photos">{a.imgs.map((s, n) => <button key={n} type="button" aria-pressed={n === i} aria-label={`Photo ${n + 1}`} onClick={() => setI(n)}><img src={s} alt="" /></button>)}</div>
      </div>
      <div className="prop-body">
        <div>
          <h1 id="prop-h" className="title">{a.title}</h1>
          <p className="prop-price">from {money(a.rent)} a month</p>
          <dl className="hours"><div><dt>Bedrooms</dt><dd>{a.beds || 'Studio'}</dd></div><div><dt>Bathrooms</dt><dd>{a.baths}</dd></div><div><dt>Size</dt><dd>{a.size} m²</dd></div><div><dt>Furnishing</dt><dd>{a.furnished ? 'Furnished' : 'Unfurnished'}</dd></div></dl>
          <p className="prop-text">{a.text}</p>
        </div>
        <aside className="stay-out prop-side">
          <a className="boxbtn" href={wa(`Hello Mareena Tower, is the ${a.title.toLowerCase()} available? I would like to view it.`)} target="_blank" rel="noreferrer">Ask on WhatsApp <span aria-hidden="true">»</span></a>
          <Link className="boxbtn boxbtn-line" to="/#stay">Plan the stay</Link>
        </aside>
      </div>
    </section>
  )
}
