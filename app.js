const morgan = require("morgan");
const express = require("express");
const layout = require("./views/layout.js");
const { db, Page, User } = require("./models");
const PORT = 1337;

db.authenticate().then(() => {
  console.log("connected to the database");
});

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send(layout("<h1>Hello World</h1>"));
});

const init = async () => {
  await User.sync({force: true});
  await Page.sync({force: true});
  app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`);
  });
}

init();
