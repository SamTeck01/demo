import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Family from '../components/Family.jsx'
import Areas from '../components/Areas.jsx'
import Homes from '../components/Homes.jsx'
import Sell from '../components/Sell.jsx'


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
  return (<><Hero /><Homes /><Sell /><Family /><Areas /><Contact /></>)
}
