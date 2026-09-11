const bootLines = [
  "Booting a message I have been afraid to send...",
  "Loading our memories...",
  "Reading the things I should have understood sooner...",
  "WARNING: unresolved feelings detected.",
  "Searching for courage...",
  "Courage found. Finally.",
  "Preparing this for my dearest Riko..."
];

const bootTerminal = document.getElementById("bootTerminal");
const bootBar = document.getElementById("bootBar");
const startBtn = document.getElementById("startBtn");
const bootScreen = document.getElementById("bootScreen");
const desktop = document.getElementById("desktop");
const windows = document.getElementById("windows");
const questCount = document.getElementById("questCount");
const finalOverlay = document.getElementById("finalOverlay");
const toast = document.getElementById("toast");

let found = new Set();
let z = 20;

function boot() {
  let i = 0;
  const timer = setInterval(() => {
    bootTerminal.textContent += (i ? "\n" : "") + "> " + bootLines[i];
    bootBar.style.width = `${((i + 1) / bootLines.length) * 100}%`;
    i++;
    if (i >= bootLines.length) {
      clearInterval(timer);
      setTimeout(() => startBtn.classList.remove("hidden"), 400);
    }
  }, 420);
}
boot();

startBtn.addEventListener("click", () => {
  bootScreen.classList.add("hidden");
  desktop.classList.remove("hidden");
  showToast("Take your time, ayankk. This is for you. ♡");
  setTimeout(() => openWindow("memories"), 450);
});

function openWindow(id) {
  const existing = document.querySelector(`.window[data-id="${id}"]`);
  if (existing) {
    existing.style.zIndex = ++z;
    return;
  }
  const template = document.getElementById(`${id}Template`);
  if (!template) return;
  const node = template.content.cloneNode(true);
  windows.appendChild(node);
  const win = document.querySelector(`.window[data-id="${id}"]`);
  win.style.zIndex = ++z;

  win.querySelector(".close").addEventListener("click", () => win.remove());
  win.addEventListener("mousedown", () => win.style.zIndex = ++z);

  if (id === "music") {
    const song = win.querySelector("#song");
    song.play().catch(() => {});
  }

  if (id === "regrets") {
    win.querySelectorAll(".delete-regret").forEach(btn => {
      btn.addEventListener("click", () => {
        btn.textContent = "FAILED";
        btn.disabled = true;
        win.querySelector("#regretMsg").textContent = "ERROR 409: The past cannot be deleted. Understand it. Own it. Learn from it.";
        showToast("ERROR 409 — some things cannot be undone.");
      });
    });
  }

  if (id === "final") {
    const unlockBtn = win.querySelector("#unlockBtn");
    unlockBtn.addEventListener("click", () => {
      if (found.size >= 5) {
        win.remove();
        finalOverlay.classList.remove("hidden");
      } else {
        showToast(`You still have ${5 - found.size} clue(s) left.`);
      }
    });
  }

  if (id === "memories") markClue(1);
  if (id === "incident") markClue(2);
  if (id === "music") markClue(3);
  if (id === "regrets") markClue(4);
  if (id === "letter") markClue(5);
}

function markClue(n) {
  if (found.has(n)) return;
  found.add(n);
  questCount.textContent = found.size;
  if (found.size === 5) showToast("All clues found. FINAL_LEVEL unlocked. 🔐");
}

document.querySelectorAll(".desktop-icon").forEach(btn => {
  btn.addEventListener("click", () => openWindow(btn.dataset.window));
});

document.getElementById("yesBtn").addEventListener("click", () => {
  finalOverlay.innerHTML = `
    <div class="final-card">
      <div class="sparkles">✦ ♡ ✦</div>
      <div class="tiny">MESSAGE RECEIVED</div>
      <h1>Thank you, ayankk.</h1>
      <p class="final-question">If you are willing to try again, I will not take that chance lightly.</p>
      <p class="no-pressure">I know the real proof will never be this website. It will be in the way I communicate, listen, stay, and love you from here.</p>
      <div style="margin-top:25px;font-size:34px">🥹🫶🏻</div>
    </div>`;
  confetti();
});

document.getElementById("noBtn").addEventListener("click", () => {
  finalOverlay.innerHTML = `
    <div class="final-card">
      <div class="sparkles">✦</div>
      <div class="tiny">MESSAGE RECEIVED</div>
      <h1>Take your time.</h1>
      <p class="final-question">I will respect the space you need.</p>
      <p class="no-pressure">You don't have to forgive me because I made a cute website. I meant what I said, and I will leave the rest to time, your heart, and my actions.</p>
    </div>`;
});

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(showToast.t);
  showToast.t = setTimeout(() => toast.classList.remove("show"), 2600);
}

function confetti() {
  for (let i = 0; i < 80; i++) {
    const p = document.createElement("span");
    p.textContent = ["✦","♥","•","♡"][Math.floor(Math.random()*4)];
    p.style.position = "fixed";
    p.style.left = Math.random()*100 + "vw";
    p.style.top = "-20px";
    p.style.zIndex = 300;
    p.style.fontSize = (10 + Math.random()*22) + "px";
    p.style.color = ["#ff7fb0","#78c9ff","#ffe28a","#91e6b3"][Math.floor(Math.random()*4)];
    p.style.transition = `transform ${2+Math.random()*2}s linear, opacity 2.5s`;
    document.body.appendChild(p);
    requestAnimationFrame(() => {
      p.style.transform = `translate(${(Math.random()-.5)*180}px, ${110+Math.random()*90}vh) rotate(${Math.random()*720}deg)`;
      p.style.opacity = "0";
    });
    setTimeout(() => p.remove(), 4500);
  }
}

setInterval(() => {
  const d = new Date();
  document.getElementById("clock").textContent =
    d.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});
}, 1000);
