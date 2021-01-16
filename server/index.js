const express = require('express');
const Sequelize = require('sequelize');

const path = require('path');

const app = express();
const PORT = 8080;

const { seed } = require('../database/seed.js');
const { Descriptions } = require('../database/Models/Descriptions.js');
const { ItemDataTables } = require('../database/Models/ItemDataTables.js');

// const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//knows to look for html with express.static:
//serves up static file:
app.use(express.static(path.join(__dirname, '../dist')));


app.get('/api/:id/information', (req, res) => {
  async() => {
    await seed();
  }
  let results = {}

  const descriptionFiller = (cb) => {
    return Descriptions.findAll();
  };
  const itemDataTableFiller = () => {
    return ItemDataTables.findAll();
  };
  let temp = async() => {
    await descriptionFiller()
      .then((data) => {
        results['description'] = data;
      })
      await itemDataTableFiller()
      .then((data) => {
        results['itemDataTable'] = data;
      })
  }
  temp()
    .then(() => {
      res.send(results);
    })
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = server;