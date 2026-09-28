/* =========================================================================
   CATÁLOGO — script.js
   Todo lo que necesitás editar (nombre, precios, imágenes, links, packs,
   disponibilidad, etc.) está en la sección de abajo. No hace falta tocar
   nada más abajo del corte para actualizar el catálogo.
   ========================================================================= */

// ===== EDITAR CATÁLOGO AQUÍ =====

// Tu link de Telegram. Se usa en TODOS los botones "Consultar".
const TELEGRAM_URL = "https://t.me/nixiraa";

// Tu link de OnlyFans.
const ONLYFANS_URL = "https://onlyfans.com/nixira";

const CATALOG = {

  // ---- Portada ----
  perfil: {
    nombre: "Nixira", // cambiá esto por el nombre que quieras mostrar
    frase: "Contenido exclusivo, privado y personalizado",
  },

  // ---- Info (medios de pago, dónde está el contenido, reglas rápidas) ----
  info: {
    intro: "El contenido puede ser por Telegram o OnlyFans.",
    metodosPago: [
      "USDT por Binance ₿",
      "Tokens por Stripchat 💎",
    ],
    notas: [
      "No hago videollamadas, salvo excepciones por montos más altos.",
      "No doy datos personales.",
    ],
  },

  // ---- Sexting: duplicá o borrá objetos para agregar/quitar duraciones ----
  sexting: [
    { duracion: "10 min", usd: "12", ars: "12.000" },
    { duracion: "15 min", usd: "15", ars: "15.000" },
    { duracion: "20 min", usd: "20", ars: "30.000" },
    { duracion: "30 min", usd: "26", ars: "36.000" },
  ],

  // ---- Extras de sexting ----
  extrasSexting: [
    { nombre: "Elegir juguete", usd: "6", ars: "8.000" },
    { nombre: "Decir tu nombre o hacer algo específico", usd: "5", ars: "5.000" },
  ],

  // ---- Novia Virtual ----
  noviaVirtual: {
    descripcion: "Una experiencia más cercana y personalizada, para que tengas mi atención durante los días que elijas. Incluye charlas, 2 sexting por día y fotos durante el día. Si son más días, también van videos de regalo.",
    planes: [
      { duracion: "1 día", usd: "45", ars: "40.000", promo: false },
      { duracion: "3 días", usd: "70", ars: "90.000", promo: true },
      { duracion: "1 semana", usd: "140", ars: "150.000", promo: true },
      { duracion: "1 mes", usd: "consultar", ars: "consultar", promo: false },
    ],
  },

  // ---- Rates: cada uno con variantes (Escrito / Audio) ----
  rates: [
    {
      nombre: "Dick Rate",
      variantes: [
        { tipo: "Escrito", usd: "8", ars: "8.000" },
        { tipo: "Audio", usd: "13", ars: "13.000" },
      ],
    },
    {
      nombre: "Cum Rate",
      variantes: [
        { tipo: "Escrito", usd: "8", ars: "8.000" },
        { tipo: "Audio", usd: "15", ars: "15.000" },
      ],
    },
  ],

  // ---- Videos personalizados (por duración) ----
  videosPersonalizados: [
    { duracion: "1 min", usd: "10", ars: "15.000" },
    { duracion: "2 min", usd: "15", ars: "20.000" },
    { duracion: "3 min", usd: "25", ars: "26.000" },
    { duracion: "5 min", usd: "30", ars: "40.000" },
  ],

  // ---- Otros pedidos personalizados ----
  otrosPedidos: [
    {
      nombre: "Otros pedidos",
      descripcion: "¿Buscás algo específico? Consultame y vemos las opciones disponibles.",
      usd: "a consultar",
      ars: "a consultar",
    },
  ],

  // ---- Galería (sin fotos: solo texto y categorías a pedido) ----
  galeria: {
    descripcion: "Mínimo 1 min. Consultá el precio según lo que quieras.",
    categorias: ["Solo dedos", "Vibrador", "Dildo dragón", "Plug anal", "En pareja"],
  },

  // ---- Fetiches ----
  fetiches: {
    descripcion: "Pies, orejas, axilas, etc. Consultame por el que te interese.",
  },

  // ---- Packs ----
  packs: [
    {
      nombre: "Pack Mini",
      contenido: ["6 fotos", "1 video de 2 min", "Contenido variado de galería"],
      usd: "20",
      ars: "20.000",
    },
    {
      nombre: "Pack Medium",
      contenido: ["5 fotos variadas", "5 fotos a elección", "2 videos de 3 min", "1 sexting de 10 min"],
      usd: "30",
      ars: "35.000",
    },
    {
      nombre: "Pack Premium",
      contenido: ["5 fotos a elección", "1 video de +5 min", "1 video de 3 min a elección", "Sexting de 15 minutos"],
      usd: "55",
      ars: "60.000",
    },
  ],

  // ---- Videollamadas ----
  videollamadas: {
    texto: "No hago videollamadas, salvo excepciones por montos más altos. Si querés consultar, escribime.",
  },

  // ---- VIP ----
  vip: {
    disponible: false, // cambiá a true cuando quieras activar la sección
    beneficios: [
      // { nombre: "Beneficio VIP", descripcion: "...", usd: "XX", ars: "XX" },
    ],
  },

  // ---- Reglas / info importante ----
  reglas: [
    "No muestro mi cara en ningún contenido.",
    "En los videos puede verse únicamente mi boca, pero no realizo contenido donde se muestre mi cara.",
    "No comparto datos personales, ubicación ni información privada.",
    "Todo el contenido y las interacciones son 100% online, sin encuentros presenciales.",
    "Privacidad y discreción siempre.",
  ],
};

