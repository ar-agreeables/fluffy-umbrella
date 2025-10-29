// Dark mode toggle + fade-in animations + simple form placeholder handling

const toggle = document.getElementById('darkModeToggle');
const body = document.body;
const fadeEls = document.querySelectorAll('.fade-in');

// Restore theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  if (toggle) toggle.textContent = '☀️';
}

// Toggle
if (toggle) {
  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    toggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Fade-in on scroll
function showOnScroll(){
  fadeEls.forEach(el=>{
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) el.classList.add('visible');
  });
}
window.addEventListener('load', showOnScroll);
window.addEventListener('scroll', showOnScroll);

// Simple contact form placeholder behavior
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e){
    // Prevent real submission since action="#" is a placeholder.
    e.preventDefault();
    alert('This form is a placeholder. To receive messages, replace the form action with your Formspree endpoint (or another form provider).');
  });
}
