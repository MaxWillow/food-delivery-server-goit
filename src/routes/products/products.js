const fs = require("fs");

const products = (req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405);
    res.write("Method is not allowed");
    res.end();
    return;
  }

  fs.readFile("./src/db/products/all-products.json", "utf-8", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("File is not found!");
      res.end();
      throw err;
    }
    res.writeHead(200, { "Content-Type": "text/json" });
    res.write(data);
    res.end();
  });
};

module.exports = products;
