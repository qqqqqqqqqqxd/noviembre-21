/* =====================================================================
   1. INTERRUPTORES DE PRUEBA
      - MODO_PRUEBA_TODO_ABIERTO: `true` solo si quieres probar los raspa
        y sobres antes de tiempo.
      - PREVIEW_RULETA: `true` para ver/quitar la preview de la ruleta hoy.
      IMPORTANTE: pon AMBOS en `false` antes de subir a GitHub para Ana.
===================================================================== */
const MODO_PRUEBA_TODO_ABIERTO = false;
const PREVIEW_RULETA = false;

const ANIO = 2026;
const TOTAL_DIAS = 31;

/* =====================================================================
   2. CONFIGURACIÓN DE LA RULETA SORPRESA
      Spawnea hoy 26 de noviembre a las 4:40 PM (Nicaragua) y dura 1 hora
      (hasta las 5:40 PM).
      `peso` = probabilidad aproximada en % por giro:
      - Dorados: 3.5% cada uno (difíciles pero posibles en 10 intentos)
      - Normales: 15.5% cada uno
===================================================================== */
const RULETA_INICIO = new Date("2026-11-26T16:40:00-06:00");
const RULETA_FIN    = new Date("2026-11-26T17:40:00-06:00");
const RULETA_MAX_INTENTOS = 10;

const RULETA_PREMIOS = [
  { corto: "21 de dic ✦",     completo: "Saber qué pasará el 21 de diciembre", dorado: true,  peso: 3.5  },
  { corto: "Cartas",          completo: "Cartas",                              dorado: false, peso: 15.5 },
  { corto: "300 besototes",   completo: "300 besototes",                       dorado: false, peso: 15.5 },
  { corto: "Tu antojo fav",   completo: "Tu antojo fav",                       dorado: false, peso: 15.5 },
  { corto: "1ro de dic ✦",    completo: "Revelación del 1ro de diciembre",     dorado: true,  peso: 3.5  },
  { corto: "Regalo sorpresa", completo: "Regalo sorpresa",                     dorado: false, peso: 15.5 },
  { corto: "Cita sorpresa",   completo: "Una cita sorpresa planeada por mí",   dorado: false, peso: 15.5 },
  { corto: "Ida al cine",     completo: "Una ida al cine juntos",              dorado: false, peso: 15.5 }
];

