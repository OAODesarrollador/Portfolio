import { useState } from 'react'
import Page from '../components/Page.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import { Link } from 'react-router-dom'
import '../styles/contact.css'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvvyaga'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState({})

  // Validation helpers
  const validate = (data) => {
    const errors = {}
    const name = data.name.trim()
    if (name.length < 2) {
      errors.name = 'Escribi tu nombre (min. 2 letras).'
    } else if (!/^[A-Za-z\s'-]+$/.test(name)) {
      errors.name = 'Usa solo letras y espacios.'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errors.email = 'Ingresá un email válido.'
    }
    if (data.message.trim().length < 10) {
      errors.message = 'El mensaje debe tener al menos 10 caracteres.'
    }
    return errors
  }

  const errors = validate(formData)
  const isValid = Object.keys(errors).length === 0

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true })
  }

  const handleSubmit = (e) => {
    const submitErrors = validate(formData)
    if (Object.keys(submitErrors).length > 0) {
      e.preventDefault()
      setTouched({ name: true, email: true, message: true })
    }
  }

  return (
    <>
      <Link to="/" className="contact-brand-inline">
        OAO Dev StudioT
      </Link>

      <Page title="Say Hi" pageClass="page-contact">
        <div className="contact-body">
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
                  <div className="opacity-75 small mb-3">Mensaje // SYSTEM_READY</div>

                  <form
                    className="mt-2 d-grid gap-3"
                    action={FORMSPREE_ENDPOINT}
                    method="POST"
                    noValidate
                    onSubmit={handleSubmit}
                  >

                    {/* Name Field */}
                    <div className="form-group-cyber">
                      <input
                        className={`form-control form-dark ${touched.name && errors.name ? 'is-invalid' : ''}`}
                        name="name"
                        placeholder="Identificación (Nombre)"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.name && errors.name && <div className="cyber-error">{errors.name}</div>}
                    </div>

                    {/* Email Field */}
                    <div className="form-group-cyber">
                      <input
                        className={`form-control form-dark ${touched.email && errors.email ? 'is-invalid' : ''}`}
                        type="email"
                        name="email"
                        placeholder="Enlace Neural (Email)"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email && <div className="cyber-error">{errors.email}</div>}
                    </div>

                    {/* Message Field */}
                    <div className="form-group-cyber">
                      <textarea
                        className={`form-control form-dark ${touched.message && errors.message ? 'is-invalid' : ''}`}
                        name="message"
                        rows="4"
                        placeholder="Paquete de Datos..."
                        required
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.message && errors.message && <div className="cyber-error">{errors.message}</div>}
                    </div>

                    <button
                      className={`btn btn-light cyber-btn ${isValid ? 'cyber-valid' : ''}`}
                      type="submit"
                    >
                      {isValid ? 'Enviar' : 'Enviar'}
                    </button>
                  </form>

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
        </div>
      </Page>
    </>
  )
}
