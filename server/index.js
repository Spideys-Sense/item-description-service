const express = require('express');
const Sequelize = require('sequelize');

const app = express();
const PORT = 8080;

// const { randomlyGeneratedDataDescription, randomlyGeneratedDataItemDataTable } = require('../database/seed.js')
const { seed } = require('../database/seed.js')
const { Descriptions } = require('../database/Models/Descriptions.js');

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  async() => {
    await seed();
  }
  return Descriptions.findAll({
  })
    .then((arr) => {
      res.json(arr);
    })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});