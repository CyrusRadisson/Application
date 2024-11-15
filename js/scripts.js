// Sample data for featured products
const featuredProducts = [
    { name: "Persian Carpet", img: "../images/IranCarpet.webp", description: "Beautiful Persian carpet." },
    { name: "Turkish Tiles", img: "../images/Tiles.webp", description: "Exquisite Turkish tiles." },
    { name: "Afghan Clothes", img: "../images/images.jpg", description: "Unique Afghan attire." }
];

// Data for each category
const categories = {
    "middle_eastern": [
        { name: "Persian Carpet", img: "../images/IranCarpet.webp", description: "Beautiful Persian carpet." },
        { name: "Turkish Tiles", img: "../images/Tiles.webp", description: "Exquisite Turkish tiles." }
    ],
    "caribbean": [
        { name: "Jamaican Basket", img: "../images/images.jpg", description: "Handwoven Jamaican basket." },
        { name: "Caribbean Necklace", img: "../images/caribbean_necklace.jpg", description: "Unique shell necklace." }
    ],
    "taiwanese": [
        { name: "Taiwan Lantern", img: "../images/taiwan_lantern.jpg", description: "Traditional Taiwanese lantern." },
        { name: "Taipei Teapot", img: "../images/taipei_teapot.jpg", description: "Famous teapot from Taipei." }
    ]
};

// Function to load featured products on page load
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    featuredContainer.innerHTML = ''; // Clear any previous content

    featuredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('featured-product');
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        featuredContainer.appendChild(productDiv);
    });
}

// Function to dynamically load products for a selected category
function loadCategory(category) {
    const container = document.getElementById('featured-products');
    container.innerHTML = ''; // Clear previous content

    // Check if the category exists in the data
    if (categories[category]) {
        const header = document.createElement('h2');
        header.textContent = category === 'middle_eastern' ? 'Middle Eastern Handicrafts' :
                             category === 'caribbean' ? 'Caribbean Handicrafts' : 'Taiwanese Handicrafts';
        header.style.textAlign = 'center';
        container.appendChild(header);

        // Loop through the products in the selected category
        categories[category].forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('featured-product');
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            `;
            container.appendChild(productDiv);
        });
    } else {
        console.error("Category not found:", category);
    }
}

// Function to scroll to the categories section
function exploreCategories() {
    document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
}

// Load featured products when the page loads
document.addEventListener('DOMContentLoaded', loadFeaturedProducts);
