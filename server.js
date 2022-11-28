'use strict';

const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3002;

// create an instance of express => create a singleton
const app = express();

//middleware => functions that interact with the request / response objects
app.use(cors());

app.get('/', (req, res, next) => {
  res.status(200).send('Hello from the server!');
});


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

