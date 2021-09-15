
const express = require('express');
const cors = require('cors');
const path = require('path');

const api = require('./routes/api');

const app = express();
app.use(express.json())
app.use(cors());


app.use('/api', api);


module.exports = app;