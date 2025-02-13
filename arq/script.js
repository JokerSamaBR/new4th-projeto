// Countdown Timer
const countDownDate = new Date("Dec 1, 2025 00:00:00").getTime();
const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = days + "d " + hours + "h ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "SERVIDOR ABERTO!";
  }
}, 1000);

// Character selection logic
const characters = document.querySelectorAll('.character');
const startButton = document.getElementById('startButton');
let selectedClass = null;

characters.forEach(character => {
  character.addEventListener('click', () => {
    characters.forEach(c => c.classList.remove('selected'));
    character.classList.add('selected');
    selectedClass = character.dataset.class;
    startButton.textContent = `Iniciar como ${selectedClass.charAt(0).toUpperCase() + selectedClass.slice(1)}`;
  });
});

startButton.addEventListener('click', (e) => {
  if (!selectedClass) {
    e.preventDefault();
    alert('Por favor, selecione uma classe antes de começar!');
  } else {
    startButton.href = `https://new4th-ro.com/play?class=${selectedClass}`;
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = darkModeToggle.querySelector('i');

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
    localStorage.setItem('darkMode', 'enabled'); // Store the dark mode state
  } else {
    darkModeIcon.classList.remove('fa-sun');
    darkModeIcon.classList.add('fa-moon');
    localStorage.setItem('darkMode', 'disabled');  // Store the light mode state
  }
}

// Check local storage for dark mode state on page load
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  darkModeIcon.classList.remove('fa-moon');
  darkModeIcon.classList.add('fa-sun');
}

// Add event listener to the dark mode toggle button
darkModeToggle.addEventListener('click', toggleDarkMode);

const pixKeyElement = document.getElementById('pixKey');
if (pixKeyElement) {
  pixKeyElement.textContent = '3579a362-8f84-463d-ae13-71d9115ac60c';
}