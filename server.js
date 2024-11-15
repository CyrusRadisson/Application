const express = require('express');
const path = require('path');
const app = express();

// Sample data for each category (replace with a database or API if available)
const categoryData = {
    middle_eastern: [
        { name: "Persian Carpet", img: "/images/persian_carpet.jpg", description: "Beautiful Persian carpet." },
        { name: "Turkish Tiles", img: "/images/turkish_tiles.jpg", description: "Exquisite Turkish tiles." }
    ],
    caribbean: [
        { name: "Jamaican Basket", img: "/images/jamaican_basket.jpg", description: "Handwoven Jamaican basket." },
        { name: "Caribbean Necklace", img: "/images/caribbean_necklace.jpg", description: "Unique shell necklace." }
    ],
    taiwanese: [
        { name: "Taiwan Lantern", img: "/images/taiwan_lantern.jpg", description: "Traditional Taiwanese lantern." },
        { name: "Taipei Teapot", img: "/images/taipei_teapot.jpg", description: "Famous teapot from Taipei." }
    ]
};

// Set the view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
    res.render('index'); // Render homepage (index.pug)
});

// Route for each category page (using a dynamic category parameter)
app.get('/category/:category', (req, res) => {
    const category = req.params.category;
    const products = categoryData[category];

    if (products) {
        res.render('category', { category: category.replace('_', ' '), products }); // Render category.pug
    } else {
        res.status(404).send("Category not found");
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0' ,  () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});