import { profile } from '../data/profile.js'

export default function SocialLinks() {
  return (
    <div className="d-grid gap-2">
      {profile.socials.map((s) => (
        <a key={s.label} className="btn btn-outline-light" href={s.url} target="_blank" rel="noreferrer">
          <span className="d-flex justify-content-between">
            <span>{s.label}</span>
            <span className="opacity-75">{s.value}</span>
          </span>
        </a>
      ))}
    </div>
  )
}
