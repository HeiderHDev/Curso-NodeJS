
const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Nueva ruta creada por heider')
})

routerApi(app);



// app.get('/categories/:categoryId/products/:productsId', (req, res) => {
//   const { categoryId, productsId } = req.params;
//   res.json({
//     categoryId,
//     productsId
//   })
// })

// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset
//     })
//   } else {
//     res.send('No hay parametros')
//   }
// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
