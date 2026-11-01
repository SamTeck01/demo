import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { office } from '../data/site.js'

export default function PhoneBar() {
  const [shown, setShown] = useState(false)
  useEffect(() => {
    let last = scrollY
    const f = () => { const y = scrollY; if (Math.abs(y - last) > 6) { setShown(y > innerHeight * 0.8 && y < last); last = y } }
    addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f)
  }, [])
  return (
    <div className={'bar' + (shown ? '' : ' is-away')}>
      <a href={`mailto:${office.email}`}>Email</a>
      <Link to="/#match">Districts</Link>
      <Link className="bar-main" to="/#contact">Book a viewing</Link>
    </div>
  )
}