/* =====================================================================
   3. RASPA Y GANA DEL LIBRO (24 DE NOVIEMBRE AL 21 DE DICIEMBRE)
      Se desbloquean automáticamente a las 6:00 PM hora Nicaragua (-06:00)
===================================================================== */
const RASPA_Y_GANA = [
  {
    fecha: "2026-11-24",
    etiqueta: "24 de noviembre",
    formato: "ticket",
    kicker: "VALE OFICIAL · PARA ANA",
    titulo: "Sí a todo lo que digas",
    mensaje: "Válido para cumplir cualquier cosa que me pidas, sin peros ni excusas.",
    pie: "Canjeable cuando tú quieras · Sin vencimiento",
    talon: "VÁLIDO",
    numero: "NO. 01"
  },
  {
    fecha: "2026-11-25",
    etiqueta: "25 de noviembre",
    formato: "cajas",
    titulo: "Elige uno de los tres cuadros",
    opciones: [
      "Carta virtual",
      "Elegir lo que quieras",
      "Tu antojo favorito"
    ]
  },
  {
    fecha: "2026-11-26",
    etiqueta: "26 de noviembre",
    formato: "carta_virtual",
    titulo: "Carta Virtual",
    mensaje: "Una carta escrita especialmente para ti."
  },
  { fecha: "2026-11-27", etiqueta: "27 de noviembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-11-28", etiqueta: "28 de noviembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-11-29", etiqueta: "29 de noviembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-11-30", etiqueta: "30 de noviembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-01", etiqueta: "1 de diciembre",  titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-02", etiqueta: "2 de diciembre",  titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-03", etiqueta: "3 de diciembre",  titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-04", etiqueta: "4 de diciembre",  titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-05", etiqueta: "5 de diciembre",  titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-06", etiqueta: "6 de diciembre",  titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-07", etiqueta: "7 de diciembre",  titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-08", etiqueta: "8 de diciembre",  titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-09", etiqueta: "9 de diciembre",  titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-10", etiqueta: "10 de diciembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-11", etiqueta: "11 de diciembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-12", etiqueta: "12 de diciembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-13", etiqueta: "13 de diciembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-14", etiqueta: "14 de diciembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-15", etiqueta: "15 de diciembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-16", etiqueta: "16 de diciembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-17", etiqueta: "17 de diciembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-18", etiqueta: "18 de diciembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-19", etiqueta: "19 de diciembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-20", etiqueta: "20 de diciembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-12-21", etiqueta: "21 de diciembre", titulo: "", tipo: "ESPECIAL", mensaje: ``, extraTexto: "", extraLink: "" }
];

/* =====================================================================
   4. CARTAS DEL CALENDARIO DE DICIEMBRE (1 AL 31)
===================================================================== */
const CARTAS = {
  1:  { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  2:  { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  3:  { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  4:  { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  5:  { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  6:  { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  7:  { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  8:  { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  9:  { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  10: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  11: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  12: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  13: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  14: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  15: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  16: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  17: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  18: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  19: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  20: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  21: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  22: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  23: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  24: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  25: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  26: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  27: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  28: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  29: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  30: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" },
  31: { titulo: "", tipo: "CARTA", mensaje: ``, extraTexto: "", extraLink: "" }
};

/* =====================================================================
   TEXTOS FIJOS DEL LIBRO SECRETO (PÁGINAS 1 A 4)
===================================================================== */
const LIBRO_PAGINA_1_INICIO =
  "¿Te acuerdas de cuando te pedí ser novios?, te lo recordaré...";

const LIBRO_PAGINA_1_FINAL =
  "Te agradezco por estos sesenta y un días juntos, capaz el día de hoy no lo sea, pero espero que esto signifique mucho para ti.";

const LIBRO_PAGINA_2 =
  "Sesenta y dos días y en ninguno te dejé de pensar. Te has convertido en alguien especial para mí en tan solo un poco de tiempo, todos estos días a tu lado fueron muy especiales y, no hay ninguno que no pueda olvidar. Gracias por ser esa luz que iluminó mis caminos en los tiempos más oscuros, por ser esa persona que me ayudó cuando más lo necesité, por ser ese apoyo en mi vida que siempre tendré, no puedo expresar con palabras lo mucho que siento, pero espero sean las suficientes para que tú sientas esto como algo de verdad.";

const LIBRO_PAGINA_3 =
  "¿Te acuerdas del primer mes? En esa ocasión te pido perdón por darte algo no tan grande, este próximo mes te espera algo mejor para ti, sé que nuestra relación no se trata de quién más dé, mucho menos que nuestro amor se trate de lo material, pero quiero demostrarte lo mucho que puedo darte viniendo de mí, espero que disfrutes el calendario que te hice, tanto como disfrutaré haciendo cosas para hacerte feliz.";

const LIBRO_PAGINA_4 =
  "¿Crees que el calendario es la única cosa que puede incluir cosas?, sigue viendo el libro...";

/* =====================================================================
   LÓGICA INTERNA (NO NECESITAS TOCAR DE AQUÍ PARA ABAJO)
===================================================================== */

const TOTAL_PAGINAS_LIBRO = 4 + RASPA_Y_GANA.length;
const STORAGE_KEY_CARTAS  = "ana_adviento_2026_abiertas_v2";
const STORAGE_KEY_RASPA   = "ana_libro_2026_raspados_v2";
const STORAGE_KEY_CAJAS   = "ana_libro_2026_cajas_v2";
const STORAGE_KEY_RULETA  = "ana_ruleta_2026_nov26_v2";

const INCOGNITO_MODOS = [
  {
    etiqueta: "INCÓGNITO",
    svg: `<svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22h24l-3-10H15l-3 10Z"/>
      <path d="M7 22h34"/>
      <circle cx="18" cy="31" r="4"/>
      <circle cx="30" cy="31" r="4"/>
      <path d="M22 31h4"/>
    </svg>`
  },
  {
    etiqueta: "SECRETO",
    svg: `<svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="8" y="14" width="32" height="22" rx="1.5"/>
      <path d="M9 15l15 11 15-11"/>
      <path d="M22.2 21.8a2.2 2.2 0 1 1 3.3 1.9c-.8.4-1.5.9-1.5 1.9"/>
      <circle cx="24" cy="29.2" r="0.9" fill="currentColor"/>
    </svg>`
  },
  {
    etiqueta: "SIN PISTAS",
    svg: `<svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="24" cy="24" r="14" stroke-dasharray="3 3"/>
      <path d="M20.5 19.5a3.7 3.7 0 0 1 7.2 1.2c0 2.3-3.7 2.8-3.7 5.3"/>
      <circle cx="24" cy="30.5" r="1.1" fill="currentColor"/>
    </svg>`
  },
  {
    etiqueta: "MISTERIO",
    svg: `<svg viewBox="0 0 48 48" width="38" height="38" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="13" y="21" width="22" height="16" rx="2"/>
      <path d="M18 21v-4a6 6 0 0 1 12 0v4"/>
      <circle cx="24" cy="28" r="2"/>
      <path d="M24 30v3"/>
    </svg>`
  }
];

const MINI_STAMPS = [
  `<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M8 14V7M8 8C5.5 7 4.5 4.5 5 2c1.5.8 2.5 2 3 3.5C8.5 4 9.5 2.8 11 2c.5 2.5-.5 5-3 6Z"/></svg>`,
  `<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M8 2l1.5 4.5L14 8l-4.5 1.5L8 14l-1.5-4.5L2 8l4.5-1.5L8 2Z"/></svg>`,
  `<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M10.5 3.5a5 5 0 1 0 2.5 9A4.2 4.2 0 0 1 10.5 3.5Z"/></svg>`,
  `<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M8 13V3M8 5L5 8M8 5l3 3M8 9l-4 3M8 9l4 3"/></svg>`
];

const TONOS_PAPEL = ["#fbf6ec", "#f5efe3", "#f8f2e7", "#f3ece0", "#f9f4ea"];

// DOM Calendario
const introScreen = document.getElementById("intro-screen");
const btnEnter = document.getElementById("btn-enter");
const mainApp = document.getElementById("main-app");
const calendarGrid = document.getElementById("calendar-grid");
const toastLock = document.getElementById("toast-lock");
const toastLockText = document.getElementById("toast-lock-text");

const cdLabel = document.getElementById("countdown-label");
const cdDays = document.getElementById("cd-days");
const cdHours = document.getElementById("cd-hours");
const cdMins = document.getElementById("cd-mins");
const cdSecs = document.getElementById("cd-secs");

const incognitoWidget = document.getElementById("incognito-day-widget");
const incognitoTag = document.getElementById("incognito-tag");
const incognitoSvg = document.getElementById("incognito-svg");

const letterModal = document.getElementById("letter-modal");
const modalBackdrop = document.getElementById("modal-backdrop");
const btnCloseModal = document.getElementById("btn-close-modal");
const modalDate = document.getElementById("modal-date");
const modalTag = document.getElementById("modal-tag");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalExtra = document.getElementById("modal-extra");

// DOM Libro Secreto
const secretTrigger = document.getElementById("secret-trigger");
const radiantFlash = document.getElementById("radiant-flash");
const secretOverlay = document.getElementById("secret-overlay");
const secretBackdrop = document.getElementById("secret-backdrop");
const btnCloseSecret = document.getElementById("btn-close-secret");
const bookClosedView = document.getElementById("book-closed-view");
const btnOpenBook = document.getElementById("btn-open-book");
const bookOpenView = document.getElementById("book-open-view");
const pageTurnLeaf = document.getElementById("page-turn-leaf");
const bookPageContent = document.getElementById("book-page-content");
const pageBookMark = document.getElementById("page-book-mark");
const pageNumberLabel = document.getElementById("page-number-label");
const btnPrevPage = document.getElementById("btn-prev-page");
const btnNextPage = document.getElementById("btn-next-page");
const pageJumpSelect = document.getElementById("page-jump-select");

// DOM Ruleta
const rouletteOverlay = document.getElementById("roulette-overlay");
const rouletteCard = document.querySelector(".roulette-card");
const rouletteBackdrop = document.getElementById("roulette-backdrop");
const btnCloseRoulette = document.getElementById("btn-close-roulette");
const rouletteCanvas = document.getElementById("roulette-canvas");
const wheelPointer = document.getElementById("wheel-pointer");
const btnSpinCenter = document.getElementById("btn-spin-center");
const btnSpinMain = document.getElementById("btn-spin-main");
const rouletteSpinBar = document.getElementById("roulette-spin-bar");
const rouletteTimerPill = document.getElementById("roulette-timer-pill");
const rouletteAttemptsPill = document.getElementById("roulette-attempts-pill");
const rouletteSub = document.getElementById("roulette-sub");
const rouletteResultBox = document.getElementById("roulette-result-box");
const rouletteResultKicker = document.getElementById("roulette-result-kicker");
const rouletteResultName = document.getElementById("roulette-result-name");
const rouletteResultActions = document.getElementById("roulette-result-actions");
const btnKeepPrize = document.getElementById("btn-keep-prize");
const btnRetrySpin = document.getElementById("btn-retry-spin");
const rouletteFab = document.getElementById("roulette-fab");
const rouletteFabLabel = document.getElementById("roulette-fab-label");
const previewToggleBar = document.getElementById("preview-toggle-bar");
const btnTogglePreview = document.getElementById("btn-toggle-preview");
const roulettePreviewControls = document.getElementById("roulette-preview-controls");
const btnResetPreviewRoulette = document.getElementById("btn-reset-preview-roulette");
const btnHidePreviewFromModal = document.getElementById("btn-hide-preview-from-modal");

let toastTimer = null;
let incognitoIndex = 0;
let yaAnimadoEntrada = false;
let ultimoSegundo = null;

// Estado del libro
let paginaActual = 1;
let libroTimers = [];
let scratchCountdownInterval = null;
let memoriaPruebaCajas = {};

function pad2(n) {
  return String(n).padStart(2, "0");
}

function mostrarToast(texto) {
  toastLockText.textContent = texto;
  toastLock.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastLock.classList.remove("is-visible");
  }, 3600);
}

/* =====================================================================
   RULETA SORPRESA ARTESANAL (4:40 PM – 5:40 PM + PREVIEW)
===================================================================== */

if (rouletteCanvas) {
  rouletteCanvas.width = 760;
  rouletteCanvas.height = 760;
}

let previewActivaEnPantalla = PREVIEW_RULETA;
let ruletaYaSpawneoAuto = false;
let ruletaRotacion = 0.22;
let ruletaGirando = false;
let ruletaResultadoTemporal = null;
let ruletaFaseLuz = 0;

let estadoRuletaPreview = {
  intentosUsados: 0,
  premioElegido: null
};

function ruletaEstaEnVentanaReal() {
  const ahora = new Date();
  return ahora >= RULETA_INICIO && ahora < RULETA_FIN;
}

function ruletaDebeEstarActiva() {
  return previewActivaEnPantalla || ruletaEstaEnVentanaReal();
}

function leerEstadoRuleta() {
  if (previewActivaEnPantalla && !ruletaEstaEnVentanaReal()) {
    return estadoRuletaPreview;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY_RULETA);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        intentosUsados: Number(parsed.intentosUsados) || 0,
        premioElegido: parsed.premioElegido || null
      };
    }
  } catch {}
  return { intentosUsados: 0, premioElegido: null };
}

function guardarEstadoRuleta(estado) {
  if (previewActivaEnPantalla && !ruletaEstaEnVentanaReal()) {
    estadoRuletaPreview = estado;
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY_RULETA, JSON.stringify(estado));
  } catch {}
}

/* Selección ponderada: los 2 dorados son difíciles (~3.5% c/u) pero posibles */
function elegirGajoConPeso() {
  const totalPeso = RULETA_PREMIOS.reduce((acc, p) => acc + (p.peso || 10), 0);
  let r = Math.random() * totalPeso;
  for (let i = 0; i < RULETA_PREMIOS.length; i++) {
    r -= RULETA_PREMIOS[i].peso || 10;
    if (r <= 0) return i;
  }
  return RULETA_PREMIOS.length - 1;
}

/* Estrellita de 4 puntas dibujada en los gajos dorados */
function dibujarEstrellita(ctx, x, y, r, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.moveTo(0, -r);
  ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.quadraticCurveTo(0, 0, 0, r);
  ctx.quadraticCurveTo(0, 0, -r, 0);
  ctx.quadraticCurveTo(0, 0, 0, -r);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

/* Dibujo detallado de la ruleta con bisel de latón, sombreado y luces cálidas */
function dibujarRuleta(angulo, faseLuz = 0) {
  if (!rouletteCanvas) return;
  const ctx = rouletteCanvas.getContext("2d");
  const size = rouletteCanvas.width;
  const cx = size / 2;
  const cy = size / 2;
  const outerRimR = size / 2 - 4;
  const wheelR = outerRimR - 26;
  const total = RULETA_PREMIOS.length;
  const arc = (Math.PI * 2) / total;

  // Paleta artesanal para los 6 gajos normales
  const paletaNormal = [
    { top: "#284336", bottom: "#182b22", texto: "#f8efdf" }, // verde pino
    { top: "#faf2e2", bottom: "#eadcc4", texto: "#2d1910" }, // pergamino crema
    { top: "#9a2d33", bottom: "#6e1b20", texto: "#fbf1e3" }, // lacre vino
    { top: "#47281a", bottom: "#2b160d", texto: "#f7e8ce" }, // café oscuro
    { top: "#536f5a", bottom: "#39503f", texto: "#f9f1e2" }, // salvia botánico
    { top: "#bc726d", bottom: "#944f4a", texto: "#fdf5eb" }  // tulipán antiguo
  ];
  let idxPaleta = 0;

  ctx.clearRect(0, 0, size, size);

  /* --- CAPA 1: BISEL EXTERIOR FIJO DE MADERA OSCURA Y LATÓN --- */
  const rimGrad = ctx.createRadialGradient(cx - 55, cy - 65, wheelR - 10, cx, cy, outerRimR);
  rimGrad.addColorStop(0, "#5a3521");
  rimGrad.addColorStop(0.65, "#2f190f");
  rimGrad.addColorStop(1, "#1b0d07");
  ctx.beginPath();
  ctx.arc(cx, cy, outerRimR, 0, Math.PI * 2);
  ctx.fillStyle = rimGrad;
  ctx.fill();

  // Filete dorado exterior
  ctx.beginPath();
  ctx.arc(cx, cy, outerRimR - 2, 0, Math.PI * 2);
  ctx.strokeStyle = "#dfc077";
  ctx.lineWidth = 3;
  ctx.stroke();

  // 24 lucecitas cálidas fijas en el marco exterior
  const numLuces = 24;
  const luzR = wheelR + 13;
  for (let i = 0; i < numLuces; i++) {
    const a = (i / numLuces) * Math.PI * 2 - Math.PI / 2;
    const lx = cx + Math.cos(a) * luzR;
    const ly = cy + Math.sin(a) * luzR;
    const encendida = (i + faseLuz) % 2 === 0;

    if (encendida) {
      const glow = ctx.createRadialGradient(lx, ly, 1, lx, ly, 10);
      glow.addColorStop(0, "rgba(255, 244, 198, 0.95)");
      glow.addColorStop(0.45, "rgba(237, 195, 102, 0.48)");
      glow.addColorStop(1, "rgba(237, 195, 102, 0)");
      ctx.beginPath();
      ctx.arc(lx, ly, 10, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();
    }

    ctx.beginPath();
    ctx.arc(lx, ly, 4.1, 0, Math.PI * 2);
    ctx.fillStyle = encendida ? "#fff5cf" : "#8b6935";
    ctx.fill();
    ctx.strokeStyle = "rgba(43, 24, 16, 0.65)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  /* --- CAPA 2: DISCO GIRATORIO CON LOS 8 GAJOS --- */
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, wheelR, 0, Math.PI * 2);
  ctx.clip();

  for (let i = 0; i < total; i++) {
    const premio = RULETA_PREMIOS[i];
    const inicio = angulo + i * arc;
    const fin = inicio + arc;
    const mid = inicio + arc / 2;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, wheelR, inicio, fin);
    ctx.closePath();

    let colorTexto = "#fbf4e6";

    if (premio.dorado) {
      // Lámina de oro artesanal con reflejo metálico
      const gx = cx + Math.cos(mid) * wheelR;
      const gy = cy + Math.sin(mid) * wheelR;
      const grad = ctx.createLinearGradient(cx, cy, gx, gy);
      grad.addColorStop(0, "#b88628");
      grad.addColorStop(0.32, "#e8c469");
      grad.addColorStop(0.58, "#fff0bd");
      grad.addColorStop(0.82, "#d8a845");
      grad.addColorStop(1, "#f7df94");
      ctx.fillStyle = grad;
      colorTexto = "#2b160a";
    } else {
      const p = paletaNormal[idxPaleta % paletaNormal.length];
      idxPaleta++;
      const gx = cx + Math.cos(mid) * wheelR;
      const gy = cy + Math.sin(mid) * wheelR;
      const grad = ctx.createLinearGradient(cx, cy, gx, gy);
      grad.addColorStop(0, p.bottom);
      grad.addColorStop(0.65, p.top);
      grad.addColorStop(1, p.bottom);
      ctx.fillStyle = grad;
      colorTexto = p.texto;
    }

    ctx.fill();

    // Brillos y marco fino dentro de los 2 gajos dorados
    if (premio.dorado) {
      ctx.save();
      ctx.clip();

      // Líneas suaves de reflejo metálico
      ctx.strokeStyle = "rgba(255, 252, 234, 0.35)";
      ctx.lineWidth = 2;
      for (let rLine = 100; rLine < wheelR; rLine += 36) {
        ctx.beginPath();
        ctx.arc(cx, cy, rLine, inicio + 0.04, fin - 0.04);
        ctx.stroke();
      }

      // Arco ornamental cerca del borde exterior
      ctx.beginPath();
      ctx.arc(cx, cy, wheelR - 14, inicio + 0.05, fin - 0.05);
      ctx.strokeStyle = "rgba(110, 69, 10, 0.45)";
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // Pequeñas estrellitas en las puntas del gajo dorado
      const sx = cx + Math.cos(mid) * (wheelR - 26);
      const sy = cy + Math.sin(mid) * (wheelR - 26);
      dibujarEstrellita(ctx, sx, sy, 8, "rgba(255, 252, 236, 0.92)");
      ctx.restore();
    } else {
      // Filete interno sutil para acabado editorial
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, wheelR - 14, inicio + 0.05, fin - 0.05);
      ctx.strokeStyle =
        colorTexto === "#2d1910" ? "rgba(65, 36, 24, 0.16)" : "rgba(246, 224, 173, 0.22)";
      ctx.lineWidth = 1.3;
      ctx.stroke();
      ctx.restore();
    }

    // División dorada entre gajos
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(inicio) * wheelR, cy + Math.sin(inicio) * wheelR);
    ctx.strokeStyle = "rgba(235, 203, 132, 0.78)";
    ctx.lineWidth = 2.4;
    ctx.stroke();

    // Texto elegante centrado radialmente
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(mid);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = colorTexto;

    if (premio.dorado) {
      ctx.shadowColor = "rgba(255, 248, 218, 0.55)";
      ctx.shadowBlur = 4;
      ctx.font = '600 28px "Cormorant Garamond", Georgia, serif';
      ctx.fillText(premio.corto, wheelR - 42, 1);
    } else {
      ctx.shadowColor = "rgba(0, 0, 0, 0.16)";
      ctx.shadowBlur = 2;
      ctx.font = '500 27px "Cormorant Garamond", Georgia, serif';
      ctx.fillText(premio.corto, wheelR - 28, 1);
    }
    ctx.restore();
  }

  // Clavos metálicos (topes) en cada división del disco
  for (let i = 0; i < total; i++) {
    const a = angulo + i * arc;
    const px = cx + Math.cos(a) * (wheelR - 10);
    const py = cy + Math.sin(a) * (wheelR - 10);
    const pegGrad = ctx.createRadialGradient(px - 2, py - 2, 1, px, py, 6);
    pegGrad.addColorStop(0, "#fff8dc");
    pegGrad.addColorStop(0.55, "#dfb55b");
    pegGrad.addColorStop(1, "#7d5517");
    ctx.beginPath();
    ctx.arc(px, py, 5.4, 0, Math.PI * 2);
    ctx.fillStyle = pegGrad;
    ctx.fill();
    ctx.strokeStyle = "rgba(43, 24, 16, 0.55)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Sombra interior suave en el borde del disco y alrededor del sello central
  const innerShadow = ctx.createRadialGradient(cx, cy, wheelR - 28, cx, cy, wheelR);
  innerShadow.addColorStop(0, "rgba(0, 0, 0, 0)");
  innerShadow.addColorStop(1, "rgba(20, 10, 5, 0.34)");
  ctx.beginPath();
  ctx.arc(cx, cy, wheelR, 0, Math.PI * 2);
  ctx.fillStyle = innerShadow;
  ctx.fill();

  const hubShadow = ctx.createRadialGradient(cx, cy, 42, cx, cy, 94);
  hubShadow.addColorStop(0, "rgba(20, 10, 5, 0.45)");
  hubShadow.addColorStop(1, "rgba(20, 10, 5, 0)");
  ctx.beginPath();
  ctx.arc(cx, cy, 94, 0, Math.PI * 2);
  ctx.fillStyle = hubShadow;
  ctx.fill();

  ctx.restore();

  // Aro dorado pulido que separa el marco de madera del disco giratorio
  ctx.beginPath();
  ctx.arc(cx, cy, wheelR, 0, Math.PI * 2);
  ctx.strokeStyle = "#e8c87a";
  ctx.lineWidth = 4;
  ctx.stroke();
}

function lanzarDestellosPremio(esDorado) {
  if (!rouletteCard) return;
  const colores = esDorado
    ? ["#fff4c4", "#e9c162", "#d19b32", "#f8e29b"]
    : ["#e3be6d", "#c97b76", "#f5ebd8", "#a9864c"];
  const cantidad = esDorado ? 26 : 12;

  for (let i = 0; i < cantidad; i++) {
    const sp = document.createElement("span");
    sp.className = "roulette-spark";
    const ang = (Math.PI * 2 * i) / cantidad + (Math.random() - 0.5) * 0.4;
    const dist = (esDorado ? 115 : 75) + Math.random() * 85;
    sp.style.setProperty("--dx", `${Math.cos(ang) * dist}px`);
    sp.style.setProperty("--dy", `${Math.sin(ang) * dist}px`);
    sp.style.setProperty("--dur", `${0.75 + Math.random() * 0.55}s`);
    sp.style.background = colores[i % colores.length];
    if (esDorado) {
      sp.style.boxShadow = "0 0 8px rgba(240, 204, 112, 0.9)";
    }
    rouletteCard.appendChild(sp);
    setTimeout(() => sp.remove(), 1400);
  }
}

function indiceBajoAguja(angulo) {
  const total = RULETA_PREMIOS.length;
  const arc = (Math.PI * 2) / total;
  const rel = (((1.5 * Math.PI - angulo) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  return Math.floor(rel / arc) % total;
}

function actualizarUIRuleta() {
  const estado = leerEstadoRuleta();
  const restantes = Math.max(0, RULETA_MAX_INTENTOS - estado.intentosUsados);

  rouletteAttemptsPill.textContent =
    estado.premioElegido
      ? "Premio elegido"
      : `${restantes} ${restantes === 1 ? "intento" : "intentos"}`;

  if (estado.premioElegido) {
    rouletteSub.innerHTML =
      "Ya elegiste tu <strong>único premio</strong> de la ruleta. Tómale captura para reclamarlo.";
    rouletteSpinBar.classList.add("hidden");
    btnSpinCenter.disabled = true;
    btnSpinCenter.querySelector("span").textContent = "LISTO";

    rouletteResultBox.classList.remove("hidden");
    rouletteResultBox.classList.add("is-claimed");
    rouletteResultBox.classList.toggle("is-gold", Boolean(estado.premioElegido.dorado));
    rouletteResultKicker.textContent = estado.premioElegido.dorado
      ? "✦ TU PREMIO DORADO DEFINITIVO ✦"
      : "TU ÚNICO PREMIO DEFINITIVO";
    rouletteResultName.textContent = estado.premioElegido.completo;
    rouletteResultActions.classList.add("hidden");
    return;
  }

  rouletteResultBox.classList.remove("is-claimed");
  rouletteSub.innerHTML =
    "Tienes 10 intentos, pero solo te puedes quedar con <strong>un único premio</strong>.";

  if (ruletaResultadoTemporal) {
    rouletteSpinBar.classList.add("hidden");
    btnSpinCenter.disabled = true;
    btnSpinCenter.querySelector("span").textContent = "ELIGE";

    rouletteResultBox.classList.remove("hidden");
    rouletteResultBox.classList.toggle("is-gold", Boolean(ruletaResultadoTemporal.dorado));
    rouletteResultKicker.textContent = ruletaResultadoTemporal.dorado
      ? "✦ TE SALIÓ UN PREMIO DORADO ✦"
      : "TE SALIÓ";
    rouletteResultName.textContent = ruletaResultadoTemporal.completo;
    rouletteResultActions.classList.remove("hidden");

    btnRetrySpin.textContent = `Girar otra vez (${restantes})`;
    btnRetrySpin.style.display = restantes > 0 ? "" : "none";
    return;
  }

  rouletteResultBox.classList.add("hidden");
  rouletteSpinBar.classList.remove("hidden");
  btnSpinMain.disabled = ruletaGirando || restantes <= 0;
  btnSpinCenter.disabled = ruletaGirando || restantes <= 0;
  btnSpinCenter.querySelector("span").textContent = ruletaGirando ? "..." : "GIRAR";
  btnSpinMain.textContent = ruletaGirando ? "Girando..." : "Girar la ruleta";
}

function girarRuleta() {
  if (ruletaGirando) return;
  const estado = leerEstadoRuleta();
  const restantes = RULETA_MAX_INTENTOS - estado.intentosUsados;
  if (estado.premioElegido || restantes <= 0) return;

  ruletaGirando = true;
  ruletaResultadoTemporal = null;

  estado.intentosUsados += 1;
  guardarEstadoRuleta(estado);
  actualizarUIRuleta();

  const total = RULETA_PREMIOS.length;
  const arc = (Math.PI * 2) / total;

  // Elegir gajo usando las probabilidades (dorados difíciles pero posibles)
  const gajoDestino = elegirGajoConPeso();
  const vueltas = 6 + Math.floor(Math.random() * 3); // 6 a 8 vueltas
  const offsetDentroGajo = (0.18 + Math.random() * 0.64) * arc;

  const anguloObjetivoMod =
    (((1.5 * Math.PI - (gajoDestino * arc + offsetDentroGajo)) % (Math.PI * 2)) + Math.PI * 2) %
    (Math.PI * 2);

  const inicioRot = ruletaRotacion;
  const actualMod = ((inicioRot % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  let deltaMod = anguloObjetivoMod - actualMod;
  if (deltaMod <= 0) deltaMod += Math.PI * 2;

  const destinoRot = inicioRot + vueltas * Math.PI * 2 + deltaMod;
  const duracion = 5200; // Final lento y con suspenso
  const tInicio = performance.now();
  let ultimoGajo = indiceBajoAguja(inicioRot);
  let tickTimer = null;

  function animar(ahora) {
    const progreso = Math.min(1, (ahora - tInicio) / duracion);
    const eased = 1 - Math.pow(1 - progreso, 5);
    ruletaRotacion = inicioRot + (destinoRot - inicioRot) * eased;

    const gajoActual = indiceBajoAguja(ruletaRotacion);
    if (gajoActual !== ultimoGajo) {
      ultimoGajo = gajoActual;
      ruletaFaseLuz = (ruletaFaseLuz + 1) % 2;
      wheelPointer.classList.add("is-ticking");
      clearTimeout(tickTimer);
      tickTimer = setTimeout(() => wheelPointer.classList.remove("is-ticking"), 65);
    }

    dibujarRuleta(ruletaRotacion, ruletaFaseLuz);

    if (progreso < 1) {
      requestAnimationFrame(animar);
      return;
    }

    ruletaGirando = false;
    const ganador = RULETA_PREMIOS[indiceBajoAguja(ruletaRotacion)];
    const estadoActual = leerEstadoRuleta();

    lanzarDestellosPremio(Boolean(ganador.dorado));

    if (estadoActual.intentosUsados >= RULETA_MAX_INTENTOS) {
      estadoActual.premioElegido = ganador;
      guardarEstadoRuleta(estadoActual);
      ruletaResultadoTemporal = null;
      mostrarToast("Último intento · Este quedó como tu premio definitivo.");
    } else {
      ruletaResultadoTemporal = ganador;
    }

    actualizarUIRuleta();
  }

  requestAnimationFrame(animar);
}

function abrirRuleta(conDestello = false) {
  dibujarRuleta(ruletaRotacion, ruletaFaseLuz);
  actualizarUIRuleta();

  if (conDestello) {
    radiantFlash.classList.remove("is-active");
    void radiantFlash.offsetWidth;
    radiantFlash.classList.add("is-active");
    setTimeout(() => {
      rouletteOverlay.classList.add("is-open");
      rouletteOverlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }, 360);
    setTimeout(() => radiantFlash.classList.remove("is-active"), 1480);
  } else {
    rouletteOverlay.classList.add("is-open");
    rouletteOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  rouletteFab.classList.add("hidden");
}

function cerrarRuleta() {
  if (ruletaGirando) return;
  rouletteOverlay.classList.remove("is-open");
  rouletteOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (ruletaDebeEstarActiva()) {
    rouletteFab.classList.remove("hidden");
  }
}

function formatearMinSeg(ms) {
  const totalSeg = Math.max(0, Math.floor(ms / 1000));
  const mins = Math.floor(totalSeg / 60);
  const segs = totalSeg % 60;
  return `${pad2(mins)}:${pad2(segs)}`;
}

function revisarTiempoRuleta() {
  const enVentanaReal = ruletaEstaEnVentanaReal();
  const activa = previewActivaEnPantalla || enVentanaReal;

  if (PREVIEW_RULETA) {
    previewToggleBar.classList.remove("hidden");
    btnTogglePreview.textContent = previewActivaEnPantalla
      ? "Quitar preview ruleta"
      : "Ver preview ruleta";
    roulettePreviewControls.classList.toggle("hidden", !previewActivaEnPantalla);
  } else {
    previewToggleBar.classList.add("hidden");
    roulettePreviewControls.classList.add("hidden");
  }

  if (!activa) {
    rouletteFab.classList.add("hidden");
    if (rouletteOverlay.classList.contains("is-open")) {
      rouletteOverlay.classList.remove("is-open");
      rouletteOverlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      mostrarToast("La ruleta acaba de desaparecer.");
    }
    return;
  }

  if (enVentanaReal) {
    const restante = RULETA_FIN - new Date();
    const mmss = formatearMinSeg(restante);
    rouletteTimerPill.textContent = `Se va en ${mmss}`;
    rouletteFabLabel.textContent = `Ruleta · ${mmss}`;
  } else {
    rouletteTimerPill.textContent = "Preview · 4:40–5:40 PM";
    rouletteFabLabel.textContent = "Abrir ruleta (preview)";
  }

  // Pequeño pulso lento de las lucecitas del marco cuando está abierta y quieta
  if (!ruletaGirando && rouletteOverlay.classList.contains("is-open")) {
    ruletaFaseLuz = (ruletaFaseLuz + 1) % 2;
    dibujarRuleta(ruletaRotacion, ruletaFaseLuz);
  }

  if (!ruletaYaSpawneoAuto) {
    ruletaYaSpawneoAuto = true;
    abrirRuleta(enVentanaReal);
  } else if (!rouletteOverlay.classList.contains("is-open")) {
    rouletteFab.classList.remove("hidden");
  }
}

/* =====================================================================
   LIBRO SECRETO Y RASPA Y GANA (HORA NICARAGUA UTC-6)
===================================================================== */

function fechaDesbloqueoRaspa(fechaISO) {
  return new Date(`${fechaISO}T18:00:00-06:00`);
}

function raspaEstaDesbloqueado(item) {
  if (MODO_PRUEBA_TODO_ABIERTO) return true;
  return new Date() >= fechaDesbloqueoRaspa(item.fecha);
}

function obtenerRaspados() {
  if (MODO_PRUEBA_TODO_ABIERTO) return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_RASPA) || "[]");
  } catch {
    return [];
  }
}

function marcarComoRaspado(fechaISO) {
  if (MODO_PRUEBA_TODO_ABIERTO) return;
  const lista = obtenerRaspados();
  if (!lista.includes(fechaISO)) {
    lista.push(fechaISO);
    try {
      localStorage.setItem(STORAGE_KEY_RASPA, JSON.stringify(lista));
    } catch {}
  }
}

function obtenerEstadoCajas() {
  if (MODO_PRUEBA_TODO_ABIERTO) return memoriaPruebaCajas;
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_CAJAS) || "{}");
  } catch {
    return {};
  }
}

function guardarEstadoCajas(estado) {
  if (MODO_PRUEBA_TODO_ABIERTO) {
    memoriaPruebaCajas = estado;
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY_CAJAS, JSON.stringify(estado));
  } catch {}
}

function mezclarArray(arr) {
  const copia = [...arr];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function limpiarTimersLibro() {
  for (const id of libroTimers) {
    clearTimeout(id);
  }
  libroTimers = [];
  if (scratchCountdownInterval) {
    clearInterval(scratchCountdownInterval);
    scratchCountdownInterval = null;
  }
}

function programarEnLibro(fn, delay) {
  const id = setTimeout(fn, delay);
  libroTimers.push(id);
  return id;
}

function poblarIndiceLibro() {
  pageJumpSelect.innerHTML = "";
  const fijas = [
    { num: 1, texto: "Pág. 1 · 21 de nov" },
    { num: 2, texto: "Pág. 2 · 62 días" },
    { num: 3, texto: "Pág. 3 · Primer mes" },
    { num: 4, texto: "Pág. 4 · Sorpresa..." }
  ];

  for (const f of fijas) {
    const opt = document.createElement("option");
    opt.value = String(f.num);
    opt.textContent = f.texto;
    pageJumpSelect.appendChild(opt);
  }

  RASPA_Y_GANA.forEach((item, idx) => {
    const numPag = 5 + idx;
    const opt = document.createElement("option");
    opt.value = String(numPag);
    const desb = raspaEstaDesbloqueado(item);
    opt.textContent = `Pág. ${numPag} · ${item.etiqueta}${desb ? "" : " (🔒)"}`;
    pageJumpSelect.appendChild(opt);
  });
}

function escribirTexto(elemento, texto, velocidadMs, onComplete) {
  elemento.innerHTML = "";
  const textoSpan = document.createElement("span");
  const cursor = document.createElement("span");
  cursor.className = "type-cursor";
  elemento.appendChild(textoSpan);
  elemento.appendChild(cursor);

  let i = 0;
  function paso() {
    if (i < texto.length) {
      const char = texto.charAt(i);
      textoSpan.textContent += char;
      i++;
      const pausaExtra = char === "." || char === "?" || char === "," ? 130 : 0;
      programarEnLibro(paso, velocidadMs + pausaExtra);
    } else {
      cursor.remove();
      if (onComplete) onComplete();
    }
  }
  paso();
}

function crearCalendarioNoviembre() {
  const wrap = document.createElement("div");
  wrap.className = "nov-calendar-wrap";

  const header = document.createElement("div");
  header.className = "nov-cal-header";
  header.textContent = "Noviembre";
  wrap.appendChild(header);

  const weekdays = document.createElement("div");
  weekdays.className = "nov-cal-weekdays";
  ["D", "L", "M", "M", "J", "V", "S"].forEach((d) => {
    const s = document.createElement("span");
    s.textContent = d;
    weekdays.appendChild(s);
  });
  wrap.appendChild(weekdays);

  const daysGrid = document.createElement("div");
  daysGrid.className = "nov-cal-days";

  for (let d = 1; d <= 30; d++) {
    const cell = document.createElement("div");
    cell.className = "nov-cal-day";

    if (d === 21) {
      cell.classList.add("day-21");
      cell.innerHTML = `
        <span class="day-21-num">21</span>
        <svg class="day-21-ring" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <path d="M22 4 C31 4, 37 11, 36 21 C35 31, 27 37, 17 36 C8 35, 3 27, 4 17 C5 9, 13 4, 24 5" />
        </svg>
      `;
    } else {
      cell.textContent = d;
    }
    daysGrid.appendChild(cell);
  }

  wrap.appendChild(daysGrid);
  return wrap;
}

function formatearCuentaRegresivaExacta(ms) {
  const totalSeg = Math.max(0, Math.floor(ms / 1000));
  const dias = Math.floor(totalSeg / 86400);
  const horas = Math.floor((totalSeg % 86400) / 3600);
  const mins = Math.floor((totalSeg % 3600) / 60);
  const segs = totalSeg % 60;

  if (dias > 0) {
    return `${dias}d ${pad2(horas)}h ${pad2(mins)}m ${pad2(segs)}s`;
  }
  return `${pad2(horas)}h ${pad2(mins)}m ${pad2(segs)}s`;
}

function inicializarCanvasRaspa(canvas, item, helperEl) {
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const stage = canvas.parentElement;
  if (!ctx || !stage) return;

  const w = Math.max(stage.offsetWidth, 260);
  const h = Math.max(stage.offsetHeight, 212);
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = Math.floor(w * dpr);
  canvas.height = Math.floor(h * dpr);
  ctx.scale(dpr, dpr);

  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, "#c8a96e");
  grad.addColorStop(0.35, "#e0c793");
  grad.addColorStop(0.68, "#b79253");
  grad.addColorStop(1, "#cfb178");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = "rgba(255, 248, 232, 0.22)";
  ctx.lineWidth = 1;
  for (let x = -h; x < w + h; x += 14) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + h, h);
    ctx.stroke();
  }

  ctx.strokeStyle = "rgba(65, 36, 24, 0.34)";
  ctx.setLineDash([4, 4]);
  ctx.strokeRect(10, 10, w - 20, h - 20);
  ctx.setLineDash([]);

  ctx.fillStyle = "rgba(56, 32, 20, 0.85)";
  ctx.font = '500 13px "IBM Plex Mono", monospace';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("RASPA AQUÍ", w / 2, h / 2 - 10);

  ctx.fillStyle = "rgba(56, 32, 20, 0.65)";
  ctx.font = 'italic 18px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(item.etiqueta, w / 2, h / 2 + 16);

  ctx.globalCompositeOperation = "destination-out";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = 38;

  let raspando = false;
  let ultimoPunto = null;
  let pasos = 0;
  let yaRevelado = false;

  function puntoEnCanvas(e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * w,
      y: ((e.clientY - rect.top) / rect.height) * h
    };
  }

  function rasparHasta(pt) {
    if (!ultimoPunto) {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 19, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(ultimoPunto.x, ultimoPunto.y);
      ctx.lineTo(pt.x, pt.y);
      ctx.stroke();
    }
    ultimoPunto = pt;
  }

  function revisarProgreso() {
    if (yaRevelado) return;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let borrados = 0;
    let total = 0;
    for (let i = 3; i < data.length; i += 64) {
      total++;
      if (data[i] < 40) borrados++;
    }
    if (total > 0 && borrados / total >= 0.36) {
      yaRevelado = true;
      canvas.classList.add("is-cleared");
      marcarComoRaspado(item.fecha);
      if (helperEl) {
        helperEl.textContent =
          item.formato === "cajas"
            ? "Ahora toca uno de los tres cuadros"
            : "Descubierto · guardado en tu libro";
      }
    }
  }

  canvas.addEventListener("pointerdown", (e) => {
    if (yaRevelado) return;
    raspando = true;
    try { canvas.setPointerCapture(e.pointerId); } catch {}
    ultimoPunto = null;
    rasparHasta(puntoEnCanvas(e));
  });

  canvas.addEventListener("pointermove", (e) => {
    if (!raspando || yaRevelado) return;
    rasparHasta(puntoEnCanvas(e));
    pasos++;
    if (pasos % 10 === 0) revisarProgreso();
  });

  function terminarRaspa() {
    if (!raspando) return;
    raspando = false;
    ultimoPunto = null;
    revisarProgreso();
  }

  canvas.addEventListener("pointerup", terminarRaspa);
  canvas.addEventListener("pointercancel", terminarRaspa);
}

