"use strict";

/* 22 Arcani Maggiori — nome, glifo, parole chiave e significato (dritto/rovescio) */
const ARCANA = [
  { n: "0", name: "Il Matto", g: "🍃",
    up: { k: "Inizi · Libertà · Spontaneità",
      t: "Un nuovo cammino si apre davanti a te. È il momento di lasciarti alle spalle le paure e fare quel salto nel vuoto con fiducia. Segui l'istinto, anche se la meta non è ancora chiara." },
    rev: { k: "Imprudenza · Rischio · Esitazione",
      t: "L'entusiasmo rischia di trasformarsi in avventatezza. Prima di lanciarti, guarda dove metti i piedi: non tutte le porte aperte vanno attraversate ora." } },
  { n: "I", name: "Il Mago", g: "✨",
    up: { k: "Volontà · Talento · Manifestazione",
      t: "Hai tutti gli strumenti che ti servono. È il momento di agire con intenzione: le tue capacità possono trasformare le idee in realtà concreta." },
    rev: { k: "Manipolazione · Blocco · Potenziale sprecato",
      t: "Un talento resta inespresso o viene usato male. Attenzione a chi promette troppo — e chiediti se stai usando le tue energie nella direzione giusta." } },
  { n: "II", name: "La Papessa", g: "🌙",
    up: { k: "Intuito · Mistero · Sapere interiore",
      t: "Le risposte che cerchi non stanno fuori ma dentro di te. Ascolta il silenzio, i sogni, ciò che senti prima di ciò che pensi. È tempo di attendere e osservare." },
    rev: { k: "Segreti · Confusione · Voce ignorata",
      t: "Stai zittendo la tua intuizione o qualcuno ti tiene all'oscuro. Riporta in superficie ciò che hai nascosto, anche a te stesso." } },
  { n: "III", name: "L'Imperatrice", g: "🌻",
    up: { k: "Abbondanza · Creatività · Nutrimento",
      t: "La vita fiorisce: progetti, affetti e creatività portano frutti. Concediti di ricevere, di prenderti cura e di goderti la pienezza del momento." },
    rev: { k: "Blocco creativo · Dipendenza · Trascuratezza",
      t: "Qualcosa fatica a crescere. Forse ti stai dimenticando di te per gli altri, o l'ispirazione si è inaridita: torna a nutrire ciò che ami." } },
  { n: "IV", name: "L'Imperatore", g: "👑",
    up: { k: "Struttura · Autorità · Stabilità",
      t: "È il momento di mettere ordine e prendere il controllo con disciplina. Fondamenta solide e regole chiare ti daranno la sicurezza per costruire." },
    rev: { k: "Rigidità · Controllo · Testardaggine",
      t: "Il controllo è diventato una gabbia. Un po' di flessibilità farà più della forza: non tutto si domina imponendosi." } },
  { n: "V", name: "Il Papa", g: "🔑",
    up: { k: "Tradizione · Guida · Fede",
      t: "Cerca un maestro, una tradizione o un valore condiviso a cui affidarti. C'è saggezza nell'imparare da chi è venuto prima di te." },
    rev: { k: "Ribellione · Dogma · Libero pensiero",
      t: "Le regole imposte ti stanno strette. È giusto mettere in discussione ciò che non senti tuo e trovare la tua strada spirituale." } },
  { n: "VI", name: "Gli Amanti", g: "💞",
    up: { k: "Amore · Scelta · Unione",
      t: "Un legame profondo o una scelta importante del cuore. Segui ciò che è in armonia con i tuoi valori: l'unione autentica nasce dalla verità." },
    rev: { k: "Disarmonia · Indecisione · Tentazione",
      t: "Uno squilibrio o un dubbio incrina un legame. Rifletti su cosa vuoi davvero prima che l'indecisione decida al posto tuo." } },
  { n: "VII", name: "Il Carro", g: "🏇",
    up: { k: "Vittoria · Determinazione · Controllo",
      t: "Con volontà e concentrazione superi gli ostacoli. Tieni salde le redini delle tue forze opposte e avanzerai verso il successo." },
    rev: { k: "Perdita di rotta · Ostacoli · Aggressività",
      t: "Le forze in gioco tirano in direzioni diverse e rischi di deragliare. Ritrova la direzione prima di premere sull'acceleratore." } },
  { n: "VIII", name: "La Giustizia", g: "⚖️",
    up: { k: "Equità · Verità · Responsabilità",
      t: "Ogni azione ha una conseguenza: è il momento di scelte oneste e decisioni equilibrate. La verità e la coerenza ti guidano." },
    rev: { k: "Ingiustizia · Disonestà · Non assumersi le colpe",
      t: "Qualcosa è fuori equilibrio. Guarda con onestà le tue responsabilità: evitare i conti in sospeso non li cancella." } },
  { n: "IX", name: "L'Eremita", g: "🏮",
    up: { k: "Introspezione · Ricerca · Saggezza",
      t: "Un tempo di ritiro e riflessione ti illumina. Allontanati dal rumore per ascoltare la tua verità: la luce che cerchi la porti dentro." },
    rev: { k: "Isolamento · Solitudine · Chiusura",
      t: "Il ritiro rischia di diventare fuga. Forse è tempo di tornare tra gli altri e condividere ciò che hai compreso." } },
  { n: "X", name: "La Ruota della Fortuna", g: "🌀",
    up: { k: "Destino · Cicli · Svolta",
      t: "La ruota gira e porta un cambiamento: cogli l'onda favorevole. Ciò che sembra caso fa parte di un ciclo più grande." },
    rev: { k: "Sfortuna · Resistenza · Ciclo negativo",
      t: "Un momento in discesa o un blocco. Non lottare contro la corrente: ogni ruota torna a salire, abbi pazienza." } },
  { n: "XI", name: "La Forza", g: "🦁",
    up: { k: "Coraggio · Dolcezza · Padronanza",
      t: "La vera forza è gentile. Domi le tue paure e i tuoi istinti non con la violenza ma con pazienza e coraggio interiore." },
    rev: { k: "Insicurezza · Dubbio · Impulsività",
      t: "L'energia interiore vacilla o esplode senza controllo. Ritrova fiducia in te: la calma è più potente della reazione." } },
  { n: "XII", name: "L'Appeso", g: "🧘",
    up: { k: "Sospensione · Nuova prospettiva · Sacrificio",
      t: "Una pausa forzata ti invita a vedere le cose da un altro punto di vista. Lasciar andare il controllo apre a una comprensione nuova." },
    rev: { k: "Stallo · Resistenza · Ritardo inutile",
      t: "Ti stai aggrappando a qualcosa che andrebbe lasciato andare. Lo stallo dura finché rifiuti il cambiamento di sguardo." } },
  { n: "XIII", name: "La Morte", g: "🦋",
    up: { k: "Fine · Trasformazione · Rinascita",
      t: "Qualcosa finisce perché qualcosa di nuovo possa nascere. Non temere questa trasformazione: è liberazione, non perdita." },
    rev: { k: "Resistenza al cambiamento · Stagnazione",
      t: "Ti opponi a una fine necessaria e resti bloccato nel passato. Finché non lasci andare, il nuovo non può entrare." } },
  { n: "XIV", name: "La Temperanza", g: "🕊️",
    up: { k: "Equilibrio · Moderazione · Armonia",
      t: "Trova il giusto mezzo. Mescolando gli opposti con pazienza raggiungi serenità e guarigione: la calma è la tua alchimia." },
    rev: { k: "Eccesso · Squilibrio · Impazienza",
      t: "Qualcosa è fuori misura — troppo o troppo poco. Ritrova il ritmo e la moderazione prima di bruciare le energie." } },
  { n: "XV", name: "Il Diavolo", g: "🔥",
    up: { k: "Tentazione · Attaccamento · Ombra",
      t: "Catene che ti sei messo da solo: dipendenze, paure, desideri che ti dominano. Riconoscerle è il primo passo per liberartene." },
    rev: { k: "Liberazione · Consapevolezza · Rottura",
      t: "Stai spezzando una catena e riprendendo il tuo potere. Ciò che ti teneva prigioniero comincia a perdere la presa." } },
  { n: "XVI", name: "La Torre", g: "⚡",
    up: { k: "Crollo · Rivelazione · Cambiamento improvviso",
      t: "Una struttura fragile crolla di colpo. Fa male, ma ciò che cade era costruito sul falso: dalle macerie nasce una verità liberatoria." },
    rev: { k: "Crisi evitata · Paura del cambiamento",
      t: "Rimandi un crollo inevitabile o ne esci a fatica. Meglio affrontare la scossa ora che tenere in piedi ciò che non regge." } },
  { n: "XVII", name: "La Stella", g: "⭐",
    up: { k: "Speranza · Ispirazione · Serenità",
      t: "Dopo la tempesta torna la luce. Una rinnovata fiducia e una guida gentile ti mostrano che i tuoi desideri sono possibili." },
    rev: { k: "Sfiducia · Scoraggiamento · Disillusione",
      t: "La speranza si è offuscata e ti senti perso. La stella è ancora lì: ritrova fede in te e nel tuo cammino." } },
  { n: "XVIII", name: "La Luna", g: "🌕",
    up: { k: "Illusione · Sogni · Inconscio",
      t: "Non tutto è come sembra. Paure e fantasie confondono la vista: affidati all'intuito e attraversa l'incertezza senza fretta." },
    rev: { k: "Chiarezza · Verità svelata · Fine della confusione",
      t: "La nebbia si dirada e vedi le cose per come sono. Le paure irrazionali perdono forza e torna la lucidità." } },
  { n: "XIX", name: "Il Sole", g: "☀️",
    up: { k: "Gioia · Successo · Vitalità",
      t: "Luce piena su ogni cosa: gioia, chiarezza e riuscita. È un momento di calore e autenticità — lascia splendere ciò che sei." },
    rev: { k: "Ottimismo velato · Successo rimandato",
      t: "La gioia c'è ma qualche nube la offusca. Ritrova la semplicità e la fiducia: il sole è dietro le nuvole, non spento." } },
  { n: "XX", name: "Il Giudizio", g: "📯",
    up: { k: "Risveglio · Rinnovamento · Chiamata",
      t: "Un richiamo profondo ti spinge a rinascere. È il momento di fare pace col passato e rispondere alla tua vocazione." },
    rev: { k: "Autocritica · Dubbio · Chiamata ignorata",
      t: "Un giudizio troppo severo verso te stesso, o una chiamata che fai finta di non sentire. Perdonati e ascolta ciò che ti muove." } },
  { n: "XXI", name: "Il Mondo", g: "🌍",
    up: { k: "Compimento · Realizzazione · Integrazione",
      t: "Un ciclo si chiude con successo e senso di pienezza. Hai integrato la lezione: celebra il traguardo prima di aprire il prossimo cerchio." },
    rev: { k: "Incompiutezza · Traguardo mancato · Ritardo",
      t: "Sei vicino alla meta ma manca l'ultimo passo. Non abbandonare ora: chiudi ciò che hai lasciato in sospeso." } },
];

