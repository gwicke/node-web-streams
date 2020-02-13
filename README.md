# @balena/node-web-streams
WhatWG web streams and conversion utilities for node.js

This is a fork of [gwicke's node-web-streams module](https://github.com/gwicke/node-web-streams),
which exposes webstream read errors as node error events.
This is meant to provide a proper npm release until
[the respective upstream PR](https://github.com/gwicke/node-web-streams/pull/4)
gets merged.

This provides the [WhatWG streams](https://streams.spec.whatwg.org) API for
node. It leverages the [WhatWG reference
implementation](https://github.com/whatwg/streams), but also addresses
performance issues in that implementation.

## Installation
```
npm install node-web-streams
```

## Usage
```javascript
// ES5 require syntax
var webStreams = require('node-web-streams');
var ReadableStream = webStreams.ReadableStream;
var toWebReadableStream = webStreams.toWebReadableStream;
var toNodeReadable = webStreams.toNodeReadable;

// ES6 import syntax
import { ReadableStream, toWebReadableStream, toNodeReadable } from "node-web-streams";

// Convert a node Readable to a web ReadableStream & back
const nodeReadable = require('fs').createReadStream('/tmp/test.txt');
const webReadable = toWebReadableStream(nodeReadable);
const roundTrippedNodeReadable = toNodeReadable(webReadable);
```
