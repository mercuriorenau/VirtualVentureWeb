/**
 * Carga fragmentos HTML desde partials/.
 * Requiere servidor local (python -m http.server).
 */
const slots = document.querySelectorAll('[data-include]');

if (slots.length) {
  await Promise.all(
    [...slots].map(async (slot) => {
      const path = slot.getAttribute('data-include');
      try {
        const res = await fetch(path);
        if (!res.ok) throw new Error(`${path} → ${res.status}`);
        slot.outerHTML = await res.text();
      } catch (err) {
        console.error('Error cargando partial:', path, err);
        slot.innerHTML = `<p style="padding:2rem;color:#c00;">No se pudo cargar ${path}. Usa un servidor local.</p>`;
      }
    })
  );
}

document.dispatchEvent(new Event('partials:ready'));
