import { useState } from 'react'
import InternalLayout from '../components/InternalLayout.jsx'
import { profile } from '../data/profile.js'
import '../styles/contact.css'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvvyaga'
export default function Contact() {
  const [data,setData] = useState({name:'',email:'',message:''}), [touched,setTouched] = useState({})
  const errors = {}
  if (data.name.trim().length < 2) errors.name='Escribí tu nombre (mín. 2 letras).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email='Ingresá un email válido.'
  if (data.message.trim().length < 10) errors.message='El mensaje debe tener al menos 10 caracteres.'
  const change=e=>setData({...data,[e.target.name]:e.target.value})
  const blur=e=>setTouched({...touched,[e.target.name]:true})
  const submit=e=>{ if(Object.keys(errors).length){e.preventDefault();setTouched({name:true,email:true,message:true})} }
  return <InternalLayout className="contact-page">
    <section className="internal-hero contact-hero"><p className="eyebrow">05 — Contacto</p><h1>Empecemos<br />un proyecto.</h1><p className="hero-note">¿Tenés una idea, producto o problema para resolver? Hablemos.</p></section>
    <section className="contact-grid"><aside><p className="section-label">Contacto</p>{profile.socials.map(s=><a key={s.label} href={s.url} target={s.url.startsWith('http')?'_blank':undefined} rel="noreferrer"><span>{s.label}</span><strong>{s.value}</strong><i>↗</i></a>)}<p className="contact-location">Ubicación<br /><strong>{profile.location.city}, {profile.location.country}</strong></p></aside>
      <form action={FORMSPREE_ENDPOINT} method="POST" noValidate onSubmit={submit}>
        {[['name','text','¿Cuál es tu nombre?'],['email','email','¿Cuál es tu email?']].map(([name,type,label])=><label key={name}><span>{label}</span><input name={name} type={type} value={data[name]} onChange={change} onBlur={blur} autoComplete={name} aria-invalid={Boolean(touched[name]&&errors[name])} />{touched[name]&&errors[name]&&<small>{errors[name]}</small>}</label>)}
        <label><span>Contame sobre tu proyecto.</span><textarea name="message" rows="4" value={data.message} onChange={change} onBlur={blur} aria-invalid={Boolean(touched.message&&errors.message)} />{touched.message&&errors.message&&<small>{errors.message}</small>}</label>
        <button type="submit">Enviar mensaje <span>→</span></button>
      </form>
    </section>
  </InternalLayout>
}