const POSITIONS = {
  1: ["La tua carta"],
  3: ["Passato", "Presente", "Futuro"],
};

/* ---- Stato ---- */
const state = { spread: 0, cards: [], revealed: false };

/* ---- Elementi ---- */
const intro = document.getElementById("intro");
const table = document.getElementById("table");
const footer = document.getElementById("footer");
const revealBtn = document.getElementById("reveal");
const againBtn = document.getElementById("again");
const reading = document.getElementById("reading");
const readingCard = document.getElementById("reading-card");

/* ---- Utility ---- */
function shuffledIndices(count) {
  const idx = ARCANA.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx.slice(0, count).map((i) => ({ idx: i, reversed: Math.random() < 0.35 }));
}

/* ---- Costruzione tavolo ---- */
function buildTable(spread) {
  state.spread = spread;
  state.revealed = false;
  state.cards = shuffledIndices(spread);
  const labels = POSITIONS[spread];

  table.innerHTML = "";
  table.style.setProperty("--cw", spread === 1 ? "180px" : "150px");

  state.cards.forEach((c, i) => {
    const slot = document.createElement("div");
    slot.className = "slot";

    const label = document.createElement("div");
    label.className = "slot-label";
    label.textContent = spread === 1 ? "" : labels[i];
    slot.appendChild(label);

    const card = document.createElement("button");
    card.className = "card";
    card.setAttribute("aria-label", "Carta coperta");
    card.innerHTML = cardMarkup(c);
    card.addEventListener("click", () => onCardClick(i, card));
    slot.appendChild(card);

    table.appendChild(slot);
  });

  intro.classList.add("hidden");
  table.classList.remove("hidden");
  footer.classList.remove("hidden");
  revealBtn.classList.remove("hidden");
  againBtn.classList.remove("hidden");
}

