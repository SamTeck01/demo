import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Areas from '../components/Areas.jsx'
import Homes from '../components/Homes.jsx'
import Pay from '../components/Pay.jsx'
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
  return (<><Hero /><Areas /><Homes /><Pay /><Contact /></>)
}
