const http = require("http");
const routes = require("./routes/routes");
const morgan = require("morgan");
const logger = morgan("combined");

const requestHandler = (request, response) => {
  const { url } = request;
  const func = routes[url];

  try {
    logger(request, response, () => func(request, response));
  } catch {
    response.writeHead(500);
    response.write("Internal server error");
    response.end();
  }
};

const serverStart = port => {
  const server = http.createServer(requestHandler);

  server.listen(port, err => {
    if (err) {
      throw err;
    }
    console.log(`Server is listnening on port ${port}`);
  });
};

module.exports = serverStart;
