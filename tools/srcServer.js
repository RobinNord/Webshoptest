import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import request from 'request';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
const querystring = require('querystring');
const configExpress = require('../config/config');
const secrets = require('../secrets/secrets');

const router = express.Router();

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

module.exports = require('../config/express')(app, configExpress);

router.get('/getAllProducts', function (req, res) {
  console.log("started");

  const options = {
     url: 'https://login.windows.net/webshopstq.onmicrosoft.com/oauth2/token',
     headers: {
      "Content-Type":"application/x-www-form-urlencoded",
      "Cache-Control":"no-cache"
     },
     form: {
      grant_type: "password",
      client_id: secrets.client_id,
      client_secret: secrets.client_secret,
      resource: "https://webshopstq.crm4.dynamics.com",
      username: secrets.username,
      password: secrets.password
    }
  };

  request.post(options, function (err, httpResponse, body) {
    if(err)
      console.log(err);

    let results = JSON.parse(body);
    console.log(results.access_token);

    let options = {
      url: "https://webshopstq.api.crm4.dynamics.com/api/data/v8.1/products?$select=name,currentcost&$top=10&$filter=currentcost ne null",
      headers: {
        "Authorization": "Bearer " + results.access_token, 
        "Accept":"application/json",
        "OData-Version":"4.0",
        "Cache-Control":"no-cache"
      }
    };

    request.get(options, function(err, response, body){
      let results = JSON.parse(body);
      
      console.log(results);
      res.json({results: results.value});
    });
  });
});

app.use('/api', router);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(configExpress.port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});