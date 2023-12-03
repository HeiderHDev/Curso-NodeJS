
const express = require('express');
const { faker } = require("@faker-js/faker");

const router = express.Router();


router.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.json(products);
})

router.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter')
})

router.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 1',
    price: 1000
  })
})


router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Product created',
    body
  })
})


module.exports = router;
