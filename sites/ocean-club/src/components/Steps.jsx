import { Link } from 'react-router-dom'
import { beachImg, towers } from '../data/site.js'

export default function Steps() {
  return (
    <section className="steps" aria-labelledby="steps-h">
      <img src={beachImg} alt="Calm Atlantic surf on a white sand beach at sunrise" loading="lazy" />
      <div className="steps-in wrap">
        <h2 id="steps-h" className="title" data-rv>Every home, counted in steps</h2>
        <ol className="steps-list">
          {[...towers].sort((a, b) => a.steps - b.steps).map(t => (
            <li key={t.id} data-rv><Link to={`/?tower=${t.id}#homes`}><span className="steps-n">{t.steps}</span><span className="steps-name">{t.name}</span><span className="steps-face">{t.faces}</span></Link></li>
          ))}
        </ol>
      </div>
    </section>
  )
}
