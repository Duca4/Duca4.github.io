// Get references to the quantity input, calculate button, and result div
const quantityInput = document.getElementById('quantityInput');
const calculateButton = document.getElementById('calculateButton');
const totalResult = document.getElementById('totalResult');

// Add an event listener to the calculate button
calculateButton.addEventListener('click', calculateTotal);

// Function to calculate the total
function calculateTotal() {
  // Retrieve the quantity from the input
  const quantity = parseInt(quantityInput.value);

  // Calculate the total
  const pricePerCandle = 5;
  const total = quantity * pricePerCandle;

  // Display the total in the result div
  totalResult.textContent = 'Total: $' + total.toFixed(2);
}
