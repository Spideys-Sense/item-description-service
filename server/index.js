const express = require('express');

const app = express();
const PORT = 8080;

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('In Get!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});