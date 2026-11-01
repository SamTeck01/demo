import { Link } from 'react-router-dom'
import { towerImg } from '../data/site.js'

export default function Island() {
  return (
    <section id="island" className="island" aria-labelledby="island-h">
      <img src={towerImg} alt="White residential building with long balconies" loading="lazy" />
      <div className="island-text">
        <h2 id="island-h" className="title" data-rv>The land of the living</h2>
        <p data-rv>Bahrain’s oldest name is Dilmun, the land of the living. Dilmunia is its newest island: beaches, a promenade, and homes a few minutes from the airport and Manama.</p>
        <p data-rv>Every residence is freehold, finished with fitted kitchens and shared pools, and sold on a plan you can afford from the first month.</p>
        <Link className="gold" to="/#residences">Browse residences</Link>
      </div>
    </section>
  )
}
