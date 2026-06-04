## AGENTS

Proyecto: Gestión Autónomo (gestionautonomo.es)

Rol del agente: Desarrollador frontend experto en SEO técnico, Core Web Vitals y creación de Micro Niche Sites (MNS) con 12 años de experiencia[cite: 2].

Objetivo: Crear el frontend inicial y la estructura estática para "gestionautonomo.es", un portal web informativo y comparador de software de facturación para autónomos y PYMES en España. El objetivo es que la web sea ultrarrápida, orientada a la monetización mediante Google AdSense y enlaces de afiliación, y lista para ser desplegada directamente en GitHub Pages sin necesidad de backend.

Requerimientos:
- Parte pública:
    - Página Home (Hero section orientada a conversión, resumen de categorías principales, listado de "Últimos artículos" en formato grid y llamada a la acción hacia las comparativas).
    - Plantilla de Categoría (Página para mostrar un listado de artículos de una temática específica como "Comparativas" o "Normativa").
    - Plantilla de Artículo Individual (Diseño para la lectura de reseñas y guías, que incluya una tabla de contenidos interactiva, un sidebar sticky lateral, y bloques destacados para botones de afiliación).
    - Espacios publicitarios: Integrar estratégicamente contenedores vacíos con comentarios HTML (ej. `<!-- Banner AdSense 728x90 -->`) para la futura inserción de anuncios sin romper el layout.
    - Navegación fluida entre secciones mediante enlaces relativos[cite: 2].
    - Optimización SEO experta (meta etiquetas, semántica estricta de encabezados H1, H2, H3, y marcado Schema básico)[cite: 2].

- Parte privada / Backend:
    - NINGUNO. Este proyecto es una web 100% estática (Static Site). Todo el contenido se gestionará mediante archivos HTML. No se requiere panel de administración, ni login, ni bases de datos.

Stack de tecnología:
- HTML5[cite: 2]
- CSS3 (sin frameworks)[cite: 2]
- JavaScript Vanilla JS sin frameworks[cite: 2]

Preferencias generales importantes:
- Todos los textos visibles en la aplicación web deben estar en español[cite: 2].
- HTML debe ser semántico[cite: 2].
- No uses alert, confirm, prompt, todo el feedback debe ser visual en el DOM (modales o notificaciones toast integradas)[cite: 2].
- Prioriza que el código sea fácil de entender pero de calidad[cite: 2].

Preferencias de Diseño:
- Responsive (mobile first)[cite: 2].
- El diseño debe ser corporativo, moderno, minimalista e intuitivo, transmitiendo confianza y profesionalidad[cite: 2] (paleta recomendada: Azul marino institucional, blanco limpio y detalles en verde o naranja para los Call to Action).
- La lectura en la plantilla de artículos debe ser muy cómoda, cuidando el interlineado y el ancho máximo del contenedor de texto para no cansar la vista.

Preferencias de estilos:
- Eliminar TailwindCSS (si el agente lo sugiere) y convertirlo todo a CSS nativo[cite: 2].
- Usa medidas en rem, usando un font-size base de 10px (ej. 1.6rem = 16px)[cite: 2].
- Usa buenas prácticas de maquetación CSS y si es necesario usa flexbox y CSS grid layout[cite: 2].
- No uses estilos internos ni inline[cite: 2].
- Los estilos deben estar en el archivo style.css dentro de la carpeta correspondiente[cite: 2].

Preferencias de código:
- No añadas dependencias externas no solicitadas[cite: 2].
- HTML debe ser estrictamente semántico[cite: 2].
- No uses innerHTML/outerHTML, todo el contenido dinámico (si lo hubiera vía JS) debe ser insertado con appendChild, o previamente creando un elemento con document.createElement[cite: 2].
- Cuidado: no olvidar prevenir el default de los eventos en submits (formularios) o clicks de enlaces vacíos[cite: 2].
- Prioriza el código legible y mantenible[cite: 2].
- Prioriza que el código sea sencillo de entender por encima de soluciones excesivamente abstractas[cite: 2].
- El agente debe mantener una actitud proactiva y resolutiva[cite: 2].
- El agente debe tener una actitud colaborativa y respetuosa[cite: 2].
- El agente debe tener una actitud innovadora y creativa para resolver problemas de UI[cite: 2].

Estructuras de archivos requerida:
- carpeta (assets)[cite: 2]
    - carpeta (css)[cite: 2]
        - style.css
    - carpeta (fonts)[cite: 2]
    - carpeta (img)[cite: 2]
    - carpeta (js)[cite: 2]
        - main.js
- carpeta (design)
    -con toda la información proveniente de Google Stitch
- index.html (Página Home)[cite: 2]
- informe-nicho-seo-adsense.html
- AGENTS.md[cite: 2]