import { Link } from 'react-router-dom'
import { useLang } from './Lang.jsx'
import { heroImg, office } from '../data/site.js'
import condo from '../assets/img/condo.jpg'

const Phone = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
const NE = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="hero-card">
        <div className="hero-mid">
          <h1 id="hero-h" className="hero-h">{t.h1}</h1>
          <p className="hero-lede">{t.lede}</p>
        </div>
        <div className="hero-foot">
          <a className="call" href={`tel:${office.tel}`}><span className="call-ic"><Phone /></span>{t.call}</a>
          <Link className="explore" to="/#homes"><span>{t.explore}</span><img src={condo} alt="" /></Link>
        </div>
      </div>
      <div className="hero-photo">
        <img src={heroImg} alt="Miami skyline over Biscayne Bay at sunset" fetchpriority="high" />
        <div className="hero-stats"><span><b>94</b> {t.sales}</span><span><b>71</b> {t.reviews}</span></div>
        <Link className="hero-calc" to="/#pay"><span>{t.calc}</span><NE /></Link>
      </div>
    </section>
  )
}
