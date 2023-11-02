const { createWriteStream } = require('fs');
const { parser } = require('stream-json/Parser');
const { streamArray } = require('stream-json/streamers/StreamArray');
const { streamObject } = require('stream-json/streamers/StreamObject');
const zlib = require('zlib');

const a = {
  b: 'c',
}
console.log({ fuck: a.toString(), f2: JSON.stringify(a) })


// Your data object
const data = require('./data.js')

// Create a writable stream for the gzipped output
const output = createWriteStream('output.gz');

// Use stream-json to serialize and gzip the data
const pipeline = streamObject()
  .pipe(zlib.createGzip())
  .pipe(output);

// Handle errors if any
pipeline.on('error', (err) => {
  console.error('Error:', err);
});

// Write the data to the pipeline
pipeline.write(data);

// Close the pipeline to signal the end
pipeline.end(() => {
  console.log('Gzipping completed successfully.');
});
