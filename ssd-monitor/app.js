const os = require('os');

const sleep = require('util').promisify(setTimeout);

(async function main() {
  console.log("Starting...");
  while (true) {
    console.log("Monitoring ssd disk in " + os.hostname())
    await sleep(1000);
  }
}());


  
  