// ===== FIN DE LA SECCIÓN EDITABLE =====
// A partir de acá es lógica de la página. No hace falta modificarla
// para actualizar precios, textos o imágenes.


document.addEventListener("DOMContentLoaded", () => {
  renderHeaderAndFooter();
  renderHero();
  renderInfo();
  renderSexting();
  renderNoviaVirtual();
  renderRates();
  renderPersonalizados();
  renderGaleria();
  renderPacks();
  renderFetiches();
  renderVideollamadas();
  renderVip();
  renderReglas();
  renderConsultas();
  setupMenu();
});

/* ---------- Helpers ---------- */

function priceBlock(usd, ars) {
  const esConsulta = String(usd).toLowerCase().includes("consult") || String(ars).toLowerCase().includes("consult");
  if (esConsulta) {
    return `<div class="card-prices"><div class="price"><span class="price-value">A consultar</span></div></div>`;
  }
  return `
    <div class="card-prices">
      <div class="price">
        <span class="price-label">USD</span>
        <span class="price-value">$${usd}</span>
      </div>
      <div class="price">
        <span class="price-label">ARS</span>
        <span class="price-value">$${ars}</span>
      </div>
    </div>
  `;
}

function consultarBtn(small) {
  return `<a href="${TELEGRAM_URL}" target="_blank" rel="noopener" class="btn btn-outline ${small ? "btn-small" : ""}">Consultar</a>`;
}

/* ---------- Header / Footer ---------- */

function renderHeaderAndFooter() {
  const { nombre } = CATALOG.perfil;
  document.getElementById("brand-name").textContent = nombre;
  document.getElementById("footerName").textContent = nombre;

  const footerTelegram = document.getElementById("footerTelegram");
  footerTelegram.textContent = "Telegram";
  footerTelegram.href = TELEGRAM_URL;
  footerTelegram.target = "_blank";
  footerTelegram.rel = "noopener";

  const footerOnlyfans = document.getElementById("footerOnlyfans");
  footerOnlyfans.textContent = "OnlyFans";
  footerOnlyfans.href = ONLYFANS_URL;
  footerOnlyfans.target = "_blank";
  footerOnlyfans.rel = "noopener";
}

/* ---------- Hero ---------- */

