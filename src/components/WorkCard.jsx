export default function WorkCard({ item }) {
  return (
    <div className="card card-dark">
      <div className="card-body">
        <div className="d-flex flex-wrap justify-content-between gap-2">
          <div className="fw-semibold">{item.org}</div>
          <div className="opacity-75">{item.period}</div>
        </div>
        <div className="mt-1">{item.role}</div>
        <p className="mt-3 opacity-75 mb-3">{item.desc}</p>
        <div className="d-flex flex-wrap gap-2">
          {item.stack.map((s) => (
            <span key={s} className="badge text-bg-secondary">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
