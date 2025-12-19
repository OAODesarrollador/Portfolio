import SideNav from './SideNav.jsx'

export default function Shell({ children }) {
  return (
    <div className="app-shell">
      <SideNav />
      <main className="app-main">{children}</main>
    </div>
  )
}
