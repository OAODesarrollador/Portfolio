import SideNav from './SideNav.jsx'
import { useLocation } from 'react-router-dom'

export default function Shell({ children }) {
  const { pathname } = useLocation()
  const showSideNav = pathname !== '/'

  return (
    <div className="app-shell">
      <main className="app-main">{children}</main>

      {/* Menú como overlay, no ocupa columna */}
      {showSideNav && (
      <div className="app-nav-overlay">
        <SideNav />
      </div>
      )}
    </div>
  )
}
