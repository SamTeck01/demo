import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Apartments from '../components/Apartments.jsx'
import Stay from '../components/Stay.jsx'
import Tower from '../components/Tower.jsx'
import Faq from '../components/Faq.jsx'
import Visit from '../components/Visit.jsx'
import { useReveal } from '../lib.js'

export default function Home() {
  const { hash, search } = useLocation()
  useReveal(search)
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }))
  }, [hash, search])
  return (<><Hero /><Apartments /><Stay /><Tower /><Faq /><Visit /></>)
}
