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

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".accordion-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;

      // Toggle visibility
      const isVisible = content.style.display === "block";
      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.style.display = "none"; // Close all
      });

      content.style.display = isVisible ? "none" : "block"; // Toggle current
    });
  });
});
