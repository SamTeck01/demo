import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { props, office } from '../data/site.js'
import { mail, money } from '../lib.js'

export default function Property() {
  const { id } = useParams()
  const x = props.find(p => p.id === id)
  const [i, setI] = useState(0)
  useEffect(() => { setI(0); if (x) document.title = `${x.title} · Sayed Mahdi Real Estate` }, [id])
  if (!x) return <section className="wrap page-top"><h1 className="title">That property has sold</h1><Link className="pill" to="/#properties">See the others</Link></section>
  return (
    <section className="wrap page-top prop" aria-labelledby="prop-h">
      <Link to="/#properties" className="back">← All properties</Link>
      <div className="gallery">
        <div className="gallery-main"><img key={i} src={x.imgs[i]} alt={`${x.title}, photo ${i + 1}`} />{x.tag && <span className="tag">{x.tag}</span>}</div>
        {x.imgs.length > 1 && <div className="gallery-thumbs" role="group" aria-label="Photos">{x.imgs.map((s, n) => <button key={n} type="button" aria-pressed={n === i} aria-label={`Photo ${n + 1}`} onClick={() => setI(n)}><img src={s} alt="" /></button>)}</div>}
      </div>
      <div className="prop-body">
        <div>
          <h1 id="prop-h" className="title">{x.title}</h1>
          <p className="prop-price">{money(x.price)}</p>
          <dl className="hours"><div><dt>Type</dt><dd>{x.kind}</dd></div><div><dt>Area</dt><dd>{x.area}</dd></div><div><dt>Size</dt><dd>{x.size}</dd></div>{x.beds ? <div><dt>Bedrooms</dt><dd>{x.beds}</dd></div> : null}</dl>
          <p className="prop-text">{x.text}</p>
        </div>
        <aside className="value-out prop-side">
          <h2 className="side-h">Arrange a viewing</h2>
          <a className="pill pill-light" href={mail(office.email, `Viewing: ${x.title}`, [`${x.title}, ${money(x.price)}`, 'Please call me to arrange a viewing.'])}>Email the office</a>
          <a className="pill pill-line" href={`tel:${office.tel}`}>Call {office.phone}</a>
        </aside>
      </div>
    </section>
  )
}