function construirContenidoRaspa(item, helperEl) {
  const underneath = document.createElement("div");
  underneath.className = "scratch-underneath";

  if (item.formato === "ticket") {
    const ticket = document.createElement("div");
    ticket.className = "vale-ticket";
    ticket.innerHTML = `
      <div class="vale-main">
        <span class="vale-kicker">${item.kicker || "VALE OFICIAL"}</span>
        <h5 class="vale-title">${item.titulo || "Vale especial"}</h5>
        ${item.mensaje ? `<p class="vale-desc">${item.mensaje}</p>` : ""}
        <span class="vale-footer-line">${item.pie || "Para Ana · Canjeable cuando quieras"}</span>
      </div>
      <div class="vale-stub">
        <span class="vale-stub-word">${item.talon || "VÁLIDO"}</span>
        <span class="vale-stub-num">${item.numero || "NO. 01"}</span>
      </div>
    `;
    underneath.appendChild(ticket);
    return underneath;
  }

  if (item.formato === "cajas") {
    const estadoGlobal = obtenerEstadoCajas();
    if (!estadoGlobal[item.fecha] || !Array.isArray(estadoGlobal[item.fecha].orden)) {
      estadoGlobal[item.fecha] = {
        orden: mezclarArray(item.opciones || ["Carta virtual", "Elegir lo que quieras", "Tu antojo favorito"]),
        elegida: null
      };
      guardarEstadoCajas(estadoGlobal);
    }

    const estadoDia = estadoGlobal[item.fecha];
    const wrap = document.createElement("div");
    wrap.className = "mystery-wrap";

    const prompt = document.createElement("p");
    prompt.className = "mystery-prompt";
    prompt.textContent =
      estadoDia.elegida === null
        ? (item.titulo || "Elige uno de los tres cuadros")
        : "Esta fue tu elección:";

    const grid = document.createElement("div");
    grid.className = "mystery-grid";

    const resultPill = document.createElement("p");
    resultPill.className = "mystery-result-pill";

    function pintarCajas() {
      grid.innerHTML = "";
      const elegida = estadoDia.elegida;

      estadoDia.orden.forEach((recompensa, idx) => {
        const box = document.createElement("button");
        box.type = "button";
        box.className = "mystery-box";

        if (elegida === null) {
          box.innerHTML = `<span class="mystery-q">?</span>`;
          box.addEventListener("click", () => {
            estadoDia.elegida = idx;
            estadoGlobal[item.fecha] = estadoDia;
            guardarEstadoCajas(estadoGlobal);
            prompt.textContent = "Esta fue tu elección:";
            pintarCajas();
            if (helperEl) helperEl.textContent = "Recompensa guardada en tu libro";
          });
        } else {
          box.disabled = true;
          if (idx === elegida) {
            box.classList.add("is-chosen");
            box.innerHTML = `<span class="mystery-reward-label">${recompensa}</span>`;
          } else {
            box.classList.add("is-other");
            box.innerHTML = `<span class="mystery-reward-label">${recompensa}</span>`;
          }
        }

        grid.appendChild(box);
      });

      resultPill.textContent =
        elegida !== null ? `Ganaste: ${estadoDia.orden[elegida]}` : "Solo puedes abrir uno";
    }

    pintarCajas();
    wrap.appendChild(prompt);
    wrap.appendChild(grid);
    wrap.appendChild(resultPill);
    underneath.appendChild(wrap);
    return underneath;
  }

  if (item.formato === "carta_virtual") {
    const card = document.createElement("div");
    card.className = "virtual-letter-badge";
    card.innerHTML = `
      <span class="virtual-letter-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="1.5"/>
          <path d="M4 6l8 6 8-6"/>
        </svg>
      </span>
      <h5 class="virtual-letter-title">${item.titulo || "Carta Virtual"}</h5>
      ${item.mensaje ? `<p class="virtual-letter-sub">${item.mensaje}</p>` : ""}
    `;
    underneath.appendChild(card);
    return underneath;
  }

  const tieneContenido =
    (item.titulo && item.titulo.trim()) || (item.mensaje && item.mensaje.trim());

  underneath.innerHTML = `
    <span class="scratch-prize-tag">${(item.tipo || "SORPRESA").toUpperCase()}</span>
    <h5 class="scratch-prize-title">${tieneContenido ? (item.titulo || item.etiqueta) : `Sorpresa del ${item.etiqueta}`}</h5>
    <p class="scratch-prize-text">${
      tieneContenido
        ? item.mensaje
        : "Este raspa y gana acaba de abrirse, pero su sorpresa se está terminando de escribir. Vuelve en un ratito."
    }</p>
  `;

  if (item.extraLink && item.extraLink.trim()) {
    const link = document.createElement("a");
    link.className = "scratch-prize-link";
    link.href = item.extraLink;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = item.extraTexto || "Ver sorpresa";
    underneath.appendChild(link);
  }

  return underneath;
}

