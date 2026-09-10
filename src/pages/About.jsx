import InternalLayout from '../components/InternalLayout.jsx'
import Reveal from '../components/Reveal.jsx'
import { profile } from '../data/profile.js'
import '../styles/about.css'

const services = [['Desarrollo Full Stack','Frontend, backend, APIs y bases de datos.'],['Aplicaciones en la nube','Herramientas que se usan desde el navegador, sin instalación y con actualizaciones centralizadas.'],['Automatización','Software que reemplaza procesos repetitivos de negocio.'],['Datos','Analítica, tableros y aplicaciones basadas en datos.']]
const technologies = {
  Frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Svelte'],
  'Backend y bases de datos': ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
  'Python y ciencia de datos': ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Streamlit', 'Jupyter'],
  'Ecosistema Salesforce': ['Salesforce', 'LWC', 'Visualforce', 'Experience Cloud'],
}

export default function About() {
  return <InternalLayout className="about-page">
    <section className="internal-hero about-hero"><p className="eyebrow">02 — Sobre mí</p><h1>Construyo software<br />para problemas reales.</h1><div className="about-intro"><h2>{profile.hero.title}</h2><p>Desarrollador Full Stack en Argentina, enfocado en construir productos digitales y aplicaciones en la nube que permiten gestionar tu negocio desde el navegador, sin instalaciones y siempre actualizadas.</p></div></section>
    <Reveal as="section" className="editorial-section"><p className="section-label">Lo que hago</p><div className="service-list">{services.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div></Reveal>
    <Reveal as="section" className="editorial-section technologies"><p className="section-label">Tecnologías seleccionadas</p><div className="technology-grid">{Object.entries(technologies).map(([group,items])=><div key={group}><h3>{group}</h3>{items.map(item=><p key={item}>{item}</p>)}</div>)}</div></Reveal>
    <Reveal as="section" className="editorial-section"><p className="section-label">Proceso</p><div className="service-list">{profile.about.process.map((item,i)=><article key={item.title}><span>{String(i+1).padStart(2,'0')}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></Reveal>
  </InternalLayout>
}
