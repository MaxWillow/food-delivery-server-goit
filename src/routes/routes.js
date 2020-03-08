const products = require("./products/products");
const signUp = require("./signup/signup");

const routes = {
  "/products": products,
  "/signup": signUp
};

module.exports = routes;
