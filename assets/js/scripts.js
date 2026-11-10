/**
 * Handle mail sending
 * 
 * @param {string} name 
 * @param {string} email 
 * @param {string} message 
 */
const sendMail = async (name, email, message) => {
  const container = document.querySelector('.contact .status');
  const form = document.getElementById('contact-form');
  const button = document.getElementById('form-trigger');

  button.disabled = true;

  try {
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

    container.className = 'status';
    container.classList.add(data.status);
    container.textContent = data.message;

    if (data.status === 'success') {
      form.reset();
    }
  } catch (error) {
    container.className = 'status error';
    container.textContent = 'Your message could not be sent. Please try again later.';
  } finally {
    button.disabled = false;
  }
};

/**
 * Bind events listeners when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const year = document.getElementById('year');

  // si le span disparaît du footer, le formulaire doit quand même marcher
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();  
    sendMail(event.target[0].value, event.target[1].value, event.target[2].value);
  });
});