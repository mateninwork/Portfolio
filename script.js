// Mobile nav toggle (simple show/hide of main-nav when on small screens)
const mobileToggle = document.querySelector('.mobile-toggle');
const mainNav = document.querySelector('.main-nav');

if (mobileToggle && mainNav) {
  mobileToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    mainNav.style.display = mainNav.classList.contains('open') ? 'flex' : 'none';
    if (mainNav.classList.contains('open')) {
      mainNav.style.flexDirection = 'column';
      mainNav.style.position = 'absolute';
      mainNav.style.top = '100%';
      mainNav.style.left = '0';
      mainNav.style.right = '0';
      mainNav.style.background = '#fbfaf7';
      mainNav.style.padding = '16px 24px';
      mainNav.style.borderBottom = '1px solid #e3e0d6';
    }
  });
}

// Contact form: basic client-side handling.
// Replace this with your own backend / Formspree / EmailJS endpoint as needed.
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');

    // TODO: send this data to your email service (Formspree, EmailJS, etc.)
    console.log('Form submitted:', Object.fromEntries(data.entries()));

    form.innerHTML = `<p style="color:#fff;font-size:1rem;">Thanks ${name}! Your message has been sent, I'll get back to you within 24h.</p>`;
  });
}

// Highlight active nav link on scroll (simple version)
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.main-nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      current = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});
