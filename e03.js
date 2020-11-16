const http = require("http");
const fs = require("fs");

const createServer = (port) => {
  if (port) {
    const hostname = "localhost";
    const server = http.createServer(function (req, res) {
      fs.readFile("./index.html", null, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("File not found!");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
        }
        res.end();
      });
    });

    server.listen(port, hostname, () => {
      console.log("Server is running at port ", port);
    });
  } else {
    showError("usage: node e01.js <PORT>");
  }
};

const showError = (errorMessage) => {
  console.error(errorMessage);
};

createServer(process.argv[2]);
