function launchConfetti() {
  const confettiContainer = document.createElement("div");
  confettiContainer.style.position = "fixed";
  confettiContainer.style.top = "0";
  confettiContainer.style.left = "0";
  confettiContainer.style.width = "100%";
  confettiContainer.style.height = "100%";
  confettiContainer.style.zIndex = "9999";
  confettiContainer.style.pointerEvents = "none";
  
  for (let i = 0; i < 120; i++) {  // Increased number of confetti for a fuller effect
      setTimeout(() => {
          const confetti = document.createElement("div");
          confetti.style.position = "absolute";

          // Random Size & Shape
          const size = Math.random() * 12 + 8;
          confetti.style.width = `${size}px`;
          confetti.style.height = `${size}px`;

          // Random Shape (Circle, Rectangle, Star)
          const shapes = ["circle", "rectangle", "star", "ribbon"];
          const shape = shapes[Math.floor(Math.random() * shapes.length)];

          if (shape === "circle") {
              confetti.style.borderRadius = "50%";
          } else if (shape === "rectangle") {
              confetti.style.transform = `rotate(${Math.random() * 45}deg)`;
          } else if (shape === "star") {
              confetti.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
          } else if (shape === "ribbon") {
              confetti.style.borderRadius = "5px";
              confetti.style.width = `${size * 2}px`;
              confetti.style.height = `${size / 3}px`;
              confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
          }

          // Random Color
          confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
          
          // Glowing Effect
          confetti.style.boxShadow = `0 0 10px rgba(255, 255, 255, 0.8)`;

          // Random Start Position
          confetti.style.left = `${Math.random() * 100}%`;
          confetti.style.top = "-10px";

          // Random Animation Duration & Fall Path
          const duration = Math.random() * 3 + 2;
          const horizontalDrift = (Math.random() - 0.5) * 50; // Drift left/right

          confetti.style.animation = `fall-${i} ${duration}s ease-in forwards`;

          // Create keyframes dynamically for each confetti
          const keyframes = `
              @keyframes fall-${i} {
                  0% {
                      transform: translate(0, 0) rotate(${Math.random() * 360}deg) scale(1);
                      opacity: 1;
                  }
                  50% {
                      transform: translate(${horizontalDrift}px, 50vh) rotate(${Math.random() * 720}deg) scale(1.2);
                      opacity: 0.8;
                  }
                  100% {
                      transform: translate(${horizontalDrift * 2}px, 100vh) rotate(${Math.random() * 1080}deg) scale(0.8);
                      opacity: 0;
                  }
              }
          `;

          // Append Keyframes to the Document
          const style = document.createElement("style");
          style.innerHTML = keyframes;
          document.head.appendChild(style);

          confettiContainer.appendChild(confetti);
      }, i * 50);
  }

  document.body.appendChild(confettiContainer);

  // Remove confetti after 8 seconds
  setTimeout(() => {
      document.body.removeChild(confettiContainer);
  }, 8000);
}

  
  // Select elements
const music = document.getElementById("background-music");
const video = document.getElementById("birthday-video");
const musicBtn = document.getElementById("music-btn");

// Play/Pause Music on Button Click
musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "⏸ Pause Music";
    } else {
        music.pause();
        musicBtn.textContent = "🎵 Play Music";
    }
});

// Pause music when video starts playing
video.addEventListener("play", () => {
    if (!music.paused) {
        music.pause();
        musicBtn.textContent = "🎵 Play Music"; // Update button text
    }
});

// Resume music when video ends
video.addEventListener("ended", () => {
    music.play();
    musicBtn.textContent = "⏸ Pause Music"; // Update button text
});
