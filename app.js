const express = require('express');
const routes = require('./routes/index');

const app = express();

// Serve Static Assets
app.use(express.static('public'));


module.exports = app;
