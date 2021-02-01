const express = require('express');
const path = require('path');
// const cors = require('cors');

const app = express();
const PORT = 1001;

const { Descriptions } = require('../database/Models/Descriptions.js');
const { ItemDataTables } = require('../database/Models/ItemDataTables.js');
const { ScrollBoxes } = require('../database/Models/ScrollBoxes.js');

// app.use(cors({
//   // added:
//   origin: '3.139.15.67',
// }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.use('/', express.static('dist'));
app.use('/bundle', express.static('dist/bundle.js'));

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
