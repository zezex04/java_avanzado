const productDetailsElem = document.querySelector('#productDetails');
const selectedProduct = JSON.parse(window.localStorage.getItem('selectedProduct'));
productDetailsElem.textContent = JSON.stringify(selectedProduct, null, 2);
