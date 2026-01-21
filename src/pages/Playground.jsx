import { Link } from 'react-router-dom'
import Page from '../components/Page.jsx'
import PlaygroundItem from '../components/PlaygroundItem.jsx'
import { playground } from '../data/playground.js'
import '../styles/playground.css'

export default function Playground() {
  return (
    <>
      <Link to="/" className="work-brand-inline">
        ↑ OAO Dev Studio™  ↑
      </Link>

      <Page title="Playground" marquee>
        <p className="opacity-75 mt-2 mb-4 text-center mx-auto" style={{ maxWidth: '600px' }}>
          Experimentos de código, proyectos personales y prototipos.
          <br />
          <span className="small opacity-50">Lo que sucede en el playground, se queda en el playground.</span>
        </p>

        <div style={{ width: '80%', margin: '0 auto' }}>
          <div className="playground-grid">
            {playground.map((it, i) => (
              <PlaygroundItem key={i} item={it} />
            ))}
          </div>
        </div>
      </Page>
    </>
  )
}
