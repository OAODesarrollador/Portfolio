export const profile = {
  brand: 'Oscar Ortiz Dev Studio™',
  kicker: 'Full‑Stack · Data Science ',
  counter: '0 / 301',
  availability: 'Disponible para colaboraciones, consultorías y ofertas',
  folioTag: "Folio '25",
  inspiredBy: { name: 'Huy Phan', label: 'Inspired by' },
  resume: { label: 'CV', url: '/cv' }, // cambia a tu PDF/drive
  socials: [
    { label: 'GitHub', value: 'OAODesarrollador', url: 'https://github.com/OAODesarrollador' },
    { label: 'LinkedIn', value: 'Oscar Alejandro Ortiz', url: 'https://www.linkedin.com/in/oscar-alejandro-ortiz-desarrollador-fullstack/' },
    { label: 'WhatsApp', value: '+54 3704 054127', url: 'https://wa.me/543704054127' },
    { label: 'Email', value: 'contacto', url: 'mailto:oaodesarrollador@gmail.com' },
  ],
  location: { country: 'Argentina', city: 'Formosa Capital' },
  hero: {
    title: 'Oscar Alejandro Ortiz',
    subtitle:
      'Full‑Stack  orientado a Data Science. Construyo sistemas y tableros que no se rompen con la realidad.',
  },
  home: {
    openLine1: 'Open for any',
    openLine2: 'collaborations and offers',
    brandTop: 'OAO Dev Studio™',
    folioTop: 'Folio',
    folioYear: "'25",
    bigWord: 'Hola !',
    roleLine: 'Oscar Alejandro Ortiz, Full‑Stack Developer orientado a Data Science.',
    modelUrl: '/models/robotAnuncio2.glb',
  },

  about: {
    headline:
      'Full-Stack orientado a Data Science. Construyo e-commerce/POS y sistemas de gestión con datos confiables, exportes (Excel/PDF), métricas y automatización. Mi objetivo es que la tecnología trabaje para vos, no al revés.',
    bullets: [
      'Front: React · Router · Bootstrap (UI clara, rápida y usable)',
      'Back: Node/Express · Prisma · SQL (PostgreSQL/SQLite) · APIs robustas',
      'POS/Caja: cierres, reportes, notas de crédito, comisiones por medio de pago',
      'Exports y reporting: Excel “formato contable” + PDFs, tableros y KPIs',
      'Data: limpieza, métricas, análisis exploratorio y modelos cuando aportan valor',
      'DX/ops: migraciones, scripts, validaciones y despliegues sin sorpresas',
    ],
    traits: [
      'Full-Stack + Data Science (real, no buzzwords)',
      'Fanático de la trazabilidad y la consistencia de datos',
      'Automatización y DX: scripts, migraciones, validaciones',
      'Three.js/WebGL cuando suma valor (no por humo)',
    ],

    // NUEVO: “cómo trabajo” (a)(b)(c)(d)
    process: [
      {
        key: '(a)',
        title: 'Dirección',
        text:
          'Aclaro alcance, riesgos y prioridades. Defino objetivos medibles, flujos críticos y restricciones reales (tiempos, caja, datos, usuarios).',
      },
      {
        key: '(b)',
        title: 'Diseño',
        text:
          'Diseño funcional primero: UI simple, estados claros, errores visibles, y caminos cortos para el usuario. Bootstrap bien usado, no “plantillas”.',
      },
      {
        key: '(c)',
        title: 'Implementación',
        text:
          'Backend robusto (Node/Express + Prisma/SQL), validaciones, migraciones automáticas y manejo de errores. Evito “romper producción” por cambios chicos.',
      },
      {
        key: '(d)',
        title: 'Medición',
        text:
          'Métricas, reportes (Excel/PDF) y tableros. Si no se mide, no existe. La data tiene que cerrar con la operación.',
      },
    ],
  },
  photo: {
    src: '/images/yo10.png',
    alt: 'Oscar Alejandro Ortiz – Full Stack & Data Science Developer',
  },

}
