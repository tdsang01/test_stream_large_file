const zlib = require('node:zlib');
const data = require('./data.json');



async function main() {
  try {
    const payload = undefined
    const deflated = zlib.gzipSync(JSON.stringify(payload));
    console.log({ deflated });
  } catch (e) {
    console.log({eeeeee: e})
  }
}

main().then().catch();

