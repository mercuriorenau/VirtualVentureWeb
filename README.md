# Virtual Venture — Sitio web

## Estructura del proyecto

```
VIRTUAL VENTURE/
├── index.html          # Página principal (ensambla las secciones)
├── logo.jpg            # Logo
├── css/
│   └── styles.css      # Estilos
├── js/
│   ├── includes.js     # Carga los partials HTML (importado por main.js)
│   └── main.js         # Punto de entrada: partials + navegación + animaciones
└── partials/
    ├── nav.html
    ├── hero.html
    ├── marquee.html
    ├── nosotros.html
    ├── servicios.html
    ├── sectores.html
    ├── tour.html
    ├── contacto.html
    └── footer.html
```

## Cómo ver el sitio en local

Los fragmentos HTML se cargan con `fetch`, así que **necesitas un servidor local** (no basta con abrir `index.html` directamente en el navegador):

```powershell
cd "c:\Users\Mercurio\Desktop\VIRTUAL VENTURE"
python -m http.server 8765
```

Luego abre: `http://localhost:8765/`

## Editar contenido

| Qué cambiar | Archivo |
|------------|---------|
| Textos de una sección | `partials/nombre-seccion.html` |
| Colores, layout, responsive | `css/styles.css` |
| Menú, scroll, animaciones | `js/main.js` |
| Embed Kuula (iframe) | `partials/tour.html` |
| Pago Stripe mensualidad | `partials/tour.html` (enlace en botón) |
