import Page from '../components/Page.jsx'
import SocialLinks from '../components/SocialLinks.jsx'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkgjelby'

export default function Contact() {
  return (
    <Page title="Say Hi">
      <div className="row g-3 mt-2">
        <div className="col-12 col-lg-6">
          <div className="card card-dark">
            <div className="card-body">
              <div className="opacity-75 small">Links</div>
              <div className="mt-2">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="card card-dark">
            <div className="card-body">
              <div className="opacity-75 small">Mensaje</div>

              <form className="mt-2 d-grid gap-2" action={FORMSPREE_ENDPOINT} method="POST">
                <input
                  className="form-control form-dark"
                  name="name"
                  placeholder="Tu nombre"
                  required
                  autoComplete="name"
                />
                <input
                  className="form-control form-dark"
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  required
                  autoComplete="email"
                />
                <textarea className="form-control form-dark" name="message" rows="4" placeholder="Mensaje" required />
                <button className="btn btn-light" type="submit">
                  Enviar
                </button>
              </form>

              <div className="small opacity-75 mt-2">
                Este formulario envía por Formspree (editable en <code>Contact.jsx</code>).
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card card-dark">
            <div className="card-body d-flex flex-wrap gap-3 justify-content-between">
              <div>
                <div className="opacity-75 small">Inspired By</div>
                <div>Huy Phan</div>
              </div>
              <div>
                <div className="opacity-75 small">Designed By</div>
                <div>Oscar Ortiz</div>
              </div>
              <div>
                <div className="opacity-75 small">Type</div>
                <div>System UI + Bootstrap</div>
              </div>
              <div>
                <div className="opacity-75 small">Models</div>
                <div>Oscar, again</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
