const express = require('express');
const app = express();


var routes = require('./src/app/routes');
app.use('*', routes);
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 6040); 