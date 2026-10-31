import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Search from '../components/Search.jsx'
import Listings from '../components/Listings.jsx'
import Islands from '../components/Islands.jsx'
import Costs from '../components/Costs.jsx'
import Owners from '../components/Owners.jsx'
import Process from '../components/Process.jsx'
import Faq from '../components/Faq.jsx'
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
  return (
    <>
      <Hero />
      <Search />
      <Listings />
      <Islands />
      <Costs />
      <Owners />
      <Process />
      <Faq />
      <Contact />
    </>
  )
}
