const express = require('express');
const app = express();

const fs = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes/index')(app, fs);

app.use(express.static('html'));
app.listen(80);
console.log("Server started at 80");

