const mongoose = require('mongoose');
const express = require('express');
const server = express();

const model = require('./Note');


mongoose
.connect('mongodb://localhost/ServerTest01')
.then(console.log('connected to mongoodb'));

server.get('/', (req, res) => {
  res.status(200).json({api: 'running'});

})

// server.post('/create', (req, res) => {
//   const noteBody  = req.body;
//   model.create(noteBody);
//
// })


if (process.env.NODE_ENV !== 'test') {
  server.listen(9000);
}

module.exports = server;
