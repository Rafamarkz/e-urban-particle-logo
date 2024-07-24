// Particle Logo Standalone Version
(function() {
  // Create canvas element
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 200;
  canvas.style.background = 'black';

  // Append canvas to the container
  const container = document.getElementById('particle-logo-container');
  if (container) {
    container.appendChild(canvas);
  } else {
    console.error('Container element not found');
    return;
  }

  const ctx = canvas.getContext('2d');
  const particleCount = 1000;
  let particles = [];
  let isHovered = false;

  function createParticles() {
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: Math.random() * 4 - 2,
        vy: Math.random() * 4 - 2,
        originalX: Math.random() * canvas.width,
        originalY: Math.random() * canvas.height,
      });
    }
  }

  function drawLogo() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, 50);
    ctx.fillRect(0, 150, 150, 50);
    ctx.fillRect(175, 150, 25, 50);
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (!isHovered) {
      drawLogo();
    }

    for (let particle of particles) {
      if (isHovered) {
        particle.x += particle.vx;
        particle.y += particle.vy;
      } else {
        particle.x += (particle.originalX - particle.x) * 0.1;
        particle.y += (particle.originalY - particle.y) * 0.1;
      }

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
    }

    requestAnimationFrame(animateParticles);
  }

  createParticles();
  animateParticles();

  // Event listeners
  canvas.addEventListener('mouseenter', () => isHovered = true);
  canvas.addEventListener('mouseleave', () => isHovered = false);
})();
