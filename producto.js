// PEARSON HEELS — lógica de la ficha de producto (producto.html)
// Plantilla única: sirve para los 21 modelos, según el ?id= de la URL.
// No necesitas tocar este archivo. Para editar contenido, ve a products-data.js

(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = PRODUCTS.find(p => p.id === id);

  const root = document.getElementById("productRoot");
  const notFound = document.getElementById("notFound");

  if (!product) {
    root.hidden = true;
    notFound.hidden = false;
    return;
  }

  document.title = `${product.nombre} — Pearson Heels`;

  let selectedTalla = null;

  function whatsappUrl() {
    const tallaTxt = selectedTalla ? ` talla ${selectedTalla}` : "";
    const msg = `Hola Pearson Heels, quiero comprar el modelo ${product.nombre}${tallaTxt} (S/${product.precio}). ¿Me confirman disponibilidad?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  function tallasHtml() {
    if (!product.tallas || !product.tallas.length) return "";
    return product.tallas.map(t => `
      <button class="talla-btn" data-talla="${t.talla}" ${!t.disponible ? "disabled" : ""}>
        ${t.talla}
      </button>
    `).join("");
  }

  function thumbsHtml() {
    return product.imagenes.map((img, i) => `
      <button class="thumb ${i === 0 ? "is-active" : ""}" data-src="${img}" aria-label="Ver foto ${i + 1}">
        <img src="${img}" alt="${product.nombre} foto ${i + 1}">
      </button>
    `).join("");
  }

  root.innerHTML = `
    <div class="product-gallery">
      <div class="product-mainimg-wrap">
        ${product.disponible === false ? '<span class="badge-agotado">Agotado</span>' : ""}
        <img id="mainImg" class="product-mainimg" src="${product.imagenes[0]}" alt="${product.nombre}">
        <button class="zoom-btn" id="zoomBtn" aria-label="Acercar imagen">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </button>
      </div>
      ${product.imagenes.length > 1 ? `<div class="thumb-row">${thumbsHtml()}</div>` : ""}
    </div>

    <div class="product-info">
      <span class="card-linea">${product.linea}</span>
      <h1 class="product-title">${product.nombre}</h1>
      <p class="product-price">S/ ${product.precio.toFixed(2)}</p>
      <p class="product-desc">${product.detalles}</p>

      ${product.tallas && product.tallas.length ? `
        <div class="talla-picker">
          <p class="talla-label">Talla</p>
          <div class="talla-row">${tallasHtml()}</div>
          <p class="talla-hint" id="tallaHint">Elige una talla para continuar.</p>
        </div>
      ` : ""}

      <div class="product-actions">
        <a id="buyBtn" class="btn btn-gold" href="${whatsappUrl()}" target="_blank" rel="noopener">
          ${product.disponible === false ? "Agotado por ahora" : "Comprar por WhatsApp"}
        </a>
        <a href="index.html#tallas" class="btn btn-outline">Ver guía de tallas</a>
      </div>

      <p class="product-meta">Tacón N° ${product.tacon} · Línea ${product.linea}</p>
    </div>
  `;

  // --- Gallery: thumbnail click swaps main image ---
  const mainImg = document.getElementById("mainImg");
  root.querySelectorAll(".thumb").forEach(btn => {
    btn.addEventListener("click", () => {
      mainImg.src = btn.dataset.src;
      root.querySelectorAll(".thumb").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });

  // --- Talla picker ---
  const buyBtn = document.getElementById("buyBtn");
  const tallaHint = document.getElementById("tallaHint");
  root.querySelectorAll(".talla-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      root.querySelectorAll(".talla-btn").forEach(b => b.classList.remove("is-selected"));
      btn.classList.add("is-selected");
      selectedTalla = btn.dataset.talla;
      if (tallaHint) tallaHint.textContent = `Talla ${selectedTalla} seleccionada.`;
      buyBtn.href = whatsappUrl();
    });
  });

  // --- Lightbox zoom ---
  const zoomBtn = document.getElementById("zoomBtn");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  function openLightbox() {
    lightboxImg.src = mainImg.src;
    lightboxImg.alt = product.nombre;
    lightboxCaption.textContent = product.nombre;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    lightboxImg.style.transform = "";
  }
  if (zoomBtn) zoomBtn.addEventListener("click", openLightbox);
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
    lightbox.addEventListener("mousemove", (e) => {
      const stage = lightboxImg.parentElement.getBoundingClientRect();
      const x = ((e.clientX - stage.left) / stage.width) * 100;
      const y = ((e.clientY - stage.top) / stage.height) * 100;
      lightboxImg.style.transformOrigin = `${x}% ${y}%`;
      lightboxImg.style.transform = "scale(2)";
    });
    lightboxImg.addEventListener("mouseleave", () => { lightboxImg.style.transform = ""; });
  }
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

  // --- Footer WhatsApp + year (shared with index.html) ---
  const generalWa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Pearson Heels, tengo una consulta antes de comprar.")}`;
  const waFooter = document.getElementById("whatsappFooter");
  if (waFooter) waFooter.href = generalWa;
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
