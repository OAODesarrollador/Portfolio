import { Routes, Route, Navigate } from 'react-router-dom'
import Shell from '../components/Shell.jsx'
import { routes } from './routes.jsx'

export default function App() {
  return (
    <Shell>
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Shell>
  )
}
