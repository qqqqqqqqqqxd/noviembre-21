/* =====================================================================
   1. CONFIGURACIÓN DE PRUEBAS (DÉJALOS EN `null` AL SUBIR A GITHUB)
===================================================================== */

const ANIO = 2026;
const TOTAL_DIAS = 31;

/**
 * - DIA_SIMULADO: número 1-31 para probar sobres de diciembre.
 *   Ej: `const DIA_SIMULADO = 5;`
 * - FECHA_SIMULADA_LIBRO: fecha/hora exacta de Nicaragua para probar los raspa y gana.
 *   Ej: `const FECHA_SIMULADA_LIBRO = "2026-11-24T18:05:00-06:00";`
 *
 * IMPORTANTE: antes de mandársela a Ana, ambos deben quedar en `null`.
 */
const DIA_SIMULADO = null;
const FECHA_SIMULADA_LIBRO = null;

/* =====================================================================
   2. RASPA Y GANA DEL LIBRO (24 DE NOVIEMBRE AL 21 DE DICIEMBRE)
      Cada día se desbloquea automáticamente a las 6:00 PM hora Nicaragua (-06:00)
      SOLO RELLENA `titulo`, `tipo` Y `mensaje` DEL DÍA QUE VAS A ACTUALIZAR
===================================================================== */
const RASPA_Y_GANA = [
  { fecha: "2026-11-24", etiqueta: "24 de noviembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-11-25", etiqueta: "25 de noviembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
  { fecha: "2026-11-26", etiqueta: "26 de noviembre", titulo: "", tipo: "SORPRESA", mensaje: ``, extraTexto: "", extraLink: "" },
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
   3. CARTAS DEL CALENDARIO DE DICIEMBRE (1 AL 31)
      Se actualizan un día antes igual que antes
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

const TOTAL_PAGINAS_LIBRO = 4 + RASPA_Y_GANA.length; // 4 páginas + 28 raspa y gana = 32 páginas
const STORAGE_KEY_CARTAS = "ana_adviento_2026_abiertas";
const STORAGE_KEY_RASPA = "ana_libro_2026_raspados";

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

let toastTimer = null;
let incognitoIndex = 0;
let yaAnimadoEntrada = false;
let ultimoSegundo = null;

// Estado del libro
let paginaActual = 1;
let libroTimers = [];
let scratchCountdownInterval = null;

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
   LIBRO SECRETO Y RASPA Y GANA (HORA NICARAGUA UTC-6)
===================================================================== */

function obtenerAhoraLibro() {
  if (FECHA_SIMULADA_LIBRO) {
    return new Date(FECHA_SIMULADA_LIBRO);
  }
  return new Date();
}

function fechaDesbloqueoRaspa(fechaISO) {
  // 6:00 PM hora exacta de Nicaragua (UTC-6 permanente, sin cambio de horario)
  return new Date(`${fechaISO}T18:00:00-06:00`);
}

function raspaEstaDesbloqueado(item) {
  return obtenerAhoraLibro() >= fechaDesbloqueoRaspa(item.fecha);
}

function obtenerRaspados() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_RASPA) || "[]");
  } catch {
    return [];
  }
}

