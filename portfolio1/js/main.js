(() => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

(() => {
  const f = document.getElementById('contact-form');
  if (!f) return;
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(f);
    const subject = encodeURIComponent('Mensaje desde tu portafolio - ' + d.get('nombre'));
    const body = encodeURIComponent(d.get('mensaje') + '\n\n— ' + d.get('nombre') + ' (' + d.get('correo') + ')');
    window.location.href = 'mailto:anamariasol1134@gmail.com?subject=' + subject + '&body=' + body;
    document.getElementById('form-note').textContent = 'Se abrirá tu aplicación de correo para enviar el mensaje.';
  });
})();
