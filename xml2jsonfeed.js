#!/usr/bin/env node
var XML2JsonFeed = require('./index');
var commandLine = require('command-line-args');

var optionsDefinitions = [
  {
    'name': 'url',
    'type': String,
    'description': 'The url of the xml feed',
    'defaultOption': true
  },
  {
    'name': 'port',
    'type': Number,
    'alias': 'p',
    'defaultValue': 3000
  }
];

var options = commandLine(optionsDefinitions);

if (!options.url) {
  throw new Error('No URL specified!');
}

var config = {
  url: options.url,
  port: options.port
}

var server = new XML2JsonFeed(config);
