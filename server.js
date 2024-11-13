const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3001;
require('dotenv').config();

// Create MySQL connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Endpoint to get all products
app.get('/products', (req, res) => {
    connection.query('SELECT * FROM products', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Endpoint to get product by ID
app.get('/products/:id', (req, res) => {
    connection.query(
        `SELECT * FROM products WHERE id = ${req.params.id}`,
        (error, results) => {
            if (error) throw error;
            res.json(results[0]);
        }
    );
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
