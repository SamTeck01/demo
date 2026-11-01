import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { office, wa } from '../data/site.js'

export default function PhoneBar() {
  const [shown, setShown] = useState(false)
  useEffect(() => {
    let last = scrollY
    const f = () => { const y = scrollY; if (Math.abs(y - last) > 6) { setShown(y > innerHeight * 0.8 && y < last); last = y } }
    addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f)
  }, [])
  return (
    <div className={'bar' + (shown ? '' : ' is-away')}>
      <a href={`tel:${office.tel}`}>Call</a>
      <a href={wa('Hello Glory, I would like to know more about Breeze of Dilmunia.')} target="_blank" rel="noreferrer">WhatsApp</a>
      <Link className="bar-main" to="/#plan">My plan</Link>
    </div>
  )
}
