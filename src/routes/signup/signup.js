const fs = require("fs");

const signUp = (req, res) => {
  if (req.method !== "POST") {
    res.writeHead(405);
    res.write("Method is not allowed");
    res.end();
    return;
  }

  req.on("data", data => {
    const { username, telephone, password, email } = JSON.parse(data);

    if (username && telephone && password && email) {
      fs.writeFile(`./src/db/users/${username}.json`, data.toString(), err => {
        if (err) {
          throw err;
        }
      });

      res.writeHead(201, { "Content-type": "text/json" });
      res.write(
        JSON.stringify({
          status: "success",
          user: { username, telephone, password, email }
        })
      );
      res.end();
    } else {
      res.writeHead(400);
      res.write("Please fill the empty fields");
      res.end();
    }
  });
};

module.exports = signUp;
