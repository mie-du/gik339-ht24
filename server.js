const express = require('express');
const server = express();
const sqlite3 = require('sqlite3');

server.use(express.json()).use(express.urlencoded({ extended: false }));

server.get('/', (req, res) => {
  const method = req.method;
  const url = req.url;
  const db = new sqlite3.Database('./gik339-L4.db');

  const sql = 'SELECT * FROM users';

  db.all(sql, (err, rows) => {
    res.send(rows);
  });
  db.close();
  //res.send(`Du gjorde en ${method}-förfrågan till url:en ${url}`);
});

server.put('/users/:id', (req, res) => {
  //olika sätt att hämta data ur request-objektet
  const params = req.params;
  const body = req.body;
  res.send({ params, body });
});

server.post('/', (req, res) => {
  const body = req.body;
  res.send({ message: 'Du skickade tillbaka', body });
});

server.listen(3000, () =>
  console.log('Running server on http://localhost:3000')
);
