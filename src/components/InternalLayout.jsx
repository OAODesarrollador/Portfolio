import { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../data/profile.js'
import '../styles/internal.css'

const links = [
  ['/work', 'Proyectos'],
  ['/about', 'Sobre mí'],
  ['/playground', 'Laboratorio'],
  ['/cv', 'CV'],
  ['/contact', 'Contacto'],
]

export default function InternalLayout({ children, className = '' }) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.body.classList.add('internal-active')
    window.scrollTo({ top: 0, behavior: 'instant' })
    return () => document.body.classList.remove('internal-active')
  }, [pathname])

  useEffect(() => {
    const pageName = pathname.startsWith('/work/') ? 'Proyecto' : links.find(([path]) => path === pathname)?.[1]
    document.title = `${pageName || 'Portafolio'} — OAO Dev Studio™`
  }, [pathname])

  return (
    <div className={`internal-page ${className}`}>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <header className="internal-header">
        <Link className="internal-brand" to="/" aria-label="Volver al inicio">
          {profile.home.brandTop}
        </Link>
        <nav className="internal-nav" aria-label="Navegación principal">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'is-active' : ''}>
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <div id="main-content">{children}</div>
      <footer className="internal-footer">
        <Link to="/">OAO Dev Studio™</Link>
        <span>{profile.location.city}, {profile.location.country}</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}
