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
      console.log("My request dump:");
      console.log(`GET ${url}`);
      console.log(`There are ${Object.keys(params).length} query parameters`);
      for (const [key, value] of Object.entries(params)) {
        console.log(`${key}: ${value}`);
      }
      res.end("done");
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
