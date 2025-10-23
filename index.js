let tableContent = '';
const tableBodyElem = document.querySelector('#tableBody');
let totalProducts = JSON.parse(window.localStorage.getItem('totalProducts')) || [];
const searchInputElem = document.querySelector('#searchInput');

searchInputElem.addEventListener('input', (event) => {
    const searchValue = event.target.value;
    const filteredProducts = totalProducts.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()));
    renderTable(filteredProducts);
});

const goToProductDetails = (productId) => {
    const selectedProduct = totalProducts.find(product => product.id === productId);
    window.localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    window.location.href = 'product-details.html?id=${productId}';
};

const renderTable = (products) => {
    tableContent = '';
    products.forEach(product => {
        tableContent += `
            <tr>
                <td><a href="#" onclick="goToProductDetails(${product.id})"> ${product.title}</a></td>
                <td>$${product.price}</td>
                <td><img src="${product.image}" alt="${product.title}" width="50" height="50"></td>
            </tr>
        `;
    });
    tableBodyElem.innerHTML = tableContent;
};



//para que la primera vez se carguen los productos desde la API, cachearlos en localStorage, solo si son siempre los mismos
if (totalProducts.length === 0) {
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    totalProducts = products;
    window.localStorage.setItem('totalProducts', JSON.stringify(products));
    renderTable(Products);

    tableBodyElem.innerHTML = tableContent;
  });
} else {
    renderTable(totalProducts);
}
