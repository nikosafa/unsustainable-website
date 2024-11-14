-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS products_db;

-- Use the newly created database
USE products_db;

-- Create the products table
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(255)
);
-- seed.sql

-- Use the sustainability_db database
USE sustainability_db;

-- Insert sample data into the products table
INSERT INTO products (name, description, image_url) VALUES
  ('Eco-Friendly Notebook', 'A notebook made from recycled paper.', 'images/notebook.jpg'),
  ('Reusable Water Bottle', 'A stainless steel water bottle.', 'images/water-bottle.jpg'),
  ('Organic Cotton T-Shirt', 'A t-shirt made from organic cotton.', 'images/tshirt.jpg'),
  ('Bamboo Toothbrush', 'A toothbrush with a biodegradable bamboo handle.', 'images/toothbrush.jpg'),
  ('Solar Charger', 'A portable solar charger for electronic devices.', 'images/solar-charger.jpg');
