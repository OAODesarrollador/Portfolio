import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Page from '../components/Page.jsx'
import { profile } from '../data/profile.js'
import { Link } from 'react-router-dom'


import '../styles/about.css'


export default function About() {
  const location = useLocation()
  const shouldShowHeroTop = Boolean(location.state?.fromHome && location.state?.moveHero3DToTop)
  const marqueeRef = useRef(null)

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

  // FIX: Carrusel infinito sin parpadeo
  useEffect(() => {
    if (!marqueeRef.current) return
    
    const track = marqueeRef.current.querySelector('.tech-marquee-track')
    if (!track) return

    const updateWidth = () => {
      // Calcular el ancho de un solo set de íconos (sin duplicar)
      const items = track.querySelectorAll('.tech-marquee-item')
      const singleSetWidth = Array.from(items)
        .slice(0, items.length / 2)
        .reduce((total, item) => {
          const styles = window.getComputedStyle(item)
          const marginRight = parseFloat(styles.marginRight) || 0
          return total + item.offsetWidth + marginRight
        }, 0)
      
      // Añadir el gap entre items (14px según CSS)
      const gap = 14
      const totalWidth = singleSetWidth + (gap * (items.length / 2 - 1))
      
      track.style.setProperty('--marquee-width', `${totalWidth}px`)
    }

    // Ejecutar después de que las imágenes carguen
    const images = track.querySelectorAll('img')
    let loadedCount = 0
    
    const checkAllLoaded = () => {
      loadedCount++
      if (loadedCount === images.length) {
        // Pequeño delay para asegurar render completo
        setTimeout(updateWidth, 50)
      }
    }

    images.forEach(img => {
      if (img.complete) {
        checkAllLoaded()
      } else {
        img.addEventListener('load', checkAllLoaded)
      }
    })

    // Recalcular en resize
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const techIcons = [
    { name: 'React', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg' },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg' },
    { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg' },
    { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg' },
    { name: 'HTML5', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg' },
    { name: 'CSS3', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg' },
    { name: 'Bootstrap', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bootstrap.svg' },
    { name: 'Git', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/git.svg' },
    { name: 'GitHub', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg' },
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg' },
    { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg' },
    { name: 'Prisma', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/prisma.svg' },
    { name: 'SQLite', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sqlite.svg' },
    { name: 'Python', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg' },
  ]

 const scrollToSection = (id) => {
  const target = document.getElementById(id)
  if (!target) return
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}


  return (
  <>
    <Link to="/" className="about-brand-inline"> 
      ↑ {profile.home.brandTop} ↑
    </Link>

   <Page title="About" headerExtra={ 
    
    <nav className="about-toc">
      <button onClick={() => scrollToSection('about')}>about</button>
      <button onClick={() => scrollToSection('expertise')}>expertise</button>
      <button onClick={() => scrollToSection('process')}>process</button>
    </nav>
    }>
    

    <div className="about-fullbleed">
      {/* Header */}
      <section id="about" className="about-section">
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
            <h2><div className="opacity-75 pb-3">Lo que hago</div></h2>
            <ul className="mt-2 mb-0">
              {profile.about.bullets.map((b) => (
                <li className="mb-3 mt-2" key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech carousel (solo expertise) */}
        <div ref={marqueeRef} className="tech-marquee" aria-label="Tecnologías que utilizo">
          <div className="tech-marquee-track">
            {[...techIcons, ...techIcons, ...techIcons].map((t, i) => (
              <div className="tech-marquee-item" key={`${t.name}-${i}`} title={t.name}>
                <img className="tech-marquee-icon" src={t.url} alt={t.name} loading="lazy" />
              </div>
            ))}
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
</Page></>
  )
}