function renderHero() {
  const { nombre, frase } = CATALOG.perfil;
  document.getElementById("heroName").textContent = nombre;
  document.getElementById("heroTagline").textContent = frase;

  // Portada automática: solo hace falta poner un archivo llamado
  // "portada" (jpg, jpeg, png, webp o mp4) dentro de la carpeta assets/.
  // No hace falta editar nada de código: la página prueba cada formato
  // en orden y usa el primero que encuentre. Si no encuentra ninguno,
  // muestra la imagen de ejemplo (placeholder).
  const imagenes = ["jpg", "jpeg", "png", "webp"];
  const video = "assets/portada.mp4";
  const placeholder = "assets/placeholder.svg";
  const mediaContainer = document.getElementById("heroMedia");

  function probarImagenes(index) {
    if (index >= imagenes.length) {
      mediaContainer.innerHTML = `<img src="${placeholder}" alt="">`;
      return;
    }
    const src = `assets/portada.${imagenes[index]}`;
    const test = new Image();
    test.onload = () => { mediaContainer.innerHTML = `<img src="${src}" alt="">`; };
    test.onerror = () => probarImagenes(index + 1);
    test.src = src;
  }

  // Primero prueba si existe un video de portada; si no, prueba imágenes.
  const testVideo = document.createElement("video");
  testVideo.onloadeddata = () => {
    mediaContainer.innerHTML = `<video src="${video}" autoplay muted loop playsinline></video>`;
  };
  testVideo.onerror = () => probarImagenes(0);
  testVideo.src = video;
}

/* ---------- Info ---------- */

function renderInfo() {
  document.getElementById("infoIntro").textContent = CATALOG.info.intro;

  document.getElementById("infoPagos").innerHTML = CATALOG.info.metodosPago
    .map(item => `<li>${item}</li>`).join("");

  document.getElementById("infoNotas").innerHTML = CATALOG.info.notas
    .map(item => `<li>${item}</li>`).join("");

  const ofBtn = document.getElementById("infoOnlyfansBtn");
  ofBtn.href = ONLYFANS_URL;

  const tgBtn = document.getElementById("infoTelegramBtn");
  tgBtn.href = TELEGRAM_URL;
}

/* ---------- Sexting ---------- */

function renderSexting() {
  document.getElementById("sextingGrid").innerHTML = CATALOG.sexting.map(item => `
    <div class="card">
      <h3 class="card-title">${item.duracion}</h3>
      ${priceBlock(item.usd, item.ars)}
      <div class="card-actions">${consultarBtn(true)}</div>
    </div>
  `).join("");

  document.getElementById("extrasGrid").innerHTML = CATALOG.extrasSexting.map(item => `
    <div class="card">
      <h3 class="card-title">${item.nombre}</h3>
      ${priceBlock(item.usd, item.ars)}
      <div class="card-actions">${consultarBtn(true)}</div>
    </div>
  `).join("");
}

/* ---------- Novia Virtual ---------- */

function renderNoviaVirtual() {
  document.getElementById("noviaDescripcion").textContent = CATALOG.noviaVirtual.descripcion;

  document.getElementById("noviaGrid").innerHTML = CATALOG.noviaVirtual.planes.map(item => `
    <div class="card">
      <div class="card-badge-row">
        <h3 class="card-title">${item.duracion}</h3>
        ${item.promo ? `<span class="badge">Promo</span>` : ""}
      </div>
      ${priceBlock(item.usd, item.ars)}
      <div class="card-actions">${consultarBtn(true)}</div>
    </div>
  `).join("");
}

/* ---------- Rates ---------- */

function renderRates() {
  document.getElementById("ratesGrid").innerHTML = CATALOG.rates.map(rate => `
    <div class="card">
      <h3 class="card-title">${rate.nombre}</h3>
      <div class="rate-variants">
        ${rate.variantes.map(v => `
          <div class="variant-row">
            <span class="variant-label">${v.tipo}</span>
            <span class="variant-price">USD $${v.usd} / ARS $${v.ars}</span>
          </div>
        `).join("")}
      </div>
      <div class="card-actions">${consultarBtn(true)}</div>
    </div>
  `).join("");
}

