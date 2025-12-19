# Oscar Ortiz Dev Studio™ — Folio

Portfolio estilo **goodie.work** (Home con menú 01–04 + overlay en hover + “3D” con parallax lateral).

## Requisitos
- Node 18+ (ideal 20+)

## Ejecutar en local
```bash
npm install
npm run dev
```
Abrir la URL que imprime Vite (normalmente `http://localhost:5173`).

## Build / Preview
```bash
npm run build
npm run preview
```

## Contenido editable
- `src/data/profile.js`
- `src/data/work.js`
- `src/data/playground.js`

## Home 3D (GLB opcional)
Por defecto usa un “fallback” 3D simple.
Si querés tu modelo:
1) Copiá tu GLB a: `public/models/hero.glb`
2) En `src/data/profile.js` seteá:
   - `home.modelUrl: '/models/hero.glb'`

## Contacto
El formulario usa Formspree:
- `https://formspree.io/f/xkgjelby` (configurable en `src/pages/Contact.jsx`)