function marcarComoRaspado(fechaISO) {
  const lista = obtenerRaspados();
  if (!lista.includes(fechaISO)) {
    lista.push(fechaISO);
    try {
      localStorage.setItem(STORAGE_KEY_RASPA, JSON.stringify(lista));
    } catch {
      // Ignora si el navegador bloquea storage
    }
  }
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

/* Inicializa la lámina metálica raspable sobre el canvas */
function inicializarCanvasRaspa(canvas, item, helperEl) {
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const stage = canvas.parentElement;

  const w = Math.max(stage.clientWidth, 260);
  const h = Math.max(stage.clientHeight, 196);
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = Math.floor(w * dpr);
  canvas.height = Math.floor(h * dpr);
  ctx.scale(dpr, dpr);

  // Fondo metálico dorado antiguo
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, "#c8a96e");
  grad.addColorStop(0.35, "#e0c793");
  grad.addColorStop(0.68, "#b79253");
  grad.addColorStop(1, "#cfb178");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Líneas diagonales muy sutiles de textura metálica
  ctx.strokeStyle = "rgba(255, 248, 232, 0.22)";
  ctx.lineWidth = 1;
  for (let x = -h; x < w + h; x += 14) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + h, h);
    ctx.stroke();
  }

  // Marco interior punteado
  ctx.strokeStyle = "rgba(65, 36, 24, 0.34)";
  ctx.setLineDash([4, 4]);
  ctx.strokeRect(10, 10, w - 20, h - 20);
  ctx.setLineDash([]);

  // Texto grabado sobre la lámina
  ctx.fillStyle = "rgba(56, 32, 20, 0.85)";
  ctx.font = '500 13px "IBM Plex Mono", monospace';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("RASPA AQUÍ", w / 2, h / 2 - 10);

  ctx.fillStyle = "rgba(56, 32, 20, 0.65)";
  ctx.font = 'italic 18px "Cormorant Garamond", Georgia, serif';
  ctx.fillText(item.etiqueta, w / 2, h / 2 + 16);

  // Modo borrado para raspar
  ctx.globalCompositeOperation = "destination-out";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = 36;

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
      ctx.arc(pt.x, pt.y, 18, 0, Math.PI * 2);
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
    if (total > 0 && borrados / total >= 0.45) {
      yaRevelado = true;
      canvas.classList.add("is-cleared");
      marcarComoRaspado(item.fecha);
      if (helperEl) {
        helperEl.textContent = "Descubierto · guardado en tu libro";
      }
    }
  }

  canvas.addEventListener("pointerdown", (e) => {
    if (yaRevelado) return;
    raspando = true;
    canvas.setPointerCapture(e.pointerId);
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

/* Renderiza una página de Raspa y Gana (Páginas 5 a 32) */
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
      const restante = fechaDesbloqueoRaspa(item.fecha) - obtenerAhoraLibro();
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

  // DESBLOQUEADO: mostrar raspa y gana interactivo
  const stage = document.createElement("div");
  stage.className = "scratch-stage";

  const tieneContenido =
    (item.titulo && item.titulo.trim()) || (item.mensaje && item.mensaje.trim());

  const underneath = document.createElement("div");
  underneath.className = "scratch-underneath";
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

  stage.appendChild(underneath);

  if (yaRaspado) {
    helper.textContent = "Ya raspaste este día";
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

  ticketFrame.appendChild(stage);
}

/* Renderiza cualquier página del libro (1 a 32) */
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

function obtenerAhoraCalendario() {
  if (DIA_SIMULADO !== null) {
    return new Date(`${ANIO}-12-${pad2(DIA_SIMULADO)}T12:00:00-06:00`);
  }
  return new Date();
}

function fechaDesbloqueoCarta(dia) {
  return new Date(`${ANIO}-12-${pad2(dia)}T00:00:00-06:00`);
}

function cartaEstaDesbloqueada(dia) {
  return obtenerAhoraCalendario() >= fechaDesbloqueoCarta(dia);
}

function obtenerAbiertas() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_CARTAS) || "[]");
  } catch {
    return [];
  }
}

function marcarComoAbierta(dia) {
  const abiertas = obtenerAbiertas();
  if (!abiertas.includes(dia)) {
    abiertas.push(dia);
    try {
      localStorage.setItem(STORAGE_KEY_CARTAS, JSON.stringify(abiertas));
    } catch {
      // Ignora si el navegador bloquea storage
    }
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
        const restante = fechaDesbloqueoCarta(dia) - obtenerAhoraCalendario();
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
  const ahora = obtenerAhoraCalendario();
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

/* Eventos */
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

incognitoWidget.addEventListener("click", () => {
  incognitoIndex = (incognitoIndex + 1) % INCOGNITO_MODOS.length;
  renderIncognito(true);
});

btnCloseModal.addEventListener("click", cerrarModal);
modalBackdrop.addEventListener("click", cerrarModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (secretOverlay.classList.contains("is-open")) cerrarSecreto();
    if (letterModal.classList.contains("is-open")) cerrarModal();
  }
});

/* Inicialización */
poblarIndiceLibro();
renderIncognito(false);
renderCalendario(false);
actualizarContador();
setInterval(actualizarContador, 1000);