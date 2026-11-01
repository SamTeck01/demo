import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import OwnerApp from '../components/App.jsx'
import Owners from '../components/Owners.jsx'
import Steps from '../components/Steps.jsx'
import Flats from '../components/Flats.jsx'
import Enquire from '../components/Enquire.jsx'
import { useReveal } from '../lib.js'

export default function Home() {
  const { hash } = useLocation()
  useReveal(hash)
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }))
  }, [hash])
  return (<><Hero /><OwnerApp /><Owners /><Steps /><Flats /><Enquire /></>)
}
