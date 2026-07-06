// PEARSON HEELS — lógica del sitio
// No necesitas tocar este archivo para actualizar productos:
// eso se hace en js/products-data.js

(function () {
  const grid = document.getElementById("catalogGrid");
  const filterBar = document.getElementById("filterBar");
  let activeFilter = "Todos";

  function whatsappUrl(product) {
    const msg = `Hola Pearson Heels, quiero comprar el modelo ${product.nombre} (S/${product.precio}). ¿Me confirman disponibilidad?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  function cardTemplate(p) {
    const disponible = p.disponible !== false;
    const buyBtn = disponible
      ? `<a class="btn btn-gold" href="${whatsappUrl(p)}" target="_blank" rel="noopener">Comprar por WhatsApp</a>`
      : `<button class="btn" disabled>Agotado por ahora</button>`;

    return `
      <article class="card" data-linea="${p.linea}">
        <div class="card-media">
          ${!disponible ? '<span class="badge-agotado">Agotado</span>' : ""}
          <img src="${p.imagen}" alt="${p.nombre}, modelo ${p.linea} Pearson Heels" loading="lazy">
          <button class="zoom-btn" data-zoom-src="${p.imagen}" data-zoom-name="${p.nombre}" aria-label="Acercar imagen de ${p.nombre}">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </button>
        </div>
        <div class="card-body">
          <span class="card-linea">${p.linea}</span>
          <h3 class="card-title">${p.nombre}</h3>
          <p class="card-meta">Tacón N° ${p.tacon}</p>
          <p class="card-price">S/ ${p.precio.toFixed(2)}</p>
          <details class="card-details">
            <summary>Ver detalles del material</summary>
            <p>${p.detalles}</p>
          </details>
          <div class="card-buy">${buyBtn}</div>
        </div>
      </article>
    `;
  }

  function render() {
    const items = PRODUCTS.filter(p => activeFilter === "Todos" || p.linea === activeFilter);
    grid.innerHTML = items.map(cardTemplate).join("");
  }

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    filterBar.querySelectorAll(".chip").forEach(c => c.classList.toggle("is-active", c === btn));
    render();
  });

  // Contact section WhatsApp links (general inquiry, no product attached)
  const generalWa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Pearson Heels, tengo una consulta antes de comprar.")}`;
  const waLink = document.getElementById("whatsappLink");
  const waFooter = document.getElementById("whatsappFooter");
  if (waLink) waLink.href = generalWa;
  if (waFooter) waFooter.href = generalWa;

  // Mobile nav toggle
  const burger = document.getElementById("burgerBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (burger) {
    burger.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(isOpen));
    });
    mobileNav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------------------------------------------------------
  // Zoom / lightbox: clic en la lupa abre la imagen en grande,
  // y al mover el mouse encima se acerca siguiendo el cursor.
  // ---------------------------------------------------------
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  function openLightbox(src, name) {
    lightboxImg.src = src;
    lightboxImg.alt = name;
    lightboxCaption.textContent = name;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    lightboxImg.style.transform = "";
  }

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".zoom-btn");
    if (!btn) return;
    openLightbox(btn.dataset.zoomSrc, btn.dataset.zoomName);
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    lightbox.addEventListener("mousemove", (e) => {
      const stage = lightboxImg.parentElement.getBoundingClientRect();
      const x = ((e.clientX - stage.left) / stage.width) * 100;
      const y = ((e.clientY - stage.top) / stage.height) * 100;
      lightboxImg.style.transformOrigin = `${x}% ${y}%`;
      lightboxImg.style.transform = "scale(2)";
    });
    lightboxImg.addEventListener("mouseleave", () => {
      lightboxImg.style.transform = "";
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  render();
})();
