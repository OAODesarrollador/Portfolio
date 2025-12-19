import Page from '../components/Page.jsx'
import PlaygroundItem from '../components/PlaygroundItem.jsx'
import { playground } from '../data/playground.js'

export default function Playground() {
  return (
    <Page title="Playground" marquee>
      <p className="opacity-75 mt-2">Experimentos, prototipos y pruebas. No todo llega a producción (por suerte).</p>

      <div className="row g-3 mt-3">
        {playground.map((it, i) => (
          <div key={i} className="col-12 col-lg-6">
            <PlaygroundItem item={it} />
          </div>
        ))}
      </div>
    </Page>
  )
}