function renderPaginaRaspa(indiceRaspa) {
  const item = RASPA_Y_GANA[indiceRaspa];
  const numeroRaspa = indiceRaspa + 1;
  const desbloqueado = raspaEstaDesbloqueado(item);
  const yaRaspado = obtenerRaspados().includes(item.fecha);

  pageBookMark.textContent = `Raspa ${numeroRaspa} de ${RASPA_Y_GANA.length}`;

  const wrap = document.createElement("div");
  wrap.className = "scratch-page-wrap";

  const eyebrow = document.createElement("p");
  eyebrow.className = "scratch-eyebrow";
  eyebrow.textContent =
    item.fecha === "2026-12-21"
      ? "Cuenta regresiva · Hoy cumplimos mes"
      : `Camino al 21 de diciembre · Día ${numeroRaspa} de ${RASPA_Y_GANA.length}`;

  const heading = document.createElement("h4");
  heading.className = "scratch-date-heading";
  heading.textContent = item.etiqueta;

  const ticketFrame = document.createElement("div");
  ticketFrame.className = "scratch-ticket-frame";

  const helper = document.createElement("p");
  helper.className = "scratch-helper-note";

  wrap.appendChild(eyebrow);
  wrap.appendChild(heading);
  wrap.appendChild(ticketFrame);
  wrap.appendChild(helper);
  bookPageContent.appendChild(wrap);

  if (!desbloqueado) {
    const lockedPanel = document.createElement("div");
    lockedPanel.className = "scratch-locked-panel";
    lockedPanel.innerHTML = `
      <span class="scratch-lock-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="11" width="14" height="10" rx="2"/>
          <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
        </svg>
      </span>
      <p class="scratch-lock-title">Todavía no puedes rasparlo</p>
      <p id="scratch-cd-live" class="scratch-lock-countdown">--</p>
    `;

    lockedPanel.addEventListener("click", () => {
      lockedPanel.classList.remove("is-shaking");
      void lockedPanel.offsetWidth;
      lockedPanel.classList.add("is-shaking");
      mostrarToast("Aún sellado · Todavía no es momento de rasparlo.");
    });

    ticketFrame.appendChild(lockedPanel);
    helper.textContent = "Paciencia... todavía falta un poquito";

    const cdLive = lockedPanel.querySelector("#scratch-cd-live");
    const actualizarCuentaRaspa = () => {
      const restante = fechaDesbloqueoRaspa(item.fecha) - new Date();
      if (restante <= 0) {
        poblarIndiceLibro();
        renderPaginaLibro(paginaActual);
        return;
      }
      cdLive.textContent = formatearCuentaRegresivaExacta(restante);
    };

    actualizarCuentaRaspa();
    scratchCountdownInterval = setInterval(actualizarCuentaRaspa, 1000);
    return;
  }

  const stage = document.createElement("div");
  stage.className = "scratch-stage";

  const underneath = construirContenidoRaspa(item, helper);
  stage.appendChild(underneath);
  ticketFrame.appendChild(stage);

  if (yaRaspado) {
    helper.textContent =
      item.formato === "cajas" && obtenerEstadoCajas()[item.fecha]?.elegida === null
        ? "Toca uno de los tres cuadros"
        : "Ya raspaste este día";
  } else {
    const canvas = document.createElement("canvas");
    canvas.className = "scratch-canvas";
    canvas.setAttribute("aria-label", `Raspa aquí para descubrir el ${item.etiqueta}`);
    stage.appendChild(canvas);
    helper.textContent = "Desliza el dedo o el cursor para raspar";

    requestAnimationFrame(() => {
      inicializarCanvasRaspa(canvas, item, helper);
    });
  }
}

