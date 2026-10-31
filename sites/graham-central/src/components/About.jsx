import { aboutImg, office } from '../data/site.js'

export default function About() {
  return (
    <section id="about" className="about wrap" aria-labelledby="about-h">
      <div>
        <h2 id="about-h" className="about-word" data-rv>About</h2>
        <p className="lede" data-rv>Graham Central has sold and leased homes across central Austin and the Hill Country for years, from an office on Lonesome Valley Trail. The same team that sells your home can lease it, manage it, or find you the next one.</p>
        <a className="btn btn-black" href={`tel:${office.tel}`}>Call the office</a>
      </div>
      <img src={aboutImg} alt="Glass towers seen from street level, in black and white" loading="lazy" data-rv />
    </section>
  )
}
