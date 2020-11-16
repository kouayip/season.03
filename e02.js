const http = require("http");

const createServer = (port) => {
  if (port) {
    const hostname = "localhost";
    const server = http.createServer(function (req, res) {
      const { method } = req;

      if (method == "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Hello World!</h1>");
      } else if (method == "POST") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/text");
        res.end("Heisenberg");
      }
    });

    server.listen(port, hostname, () => {
      console.log("Server is running at port", port);
    });

    server.close();
  } else {
    showError("usage: node e01.js <PORT>");
  }
};

const showError = (errorMessage) => {
  console.error(errorMessage);
};

createServer(process.argv[2]);
