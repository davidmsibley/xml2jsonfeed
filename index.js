#!/usr/bin/env node
var request = require('request');
var parseString = require('xml2js').parseString;
var express = require('express');
var cors = require('cors');
var parseUrl = require('url-parse');

var XML2JsonFeed = function XML2JsonFeed(config) {
    var url = config.url;
    var port = config.port;

    var host = parseUrl(url).host;

    var app = express();
    app.use(cors());

    app.get('/', function (req, resp) {
      request.get({
        'url': url,
        'headers': {
          'Host': host,
          'Connection': 'keep-alive',
          'Pragma': 'no-cache',
          'Cache-Control': 'no-cache',
          'Upgrade-Insecure-Requests': '1',
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/58.0.3029.110 Chrome/58.0.3029.110 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'DNT': '1',
          'Accept-Encoding': 'gzip, deflate, sdch',
          'Accept-Language': 'en-US,en;q=0.8'
        }
      }, function(error, response, body) {
        if (!error) {
          parseString(body, function(err, result) {
            if (!err) {
              resp.json(result);
            } else {
              console.log(err);
              resp.send('oh jeez!');
            }
          });
        } else {
          console.log(error);
          resp.send('oooh, he\'s trying!');
        }
      });
    })

    app.listen(port, function () {
      console.log('XML2JsonFeed listening on port ' + port + '!');
    })

    return this;
};

module.exports = XML2JsonFeed;
