import ventasGif from './imagenes/ventas.gif'
import freelanceGif from './imagenes/freelance.gif'

export const work = [
  {
    title: 'Oscar Ortiz Dev Studio™',
    client: 'Proyecto propio',
    year: '2024–Presente',
    image: ventasGif,
    href: '/projects/devstudio',
    desc:
      'E-commerce + POS con reportes Excel/PDF, caja diaria y automatización.',
    stack: ['React', 'Node.js', 'Prisma'],
  },
  {
    title: 'Freelance & Consulting',
    client: 'Varios clientes',
    year: '2022–2024',
    image: freelanceGif,
    href: '/projects/freelance',
    desc:
      'Apps, sitios y automatizaciones con foco en performance y mantenimiento.',
    stack: ['React', 'API Design', 'Deploy'],
  },
]
