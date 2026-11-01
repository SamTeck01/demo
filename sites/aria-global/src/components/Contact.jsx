import { useId, useState } from 'react'
import { useLang } from './Lang.jsx'
import { office } from '../data/site.js'
import { mail } from '../lib.js'

export function Lead({ subject, extra = [] }) {
  const { t, lang } = useLang()
  const [sent, setSent] = useState(false)
  const n = useId(), p = useId(), m = useId()
  const submit = e => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    location.href = mail(office.email, subject, [...extra, `${t.name}: ${f.get('name')}`, `${t.phone}: ${f.get('phone')}`, f.get('msg') && `${t.msg} ${f.get('msg')}`, `Idioma / language: ${lang.toUpperCase()}`])
    setSent(true)
  }
  if (sent) return <p className="sent" role="status">{t.sent}</p>
  return (
    <form className="form" onSubmit={submit}>
      <label htmlFor={n}>{t.name}</label><input id={n} name="name" autoComplete="name" required />
      <label htmlFor={p}>{t.phone}</label><input id={p} name="phone" type="tel" autoComplete="tel" required />
      <label htmlFor={m}>{t.msg}</label><textarea id={m} name="msg" rows="3" />
      <button className="btn btn-teal" type="submit">{t.send}</button>
    </form>
  )
}

export default function Contact() {
  const { t } = useLang()
  return (
    <section id="contact" className="contact" aria-labelledby="contact-h">
      <h2 id="contact-h" className="title" data-rv>{t.contactH}</h2>
      <ul className="ways"><li>Maria Medina, Broker</li><li><a href={`tel:${office.tel}`}>{office.phone}</a></li><li><a href={`mailto:${office.email}`}>{office.email}</a></li></ul>
      <Lead subject="Aria Global Realty" />
    </section>
  )
}
