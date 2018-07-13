const express = require('express');
const app = express();

const fs = require('fs');

require('./app/routes/infoRoutes')(app, fs);
require('./app/routes/loginRoutes')(app, fs);
require('./app/routes/registrationRoutes')(app, fs);

app.use(express.static('html'));
app.listen(80);
console.log("Server started at 80");