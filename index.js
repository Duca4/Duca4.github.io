
const quantityInput = document.getElementById('quantityInput');
const calculateButton = document.getElementById('calculateButton');
const totalResult = document.getElementById('totalResult');
calculateButton.addEventListener('click', calculateTotal);
function calculateTotal() {
  const quantity = parseInt(quantityInput.value);
  const pricePerCandle = 5;
  const total = quantity * pricePerCandle;

  totalResult.textContent = 'Total: $' + total.toFixed(2);
}
