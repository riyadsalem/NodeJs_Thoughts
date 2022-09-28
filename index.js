const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.listen(3000, () => console.log("SERVER is running at port 3000"));
