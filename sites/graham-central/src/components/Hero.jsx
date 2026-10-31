import { heroImg } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="hero-photo"><img src={heroImg} alt="Modern two-storey Austin home, in black and white" fetchpriority="high" /></div>
      <h1 id="hero-h" className="hero-word">Graham Central</h1>
      <div className="hero-copy">
        <p>We sell and lease homes across Tarrytown, Bryker Woods, Northwest Hills and the Hill Country.</p>
        <p>One office for buying, selling, renting out your home and finding your next lease.</p>
      </div>
    </section>
  )
}