function renderPaginaLibro(num) {
  limpiarTimersLibro();
  paginaActual = num;

  pageNumberLabel.textContent = `Página ${num} de ${TOTAL_PAGINAS_LIBRO}`;
  pageJumpSelect.value = String(num);
  btnPrevPage.disabled = num === 1;
  btnNextPage.disabled = num === TOTAL_PAGINAS_LIBRO;

  bookPageContent.innerHTML = "";

  if (num <= 4) {
    pageBookMark.textContent = "21 de noviembre";
  }

  if (num === 1) {
    const leadP = document.createElement("p");
    leadP.className = "book-typed-text book-typed-lead";

    const calWrap = crearCalendarioNoviembre();

    const dedP = document.createElement("p");
    dedP.className = "book-typed-text book-typed-dedication";

    bookPageContent.appendChild(leadP);
    bookPageContent.appendChild(calWrap);
    bookPageContent.appendChild(dedP);

    escribirTexto(leadP, LIBRO_PAGINA_1_INICIO, 42, () => {
      programarEnLibro(() => {
        calWrap.classList.add("is-visible");

        programarEnLibro(() => {
          const day21 = calWrap.querySelector(".day-21");
          if (day21) day21.classList.add("is-highlighted");

          programarEnLibro(() => {
            escribirTexto(dedP, LIBRO_PAGINA_1_FINAL, 32);
          }, 520);
        }, 420);
      }, 240);
    });
  } else if (num === 2) {
    const p2 = document.createElement("p");
    p2.className = "book-typed-text";
    bookPageContent.appendChild(p2);
    escribirTexto(p2, LIBRO_PAGINA_2, 22);
  } else if (num === 3) {
    const p3 = document.createElement("p");
    p3.className = "book-typed-text";
    bookPageContent.appendChild(p3);
    escribirTexto(p3, LIBRO_PAGINA_3, 22);
  } else if (num === 4) {
    const p4 = document.createElement("p");
    p4.className = "book-typed-text book-teaser-page";
    const hint = document.createElement("p");
    hint.className = "book-teaser-hint";
    hint.textContent = "pasa a la siguiente página →";

    bookPageContent.appendChild(p4);
    bookPageContent.appendChild(hint);

    escribirTexto(p4, LIBRO_PAGINA_4, 38, () => {
      programarEnLibro(() => {
        hint.classList.add("is-visible");
      }, 250);
    });
  } else {
    renderPaginaRaspa(num - 5);
  }
}

