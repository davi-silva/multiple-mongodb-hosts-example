const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const process = require('process');

const app = express();

require('dotenv').config();

app.use(cors());

app.use(express.urlencoded({
  extended: false,
}));

app.use('/test', require('./routes/test'));

const port = 5000;

app.listen(port, () => {
  console.log(`App is listening from port: ${port}`)
});