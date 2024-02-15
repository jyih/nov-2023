const express = require("express");

const { User } = require("../db/models");

const router = express.Router();

router.put("/update/:id", async (req, res) => {
  const { name, email, password } = req.body;

  const userToUpdate = await User.findByPk(req.params.id);

  //   if (name !== undefined) {
  //     userToUpdate.name = name;
  //   }

  //   if (email !== undefined) {
  //     userToUpdate.email = email;
  //   }

  //   if (password !== undefined) {
  //     userToUpdate.password = password;
  //   }

  //   await userToUpdate.save();
  await userToUpdate.update({
    name,
    email,
    password,
  });

  res.json({
    data: userToUpdate,
    message: `Updated User ${userToUpdate.name}!`,
  });
});

router.delete("/delete/:id", async (req, res) => {
  const userToBeDeleted = await User.findByPk(req.params.id);

  await userToBeDeleted.destroy();
  res.json({
    msg: `Successfully destroyed user with id ${req.params.id}`,
    data: userToBeDeleted,
  });
});

module.exports = router;
