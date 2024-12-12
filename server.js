const express = require('express');
const path = require('path');
const app = express();

const categoryData = {
    Iran: [
        {
            name: "Persian Carpet",
            img: "../images/IranCarpet.webp",
            description: "Beautifully handcrafted Persian carpet.",
            price: 500,
            madeBy: "Iranian Artisans"
        },
        {
            name: "Turkish Tiles",
            img: "../images/IranTiles.webp",
            description: "Exquisite Iranian ceramic tiles.",
            price: 150,
            madeBy: "Masters from Isfahan"
        }
    ],
    Caribbean: [
        {
            name: "Jamaican Basket",
            img: "../images/Tiles.webp",
            description: "Handwoven basket made with natural fibers.",
            price: 50,
            madeBy: "Artisans in Jamaica"
        },
        {
            name: "Caribbean Necklace",
            img: "../images/lapislazuli.webp",
            description: "Unique shell necklace crafted by hand.",
            price: 75,
            madeBy: "Local craftsmen in Haiti"
        }
    ],
    Taiwanese: [
        {
            name: "Taiwanese clothes",
            img: "../images/AfghanClothes.webp",
            description: "Handwoven dress made of cotton.",
            price: 250,
            madeBy: "Ali"
        },
        {
            name: "magnet",
            img: "../images/headerpic.jpg",
            description: "handmade magnet",
            price: 75,
            madeBy: "Local craftsmen in Taipei"
        }
    ]
};


// Set the view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// Serve static files from the "APPLICATION" directory
app.use(express.static(path.join(__dirname, 'css')));


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
