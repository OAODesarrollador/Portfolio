# Imágenes de detalle de WORK

Cada caso usa un recurso interior distinto de la portada. Los diagramas se generaron con la herramienta integrada image_gen y se guardaron en public/images/projects/. No representan capturas del software.

## Capturas reales

- public/images/projects/screens/dibok-full.png: https://dibok.app/#demo, captura completa de la página pública. El componente muestra la zona de la demo sin modificar sus píxeles.
- public/images/projects/screens/donnas-full.png: https://donnas.vercel.app/#menu, captura completa. El componente encuadra el catálogo original.

## Fuentes pendientes

Salesforce resuelto: el nuevo intento permitió abrir Inicio, Sobre mí y Proyectos. Se guardaron las capturas originales en public/images/projects/screens/salesforce-*-real.png. La portada salesforce-cover-real-v3.png y el detalle salesforce-detail-real-v3.png se generaron a partir de esas capturas; son composiciones visuales, no capturas sin modificar. Reemplazan los diagramas provisionales. Los prompts están en docs/salesforce-image-prompts.md.

Padel Club: la página pública redirige al acceso. Pizzería: el servicio de Render está suspendido. Tienda Saludable, Migración y Digitalización POS: los GIF locales son ilustraciones, no capturas verificables. Sus nuevos recursos interiores son diagramas identificados como tales; faltan pantallas originales para completar esa parte del pedido.

## Verificación

Navegación revisada a 360, 768 y 1440 px: títulos y flechas dentro de sus enlaces, en filas separadas. Capturas en docs/work-qa/.

## Prompts de generación

### padel-detail.png

Use case: infographic-diagram. Generate one polished landscape 16:9 editorial project infographic. Title "Padel Club". Subtitle exactly "Estructura y funcionamiento". Reserva de cancha → Retención temporal → Confirmación de pago → Agenda del club. Below, connect Roles del personal, Reglas de precios, Aislamiento entre clubes. Use only a court schematic and flow blocks. Dark charcoal background, warm white clean typography, lime accent #b8ff35, very subtle dimensional depth, generous whitespace and aligned structured flow. Diagram must be clean, readable, coherent and visually different from a photo with devices. All labels Spanish exactly as provided. Do not simulate any application screen: this is an explanatory diagram, not a screenshot. No claims of actual screenshot. Minimal text, no filler, no slogans. Keep every node and title within generous 7% margins.

### tienda-detail.png

Use case: infographic-diagram. Generate one polished landscape 16:9 editorial project infographic. Title "Tienda Saludable". Subtitle exactly "Estructura y funcionamiento". Catálogo → Carrito → Venta → Stock → Cierre de caja → Reportes. Show online store and POS as two separate entry points converging on Venta; inventory and cash ledger icons. Dark charcoal background, warm white clean typography, lime accent #b8ff35, very subtle dimensional depth, generous whitespace and aligned structured flow. Diagram must be clean, readable, coherent and visually different from a photo with devices. All labels Spanish exactly as provided. Do not simulate any application screen: this is an explanatory diagram, not a screenshot. No claims of actual screenshot. Minimal text, no filler, no slogans. Keep every node and title within generous 7% margins.

### pizzeria-detail.png

Use case: infographic-diagram. Generate one polished landscape 16:9 editorial project infographic. Title "Pizzería Full Stack". Subtitle exactly "Estructura y funcionamiento". Cliente: Catálogo → Carrito → Pedido. Supervisor: Asignar repartidor. Repartidor: Actualizar estado → Entrega. Three distinct role lanes connected in order. No map, no GPS or invented tracking. Dark charcoal background, warm white clean typography, lime accent #b8ff35, very subtle dimensional depth, generous whitespace and aligned structured flow. Diagram must be clean, readable, coherent and visually different from a photo with devices. All labels Spanish exactly as provided. Do not simulate any application screen: this is an explanatory diagram, not a screenshot. No claims of actual screenshot. Minimal text, no filler, no slogans. Keep every node and title within generous 7% margins.

### salesforce-detail.png

Use case: infographic-diagram. Generate one polished landscape 16:9 editorial project infographic. Title "Portfolio Salesforce". Subtitle exactly "Estructura y funcionamiento". Actual component structure of a personal Experience Cloud portfolio: paginaPortfolio connected to portalnuevo, proyectosPortfolio, piePaginaPortfolio. proyectosPortfolio connected to descripcionProyecto. Visualforce connected to Educación and Formación complementaria. LWC and Visualforce are technologies, not CRM modules. No sales pipeline, no customer dashboard, no invented interface. Dark charcoal background, warm white clean typography, lime accent #b8ff35, very subtle dimensional depth, generous whitespace and aligned structured flow. Diagram must be clean, readable, coherent and visually different from a photo with devices. All labels Spanish exactly as provided. Do not simulate any application screen: this is an explanatory diagram, not a screenshot. No claims of actual screenshot. Minimal text, no filler, no slogans. Keep every node and title within generous 7% margins.

### migration-detail.png

Use case: infographic-diagram. Generate one polished landscape 16:9 editorial project infographic. Title "Migración de Sistema". Subtitle exactly "Estructura y funcionamiento". Sistema anterior → Recuperación → Limpieza → Validación → Nuevo entorno. Show tabular records as abstract rows, mapping connectors, integrity check, database destination. No invented figures or claims. Dark charcoal background, warm white clean typography, lime accent #b8ff35, very subtle dimensional depth, generous whitespace and aligned structured flow. Diagram must be clean, readable, coherent and visually different from a photo with devices. All labels Spanish exactly as provided. Do not simulate any application screen: this is an explanatory diagram, not a screenshot. No claims of actual screenshot. Minimal text, no filler, no slogans. Keep every node and title within generous 7% margins.

### pos-detail.png

Use case: infographic-diagram. Generate one polished landscape 16:9 editorial project infographic. Title "Digitalización POS". Subtitle exactly "Estructura y funcionamiento". Código de barras → Producto y precio → Caja. Connect central product/price data to Etiquetas de góndola and Sucursales via Servidor central. Period: 1996–1999, Windows Server/NT. No modern cloud or touchscreens. Dark charcoal background, warm white clean typography, lime accent #b8ff35, very subtle dimensional depth, generous whitespace and aligned structured flow. Diagram must be clean, readable, coherent and visually different from a photo with devices. All labels Spanish exactly as provided. Do not simulate any application screen: this is an explanatory diagram, not a screenshot. No claims of actual screenshot. Minimal text, no filler, no slogans. Keep every node and title within generous 7% margins.

### salesforce-cover-v2.png

Use case: infographic-diagram. Generate one polished landscape 16:9 editorial project infographic. Title "Portfolio Salesforce". Subtitle exactly "Estructura y funcionamiento". A personal developer portfolio in Salesforce Experience Cloud. Abstract architectural overview with three modules Navegación, Proyectos, Formación, joined by small connectors; supporting labels Lightning Web Components and Visualforce. No screen, no computer, no fake UI, no CRM dashboard. Emphasize personal portfolio component architecture. Dark charcoal background, warm white clean typography, lime accent #b8ff35, very subtle dimensional depth, generous whitespace and aligned structured flow. Diagram must be clean, readable, coherent and visually different from a photo with devices. All labels Spanish exactly as provided. Do not simulate any application screen: this is an explanatory diagram, not a screenshot. No claims of actual screenshot. Minimal text, no filler, no slogans. Keep every node and title within generous 7% margins.