function irAPagina(destino) {
  if (destino < 1 || destino > TOTAL_PAGINAS_LIBRO || destino === paginaActual) return;
  const direccion = destino > paginaActual ? 1 : -1;

  pageTurnLeaf.classList.remove("turning-next", "turning-prev");
  void pageTurnLeaf.offsetWidth;
  pageTurnLeaf.classList.add(direccion > 0 ? "turning-next" : "turning-prev");

  programarEnLibro(() => {
    renderPaginaLibro(destino);
  }, 190);
}

function abrirSecreto() {
  limpiarTimersLibro();
  poblarIndiceLibro();

  radiantFlash.classList.remove("is-active");
  void radiantFlash.offsetWidth;
  radiantFlash.classList.add("is-active");

  setTimeout(() => {
    bookOpenView.classList.add("hidden");
    bookClosedView.classList.remove("hidden");
    btnOpenBook.classList.remove("is-opening-cover");

    secretOverlay.classList.add("is-open");
    secretOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }, 480);

  setTimeout(() => {
    radiantFlash.classList.remove("is-active");
  }, 1520);
}

function cerrarSecreto() {
  limpiarTimersLibro();
  secretOverlay.classList.remove("is-open");
  secretOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* =====================================================================
   LÓGICA DEL CALENDARIO DE ADVIENTO (DICIEMBRE)
===================================================================== */

function fechaDesbloqueoCarta(dia) {
  return new Date(`${ANIO}-12-${pad2(dia)}T00:00:00-06:00`);
}

function cartaEstaDesbloqueada(dia) {
  if (MODO_PRUEBA_TODO_ABIERTO) return true;
  return new Date() >= fechaDesbloqueoCarta(dia);
}

function obtenerAbiertas() {
  if (MODO_PRUEBA_TODO_ABIERTO) return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_CARTAS) || "[]");
  } catch {
    return [];
  }
}

