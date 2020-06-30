import express from "express";
import data from "./data";

const app = express();

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id
  const product = data.products.find(item => item.id == productId)
  console.log(data.products)
  console.log("product:",product)
  if(product) {
  res.send(product);
  } else {
    res.status(404).send({msg: 'product not found'})
  }
});
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log("server statted at http://localhost:5000");
});
