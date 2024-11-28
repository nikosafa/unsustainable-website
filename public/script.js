// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    autoRaf: true,
});

// Debounce scroll event for better performance
let scrollTimeout;
lenis.on('scroll', (e) => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
        console.log('Scroll event:', e);
        scrollTimeout = null;
    }, 100); // Execute at most every 100ms
});

// Fetch products from the backend
fetch('http://localhost:3001/api/products')
    .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch products');
        return response.json();
    })
    .then((products) => {
        const productList = document.getElementById('product-list');
        productList.innerHTML = ''; // Clear any existing content

        products.forEach((product) => {
            // Create product elements dynamically
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <img src="${product.image_url}" alt="${product.name}" loading="lazy">
            `;
            productList.appendChild(productDiv);
        });
    })
    .catch((error) => {
        console.error('Error fetching products:', error);
        const productList = document.getElementById('product-list');
        productList.innerHTML = '<p>Unable to load products. Please try again later.</p>';
    });

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Save dark mode preference in localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

// Apply saved dark mode preference on load
document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});
