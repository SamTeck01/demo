import { Link } from 'react-router-dom'
import { office } from '../data/site.js'

export default function About() {
  return (
    <section className="about wrap" aria-labelledby="about-h">
      <div className="about-side" data-rv>
        <p>{office.address[0]}<br />{office.address[1]}</p>
        <p>Eleven agents,<br />one office, since 1972.</p>
      </div>
      <div className="about-main">
        <h2 id="about-h" className="about-h" data-rv>We know Austin, street by street.</h2>
        <div className="about-act" data-rv>
          <Link className="btn btn-ink" to="/#homes">Find a home</Link>
          <Link className="btn btn-line" to="/#sell">What’s my home worth?</Link>
        </div>
      </div>
    </section>
  )
}
