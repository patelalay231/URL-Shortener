const express = require("express");
const URL = require("../dbs/models/url.model");

const router = express();


router.get("/", async (req, res) => {
  if (!req.user) return res.redirect("/login");
  const allurls = await URL.find({createBy : req.user._id});
  return res.render("index", {
    urls: allurls,
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;