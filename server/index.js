const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

const { Descriptions } = require('../database/Models/Descriptions.js');
const { ItemDataTables } = require('../database/Models/ItemDataTables.js');
const { ScrollBoxes } = require('../database/Models/ScrollBoxes.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/api/:id/information', (req, res) => {
  const results = Promise.all([
    Descriptions.findAll({ where: { id: req.params.id } }),
    ItemDataTables.findAll({ where: { id: req.params.id } }),
  ]);

  results.then((data) => {
    res.send(data);
  });
});

app.get('/api/scrollboxes', (req, res) => {
  const results = Promise.resolve(ScrollBoxes.findAll());
  results.then((data) => {
    res.send(data);
  });
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = server;