/* ---------- Personalizados ---------- */

function renderPersonalizados() {
  document.getElementById("videosPersonalizadosGrid").innerHTML = CATALOG.videosPersonalizados.map(item => `
    <div class="card">
      <h3 class="card-title">${item.duracion}</h3>
      ${priceBlock(item.usd, item.ars)}
      <div class="card-actions">${consultarBtn(true)}</div>
    </div>
  `).join("");

  document.getElementById("otrosPedidosGrid").innerHTML = CATALOG.otrosPedidos.map(item => `
    <div class="card">
      <h3 class="card-title">${item.nombre}</h3>
      <p class="card-desc">${item.descripcion}</p>
      ${priceBlock(item.usd, item.ars)}
      <div class="card-actions">${consultarBtn(true)}</div>
    </div>
  `).join("");
}

/* ---------- Galería (sin fotos) ---------- */

function renderGaleria() {
  document.getElementById("galeriaDescripcion").textContent = CATALOG.galeria.descripcion;
  document.getElementById("galeriaCategorias").innerHTML = CATALOG.galeria.categorias
    .map(cat => `<span class="tag">${cat}</span>`).join("");

  const btn = document.getElementById("galeriaBtn");
  btn.href = TELEGRAM_URL;
  btn.target = "_blank";
  btn.rel = "noopener";
}

/* ---------- Packs ---------- */

function renderPacks() {
  document.getElementById("packsGrid").innerHTML = CATALOG.packs.map(pack => `
    <div class="card pack-card">
      <h3 class="card-title">${pack.nombre}</h3>
      <ul class="card-bullets">
        ${pack.contenido.map(line => `<li>${line}</li>`).join("")}
      </ul>
      ${priceBlock(pack.usd, pack.ars)}
      <div class="card-actions">${consultarBtn(true)}</div>
    </div>
  `).join("");
}

/* ---------- Fetiches ---------- */

function renderFetiches() {
  document.getElementById("fetichesDescripcion").textContent = CATALOG.fetiches.descripcion;
  const btn = document.getElementById("fetichesBtn");
  btn.href = TELEGRAM_URL;
  btn.target = "_blank";
  btn.rel = "noopener";
}

/* ---------- Videollamadas ---------- */

function renderVideollamadas() {
  document.getElementById("videollamadasText").textContent = CATALOG.videollamadas.texto;
  const btn = document.getElementById("videollamadasBtn");
  btn.href = TELEGRAM_URL;
  btn.target = "_blank";
  btn.rel = "noopener";
}

/* ---------- VIP ---------- */

function renderVip() {
  const textEl = document.getElementById("vipText");
  const contentEl = document.getElementById("vipContent");

  if (!CATALOG.vip.disponible) {
    textEl.textContent = "Actualmente no disponible.";
    contentEl.innerHTML = "";
    return;
  }

  textEl.textContent = "Beneficios disponibles para miembros VIP:";
  contentEl.innerHTML = `<div class="card-grid">${
    CATALOG.vip.beneficios.map(item => `
      <div class="card">
        <h3 class="card-title">${item.nombre}</h3>
        <p class="card-desc">${item.descripcion}</p>
        ${priceBlock(item.usd, item.ars)}
        <div class="card-actions">${consultarBtn(true)}</div>
      </div>
    `).join("")
  }</div>`;
}

/* ---------- Reglas ---------- */

function renderReglas() {
  document.getElementById("reglasList").innerHTML = CATALOG.reglas
    .map(item => `<li>${item}</li>`).join("");
}

/* ---------- Consultas ---------- */

function renderConsultas() {
  const btn = document.getElementById("consultasBtn");
  btn.href = TELEGRAM_URL;
  btn.target = "_blank";
  btn.rel = "noopener";
}

/* ---------- Menú hamburguesa ---------- */

function setupMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}
