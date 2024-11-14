const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const port = 3001;
require('dotenv').config();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Create MySQL connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Endpoint to get all products
app.get('/api/products', (req, res) => {
    connection.query('SELECT * FROM products', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});


// Endpoint to get product by ID
app.get('/api/products/:id', (req, res) => {
    connection.query(
        `SELECT * FROM products WHERE id = ${req.params.id}`,
        (error, results) => {
            if (error) throw error;
            res.json(results[0]);
        }
    );
});

// Serve a specific HTML file for the root route
app.get('/', (req, res) => {
    console.log(1)
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
