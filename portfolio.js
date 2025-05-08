document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email').value;
  if (validateEmail(emailInput)) {
    alert('Email verified. Access granted.');
    document.getElementById('workSamples').style.display = 'block';
  } else {
    alert('Please enter a valid email address.');
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
