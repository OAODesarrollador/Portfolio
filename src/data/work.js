import ventasGif from './imagenes/ventas.gif'
import freelanceGif from './imagenes/freelance.gif'

export const work = [
  {
    title: 'Oscar Ortiz Dev Studio™',
    client: 'Proyecto propio',
    year: '2024–Presente',
    image: ventasGif,
    href: '/projects/devstudio',
    desc: 'E-commerce + POS con reportes Excel/PDF, caja diaria y automatización.',
    stack: ['React', 'Node.js', 'Prisma'],

    modal: {
      tagline:
        'Sistema completo E-commerce + POS pensado para operación real (caja, cierres, reportes y automatización).',
      sections: [
        {
          title: 'Qué construí',
          bullets: [
            'Flujo completo de venta: catálogo → carrito → checkout → registro en backend.',
            'POS con medios de pago/comisiones, trazabilidad y cierres.',
            'Reportes exportables (Excel/PDF) para control y auditoría.',
            'Evolución del modelo de datos con migraciones incrementales.',
          ],
        },
        {
          title: 'Enfoque técnico',
          bullets: [
            'Integridad y consistencia antes que features “demo”.',
            'Manejo de errores y casos borde (operación real).',
            'Automatizaciones y scripts para entornos locales/despliegues.',
          ],
        },
        {
          title: 'Por qué importa',
          bullets: [
            'Prioriza operatividad: caja diaria, cierres, reportes y control.',
            'Arquitectura iterativa: crece sin romper lo existente.',
          ],
        },
      ],
      ctas: [
        { label: 'Repositorio TiendaSaludable', url: 'https://github.com/OAODesarrollador/TiendaSaludable' },
      ],
    },
  },

  {
    title: 'Freelance & Consulting',
    client: 'Varios clientes',
    year: '2022–2024',
    image: freelanceGif,
    href: '/projects/freelance',
    desc: 'Apps, sitios y automatizaciones con foco en performance y mantenimiento.',
    stack: ['React', 'API Design', 'Deploy'],

    modal: {
      tagline:
        'Entrega clara, foco en resultados y comunicación directa con stakeholders.',
      sections: [
        {
          title: 'Fortalezas técnicas',
          bullets: [
            'React/JS/TS + Node/APIs + SQL para soluciones completas.',
            'Automatización y reporting para reducir trabajo manual.',
            'Mentalidad QA: validaciones, pruebas y casos borde.',
            'Experiencia en entornos enterprise (Salesforce: Apex/LWC/Flow).',
          ],
        },
        {
          title: 'Habilidades blandas',
          bullets: [
            'Comunicación: transformo requerimientos en entregables, con límites claros.',
            'Autonomía: destrabo problemas sin depender de terceros.',
            'Responsabilidad: seguimiento, cierres y documentación mínima viable.',
            'Colaboración: feedback rápido, iteración y foco en impacto.',
          ],
        },
      ],
      ctas: [
        { label: 'Ver CV', url: '/cv' }, // si tenés ruta; si no, borrá esto
      ],
    },
  },
]
