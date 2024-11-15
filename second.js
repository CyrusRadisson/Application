// Function to scroll down to the Categories section
function exploreCategories() {
    document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
}

// Sample data for featured products
const categories = {
    "middle_eastern": [
        { name: "Persian Carpet", img: "images/IranCarpet.webp", description: "Beautiful Persian carpet." },
        { name: "Turkish Tiles", img: "../images/Tiles.webp", description: "Exquisite Turkish tiles." }
    ],
    "caribbean": [
        { name: "Jamaican Basket", img: "images/lapislazuli.webp", description: "Handwoven Jamaican basket." },
        { name: "Caribbean Necklace", img: "images/images.jpg", description: "Unique shell necklace." }
    ]
}; 

// Function to load featured products
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    featuredContainer.innerHTML = ''; // Clear any previous items

    featuredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('featured-product');
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
        `;
        featuredContainer.appendChild(productDiv);
    });
}

// Load featured products on page load
document.addEventListener('DOMContentLoaded', loadFeaturedProducts);

function loadCategory(category) {
    const container = document.getElementById('handicraft-items');
    container.innerHTML = ''; // Clear previous content

    // Create and insert a header
    const header = document.createElement('h2');
    header.textContent = category === 'middle_eastern' ? 'Middle Eastern Handicrafts' : 'Caribbean Handicrafts';
    header.style.textAlign = 'center';
    container.appendChild(header);

    // Loop through the products in the selected category
    categories[category].forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('handicraft-item');
        itemDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        container.appendChild(itemDiv);
    });
}

