document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dummyjson.com/products?limit=100')
        .then(response => response.json())
        .then(data => {
            const products = data.products;
            const productList = document.getElementById('product-list');
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p>$${product.price}</p>
                    <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
                `;
                productList.appendChild(productCard);
            });
        });
});

function addToCart(productId) {
    // Lógica para agregar el producto al carrito
    alert(`Producto ${productId} agregado al carrito.`);
}
