import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import InternalLayout from '../components/InternalLayout.jsx'
import Reveal from '../components/Reveal.jsx'
import { work } from '../data/work.js'
import '../styles/work.css'

export default function Work() {
  const previewRef = useRef(null), frameRef = useRef(0)
  const target = useRef({ x:0, y:0 }), current = useRef({ x:0, y:0 })
  const [active, setActive] = useState(null)
  useEffect(() => () => cancelAnimationFrame(frameRef.current), [])
  const move = (e) => {
    if (e.pointerType !== 'mouse' || !window.matchMedia('(min-width: 901px) and (hover: hover) and (pointer: fine)').matches) return
    const bounds = previewRef.current.getBoundingClientRect()
    target.current = {
      x: Math.max(12, Math.min(e.clientX + 24, window.innerWidth - bounds.width - 12)),
      y: Math.max(12, Math.min(e.clientY + 24, window.innerHeight - bounds.height - 12)),
    }
    if (!frameRef.current && active === null) current.current = { ...target.current }
    if (frameRef.current) return
    const tick = () => {
      current.current.x += (target.current.x-current.current.x)*.18
      current.current.y += (target.current.y-current.current.y)*.18
      if (previewRef.current) previewRef.current.style.transform = `translate3d(${current.current.x}px,${current.current.y}px,0)`
      const moving = Math.abs(target.current.x-current.current.x)>.5 || Math.abs(target.current.y-current.current.y)>.5
      frameRef.current = moving ? requestAnimationFrame(tick) : 0
    }
    frameRef.current = requestAnimationFrame(tick)
  }
  return <InternalLayout className="work-page">
    <section className="internal-hero"><p className="eyebrow">01 — Portafolio</p><h1>Productos que<br />resuelven y operan.</h1><p className="hero-note">Una selección priorizada por profundidad de producto, complejidad técnica y capacidad para transformar procesos reales.</p></section>
    <section className="work-list" aria-label="Proyectos seleccionados" onPointerLeave={() => setActive(null)}>
      {work.map((p,i) => <Reveal key={p.slug}><Link className="work-row" to={`/work/${p.slug}`} onPointerEnter={(event) => { move(event); if (event.pointerType === 'mouse') setActive(i) }} onPointerMove={move}><span className="work-number">{String(i+1).padStart(2,'0')}</span><span className="work-name">{p.title}</span><img className="work-thumbnail" src={p.image} alt={`Vista previa de ${p.title}`} loading="lazy" decoding="async" /><span className="work-kind"><strong>{p.featured}</strong>{p.subtitle}<small>{p.stack.slice(0,3).join(' · ')}</small></span><span className="work-year">{p.year}</span><span className="work-view">Ver caso ↗</span></Link></Reveal>)}
    </section>
    <div ref={previewRef} className={`work-preview ${active!==null?'is-visible':''}`} aria-hidden="true">{active!==null && <img src={work[active].image} alt="" />}<span>Ver</span></div>
  </InternalLayout>
}
