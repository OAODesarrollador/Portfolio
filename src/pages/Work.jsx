import { useRef, useState } from 'react'
import Page from '../components/Page.jsx'
import { work } from '../data/work.js'
import '../styles/work.css'
import { Link } from 'react-router-dom'


export default function Work() {
  const previewRef = useRef(null)
  const [activeGif, setActiveGif] = useState(null)
  const rafRef = useRef(0)
  const posRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const rafLoop = useRef(0)

function movePreview(e) {
  const el = previewRef.current
  if (!el) return

  const vw = window.innerWidth
  const vh = window.innerHeight

  const r = el.getBoundingClientRect()
  const pw = r.width || 360
  const ph = r.height || (360 * 10) / 16

  const gap = 18

  let x = e.clientX + gap
  let y = e.clientY - ph / 2

  // flip horizontal
  if (x + pw > vw - 8) {
    x = e.clientX - gap - pw
  }

  // clamp
  if (y + ph > vh - 8) y = vh - 8 - ph
  if (y < 8) y = 8
  if (x + pw > vw - 8) x = vw - 8 - pw
  if (x < 8) x = 8

  // SOLO setear target
  targetRef.current.x = x
  targetRef.current.y = y

  // iniciar loop si no está activo
  if (!rafLoop.current) startInertia()
}


  function onEnter(w) {
    setActiveGif(w.image)
  }

  function onLeave() {
    setActiveGif(null)
  }
function startInertia() {
  const el = previewRef.current
  if (!el) return

  const ease = 0.2 // 🔥 control de “peso” (0.08 = pesado, 0.2 = liviano)

  function tick() {
    const pos = posRef.current
    const target = targetRef.current

    pos.x += (target.x - pos.x) * ease
    pos.y += (target.y - pos.y) * ease

    el.style.setProperty('--px', `${pos.x}px`)
    el.style.setProperty('--py', `${pos.y}px`)

    // cortar cuando casi llega
    if (
      Math.abs(target.x - pos.x) < 0.5 &&
      Math.abs(target.y - pos.y) < 0.5
    ) {
      rafLoop.current = 0
      return
    }

    rafLoop.current = requestAnimationFrame(tick)
  }

  rafLoop.current = requestAnimationFrame(tick)
}
function onLeave() {
  setActiveGif(null)
  rafLoop.current = 0
}

  return (
    <>
    <Link to="/" className="work-brand-inline">
      ↑ OAO Dev Studio™  ↑
    </Link>

    <Page title="Work" pageClass="page-work">

      <div className="page-body-centered">
        <p className="opacity-75 work-lead">
          Experiencia aplicada. El material más experimental vive en <span className="text-light">Playground</span>.
        </p>
      </div>

      

      {/* Preview flotante global */}
      <div
        ref={previewRef}
        className={`projects_floating_preview ${activeGif ? 'is-on' : ''}`}
        aria-hidden="true"
      >
        {activeGif && <img src={activeGif} alt="" />}
      </div>
      
        <section className="projects_contain u-container">
          <div className="projects_list" role="list">
            {work.map((w, idx) => (
              <a
                key={idx}
                className="projects_item_wrap"
                href={w.href}
                role="listitem"
                onPointerEnter={() => onEnter(w)}
                onPointerLeave={onLeave}
                onPointerMove={movePreview}
              >
                <div className="projects_item_inner mt-4">
                  <div className="projects_item_title">{w.title}</div>

                  <div className="projects_item_meta">
                    <span>{w.client}</span>
                    <span>{w.year}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      
    </Page>
    </>
  )
}
