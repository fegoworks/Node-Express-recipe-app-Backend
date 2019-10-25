const express = require('express')

const app = express();

// app.use((req, res) => {
//   res.json({
//     message: "Request successful"
//   })
// })
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/recipes', (req, res, next) => {
  const recipes = [{
    _id: 'sdhksfhfb',
    title: 'awesome meal',
    ingredients: 'we in the house like 30 minutes',
    instructions: 'lorem ipsum east all the rats, secure the mouse',
    difficulty: 10,
    time: 3,
  }, {
    _id: 'sdhksfhfbas',
    title: 'delicious meal',
    ingredients: 'we in the house like 30 minutes',
    instructions: 'lorem ipsum east all the rats, secure the mouse',
    difficulty: 50,
    time: 3,
  }, ];

  res.status(200).json(recipes)
});

module.exports = app;