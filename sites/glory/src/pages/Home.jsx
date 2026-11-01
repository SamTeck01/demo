import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Strip from '../components/Strip.jsx'
import Island from '../components/Island.jsx'
import Residences from '../components/Residences.jsx'
import Plan from '../components/Plan.jsx'
import Why from '../components/Why.jsx'
import Faq from '../components/Faq.jsx'
import Register from '../components/Register.jsx'
import { useReveal } from '../lib.js'

export default function Home() {
  const { hash } = useLocation()
  useReveal(hash)
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }))
  }, [hash])
  return (<><Hero /><Strip /><Island /><Residences /><Plan /><Why /><Faq /><Register /></>)
}
