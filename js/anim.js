const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");
let stars = [];
let counter = 0;
let animationEnabled = window.innerWidth > 1023; // Active si pas mobile

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Met à jour le statut selon la taille
  animationEnabled = window.innerWidth > 1023;

  if (animationEnabled) {
    initStars();
  } else {
    // Efface l'écran si on désactive l'animation
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function initStars() {
  stars = [];
  const numStars = 180;
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      phase: Math.random() * Math.PI * 2
    });
  }
}

function getOpacity(star) {
  const min = 0.3, max = 0.9;
  return min + (max - min) * Math.abs(Math.sin(counter * 0.03 + star.phase));
}

function render() {
  if (animationEnabled) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(s => {
      ctx.globalAlpha = getOpacity(s);
      ctx.beginPath();
      ctx.fillStyle = "#ffffff";
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });

    counter++;
  }
  requestAnimationFrame(render);
}

window.addEventListener("resize", resize);
resize();
render();
