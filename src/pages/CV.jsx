import InternalLayout from '../components/InternalLayout.jsx'
import { profile } from '../data/profile.js'
import '../styles/cv.css'

export default function CV(){return <InternalLayout className="cv-page"><section className="internal-hero"><p className="eyebrow">04 — Currículum</p><h1>Experiencia<br />y práctica.</h1><p className="hero-note">Una síntesis profesional de experiencia en desarrollo de software, productos y datos.</p></section><section className="cv-content"><div><p className="section-label">Perfil</p><h2>{profile.hero.title}</h2><p>{profile.about.headline}</p></div><div><p className="section-label">Capacidades seleccionadas</p>{profile.about.bullets.map(item=><p className="cv-line" key={item}>{item}</p>)}</div><a className="cv-download" href="/cv.pdf" target="_blank" rel="noreferrer">Abrir CV en PDF <span>↗</span></a><p className="cv-note">El enlace requiere el archivo <code>public/cv.pdf</code>.</p></section></InternalLayout>}
