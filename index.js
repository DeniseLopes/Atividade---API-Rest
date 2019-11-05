/*
npm init -y
npm install express body-parser
npm install -D nodemon
npx nodemon
*/
const express = require('express');
const bodyParser = require('body-parser');
const tarefasRouter = require('./routes/tarefas-router');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.use(bodyParser.json());
app.use('/tarefas', tarefasRouter);

app.listen(3000, () => {
  console.log('Executando em http://localhost:3000/');
});
