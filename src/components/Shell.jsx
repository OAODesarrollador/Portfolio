import SideNav from './SideNav.jsx'

export default function Shell({ children }) {
  return (
    <div className="app-shell">
      <main className="app-main">{children}</main>

      {/* Menú como overlay, no ocupa columna */}
      <div className="app-nav-overlay">
        <SideNav />
      </div>
    </div>
  )
}
