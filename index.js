const express = require("express");
const app = express();
const products = require("./products");
app.listen(3000, () => console.log("SERVER is running at port 3000"));

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

/*
 * Insert A Product Data
 * Update Specific Product Data ( Using PUT Method)
 * Update Specific Proudct Data (Using PATCH Method)
 * Delete A Specific Product Data
 * Delete All Preoducts Data
 */

// Show List of Products
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((prod) => prod.id === 1);

  return !product
    ? res.status(404).json({ error: "No Product Found with this ID" })
    : res.json(product);
});
