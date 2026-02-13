const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");

const proposalScreen = document.getElementById("proposalScreen");
const proposal = document.getElementById("proposal");
const choiceButtons = document.getElementById("choiceButtons");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const resultScreen = document.getElementById("resultScreen");
const heartbeat = document.getElementById("heartbeat");

// START SCREEN CLICK
startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  proposalScreen.classList.remove("hidden");

  heartbeat.currentTime = 0;
  heartbeat.volume = 0.6;
  heartbeat.play().catch(() => console.log("Audio blocked"));

  // Show proposal first
  setTimeout(() => {
    proposal.classList.add("show");
  }, 300);

  // Show buttons AFTER proposal
  setTimeout(() => {
    choiceButtons.classList.remove("hidden");
  }, 1400);
});

// YES
yesBtn.addEventListener("click", () => {
  proposalScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  heartbeat.pause();
});

// NO runs
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 160 - 80;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Floating hearts everywhere 💖
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerText = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (16 + Math.random() * 28) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);