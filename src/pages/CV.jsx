import Page from '../components/Page.jsx'

export default function CV() {
  return (
    <Page title="Résumé">
      <p className="opacity-75 mt-2">
        Pegá acá tu PDF o un link público. Opción simple: subí un PDF a /public/cv.pdf.
      </p>

      <div className="card card-dark mt-3">
        <div className="card-body">
          <div className="d-flex flex-wrap gap-2">
            <a className="btn btn-light" href="/cv.pdf" target="_blank" rel="noreferrer">
              Abrir cv.pdf
            </a>
            <a className="btn btn-outline-light" href="/" >
              Volver
            </a>
          </div>
          <div className="small opacity-75 mt-2">
            Si no existe <code>/public/cv.pdf</code>, el link no va a abrir nada.
          </div>
        </div>
      </div>
    </Page>
  )
}
