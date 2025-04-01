// Confetti Effect Function
function launchConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.top = '0';
    confetti.style.left = '0';
    confetti.style.width = '100%';
    confetti.style.height = '100%';
    confetti.style.zIndex = '9999';
    confetti.style.pointerEvents = 'none';
    
    // Create 100 confetti particles with random properties
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '10px';
        particle.style.height = '10px';
        // Random color for each particle
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        particle.style.borderRadius = '50%';
        // Random horizontal starting position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = '-10px';
        // Set a random animation duration for the falling effect
        particle.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        
        // Create keyframes for the falling animation
        const keyframes = `
          @keyframes fall {
            to {
              transform: translateY(100vh) rotate(${Math.random() * 360}deg);
              opacity: 0;
            }
          }
        `;
        
        // Append keyframes to the document head
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);
        
        confetti.appendChild(particle);
      }, i * 100);
    }
    
    document.body.appendChild(confetti);
    
    // Remove confetti after 5 seconds
    setTimeout(() => {
      document.body.removeChild(confetti);
    }, 10000);
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
