const express = require('express');

const app = express();

app.use(express.static('./www'));

module.exports = app;

function kalkulačka() {
    let a = 1;
    let b = 2;
    console.log(a + b);
}