import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Homes from '../components/Homes.jsx'
import Residency from '../components/Residency.jsx'
import Districts from '../components/Districts.jsx'
import Landlords from '../components/Landlords.jsx'
import Contact from '../components/Contact.jsx'
import { useReveal } from '../lib.js'

export default function Home() {
  const { hash, search } = useLocation()
  useReveal(search)
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }))
  }, [hash, search])
  return (<><Hero /><Homes /><Residency /><Districts /><Landlords /><Contact /></>)
}
