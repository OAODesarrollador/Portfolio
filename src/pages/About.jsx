import Page from '../components/Page.jsx'
import { profile } from '../data/profile.js'

export default function About() {
  return (
    <Page title="About">
      <p className="lead mt-3">{profile.about.headline}</p>

      <div className="mt-4 grid-two">
        <div className="card card-dark">
          <div className="card-body">
            <div className="opacity-75 small">Lo que hago</div>
            <ul className="mt-2 mb-0">
              {profile.about.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card card-dark">
          <div className="card-body">
            <div className="opacity-75 small">Principios</div>
            <ul className="mt-2 mb-0">
              <li>Datos primero: consistencia & trazabilidad</li>
              <li>Menos magia: más mantenible</li>
              <li>Performance como hábito</li>
              <li>Automatizar lo repetible</li>
            </ul>
          </div>
        </div>
      </div>
    </Page>
  )
}
