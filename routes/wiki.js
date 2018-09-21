const express = require("express");
const router = express.Router();
module.exports = router;
const { addPage } = require("../views");
const { Page } = require("../models");
const wikipage = require('../views/wikipage.js')

router.get("/", (req, res, next) => {
  res.send("it worked!!!!!");
});

router.post("/", async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect(`${page.slug}`);
  } catch (error) {
    next(error);
  }
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

router.get('/:slug', async(req, res, next) => {
  console.log(req.params);
  const page = await Page.findOne({where: {slug: req.params.slug}})
  res.send(wikipage(page, 'haha'));
})
