const express = require('express');
const Sequelize = require('sequelize');

const path = require('path');

const app = express();
const PORT = 8080;

// const { randomlyGeneratedDataDescription, randomlyGeneratedDataItemDataTable } = require('../database/seed.js')
const { seed } = require('../database/seed.js')
const { Descriptions } = require('../database/Models/Descriptions.js');

// const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//knows to look for html with express.static:
//serves up static file:
app.use(express.static(path.join(__dirname, '../dist')));

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// app.get('/', (req, res) => {
//   //aurtomatically renders that html:
//   res.render();
// });

app.get('/api/:id/information', (req, res) => {
  async() => {
    await seed();
  }
  return Descriptions.findAll()
    .then((arr) => {
      res.json(arr[0]);
    })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});