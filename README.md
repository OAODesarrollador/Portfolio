# Oscar Ortiz Dev Studio™ | Folio

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=for-the-badge&logo=three.js&logoColor=white)

> **Una experiencia web inmersiva que fusiona diseño minimalista con ingeniería frontend avanzada.**

Este proyecto no es solo un portafolio; es una demostración de capacidad técnica en el desarrollo de interfaces modernas, interactivas y performantes. Diseñado para ofrecer una experiencia de usuario fluida (60 FPS) con micro-interacciones cuidadas y una arquitectura escalable.

---

## 🚀 Tech Stack & Highlights

### Core
*   **React 18**: Aprovechando las últimas características de concurrencia.
*   **Vite**: Entorno de desarrollo ultrarrápido y optimización de build.
*   **React Router 6**: Enrutamiento declarativo y manejo de navegación.

### Creative & 3D
*   **React Three Fiber (R3F)**: Integración declarativa de Three.js en el ecosistema React.
*   **Drei**: Abstracciones útiles para cámaras, entornos y carga de modelos.
*   **GSAP**: Animaciones de alto rendimiento para transiciones complejas.

### Ingeniería & Calidad
*   **Resiliencia 3D**: Implementación de `ModelErrorBoundary` para asegurar que la UI nunca rompa, incluso si fallan los assets 3D, degradando elegantemente a modelos geométricos de fallback.
*   **Performance First**: Lógica de física del cursor desacoplada del ciclo de renderizado de React mediante `requestAnimationFrame` directo, evitando re-renders innecesarios en componentes complejos como `Work.jsx`.
*   **CSS Moderno**: Uso de variables CSS nativas, `clamp()` para tipografía fluida y propiedades de composición avanzadas (`isolation`, `mask-image`), sin depender excesivamente de frameworks pesados.

---

## 🛠️ Instalación y Ejecución

Requisitos: Node.js 18+ (Recomendado v20+).

1.  **Clonar y preparar:**
    ```bash
    git clone <repo-url>
    cd oscar-folio
    npm install
    ```

2.  **Desarrollo Local:**
    ```bash
    npm run dev
    ```
    El servidor iniciará en `http://localhost:5173`.

3.  **Producción:**
    ```bash
    npm run build
    npm run preview
    ```

---

## 📂 Estructura del Proyecto

```
src/
├── app/            # Configuración raíz (App, Routes)
├── components/     # Componentes reutilizables (UI, 3D, Layout)
│   ├── Hero3D.jsx  # Lógica de escena 3D con manejo de errores
│   └── ...
├── data/           # Capa de datos (separada de la vista)
├── pages/          # Vistas principales (Home, Work, About...)
├── styles/         # Sistema de diseño y estilos globales
└── main.jsx        # Punto de entrada
```

---

## 🎨 Personalización

El proyecto está diseñado para ser fácilmente adaptable:

### Contenido
Los datos son estáticos pero están desacoplados en `src/data/`:
*   `profile.js`: Información personal y configuración general.
*   `work.js`: Proyectos mostrados en la sección Work.
*   `playground.js`: Experimentos y demos.

### Modelo 3D (Hero)
Para reemplazar el cubo abstracto por tu propio modelo GLB:
1.  Coloca tu archivo `.glb` en la carpeta `public/models/`.
2.  Edita `src/data/profile.js`:
    ```javascript
    export const profile = {
      // ...
      home: {
        modelUrl: '/models/tu-archivo.glb', // Ruta relativa a public
      }
    }
    ```
    *El sistema manejará automáticamente la carga y el fallback si el archivo no existe.*

---

## 📬 Contacto

El formulario de contacto está integrado con **Formspree**.
Para usar tu propio endpoint, actualiza la URL en `src/pages/Contact.jsx`:

```javascript
useForm("tu-codigo-formspree")
```

---

© 2025 Oscar Ortiz Dev Studio™. Built with passion and code.
