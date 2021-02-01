const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '13.59.145.68',
  user: 'root',
  password: 'test',
});

connection.connect((err, results) => {
  if (err) {
    return console.error('error:', err);
  }
  console.log('results: ', results);
  console.log('Connected to the MySQL server.');
});

// console.log(typeof temp);

connection.query('CREATE DATABASE IF NOT EXISTS iteminformation;', (err, result) => {
  if (err) {
    console.error('error in creating database: ', err);
  } else {
    console.log('result from creating db: ', result);
  }
});
connection.query('USE iteminformation;', (err, result) => {
  if (err) {
    console.error('error in using database: ', err);
  } else {
    console.log('result from using db: ', result);
  }
});

setTimeout(connection.end.bind(connection), 3000);
