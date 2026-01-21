export default function PlaygroundItem({ item }) {
  return (
    <div className="play-card">
      <div className="play-card-image">
        {item.image && <img src={item.image} alt={item.title} loading="lazy" />}
      </div>

      <div className="play-card-content">
        <div className="play-card-header">
          <h3 className="play-card-title">{item.title}</h3>

          <div className="play-card-links">
            {item.live && (
              <a href={item.live} target="_blank" rel="noreferrer" className="play-icon-link" aria-label="Live Demo">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            )}
            {item.github && (
              <a href={item.github} target="_blank" rel="noreferrer" className="play-icon-link" aria-label="Ver Código">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            )}
          </div>
        </div>

        <p className="play-card-desc">{item.desc}</p>

        <div className="play-card-tech">
          {item.tech.split('·').map((t, i) => (
            <span key={i} className="tech-tag">{t.trim()}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
