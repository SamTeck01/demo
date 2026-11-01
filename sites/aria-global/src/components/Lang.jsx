import { createContext, useContext, useEffect, useState } from 'react'

// Every string on the site in both languages; the switch changes all of them.
export const words = {
  en: {
    switch: 'Language', h1: 'Your home in Miami, in your language', lede: 'Maria Medina has closed 94 sales across Miami and Coral Gables, in English and Spanish.',
    call: 'Call Maria', explore: 'Explore all properties', sales: 'sales closed', reviews: 'five-star reviews', calc: 'Work out my payment',
    areasH: 'Where to live in Miami', median: 'Median', homesH: 'Homes for sale and rent', all: 'All', sale: 'For sale', rent: 'For rent', mo: '/mo',
    bed: 'bed', bath: 'bath', none: 'Nothing here right now. Tell Maria what you are looking for.', tell: 'Tell Maria',
    payH: 'Your real monthly payment', payNote: 'With property tax and insurance, so there are no surprises.',
    who: 'I am buying', local: 'Living in the US', abroad: 'From abroad', price: 'Home price', down: 'Down payment', rate: 'Rate',
    perMonth: 'a month, all in', cash: 'Cash at closing', income: 'Income lenders look for', year: 'a year',
    abroadNote: 'Foreign buyers usually put 30% or more down and pay a slightly higher rate. Maria works with lenders who say yes.',
    match: 'Show homes at this price', contactH: 'Talk to Maria, in English or Spanish', name: 'Your name', phone: 'Phone or WhatsApp', msg: 'What are you looking for?', send: 'Send to Maria', sent: 'Your email is ready to send. Maria answers the same day.',
    nav: [['Homes', '/#homes'], ['Areas', '/#areas'], ['Payments', '/#pay'], ['Contact', '/#contact']], menu: 'Menu', close: 'Close',
    back: '← All homes', book: 'Book a showing', when: 'Best day for you', sold: 'That home is no longer available', soldNote: 'Ask Maria what is coming next.',
    foot: 'Concept design. Listings are samples. Photographs: Unsplash.', monthly: 'Monthly with 20% down, tax and insurance', size: 'Size', bedrooms: 'Bedrooms', baths: 'Baths', area: 'Area',
  },
  es: {
    switch: 'Idioma', h1: 'Tu hogar en Miami, en tu idioma', lede: 'María Medina ha cerrado 94 ventas en Miami y Coral Gables, en inglés y en español.',
    call: 'Llamar a María', explore: 'Ver todas las propiedades', sales: 'ventas cerradas', reviews: 'reseñas de cinco estrellas', calc: 'Calcular mi pago',
    areasH: 'Dónde vivir en Miami', median: 'Mediana', homesH: 'Casas en venta y alquiler', all: 'Todo', sale: 'En venta', rent: 'Alquiler', mo: '/mes',
    bed: 'hab.', bath: 'baños', none: 'Nada por ahora. Cuéntele a María lo que busca.', tell: 'Escribir a María',
    payH: 'Su pago mensual real', payNote: 'Con impuestos y seguro incluidos, para que no haya sorpresas.',
    who: 'Compro', local: 'Viviendo en EE. UU.', abroad: 'Desde el extranjero', price: 'Precio', down: 'Pago inicial', rate: 'Tasa',
    perMonth: 'al mes, todo incluido', cash: 'Efectivo al cierre', income: 'Ingreso que piden los bancos', year: 'al año',
    abroadNote: 'Los compradores extranjeros suelen dar 30% o más de inicial y pagan una tasa algo mayor. María trabaja con bancos que dicen que sí.',
    match: 'Ver casas a este precio', contactH: 'Hable con María, en español o en inglés', name: 'Su nombre', phone: 'Teléfono o WhatsApp', msg: '¿Qué está buscando?', send: 'Enviar a María', sent: 'Su correo está listo. María responde el mismo día.',
    nav: [['Casas', '/#homes'], ['Zonas', '/#areas'], ['Pagos', '/#pay'], ['Contacto', '/#contact']], menu: 'Menú', close: 'Cerrar',
    back: '← Todas las casas', book: 'Agendar una visita', when: 'Mejor día para usted', sold: 'Esa casa ya no está disponible', soldNote: 'Pregúntele a María qué viene pronto.',
    foot: 'Diseño de concepto. Las propiedades son ejemplos. Fotografías: Unsplash.', monthly: 'Mensual con 20% inicial, impuestos y seguro', size: 'Tamaño', bedrooms: 'Habitaciones', baths: 'Baños', area: 'Zona',
  },
}

const Ctx = createContext(null)
export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const q = new URLSearchParams(location.search).get('lang')
    if (q === 'es' || q === 'en') return q
    try { return localStorage.getItem('aria:lang') || (navigator.language?.startsWith('es') ? 'es' : 'en') } catch { return 'en' }
  })
  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('aria:lang', lang) } catch {}
  }, [lang])
  return <Ctx.Provider value={{ lang, setLang, t: words[lang] }}>{children}</Ctx.Provider>
}
export const useLang = () => useContext(Ctx)

export function Switch() {
  const { lang, setLang, t } = useLang()
  return (
    <div className="switch" role="group" aria-label={t.switch}>
      {['en', 'es'].map(l => <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
    </div>
  )
}
