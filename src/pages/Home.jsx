import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../app/routes.jsx'
import { profile } from '../data/profile.js'
import Hero3D from '../components/Hero3D.jsx'
import '../styles/home.css'

export default function Home() {
  const [hover, setHover] = useState(null)
  const mouseX = useRef(0)

  const navItems = useMemo(() => routes.filter((r) => r.nav), [])

  useEffect(() => {
    document.body.classList.add('home-light')
    return () => document.body.classList.remove('home-light')
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1 // [-1,1]
      mouseX.current = x
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const overlayLabel = hover?.label ?? ''
  const overlayOn = Boolean(hover)

  return (
    <div className={`home-landing ${overlayOn ? 'hasHover' : ''}`}>
      <header className="home-top">
        <div className="home-open">
          <span className="home-dot" />
          <div>
            <div>{profile.home.openLine1}</div>
            <div>{profile.home.openLine2}</div>
          </div>
        </div>

        <div className="home-brand">{profile.home.brandTop}</div>

        <div className="home-folio">
          <div>{profile.home.folioTop}</div>
          <div className="arrow">→ {profile.home.folioYear}</div>
        </div>
      </header>

      <div className="home-bigword">{profile.home.bigWord}</div>

      <section className="home-center">
        {/* hover background band + huge title */}
        <div className={`home-overlay ${overlayOn ? 'on' : ''}`} />
        <div className={`home-overlay-text ${overlayOn ? 'on' : ''}`} aria-label={overlayLabel}>
  {String(overlayLabel)
    .split('')
    .map((ch, i) => (
      <span
        key={`${ch}-${i}`}
        className="overlay-char"
        style={{ '--i': i }}
      >
        {ch === ' ' ? '\u00A0' : ch}
      </span>
    ))}
</div>


        {/* menu must stay visible above overlay */}
        <nav className="home-menu" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onMouseEnter={() => setHover(item)}
              onMouseLeave={() => setHover(null)}
            >
              <div className="home-menu-item">
                <span>{item.order}</span>
                <strong>{item.label}</strong>
              </div>
            </Link>
          ))}
        </nav>

        <Hero3D mouseX={mouseX} modelUrl={profile.home.modelUrl} />
      </section>

      <footer className="home-footer-role">{profile.home.roleLine}</footer>
    </div>
  )
}
