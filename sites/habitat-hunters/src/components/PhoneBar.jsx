import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { office } from '../data/site.js'

// On phones the two actions that bring business stay one thumb away.
// It steps aside while the visitor reads downward and returns as soon as they scroll back up.
export default function PhoneBar() {
  const [shown, setShown] = useState(false)
  useEffect(() => {
    let last = scrollY
    const f = () => {
      const y = scrollY
      if (Math.abs(y - last) > 6) { setShown(y > innerHeight * 0.8 && y < last); last = y }
    }
    addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  return (
    <div className={'bar' + (shown ? '' : ' is-away')}>
      <a href={`tel:${office.tel}`}>Call</a>
      <a href={`mailto:${office.email}`}>Email</a>
      <Link className="bar-main" to="/#sell">Price my home</Link>
    </div>
  )
}
