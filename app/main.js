const express = require('express');

const app = express();

app.use(express.static('./www'));

module.exports = app;