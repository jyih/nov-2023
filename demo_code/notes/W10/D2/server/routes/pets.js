const express = require("express"); // still need to import express
const router = express.Router(); // This is the object that has all of our methods

router.get("/", (req, res) => {
  console.log("here");
  res.send("Welcome to the pet's page");
});

module.exports = router;
