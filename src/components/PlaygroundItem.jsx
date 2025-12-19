export default function PlaygroundItem({ item }) {
  return (
    <div className="card card-dark h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start gap-3">
          <div>
            <div className="fw-semibold">{item.title}</div>
            <div className="opacity-75 small">{item.tech}</div>
          </div>
          <div className="d-flex gap-2 flex-wrap">
            {item.live && (
              <a className="btn btn-sm btn-outline-light" href={item.live} target="_blank" rel="noreferrer">
                Live
              </a>
            )}
            {item.github && (
              <a className="btn btn-sm btn-outline-secondary" href={item.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>
        </div>
        <p className="mt-3 mb-0 opacity-75">{item.desc}</p>
      </div>
    </div>
  )
}
