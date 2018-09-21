const express = require("express");
const router = express.Router();
module.exports = router;
const { addPage } = require("../views")

router.get("/", (req, res, next) => {
  res.send("it worked!!!!!");
});

router.post("/", (req, res, next) => {
  res.json(req.body);
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});
