// password pYiGhIcKLjKBB1fh
// conncection mongodb+srv://feggie:<password>@cluster0-lbsd8.mongodb.net/test?retryWrites=true&w=majority

const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://feggie:pYiGhIcKLjKBB1fh@cluster0-lbsd8.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('successfully connected to MongoDB Atlas!')
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.log(error)
  })

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyparser.json())

app.post('/api/recipes', (req, res, next) => {
  console.log(req.body)
  res.status(201).json({
    message: "Added successfully"
  })
})

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