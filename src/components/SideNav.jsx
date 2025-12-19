import { NavLink, useLocation } from 'react-router-dom'
import { routes } from '../app/routes.jsx'
import { profile } from '../data/profile.js'
import '../styles/sidenav.css'

export default function SideNav() {
  const navItems = routes.filter((r) => r.nav)
  const { pathname } = useLocation()

  return (
    <aside className="sidenav">
      <div className="sidenav-top">
        <div className="sidenav-kicker">{profile.kicker}</div>
        <div className="sidenav-counter">{profile.counter}</div>
        <div className="sidenav-sub">{profile.availability}</div>

        <div className="sidenav-brand">{profile.brand}</div>
        <div className="sidenav-meta">{profile.folioTag}</div>
      </div>

      <nav className="sidenav-nav" aria-label="Primary">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `sidenav-link ${isActive ? 'active' : ''}`}
          >
            <span className="sidenav-order">{item.order}</span>
            <span className="sidenav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidenav-footer">
        <div className="small opacity-75">
          {profile.inspiredBy.label}: <span className="opacity-100">{profile.inspiredBy.name}</span>
        </div>
        <div className="small opacity-75">{pathname}</div>
      </div>
    </aside>
  )
}
