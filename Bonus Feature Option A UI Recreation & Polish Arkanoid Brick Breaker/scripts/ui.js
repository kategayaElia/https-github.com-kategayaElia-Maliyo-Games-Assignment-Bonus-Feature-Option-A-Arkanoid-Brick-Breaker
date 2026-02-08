// scripts/ui.js

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  const screen = document.getElementById(screenId);
  screen.style.display = 'flex';
  setTimeout(() => screen.classList.add('active'), 50);
}

// Particle effect for button clicks
function spawnParticles(x, y) {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = x + "px";
  particle.style.top = y + "px";
  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 1000);
}

// Attach particle effect to buttons
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", e => {
    spawnParticles(e.pageX, e.pageY);
  });
});

function showStatus(message) {
  document.getElementById("status").innerText = message;
}
