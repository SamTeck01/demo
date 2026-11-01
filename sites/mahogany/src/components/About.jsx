import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section id="about" className="about wrap" aria-labelledby="about-h">
      <h2 id="about-h" className="it-h about-h">About Angellet</h2>
      <div className="about-text">
        <p data-rv>I started in real estate in 2004 and opened Mahogany in 2013. I still answer my own phone, and I still walk every buyer through every page they sign. Most of my business comes from families I helped once, and their friends.</p>
        <Link className="pill" to="/#visit">Book a visit</Link>
      </div>
      <div className="numbers">
        <p data-rv><span className="num">21</span>years selling across metro Atlanta</p>
        <p data-rv><span className="num">231</span>homes bought and sold with her clients</p>
      </div>
    </section>
  )
}
