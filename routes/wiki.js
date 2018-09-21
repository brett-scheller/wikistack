const express = require("express");
const router = express.Router();
module.exports = router;

router.get("/", (req, res, next) => {
  res.send("it worked!!!!!");
});

router.post("/", (req, res, next) => {
  res.send("got to post");
});
