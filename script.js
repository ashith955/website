// Select all "Buy Now" links inside cards
const buyButtons = document.querySelectorAll('.card a');

// Add a click alert for each button
buyButtons.forEach(button => {
  button.addEventListener('click', function () {
    alert('Redirecting you to the official site to buy this watch!');
  });
});

