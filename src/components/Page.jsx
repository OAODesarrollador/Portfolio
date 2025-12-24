import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Page({ title, children, marquee = false, headerExtra = null, pageClass = '' }) {

  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(
      ref.current,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power2.out' },
    )
  }, [title])

  const centered = title === 'About' || title === 'Work'

  return (
    <section ref={ref} className={`page ${pageClass}`}>
      <header className="page-header">
        <div className={`page-header-inner ${centered ? 'page-header-centered' : ''}`}>
          {marquee ? (
            <div className="page-marquee" aria-hidden="true">
              {Array.from({ length: 16 }).map((_, i) => (
                <span key={i}>{title}</span>
              ))}
            </div>
          ) : (
            <h1 className="page-title" data-text={title}>{title}</h1>
          )}
          {headerExtra}
        </div>
      </header>

      {children}
    </section>
  )
}
