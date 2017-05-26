#!/usr/bin/env node
var commandLine = require('command-line-args');
var XML2JsonFeed = require('./index');

var config = {
  url: 'http://forecast.weather.gov/MapClick.php?lat=43.0748&lon=-89.3883&FcstType=digitalDWML',
  host: 'forecast.weather.gov',
  port: 3000
}

var server = XML2JsonFeed(config);
