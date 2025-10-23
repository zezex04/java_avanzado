const productDetailsEleme = document.getElementById('productDetails');
const selectedProduct = JSON.parse(window.localStorage.getItem('selectedProduct'));
productDetailsEleme.textContent = JSON.stringify(selectedProduct, null, 2);
