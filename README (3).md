# Portafolio · Ana Suárez

Portafolio web personal con el concepto *Dark Developer*, hecho con HTML5, CSS3 y JavaScript, sin frameworks.

**GitHub:** [github.com/anamariasol1134-bit](https://github.com/anamariasol1134-bit)
**LinkedIn:** [ana-suarez-67b5a72b5](https://www.linkedin.com/in/ana-suarez-67b5a72b5/)
**Correo:** anamariasol1134@gmail.com

## Tecnologías
HTML5 · CSS3 · JavaScript · Git · GitHub

## Estructura
```
portfolio/
├── index.html
├── ana-suarez-portafolio-un-solo-archivo.html   (versión todo en uno)
├── README.md
├── css/     styles.css · animations.css · responsive.css
├── js/      main.js · navigation.js · animations.js
└── assets/  images/ana.jpg, og.jpg · icons/favicon.svg
```

## Ejecutar localmente
Abre la carpeta en VS Code y usa Live Server sobre `index.html`, o sirve la carpeta:
```
python3 -m http.server 8000   # http://localhost:8000
```
Las fuentes y los iconos de tecnologías se cargan desde Google Fonts, jsDelivr y Simple Icons (requiere internet).

## Formulario de contacto
Al enviarlo abre el programa de correo con el mensaje listo (`mailto:`). Para recibir mensajes sin abrir el correo, conecta el formulario a un servicio como Formspree.

## Personalizar
- **Fotografía:** reemplaza `assets/images/ana.jpg` (cuadrada, ~800 px). `og.jpg` es la imagen que se ve al compartir el enlace.
- **Textos:** edita `index.html`; cada sección está comentada.
- **Enlaces:** busca `href="https://` en `index.html` (GitHub, LinkedIn, repositorios) y `mailto:` para el correo.
- **Colores y tipografías:** variables en `:root` al inicio de `css/styles.css`.
- **Capturas reales de proyectos:** en cada `.card__vis` puedes sustituir la composición por `<img src="assets/images/proyecto.png" alt="...">`.

## Subir a GitHub
1. Crea un repositorio nuevo en [github.com/new](https://github.com/new) (por ejemplo `portfolio`).
2. Desde la carpeta del proyecto:
```
git init
git add .
git commit -m "Portafolio inicial"
git branch -M main
git remote add origin https://github.com/anamariasol1134-bit/portfolio.git
git push -u origin main
```
(Cambia `portfolio` si usas otro nombre de repositorio.)

## Publicar en GitHub Pages
1. En el repositorio: *Settings → Pages → Deploy from a branch → main / (root)*.
2. Tras unos minutos quedará en `https://anamariasol1134-bit.github.io/portfolio/` (el final depende del nombre del repositorio).

## Publicar en Vercel
1. Importa el repositorio en [vercel.com/new](https://vercel.com/new).
2. Framework Preset: *Other*; sin comando de build; directorio de salida: la raíz.
3. Deploy.
