import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Homes from '../components/Homes.jsx'
import Compare from '../components/Compare.jsx'
import Move from '../components/Move.jsx'
import Sell from '../components/Sell.jsx'
import Team from '../components/Team.jsx'
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
  return (<><Hero /><Homes /><Compare /><Move /><Sell /><Team /><Visit /></>)
}
