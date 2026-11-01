import { useEffect, useState, useSyncExternalStore } from 'react'

const qar = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 })
export const money = n => 'QAR ' + qar.format(n)

// Monthly principal and interest.
export const monthly = (loan, ratePct, years) => {
  const i = ratePct / 1200, n = years * 12
  return loan * i / (1 - Math.pow(1 + i, -n))
}

// Saved homes, kept in this browser only.
const KEY = 'primestate:saved'
let saved = (() => { try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] } })()
const subs = new Set()
export const toggleSaved = id => {
  saved = saved.includes(id) ? saved.filter(x => x !== id) : [...saved, id]
  try { localStorage.setItem(KEY, JSON.stringify(saved)) } catch {}
  subs.forEach(f => f())
}
export const useSaved = () => useSyncExternalStore(f => { subs.add(f); return () => subs.delete(f) }, () => saved)

export function useScrolled(y = 24) {
  const [on, setOn] = useState(false)
  useEffect(() => {
    const f = () => setOn(scrollY > y)
    f(); addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [y])
  return on
}

// Parts of each section rise in once as they enter. Content on screen shows at once.
export function useReveal(key) {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const els = [...document.querySelectorAll('[data-rv]:not(.is-in)')]
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) }
    }), { rootMargin: '0px 0px -10% 0px' })
    els.forEach(el => {
      if (el.getBoundingClientRect().top < innerHeight * 0.95) el.classList.add('is-in')
      else { el.classList.add('is-pre'); io.observe(el) }
    })
    // Never leave content hidden if the observer does not fire (print, screenshots, old browsers).
    const t = setTimeout(() => els.forEach(el => el.classList.add('is-in')), 2500)
    return () => { io.disconnect(); clearTimeout(t) }
  }, [key])
}

export const mail = (to, subject, lines) =>
  `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.filter(Boolean).join('\n'))}`
