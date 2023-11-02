const fs = require('fs');
const JSONStream = require('JSONStream');
const zlib = require('zlib');

// Sample large JSON object
const largeJsonObject = require('./data.js')

// Create a write stream to a file or another destination
const outputStream = fs.createWriteStream('output.json.gz');

// Create a JSONStream writer
const jsonStream = JSONStream.stringify();

// Create a Gzip stream
const gzipStream = zlib.createGzip();

// Pipe the JSONStream to the Gzip stream, and then to the output stream
jsonStream.pipe(gzipStream).pipe(outputStream);

// Write your large JSON object to the JSONStream writer
jsonStream.write(largeJsonObject);

// When you're done, end the JSONStream
jsonStream.end();

// Optionally, you can listen for events to handle errors or completion
jsonStream.on('error', (err) => {
  console.error('Error:', err);
});

jsonStream.on('end', () => {
  console.log('Conversion complete.');
});
