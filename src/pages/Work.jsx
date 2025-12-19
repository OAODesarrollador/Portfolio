import Page from '../components/Page.jsx'
import WorkCard from '../components/WorkCard.jsx'
import { work } from '../data/work.js'

export default function Work() {
  return (
    <Page title="Work">
      <p className="opacity-75">
        Experiencia aplicada. El material más experimental vive en <span className="text-light">Playground</span>.
      </p>

      <div className="mt-4 d-grid gap-3">
        {work.map((w, idx) => (
          <WorkCard key={idx} item={w} />
        ))}
      </div>
    </Page>
  )
}