function cardMarkup(c) {
  const a = ARCANA[c.idx];
  const revClass = c.reversed ? " reversed" : "";
  const revTag = c.reversed ? '<div class="card-rev-tag">Rovesciata</div>' : '<div class="card-rev-tag">&nbsp;</div>';
  return `
    <div class="card-inner">
      <div class="card-face card-back">
        <span class="star" style="top:14%;left:20%">✦</span>
        <span class="star" style="bottom:16%;right:18%;font-size:14px">✧</span>
      </div>
      <div class="card-face card-front${revClass}">
        <div class="card-num">${a.n}</div>
        <div class="card-glyph">${a.g}</div>
        <div>
          <div class="card-title">${a.name}</div>
          ${revTag}
        </div>
      </div>
    </div>`;
}

/* ---- Interazioni ---- */
function onCardClick(i, cardEl) {
  const wasFlipped = cardEl.classList.contains("flipped");
  if (!wasFlipped) {
    cardEl.classList.add("flipped");
    cardEl.setAttribute("aria-label", ARCANA[state.cards[i].idx].name);
    // piccola attesa per far vedere il flip prima del pannello
    setTimeout(() => openReading(i), 480);
  } else {
    openReading(i);
  }
}

function revealAll() {
  const cards = table.querySelectorAll(".card");
  cards.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("flipped");
      el.setAttribute("aria-label", ARCANA[state.cards[i].idx].name);
    }, i * 220);
  });
  state.revealed = true;
  revealBtn.classList.add("hidden");
}

