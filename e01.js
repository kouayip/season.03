var http = require("http");

const createServer = (port) => {
  if (port) {
    const hostname = "localhost";
    const server = http.createServer(function (req, res) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end("<h1>Hello World!</h1>");
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
