import tiendaGif from './imagenes/PosTiendaSaludable.gif'
import freelanceGif from './imagenes/freelance.gif'
import aybarGif from './imagenes/PosVenta.gif'
import roigGif from './imagenes/ContableRoig.gif'
import migrationGif from './imagenes/MigracionDatos.gif'
import tiendaSaludableGif from './imagenes/PosTiendaSaludable.gif'

export const work = [
  {
    title: 'Oscar Ortiz Dev Studio™',
    client: 'Proyecto propio',
    year: '2024–Presente',
    image: tiendaSaludableGif,
    href: '/projects/devstudio',
    desc: 'E-commerce + POS con reportes Excel/PDF, caja diaria y automatización.',
    stack: ['React', 'Node.js', 'Prisma'],

    modal: {
      tagline:
        'Sistema completo E-commerce + POS pensado para operación real (caja, cierres, reportes y automatización).',
      sections: [
          {
            title: 'Contexto',
            bullets: [
              'Necesidad de centralizar ventas, stock y caja en un único sistema.',
              'Procesos manuales propensos a errores y sin trazabilidad.',
              'Reportes operativos necesarios para control diario y decisiones.',
            ],
          },
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
            title: 'Decisiones técnicas clave',
            bullets: [
              'Diseño orientado a operación real (caja diaria, cierres, auditoría).',
              'Migraciones incrementales para evolucionar sin romper datos existentes.',
              'Integridad/consistencia de datos como prioridad sobre features demo.',
            ],
          },
          {
            title: 'Impacto',
            bullets: [
              'Mejoró control y trazabilidad del negocio.',
              'Redujo errores manuales en caja y control de precios/stock.',
              'Aumentó disponibilidad de información para gestión.',
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
          title: 'Casos representativos',
          bullets: [
            'Apps y sitios con foco en mantenimiento y performance.',
            'Automatizaciones/reporting para reducir trabajo manual.',
            'Backends/APIs para gestión interna y flujos de negocio.',
          ],
        },
        {
          title: 'Impacto',
          bullets: [
            'Entrega end-to-end con comunicación directa con stakeholders.',
            'Mejora continua: iteración, validación y cierre de entregables.',
          ],
        },

      ],
      ctas: [
        //{ label: 'Ver CV', url: '/cv' }, // si tenés ruta; si no, borrá esto
      ],
    },
  },
  {
  title: 'Migración de Sistema Abandonado',
  client: 'Consultoría',
  year: 'Proyecto puntual',
  image: migrationGif,
  href: '/projects/migration', // si no existe la ruta, dejalo pero el click abre modal igual
  desc: 'Recuperación, limpieza y migración de datos para continuidad operativa.',
  stack: ['Data Migration', 'SQL', 'QA', 'Procesos'],

  modal: {
    tagline: 'Migración minuciosa de datos desde un sistema abandonado, evitando pérdida de información crítica.',
    sections: [
      {
        title: 'Contexto',
        bullets: [
          'Proveedor anterior abandonó el sistema.',
          'Riesgo de pérdida de datos y freno operativo del negocio.',
        ],
      },
      {
        title: 'Qué hice',
        bullets: [
          'Recuperación y limpieza de datos.',
          'Adaptación al nuevo entorno operativo.',
          'Validaciones para asegurar consistencia.',
        ],
      },
      {
        title: 'Decisiones técnicas clave',
        bullets: [
          'Prioridad: integridad de datos antes que velocidad.',
          'Estrategia de validación y control de calidad (QA) para evitar corrupción.',
        ],
      },
      {
        title: 'Impacto',
        bullets: [
          'Continuidad operativa sin pérdida de información crítica.',
          'Datos más consistentes para operar y reportar.',
        ],
      },
    ],
    ctas: [],
  },
},

  {
  title: 'Digitalización Contable + Sistemas Relacionales',
  client: 'Estudio Contable Roig & Asociados',
  year: '1994–2000',
  image: roigGif,
  href: '/projects/accounting',
  desc: 'Pasaje de procesos manuales a digitales (IVA, impuestos, sueldos) con DB relacional.',
  stack: ['DB Relacional', 'Clarion', 'Procesos', 'Datos'],

  modal: {
    tagline: 'Digitalización de procesos contables con foco en consistencia de datos y ahorro operativo.',
    sections: [
      {
        title: 'Qué digitalicé',
        bullets: [
          'Libros de IVA, liquidación de impuestos y sueldos.',
          'Sistemas basados en bases de datos relacionales (Clarion).',
          'Migración completa de procesos manuales a digitales.',
        ],
      },
      {
        title: 'Impacto',
        bullets: [
          'Ahorro significativo de tiempo operativo.',
          'Mejora en consistencia de datos.',
        ],
      },
    ],
    ctas: [],
  },
},
{
  title: 'Digitalización de POS (Retail)',
  client: 'Supermercados Aybar S.A.',
  year: '1996–1999',
  image: aybarGif,
  href: '/projects/pos',
  desc: 'Migración de precios manuales a scanner + centralización de datos de sucursales.',
  stack: ['POS', 'Datos', 'Redes', 'Windows Server/NT'],

  modal: {
    tagline: 'Digitalización de productos y precios para lectura por scanner y control centralizado.',
    sections: [
      {
        title: 'Contexto',
        bullets: [
          'Precios manuales y alta tasa de error en caja.',
          'Necesidad de centralizar datos entre sucursales.',
        ],
      },
      {
        title: 'Qué hice',
        bullets: [
          'Asociación código–producto–precio en cajas registradoras.',
          'Software de etiquetado de góndola alineado al sistema de ventas.',
          'Centralización de datos hacia servidor principal.',
          'Configuración de redes Windows Server/NT.',
        ],
      },
      {
        title: 'Impacto',
        bullets: [
          'Reducción de errores y mejora del control de precios.',
          'Mayor disponibilidad de información para gestión.',
        ],
      },
    ],
    ctas: [],
  },
},

]
