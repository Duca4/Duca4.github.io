document.addEventListener('DOMContentLoaded', function() {
  var calculateButton = document.getElementById('calculateButton');
  calculateButton.addEventListener('click', calculateTotal);
});

function calculateTotal() {
  var quantityInput = document.getElementById('quantity');
  var totalInput = document.getElementById('total');
  
  var quantity = parseInt(quantityInput.value);
  var pricePerItem = 5;
  var total = quantity * pricePerItem;
  
  totalInput.value = total;
}