function marcarComoAbierta(dia) {
  if (MODO_PRUEBA_TODO_ABIERTO) return;
  const abiertas = obtenerAbiertas();
  if (!abiertas.includes(dia)) {
    abiertas.push(dia);
    try {
      localStorage.setItem(STORAGE_KEY_CARTAS, JSON.stringify(abiertas));
    } catch {}
  }
}

function formatearTiempoRestante(ms) {
  const totalSeg = Math.max(0, Math.floor(ms / 1000));
  const dias = Math.floor(totalSeg / 86400);
  const horas = Math.floor((totalSeg % 86400) / 3600);
  const mins = Math.floor((totalSeg % 3600) / 60);

  if (dias > 0) return `${dias} ${dias === 1 ? "día" : "días"} y ${horas}h`;
  if (horas > 0) return `${horas}h y ${mins} min`;
  return `${Math.max(1, mins)} min`;
}

function renderIncognito(conAnimacion = false) {
  const modo = INCOGNITO_MODOS[incognitoIndex % INCOGNITO_MODOS.length];
  if (conAnimacion) {
    incognitoWidget.classList.remove("is-flipping");
    void incognitoWidget.offsetWidth;
    incognitoWidget.classList.add("is-flipping");
    setTimeout(() => {
      incognitoTag.textContent = modo.etiqueta;
      incognitoSvg.innerHTML = modo.svg;
    }, 220);
  } else {
    incognitoTag.textContent = modo.etiqueta;
    incognitoSvg.innerHTML = modo.svg;
  }
}

