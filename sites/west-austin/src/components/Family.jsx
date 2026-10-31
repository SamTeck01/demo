import living from '../assets/img/living.jpg'

export default function Family() {
  return (
    <section id="family" className="family wrap" aria-labelledby="family-h">
      <div className="family-photo" data-rv><img src={living} alt="Light living room with a coffered ceiling" loading="lazy" /></div>
      <div className="family-text">
        <h2 id="family-h" className="title" data-rv>Mother and daughter</h2>
        <p className="lede" data-rv>Laura started selling west of MoPac in 1979. Many of the families she helped are now selling the homes she sold them, and their children call Katy.</p>
        <div className="people">
          <div className="person" data-rv><span className="mono" aria-hidden="true">LD</span><div><h3>Laura Duggan</h3><p>Broker, since 1979</p></div></div>
          <div className="person" data-rv><span className="mono" aria-hidden="true">K</span><div><h3>Katy</h3><p>Agent, second generation</p></div></div>
        </div>
      </div>
    </section>
  )
}
