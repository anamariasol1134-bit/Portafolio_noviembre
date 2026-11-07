(() => {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  if (!burger || !menu) return;
  const setOpen = (open) => {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };
  burger.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });

  const links = [...menu.querySelectorAll('a')];
  const map = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        links.forEach((l) => l.classList.remove('active'));
        map.get(en.target.id)?.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['inicio', 'sobre-mi', 'tecnologias', 'proyectos', 'contacto'].forEach((id) => {
    const el = document.getElementById(id); if (el) io.observe(el);
  });
})();

(() => {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((el) => el.classList.add('in')); return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  items.forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 70}ms`; io.observe(el); });
})();

(() => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();


(() => {
  const f = document.getElementById('contact-form');
  if (!f) return;
  const note = document.getElementById('form-note');
  const btn = f.querySelector('button[type="submit"]');
  const ENDPOINT = 'https://formsubmit.co/ajax/anamariasol1134@gmail.com';
  const say = (msg, type) => { note.textContent = msg; note.className = 'form__note ' + (type || ''); };

  f.addEventListener('submit', async (e) => {
    e.preventDefault();
    const d = new FormData(f);
    if (d.get('_honey')) return; // anti-spam
    btn.disabled = true; btn.textContent = 'Enviando...'; say('');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: d.get('nombre'),
          email: d.get('correo'),
          message: d.get('mensaje'),
          _subject: 'Nuevo mensaje desde tu portafolio - ' + d.get('nombre'),
          _replyto: d.get('correo'),
          _template: 'table'
        })
      });
      const data = await res.json();
      if (!res.ok || data.success === 'false' || data.success === false) throw new Error('fail');
      f.reset();
      say('¡Mensaje enviado! Gracias por escribirme, te responderé pronto.', 'ok');
    } catch (err) {
      say('No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme a anamariasol1134@gmail.com.', 'err');
    } finally {
      btn.disabled = false; btn.textContent = 'Enviar mensaje';
    }
  });
})();
