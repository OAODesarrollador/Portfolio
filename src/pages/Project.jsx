import { Navigate, Link, useParams } from 'react-router-dom'
import InternalLayout from '../components/InternalLayout.jsx'
import Reveal from '../components/Reveal.jsx'
import { getNextProject, getProject } from '../data/work.js'
import '../styles/project.css'

export default function Project() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <Navigate to="/work" replace />
  const next = getNextProject(slug)
  return <InternalLayout className="project-page">
    <article>
      <header className="project-hero"><p className="eyebrow">Caso de estudio — {project.year}</p><h1>{project.title}</h1><p>{project.subtitle}</p></header>
      <figure className="project-cover"><img src={project.image} alt={`Vista del proyecto ${project.title}`} /></figure>
      <Reveal as="section" className="project-overview"><p className="section-label">Sobre el proyecto</p><h2>{project.description}</h2><dl><div><dt>Enfoque</dt><dd>{project.featured}</dd></div><div><dt>Cliente</dt><dd>{project.client}</dd></div><div><dt>Rol</dt><dd>{project.role.join(' · ')}</dd></div><div><dt>Tecnologías</dt><dd>{project.stack.join(' · ')}</dd></div></dl></Reveal>
      <Reveal as="section" className="project-story"><p className="section-label">El problema</p><h2>{project.problem}</h2></Reveal>
      <figure className="project-media"><img src={project.image} alt={`Interfaz de ${project.title}`} loading="lazy" /></figure>
      <Reveal as="section" className="project-story"><p className="section-label">La solución</p><h2>{project.solution}</h2></Reveal>
      <Reveal as="section" className="project-development"><p className="section-label">Desarrollo</p><p>{project.development}</p><div className="project-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Ver proyecto ↗</a>}{project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer">GitHub ↗</a>}</div></Reveal>
      <Link className="next-project" to={`/work/${next.slug}`}><span>Siguiente proyecto</span><strong>{next.title}</strong><i aria-hidden="true">→</i></Link>
    </article>
  </InternalLayout>
}
