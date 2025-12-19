import Home from '../pages/Home.jsx'
import Work from '../pages/Work.jsx'
import About from '../pages/About.jsx'
import Playground from '../pages/Playground.jsx'
import Contact from '../pages/Contact.jsx'
import CV from '../pages/CV.jsx'

export const routes = [
  { path: '/', element: <Home />, label: 'Home', nav: false, order: null },
  { path: '/work', element: <Work />, label: 'Work', nav: true, order: '01.' },
  { path: '/about', element: <About />, label: 'About', nav: true, order: '02.' },
  { path: '/playground', element: <Playground />, label: 'Playground', nav: true, order: '03.' },
  { path: '/contact', element: <Contact />, label: 'Contact', nav: true, order: '04.' },
  { path: '/cv', element: <CV />, label: 'Résumé', nav: false, order: null },
]
