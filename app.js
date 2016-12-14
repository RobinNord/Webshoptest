const request = require('request');
const express = require('express');
const path = require('path');
const app = express();
const config = require('./config/config');
const http = require('http');
const querystring = require('querystring');
const secrets = require('./secrets/secrets');

module.exports = require('./config/express')(app, config);

const router = express.Router();

router.get('/getAllProducts', function (req, res) {
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
      res.json({results: results.value});
    });
  });
});

app.use('/api', router);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(config.port, function () {
});
