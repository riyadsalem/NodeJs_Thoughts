const express = require("express");
const app = express();
const products = require("./products");
app.listen(3000, () => console.log("SERVER is running at port 3000"));

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

/*
 * Show List Of Products
 * Show Specific products
 * Insert A Product Data
 * Update Specific Product Data ( Using PUT Method)
 * Update Specific Proudct Data (Using PATCH Method)
 * Delete A Specific Product Data
 * Delete All Preoducts Data
 */

app.get("/api/products", (req, res) => {
  res.json(products);
});
