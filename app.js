const express = require('express');
const path = require('path');

/* eslint-disable no-console */
const app = express();
const config = require('./config/config');

module.exports = require('./config/express')(app, config);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
