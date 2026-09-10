import InternalLayout from '../components/InternalLayout.jsx'
import PlaygroundItem from '../components/PlaygroundItem.jsx'
import Reveal from '../components/Reveal.jsx'
import { playground } from '../data/playground.js'
import '../styles/playground.css'

export default function Playground(){return <InternalLayout className="playground-page"><section className="internal-hero"><p className="eyebrow">03 — Laboratorio</p><h1>Experimentos,<br />código y curiosidad.</h1><p className="hero-note">Un espacio para prototipos, ideas y exploraciones técnicas fuera del trabajo comercial.</p></section><section className="playground-grid">{playground.map(item=><Reveal key={item.title}><PlaygroundItem item={item}/></Reveal>)}</section></InternalLayout>}
