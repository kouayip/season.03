const http = require("http");
const _url = require("url");

const createServer = (port) => {
  if (port) {
    const hostname = "localhost";
    const server = http.createServer(function (req, res) {
      const { url } = req;
      const queryObject = _url.parse(url, true).query;
      const { ...params } = queryObject;
      res.writeHead(200, { "Content-Type": "application/text" });
      res.write("My request dump:\n");
      res.write(`GET ${url}\n`);
      res.write(`There are ${Object.keys(params).length} query parameters\n`);
      for (const [key, value] of Object.entries(params)) {
        res.write(`${key}: ${value}\n`);
      }
      res.end();
    });

    server.listen(port, hostname, () => {
      console.log("Server is running at port", port);
    });
  } else {
    showError("usage: node e01.js <PORT>");
  }
};

const showError = (errorMessage) => {
  console.error(errorMessage);
};

createServer(process.argv[2]);
