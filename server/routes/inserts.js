const express = require("express");

const { User } = require("../db/models");

const router = express.Router();

router.post("/build", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = User.build({
    name,
    email,
    password,
  });

  await newUser.validate();

  await newUser.save();

  res.json({
    message: "We have successfully created a user using build",
    data: newUser,
  });
});

router.post("/create", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await User.create({
    name,
    email,
    password,
  });

  res.json({
    message: "We have successfully created a user using create",
    data: newUser,
  });
});
module.exports = router;
