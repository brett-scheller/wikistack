const morgan = require("morgan");
const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`);
});
