import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Page from '../components/Page.jsx'
import { profile } from '../data/profile.js'

import '../styles/about.css'


export default function About() {
  const location = useLocation()
  const shouldShowHeroTop = Boolean(location.state?.fromHome && location.state?.moveHero3DToTop)
  
// Reveal on scroll (efecto tipo huyml)
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-inview')
            io.unobserve(e.target) // una sola vez
          }
        }
      },
      { root: null, threshold: 0.15 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  useEffect(() => {
    document.body.classList.add('about-full')
    return () => document.body.classList.remove('about-full')
  }, [])


  return (
   <Page title="About" headerExtra={ 
   <nav className="about-toc">
      <a href="#about">about</a>
      <a href="#expertise">expertise</a>
      <a href="#process">process</a>
    </nav>}>
    <div className="about-fullbleed">
      {/* Header */}
      <section id="about" className="about-section " >
        <div className="about-section-inner">
        
            
          <div className='reveal' style={{ '--d': '0ms' }}>
            <div className="about-section-title">Acerca de mi</div>
            <div className="about-header">
              

              <div className="about-intro">
                <div className="about-name">{profile.hero.title}</div>
                <div className="about-role">{profile.hero.subtitle}</div>

                <div className="about-meta">
                  <span>{profile.location.city}</span>
                  <span>·</span>
                  <span>{profile.location.country}</span>
                </div>
              </div>
            </div>
          </div>
          <h2 className="about-headline">{profile.about.headline}</h2>

          <div className="about-traits">
            {profile.about.traits?.map((t, i) => (
              <span key={t} className="about-pill reveal-item" style={{ '--i': i }}>
                {t}
              </span>
          ))}
          </div>
        </div>
    </section>

    {/* Expertise */}
    <section id="expertise" className="about-section">
    <div className="about-section-inner">
      <div className="reveal" style={{ '--d': '80ms' }}>
        <div className="about-section-title">Expertise</div>

        <div className="card card-dark">
          <div className="card-body">
            <div className="opacity-75 small">Lo que hago</div>
            <ul className="mt-2 mb-0">
              {profile.about.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>


    {/* Process (a)(b)(c)(d) */}
    <section id="process" className="about-section">
    <div className="about-section-inner">
      <div className="reveal" style={{ '--d': '160ms' }}>
        <div className="about-section-title">Process</div>

        <div className="about-process">
          {profile.about.process?.map((p, i) => (
            <div key={p.title} className="about-process-item reveal-item" style={{ '--i': i }}>
              <div className="about-process-key">{p.key}</div>
              <div className="about-process-body">
                <div className="about-process-title">{p.title}</div>
                <div className="about-process-text">{p.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
</div>
</Page>

  )
}
