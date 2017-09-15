const http = require('http');
const urlLib = require('url');
const fs = require('fs');

var server = http.createServer((req, res) => {
  if(req.url.indexOf("?") === -1){
    const reqFile = './www' + req.url;
    fs.readFile(reqFile, (err, data) => {
      if(err){
        res.write('Something wrong - 404');
      } else {
        res.write(data);
      }
      res.end();
    });
  } else {
    const userObj = urlLib.parse(req.url, true);
    const name = userObj.query.user;
    // console.log(userObj);
    res.write(`Welcome back ${name}!`);
    res.end();
  }

}).listen(8080);