function renderCalendario(animarReparto = false) {
  calendarGrid.innerHTML = "";
  const abiertas = obtenerAbiertas();

  for (let dia = 1; dia <= TOTAL_DIAS; dia++) {
    const desbloqueado = cartaEstaDesbloqueada(dia);
    const yaAbierta = desbloqueado && abiertas.includes(dia);

    const card = document.createElement("button");
    card.type = "button";
    card.className = "envelope-card";

    const angulo = (((dia * 7) % 5) - 2) * 0.52;
    card.style.setProperty("--tilt", `${angulo}deg`);
    card.style.setProperty("--env-bg", TONOS_PAPEL[dia % TONOS_PAPEL.length]);

    if (animarReparto) {
      card.classList.add("is-entering");
      card.style.setProperty("--deal-delay", `${Math.min(dia * 0.028, 0.75)}s`);
    }

    if (!desbloqueado) {
      card.classList.add("is-locked");
    } else if (yaAbierta) {
      card.classList.add("is-unlocked", "is-opened");
    } else {
      card.classList.add("is-unlocked");
    }

    const estadoTexto = !desbloqueado
      ? "Sellada"
      : yaAbierta
        ? "Leída"
        : "Abrir carta";

    card.innerHTML = `
      <span class="envelope-pocket-inside" aria-hidden="true"></span>
      <span class="envelope-letter-peek" aria-hidden="true">
        <span></span>
        <span></span>
      </span>
      <span class="envelope-front-body" aria-hidden="true"></span>
      <span class="envelope-flap" aria-hidden="true"></span>
      <span class="envelope-stamp" aria-hidden="true">${MINI_STAMPS[dia % MINI_STAMPS.length]}</span>
      <span class="envelope-seal">${pad2(dia)}</span>
      <span class="envelope-meta">
        <span class="envelope-date-text">${pad2(dia)} Dic</span>
        <span class="envelope-status">${estadoTexto}</span>
      </span>
    `;

    card.addEventListener("click", () => {
      if (!cartaEstaDesbloqueada(dia)) {
        card.classList.remove("is-shaking");
        void card.offsetWidth;
        card.classList.add("is-shaking");
        const restante = fechaDesbloqueoCarta(dia) - new Date();
        mostrarToast(`Aún sellada · El ${dia} de diciembre se abre en ${formatearTiempoRestante(restante)}.`);
        return;
      }

      card.classList.add("is-opening");
      setTimeout(() => {
        abrirCarta(dia);
        setTimeout(() => card.classList.remove("is-opening"), 300);
      }, 360);
    });

    calendarGrid.appendChild(card);
  }
}

function abrirCarta(dia) {
  const data = CARTAS[dia] || {};
  const tieneContenido =
    (data.titulo && data.titulo.trim()) || (data.mensaje && data.mensaje.trim());

  modalDate.textContent = `${pad2(dia)} DE DICIEMBRE, ${ANIO}`;
  modalTag.textContent = (data.tipo || "CARTA").toUpperCase();

  if (tieneContenido) {
    modalTitle.textContent = data.titulo || `Día ${dia}`;
    modalBody.textContent = data.mensaje;
  } else {
    modalTitle.textContent = `Carta del ${dia} de diciembre`;
    modalBody.textContent =
      "Este sobre acaba de abrirse, pero su contenido todavía está terminando de escribirse. Vuelve en un ratito.";
  }

  modalExtra.innerHTML = "";
  if (data.extraLink && data.extraLink.trim()) {
    const enlace = document.createElement("a");
    enlace.href = data.extraLink;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
    enlace.textContent = data.extraTexto || "Ver sorpresa";
    modalExtra.appendChild(enlace);
  }

  marcarComoAbierta(dia);
  renderCalendario(false);

  letterModal.classList.add("is-open");
  letterModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  letterModal.classList.remove("is-open");
  letterModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function actualizarContador() {
  const ahora = new Date();
  let proximoDia = null;

  for (let d = 1; d <= TOTAL_DIAS; d++) {
    if (fechaDesbloqueoCarta(d) > ahora) {
      proximoDia = d;
      break;
    }
  }

  if (proximoDia === null) {
    cdLabel.textContent = "Todas las cartas de diciembre están abiertas";
    cdDays.textContent = "00";
    cdHours.textContent = "00";
    cdMins.textContent = "00";
    cdSecs.textContent = "00";
    return;
  }

  const diff = fechaDesbloqueoCarta(proximoDia) - ahora;
  const totalSeg = Math.max(0, Math.floor(diff / 1000));

  const dias = Math.floor(totalSeg / 86400);
  const horas = Math.floor((totalSeg % 86400) / 3600);
  const mins = Math.floor((totalSeg % 3600) / 60);
  const segs = totalSeg % 60;

  cdLabel.textContent =
    proximoDia === 1
      ? "Para abrir la primera carta · 1 de diciembre"
      : `Próxima carta (Día ${proximoDia}) disponible en`;

  cdDays.textContent = pad2(dias);
  cdHours.textContent = pad2(horas);
  cdMins.textContent = pad2(mins);
  cdSecs.textContent = pad2(segs);

  if (ultimoSegundo !== null && ultimoSegundo !== segs) {
    cdSecs.classList.add("tick");
    setTimeout(() => cdSecs.classList.remove("tick"), 180);
  }
  ultimoSegundo = segs;

  if (totalSeg === 0) {
    renderCalendario(false);
  }
}

/* =====================================================================
   EVENTOS
===================================================================== */
btnEnter.addEventListener("click", () => {
  btnEnter.classList.add("is-breaking");
  setTimeout(() => {
    mainApp.classList.remove("hidden");
    introScreen.classList.add("is-leaving");
    if (!yaAnimadoEntrada) {
      yaAnimadoEntrada = true;
      renderCalendario(true);
    }
  }, 220);
});

secretTrigger.addEventListener("click", abrirSecreto);
btnCloseSecret.addEventListener("click", cerrarSecreto);
secretBackdrop.addEventListener("click", cerrarSecreto);

btnOpenBook.addEventListener("click", () => {
  btnOpenBook.classList.add("is-opening-cover");
  setTimeout(() => {
    bookClosedView.classList.add("hidden");
    bookOpenView.classList.remove("hidden");
    renderPaginaLibro(1);
  }, 440);
});

btnPrevPage.addEventListener("click", () => irAPagina(paginaActual - 1));
btnNextPage.addEventListener("click", () => irAPagina(paginaActual + 1));
pageJumpSelect.addEventListener("change", (e) => {
  irAPagina(Number(e.target.value));
});

// Eventos Ruleta
btnSpinMain.addEventListener("click", girarRuleta);
btnSpinCenter.addEventListener("click", girarRuleta);
btnCloseRoulette.addEventListener("click", cerrarRuleta);
rouletteBackdrop.addEventListener("click", cerrarRuleta);
rouletteFab.addEventListener("click", () => abrirRuleta(false));

btnKeepPrize.addEventListener("click", () => {
  if (!ruletaResultadoTemporal) return;
  const estado = leerEstadoRuleta();
  estado.premioElegido = ruletaResultadoTemporal;
  guardarEstadoRuleta(estado);
  ruletaResultadoTemporal = null;
  actualizarUIRuleta();
  mostrarToast("Premio guardado · Ya es tuyo.");
});

btnRetrySpin.addEventListener("click", () => {
  ruletaResultadoTemporal = null;
  actualizarUIRuleta();
  girarRuleta();
});

// Eventos Preview Ruleta
function alternarPreviewRuleta() {
  if (ruletaGirando) return;
  previewActivaEnPantalla = !previewActivaEnPantalla;

  if (previewActivaEnPantalla) {
    abrirRuleta(false);
  } else {
    rouletteOverlay.classList.remove("is-open");
    rouletteOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    rouletteFab.classList.add("hidden");
  }
  revisarTiempoRuleta();
}

btnTogglePreview.addEventListener("click", alternarPreviewRuleta);
btnHidePreviewFromModal.addEventListener("click", () => {
  if (previewActivaEnPantalla) alternarPreviewRuleta();
});

btnResetPreviewRoulette.addEventListener("click", () => {
  if (ruletaGirando) return;
  estadoRuletaPreview = { intentosUsados: 0, premioElegido: null };
  ruletaResultadoTemporal = null;
  actualizarUIRuleta();
});

incognitoWidget.addEventListener("click", () => {
  incognitoIndex = (incognitoIndex + 1) % INCOGNITO_MODOS.length;
  renderIncognito(true);
});

btnCloseModal.addEventListener("click", cerrarModal);
modalBackdrop.addEventListener("click", cerrarModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (rouletteOverlay.classList.contains("is-open")) cerrarRuleta();
    if (secretOverlay.classList.contains("is-open")) cerrarSecreto();
    if (letterModal.classList.contains("is-open")) cerrarModal();
  }
});

/* Inicialización */
poblarIndiceLibro();
renderIncognito(false);
renderCalendario(false);
actualizarContador();
dibujarRuleta(ruletaRotacion, ruletaFaseLuz);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => dibujarRuleta(ruletaRotacion, ruletaFaseLuz));
}
revisarTiempoRuleta();
setInterval(() => {
  actualizarContador();
  revisarTiempoRuleta();
}, 1000);