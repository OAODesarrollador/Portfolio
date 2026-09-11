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
  const helloRef = useRef(null)

  useEffect(() => {
    const title = helloRef.current
    const letters = [...title.querySelectorAll('.hello-mask')]
    const motion = window.matchMedia('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)')
    const readyAt = performance.now() + 660
    let frame = 0
    let pointerX = 0
    let pointerY = 0
    const reset = () => {
      cancelAnimationFrame(frame)
      frame = 0
      letters.forEach(letter => letter.style.setProperty('--hello-scale', '1'))
    }
    const update = () => {
      frame = 0
      if (performance.now() < readyAt) return
      const radius = parseFloat(getComputedStyle(title).fontSize) * 1.25
      letters.forEach(letter => {
        const bounds = letter.getBoundingClientRect()
        const distance = Math.hypot(pointerX - bounds.left - bounds.width / 2, pointerY - bounds.top - bounds.height / 2)
        const proximity = Math.max(0, 1 - distance / radius)
        const influence = proximity * proximity * (3 - 2 * proximity)
        letter.style.setProperty('--hello-scale', String(1 + 0.06 * influence))
      })
    }
    const move = event => {
      if (event.pointerType !== 'mouse') return
      pointerX = event.clientX
      pointerY = event.clientY
      if (!frame) frame = requestAnimationFrame(update)
    }
    const detach = () => {
      title.removeEventListener('pointermove', move)
      title.removeEventListener('pointerleave', reset)
      window.removeEventListener('blur', reset)
      reset()
    }
    const sync = () => {
      detach()
      if (!motion.matches) return
      title.addEventListener('pointermove', move, { passive: true })
      title.addEventListener('pointerleave', reset)
      window.addEventListener('blur', reset)
    }
    sync()
    motion.addEventListener('change', sync)
    return () => {
      detach()
      motion.removeEventListener('change', sync)
    }
  }, [])

  useEffect(() => {
    document.body.classList.add('home-light')
    return () => document.body.classList.remove('home-light')
  }, [])

  useEffect(() => {
    const updateOverlayCenter = () => {
      window.requestAnimationFrame(() => {
        const menu = document.querySelector('.home-menu')
        if (!menu) return
        const r = menu.getBoundingClientRect()
        const centerY = r.top + r.height / 2
        const band = Math.max(80, r.height * 1.4)
        const bandOn = Math.max(140, r.height * 2.2)

        document.documentElement.style.setProperty('--home-menu-center', `${centerY}px`)
        document.documentElement.style.setProperty('--home-menu-band', `${band}px`)
        document.documentElement.style.setProperty('--home-menu-band-on', `${bandOn}px`)
      })
    }

    updateOverlayCenter()
    window.addEventListener('resize', updateOverlayCenter)
    return () => window.removeEventListener('resize', updateOverlayCenter)
  }, [])

  useEffect(() => {
    const pointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    let idleTimer
    const neutral = () => {
      window.clearTimeout(idleTimer)
      mouseX.current = 0
    }
    const onMove = (e) => {
      if (!pointer.matches) return
      const x = (e.clientX / window.innerWidth) * 2 - 1 // [-1,1]
      mouseX.current = x
      window.clearTimeout(idleTimer)
      idleTimer = window.setTimeout(neutral, 1200)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('blur', neutral)
    document.documentElement.addEventListener('mouseleave', neutral)
    document.addEventListener('visibilitychange', neutral)
    pointer.addEventListener('change', neutral)
    return () => {
      neutral()
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('blur', neutral)
      document.documentElement.removeEventListener('mouseleave', neutral)
      document.removeEventListener('visibilitychange', neutral)
      pointer.removeEventListener('change', neutral)
    }
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

        <div className="home-bigword" ref={helloRef} aria-label={profile.home.bigWord}>
          {Array.from(profile.home.bigWord).map((char, index, chars) => (
            <span className="hello-mask" aria-hidden="true" key={index} style={{ '--hello-index': chars.slice(0, index).filter(value => value.trim()).length }}>
              <span className="hello-reveal"><span className="hello-char">{char === ' ' ? '\u00A0' : char}</span></span>
            </span>
          ))}
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
              onMouseEnter={(event) => {
                if (isTransitioning) return
                const option = event.currentTarget.getBoundingClientRect()
                const robot = event.currentTarget.closest('.home-center').querySelector('.home-3d-wrap').getBoundingClientRect()
                setHover({
                  ...item,
                  robotOffsetX: (option.left + option.width / 2 - robot.left - robot.width / 2) * 0.15,
                })
              }}
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

        <Hero3D mouseX={mouseX} modelUrl={profile.home.modelUrl} hoverPath={hover?.path} hoverOffsetX={hover?.robotOffsetX} />
      </section>

      <footer className="home-footer-role">{profile.home.roleLine}</footer>
    </div>
  )
}
