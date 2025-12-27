# Instrucciones para agentes AI (Copilot)

Propósito
- Ayudar a agentes a ser productivos rápidamente en este repo: una SPA React + Vite con escenas 3D (R3F).

Visión general (big picture)
- Stack: React 18 + Vite, React Router 6, React Three Fiber (@react-three/fiber) y Drei.
- Proyecto orientado a una SPA con rutas definidas en `src/app/routes.jsx` y un layout global `src/components/Shell.jsx`.
- La capa de contenido está desacoplada en `src/data/` (ej. `profile.js`, `work.js`, `playground.js`).

Estructura relevante
- `src/app/`: punto de arranque y rutas (`App.jsx`, `routes.jsx`).
- `src/pages/`: vistas (Home, Work, About, Playground, Contact, CV).
- `src/components/`: componentes reutilizables y 3D (ej. `Hero3D.jsx`, `Shell.jsx`, `WorkCard.jsx`).
- `src/styles/`: CSS por página y `global.css`.
- `public/`: activos estáticos (colocar modelos GLB en `public/models/`).

Patrones y convenciones del proyecto
- Componentes en PascalCase y archivos `.jsx` (p. ej. `Hero3D.jsx`).
- Rutas declarativas: los elementos de páginas se importan y exportan en `src/app/routes.jsx`.
- Datos estáticos: las páginas consumen datos desde `src/data/*.js` en vez de embebidos en componentes.
- 3D resiliente: `Hero3D.jsx` y otros modelos usan un patrón de fallback y manejo de errores (ModelErrorBoundary) para degradar correctamente.
- Evitar re-renders globales por interacción 3D: la lógica de cursor/animación puede usar `requestAnimationFrame` directo para separar física/animación del render React.

Comandos críticos
- Instalar: `npm install` (Node 18+ recomendado).
- Desarrollo: `npm run dev` (Vite, por defecto en http://localhost:5173).
- Build: `npm run build`.
- Previsualizar build: `npm run preview`.

Integraciones y puntos de interés
- Formulario de contacto: integrado con Formspree; ver `src/pages/Contact.jsx` para cambiar el endpoint.
- Modelos 3D: colocar archivos `.glb` en `public/models/` y configurar la ruta en `src/data/profile.js` (p. ej. `home.modelUrl`).

Ejemplos concretos (edición rápida)
- Cambiar modelo 3D del héroe:

  1. Copia `mi-modelo.glb` a `public/models/mi-modelo.glb`.
  2. Edita `src/data/profile.js`:

```js
export const profile = {
  home: { modelUrl: '/models/mi-modelo.glb' }
}
```

- Rutas y navegación: revisar `src/app/routes.jsx` para añadir o reordenar páginas y `nav` flags.

Qué mirar al depurar
- Problemas de carga 3D: revisar consola del navegador por errores de ruta (asegúrate de `public/models/`), y los componentes `src/components/Hero3D.jsx` y `src/components/ModelErrorBoundary.jsx` si existe.
- Estilos inesperados: revisar `src/styles/global.css` y el CSS específico de la página en `src/styles/`.

Notas adicionales para el agente
- No agregues dependencias sin permiso; el repo ya usa `three`, `@react-three/fiber`, `@react-three/drei`, `gsap` y `bootstrap` (ver `package.json`).
- Mantén cambios pequeños y localizados; respeta la convención de componentes y la separación datos/vista.
- Si modificas assets en `public/`, recuerda que Vite sirve `public/` en la raíz en tiempo de desarrollo.

Preguntas para el mantenedor
- ¿Quieres que documente flujos de build CI/CD o convenciones de commit/PR?

---
Si necesitas que amplíe ejemplos (tests, CI, o convenciones de branch), dímelo y lo extiendo.
