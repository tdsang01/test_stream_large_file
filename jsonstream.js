const fs = require('fs');
const JSONStream = require('JSONStream');

// Sample large JSON data (replace this with your large object)
const largeData = require('./data')

// Creating a writable stream
const writableStream = fs.createWriteStream('output.json');

// Creating a JSONStream.stringify stream
const jsonStream = JSONStream.stringify();

// Piping the JSONStream to the writable stream
jsonStream.pipe(writableStream);

// Writing the large data object to the JSONStream
jsonStream.write(largeData);

// End the JSONStream
jsonStream.end();
