'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3002;
const logger = require('./middleware/logger');
const notFound = require('./handlers/404');
const errorHandler = require('./handlers/500');

// create an instance of express => create a singleton
const app = express();

//middleware => functions that interact with the request / response objects
app.use(cors());
app.use(logger);

// Endpoints
app.get('/', (req, res, next) => {
  res.status(200).send('Hello from the server!');
});

app.get('/bad', (req, res, next) => {
  next('Oops, we have a problem.');
});

app.use('/*', notFound);
app.use(errorHandler);


const startServer = () => {
  app.listen(PORT, () => {
    console.log('Listening on PORT:', PORT);
  });
};

module.exports = {
  start: startServer,
  app: app,
};

// or module.exports = { start: startServer, app };

