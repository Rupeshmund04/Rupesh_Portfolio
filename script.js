const phrases = [
  "Problem Solver",
  "Frontend Developer",
  "Competitive Programmer",
  "Tech Enthusiast",
  "Result Oriented"
];

const typedText = document.getElementById("typed-text");
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];
  const currentText = currentPhrase.slice(0, letterIndex);

  typedText.textContent = currentText;

  if (!isDeleting && letterIndex < currentPhrase.length) {
    letterIndex++;
  } else if (isDeleting && letterIndex > 0) {
    letterIndex--;
  } else if (!isDeleting && letterIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeLoop, 1000); // Pause before deleting
    return;
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  setTimeout(typeLoop, isDeleting ? 50 : 100);
}

// Start the loop when the page loads
document.addEventListener("DOMContentLoaded", () => {
  typeLoop();
});


document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('fullname').value;
      const email = document.getElementById('email').value;
      const msg = document.getElementById('message').value;
      const subject = encodeURIComponent("Portfolio Contact: " + name);
      const body = encodeURIComponent(msg + "\n\n--\nName: " + name + "\nEmail: " + email);
      window.location = `mailto:rupesh1804mund@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});


document.addEventListener("DOMContentLoaded", function() {
  // Minimal icon theme toggle
  const modeToggle = document.getElementById('modeToggle');
  if (modeToggle) {
    // Set icon
    const setIcon = () => {
      if (document.body.classList.contains('light-mode')) {
        modeToggle.textContent = "☀️";
      } else {
        modeToggle.textContent = "🌙";
      }
    };

    modeToggle.addEventListener('click', function() {
      document.body.classList.toggle('light-mode');
      localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
      setIcon();
    });

    // Restore on load
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-mode');
    }
    setIcon();
  }
});



