// Simple functionality: Alert on view button click
document.querySelectorAll('.view-btn').forEach(button => {
  button.addEventListener('click', function() {
    const projectTitle = this.previousElementSibling.previousElementSibling.textContent;
    alert(`Viewing details for ${projectTitle}`);
  });
});

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  alert(`Thank you, ${name}! Your message has been sent.`);
  // In a real app, you'd send this to a server
  this.reset();
});