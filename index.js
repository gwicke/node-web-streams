'use strict';
const nodeStream = require('stream');
const isNodeStream = require('is-stream');
const conversions = require('./lib/conversions');

module.exports = require('web-streams-polyfill');

/**
 * Convert Web streams to Node streams. Until WritableStream / TransformStream
 * is finalized, only ReadableStream is supported.
 *
 * @param {ReadableStream} stream, a web stream.
 * @return {stream.Readable}, a Node Readable stream.
 */
module.exports.toNodeReadable = function(stream) {
    if (stream instanceof module.exports.ReadableStream) {
        return conversions.readable.webToNode(stream);
    } else {
        throw new TypeError("Expected a ReadableStream.");
    }
};

/**
 * Convert Node Readable streams to a Web ReadableStream.
 *
 * @param {Readable} stream, a Node Readable stream.
 * @return {ReadableStream}, a web ReadableStream.
 */
module.exports.toWebReadableStream = function(stream) {
    if (isNodeStream(stream) && stream.readable) {
        return conversions.readable.nodeToWeb(stream);
    } else {
        throw new TypeError("Expected a Node streams.Readable.");
    }
};
