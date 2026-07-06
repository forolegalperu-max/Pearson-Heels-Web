// PEARSON HEELS — lógica del catálogo (index.html)
// No necesitas tocar este archivo para actualizar productos:
// eso se hace en products-data.js

(function () {
  const grid = document.getElementById("catalogGrid");
  const filterBar = document.getElementById("filterBar");
  let activeFilter = "Todos";

  function cardTemplate(p) {
    const disponible = p.disponible !== false;
    const detailUrl = `producto.html?id=${encodeURIComponent(p.id)}`;
    const buyBtn = disponible
      ? `<a class="btn btn-gold" href="${detailUrl}">Ver modelo</a>`
      : `<button class="btn" disabled>Agotado por ahora</button>`;

    return `
      <article class="card" data-linea="${p.linea}">
        <a href="${detailUrl}" class="card-media-link" aria-label="Ver ${p.nombre}">
          <div class="card-media">
            ${!disponible ? '<span class="badge-agotado">Agotado</span>' : ""}
            <img src="${p.imagenes[0]}" alt="${p.nombre}, modelo ${p.linea} Pearson Heels" loading="lazy">
          </div>
        </a>
        <div class="card-body">
          <span class="card-linea">${p.linea}</span>
          <a href="${detailUrl}"><h3 class="card-title">${p.nombre}</h3></a>
          <p class="card-meta">Tacón N° ${p.tacon}</p>
          <p class="card-price">S/ ${p.precio.toFixed(2)}</p>
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

  const generalWa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Pearson Heels, tengo una consulta antes de comprar.")}`;
  const waLink = document.getElementById("whatsappLink");
  const waFooter = document.getElementById("whatsappFooter");
  if (waLink) waLink.href = generalWa;
  if (waFooter) waFooter.href = generalWa;

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

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  render();
})();
