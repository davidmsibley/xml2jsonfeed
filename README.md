# XML to JSON Feed

## Synopsis

This is a microservice to take an XML feed and simply transform it to JSON

## Code Example

The feed can be started via the command line.

```
xjf 'http://example.com/service'
```
or
```
xjf -p 8000 'http://example.com/service'
```

## Motivation

Sometimes I want json instead of xml!

## Installation

```
npm install xml2jsonfeed -g
```

## API Reference

```javascript
var config = {
  url: options.url,
  port: options.port
}

var server = new XML2JsonFeed(config);
```

## Tests

None right now :(

## Contributors

You're heartily encouraged to start issues or pull requests

## License

Apache-2
