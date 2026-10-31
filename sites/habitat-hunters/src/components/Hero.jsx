import { heroImg } from '../data/site.js'

// The name is the picture's caption, as in a field guide plate.
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <img className="hero-img" src={heroImg} alt="Craftsman home with a deep porch under a wide sky" fetchpriority="high" />
      <h1 id="hero-h" className="hero-word" aria-label="Habitat Hunters, Austin real estate since 1972">Habitat</h1>
    </section>
  )
}
