const express = require("express");
const app = express();
const products = require("./products");
const { v4: uuidv4 } = require("uuid");
const Joi = require("joi");

app.listen(3000, () => console.log("SERVER is running at port 3000"));

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

/*
 * Update Specific Product Data ( Using PUT Method)
 * Update Specific Proudct Data (Using PATCH Method)
 * Delete A Specific Product Data
 * Delete All Preoducts Data
 */

// Show List of Products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Show Specific Products
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((prod) => prod.id === Number(id));

  return !product
    ? res.status(404).json({ error: "No Product Found with this ID" })
    : res.json(product);
});

// Insert A Product Data
app.use(express.json());
app.post("/api/insertProducts", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    price: Joi.number().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  const product = {
    id: uuidv4(),
    name: req.body.name,
    price: req.body.price,
  };

  products.push(product);

  if (!products) res.status(404).json({ error: "No Products Found " });

  return res.json(products);
});
