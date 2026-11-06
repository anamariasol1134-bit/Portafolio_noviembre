# Portafolio · Ana Suárez

Portafolio web personal (concepto *Dark Developer*) hecho con HTML5, CSS3 y JavaScript sin frameworks.

## Estructura
```
index.html
css/   styles.css · animations.css · responsive.css
js/    main.js · navigation.js · animations.js
assets/images/ana.jpg, og.jpg   assets/icons/favicon.svg
```

## Ejecutar localmente
Abre `index.html` en el navegador, o sirve la carpeta:
```
python3 -m http.server 8000   # http://localhost:8000
```
Las fuentes e iconos de tecnologías se cargan desde Google Fonts, jsDelivr y Simple Icons (requiere internet).

## Formulario de contacto
Al enviarlo abre el programa de correo con el mensaje listo (`mailto:`). Para recibir mensajes sin abrir el correo, conecta el formulario a un servicio como Formspree (cambia `action`/`method` en `index.html` y elimina el bloque del formulario en `js/main.js`).

## Personalizar
- **Fotografía:** reemplaza `assets/images/ana.jpg` (cuadrada, ~800 px). Para color, quita `filter:grayscale(1)` en `.photo img` de `css/styles.css`. `og.jpg` es la imagen al compartir el enlace.
- **Textos:** edita directamente `index.html`, cada sección está comentada.
- **Enlaces:** busca `href="https://` en `index.html` (GitHub, LinkedIn, repositorios) y `mailto:` para el correo.
- **Colores y tipografías:** variables en `:root` al inicio de `css/styles.css`.
- **Capturas reales:** en cada `.card__vis` puedes sustituir la composición por `<img src="assets/images/proyecto.png" alt="...">`.

## Publicar en GitHub Pages
1. Sube el contenido a un repositorio.
2. *Settings → Pages → Deploy from a branch → main / (root)*.
3. El sitio queda en `https://<usuario>.github.io/<repositorio>/`.

## Publicar en Vercel
1. Importa el repositorio en vercel.com/new.
2. Framework Preset: *Other*; sin comando de build; directorio de salida: raíz.
3. Deploy.
