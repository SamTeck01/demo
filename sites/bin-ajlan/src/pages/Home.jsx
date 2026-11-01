import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Finder from '../components/Finder.jsx'
import Stock from '../components/Stock.jsx'
import Valuations from '../components/Valuations.jsx'
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
  return (<><Hero /><Finder /><Stock /><Valuations /><Contact /></>)
}
