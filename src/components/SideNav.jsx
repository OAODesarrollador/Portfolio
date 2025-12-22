import { useEffect, useMemo, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { routes } from '../app/routes.jsx'
import { profile } from '../data/profile.js'
import '../styles/sidenav.css'

export default function SideNav() {
  const navItems = useMemo(() => routes.filter((r) => r.nav), [])
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)

  // cerrar al cambiar de ruta
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // ESC para cerrar
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {/* Botón hamburguesa fijo */}
      <button
        type="button"
        className={`navfab ${open ? 'open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="nav-drawer"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="navfab-bars" />
      </button>

      {/* Backdrop */}
      <div
        className={`navbackdrop ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <aside
        id="nav-drawer"
        ref={panelRef}
        className={`navdrawer ${open ? 'open' : ''}`}
        aria-label="Primary"
      >
        <div className="navdrawer-top">
          <div className="navdrawer-kicker">{profile.kicker}</div>
          <div className="navdrawer-counter">{profile.counter}</div>
          <div className="navdrawer-sub">{profile.availability}</div>
          <div className="navdrawer-brand">{profile.brand}</div>
          <div className="navdrawer-meta">{profile.folioTag}</div>
        </div>

        <nav className="navdrawer-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `navdrawer-link ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              <span className="navdrawer-order">{item.order}</span>
              <span className="navdrawer-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="navdrawer-footer">
          <div className="small opacity-75">{pathname}</div>
        </div>
      </aside>
    </>
  )
}