function openReading(i) {
  const c = state.cards[i];
  const a = ARCANA[c.idx];
  const m = c.reversed ? a.rev : a.up;
  const pos = state.spread === 1 ? "Carta del giorno" : POSITIONS[state.spread][i];

  document.getElementById("reading-pos").textContent = pos;
  document.getElementById("reading-name").textContent = a.name;
  document.getElementById("reading-orient").textContent =
    (a.n ? "Arcano " + a.n + " · " : "") + (c.reversed ? "Rovesciata" : "Dritta");
  document.getElementById("reading-keys").textContent = m.k;
  document.getElementById("reading-text").textContent = m.t;
  reading.classList.remove("hidden");
}

function closeReading() {
  reading.classList.add("hidden");
}

function reset() {
  reading.classList.add("hidden");
  table.classList.add("hidden");
  footer.classList.add("hidden");
  revealBtn.classList.add("hidden");
  againBtn.classList.add("hidden");
  table.innerHTML = "";
  intro.classList.remove("hidden");
}

/* ---- Listener ---- */
document.querySelectorAll(".spread-btn").forEach((btn) => {
  btn.addEventListener("click", () => buildTable(Number(btn.dataset.spread)));
});
revealBtn.addEventListener("click", revealAll);
againBtn.addEventListener("click", reset);
document.getElementById("reading-close").addEventListener("click", closeReading);
reading.addEventListener("click", (e) => { if (e.target === reading) closeReading(); });

/* ---- Native (Capacitor) ---- */
function isCapacitorNative() {
  return !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
}
if (isCapacitorNative()) document.body.classList.add("capacitor");
