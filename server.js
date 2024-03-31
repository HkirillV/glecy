const express = require('express');
const cors = require('cors');
const { connectToDb, getDb } = require('./db');

const PORT = 3000;


const app = express();


app.use(express.json())
app.use(cors());
let db;


connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`Listening port ${PORT}`);
    });
    db = getDb();
  } else {
    console.log(`DB connection error: ${err}`);
  }
});

let products = [];
app.get('/products', (req, res) => {


  db
    .collection('products')
    .find()
    .sort({ title: 1})
    .forEach((product) => products.push(product))
    .then(() => {
      res
        // .status(500)
        .json(products);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "Something goes wrong..." })
    })
});







