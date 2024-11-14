// Fetch products from the backend using Fetch API
fetch('http://localhost:3001/api/products')
    .then((response) => response.json())
    .then((products) => {
        const productList = document.getElementById('product-list');
        products.forEach((product) => {
            // Create elements without using Lodash
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <img src="${product.image_url}" alt="${product.name}">
      `;
            productList.appendChild(productDiv);
        });
    })
    .catch((error) => {
        console.error('Error fetching products:', error);
    });
