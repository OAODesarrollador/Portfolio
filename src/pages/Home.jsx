import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../app/routes.jsx'
import { profile } from '../data/profile.js'
import Hero3D from '../components/Hero3D.jsx'
import '../styles/home.css'

export default function Home() {
  const [hover, setHover] = useState(null)
  const mouseX = useRef(0)
  const navigate = useNavigate()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const transitionRef = useRef(null)
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

  const ensureTransitionLayer = () => {
  if (transitionRef.current) return transitionRef.current

  const root = document.createElement('div')
  // anclar el texto del portal al mismo lugar donde se ve en hover (.home-center)

  root.className = 'rt-layer'
  root.innerHTML = `
    <div class="rt-overlay"></div>
    <div class="rt-text" aria-label=""></div>
  `
  document.body.appendChild(root)
  transitionRef.current = root
  return root
}

const setTransitionLabel = (root, label) => {
  const text = root.querySelector('.rt-text')
  text.setAttribute('aria-label', label)

  // render por letras como ya hacés en Home, pero en el portal
  const safe = String(label ?? '')
const n = safe.length

text.innerHTML = safe
  .split('')
  .map((ch, i) => {
    const c = ch === ' ' ? '&nbsp;' : ch.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const ri = (n - 1 - i) // índice inverso
    return `<span class="rt-char" style="--i:${i};--ri:${ri}">${c}</span>`
  })
  .join('')

}

const runRouteTransition = (item) => {
  setIsTransitioning(true)
  setHover(item) // fija label (por si querés mantener el hover interno también)

  const root = ensureTransitionLayer()
  const anchor = document.querySelector('.home-center')
if (anchor) {
  const r = anchor.getBoundingClientRect()
  root.style.setProperty('--rt-top', `${r.top}px`)
  root.style.setProperty('--rt-height', `${r.height}px`)
} else {
  root.style.removeProperty('--rt-top')
  root.style.removeProperty('--rt-height')
}

  setTransitionLabel(root, item.label)

  // reset clases
  root.classList.remove('rt-on', 'rt-noin', 'rt-full', 'rt-text-out', 'rt-fadeout')

  // fuerza reflow para que reinicien animaciones si se clickea seguido
  void root.offsetHeight

  // 1) activar banda/overlay + texto entrando
  root.classList.add('rt-on', 'rt-noin')

  // 2) expandir a negro total (igual a tu .full)
  requestAnimationFrame(() => {
    root.classList.add('rt-full')
  })

  const overlay = root.querySelector('.rt-overlay')

  const onOverlayTransitionEnd = (e) => {
    if (e.propertyName !== 'clip-path') return
    overlay.removeEventListener('transitionend', onOverlayTransitionEnd)

    // 3) cuando ya está FULL negro -> sacar texto (reverse)
    root.classList.add('rt-text-out')

    const labelLen = String(item.label ?? '').length
    // duración salida: 700ms + stagger 60ms por letra (ajustado a CSS)
    const OUT_MS = 700 + labelLen * 60

    window.setTimeout(() => {
      // 4) navegar cuando pantalla ya está negra y texto ya se fue
      const isAbout = item.path === '/about' || item.label?.toLowerCase() === 'about'

      navigate(item.path, {
        state: {
          fromHome: true,
          moveHero3DToTop: isAbout
        }
      })


      // 5) mantener negro un instante y apagar overlay suavemente
      window.setTimeout(() => {
        root.classList.add('rt-fadeout')
        window.setTimeout(() => {
          root.remove()
          transitionRef.current = null
          setIsTransitioning(false)
          setHover(null)
        }, 380)
      }, 60)
    }, OUT_MS)
  }

  overlay.addEventListener('transitionend', onOverlayTransitionEnd)
}


  return (
    <div className={`home-landing ${overlayOn ? 'hasHover' : ''} ${isTransitioning ? 'isTransitioning' : ''}`}>

      <header className="home-top">
        <div className="home-open">
          <span className="home-dot" />
          <div>
            <div>{profile.home.openLine1}</div>
            <div>{profile.home.openLine2}</div>
          </div>
        </div>

        <Link
  to="/"
  className="home-brand home-brand-link"
  onMouseEnter={() => {
    if (isTransitioning) return
    setHover({ label: String(profile.home.brandTop ?? '') })
  }}
  onMouseLeave={() => {
    if (isTransitioning) return
    setHover(null)
  }}
  onClick={(e) => {
    e.preventDefault()
    if (isTransitioning) return

    runRouteTransition({
      path: '/',
      label: String(profile.home.brandTop ?? 'HOME')
    })
  }}
>
  {profile.home.brandTop}
</Link>


        <div className="home-folio">
          <div>{profile.home.folioTop}</div>
        </div>

        <div className="home-bigword">
          {profile.home.bigWord}
        </div>
      </header>

      <section className="home-center">
        {/* hover background band + huge title */}
        <div className={`home-overlay ${overlayOn ? 'on' : ''} ${isTransitioning ? 'full' : ''}`} />
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
              onMouseEnter={() => !isTransitioning && setHover(item)}
              onMouseLeave={() => !isTransitioning && setHover(null)}
              onClick={(e) => {
              e.preventDefault()
              if (isTransitioning) return
              runRouteTransition(item)
            }}

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
