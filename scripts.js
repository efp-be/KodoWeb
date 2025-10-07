/**
 * Handle mail sending
 * 
 * @param {String} name 
 * @param {String} email 
 * @param {String} message 
 */
const sendmail = async (name, email, message) => {
  const response = await fetch('mail.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });

  const data = await response.json();

  if (data) {
    const container = document.querySelector('.contact .status');
    container.className = 'status';
    container.classList.add(data.status);
    container.textContent = data.message;
  }
};

/**
 * Bind events listeners when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  const contactForm = document.getElementById('contact-form');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();

      const targetId = e.target.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      targetSection?.scrollIntoView({ behavior: 'smooth' });

      if (navLinks.classList.contains('nav-active')) {
        navLinks.classList.remove('nav-active');
        burger.classList.remove('toggle');
      }
    }
  });

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();  
    sendmail(event.target[0].value, event.target[1].value, event.target[2].value);
  });
});