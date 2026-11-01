import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLang } from './Lang.jsx'
import { office } from '../data/site.js'

export default function PhoneBar() {
  const { t } = useLang()
  const [shown, setShown] = useState(false)
  useEffect(() => {
    let last = scrollY
    const f = () => { const y = scrollY; if (Math.abs(y - last) > 6) { setShown(y > innerHeight * 0.8 && y < last); last = y } }
    addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f)
  }, [])
  return (
    <div className={'bar' + (shown ? '' : ' is-away')}>
      <a href={`tel:${office.tel}`}>{t.call}</a>
      <a href={`https://wa.me/${office.tel.slice(1)}`} target="_blank" rel="noreferrer">WhatsApp</a>
      <Link className="bar-main" to="/#pay">{t.calc}</Link>
    </div>
  )
}
