const request = require('request');
const fs = require('fs');

let args = process.argv.slice(2);

request(args[0], (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);

  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err);
      return;
    }

    fs.stat(args[1], (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${args[1]}`);
    });
  });
});
