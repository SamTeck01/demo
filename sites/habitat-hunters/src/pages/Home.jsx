import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Guide from '../components/Guide.jsx'
import Homes from '../components/Homes.jsx'
import Sell from '../components/Sell.jsx'
import Pay from '../components/Pay.jsx'
import Steps from '../components/Steps.jsx'
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
  return (<><Hero /><About /><Guide /><Homes /><Sell /><Pay /><Steps /><Visit /></>)
}
