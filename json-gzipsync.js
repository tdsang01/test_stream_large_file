const { gzipSync } = require('node:zlib');
const JSONStream = require('JSONStream');

// Sample large JSON object
const largeJsonObject = require('./data.js')


const stream = new require('stream').Writable();
let jsonString = '';

stream._write = (chunk, encoding, done) => {
    jsonString += chunk;
    done();
};

const jsonStringifyStream = JSONStream.stringify();
jsonStringifyStream.pipe(stream);
jsonStringifyStream.write(largeJsonObject);
jsonStringifyStream.end();


stream.on('finish', () => {
    console.log(jsonString);
    console.log(gzipSync(jsonString))
});
