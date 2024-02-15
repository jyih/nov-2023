const express = require("express");

const { Track, Album } = require("../db/models");

const router = express.Router();

router.get("/min", async (req, res) => {
  // const tracks = await Track.findAll();

  const minId = await Track.min("id");

  res.json(minId);
});

router.get("/max", async (req, res) => {
  const tracks = await Track.findByPk(1);

  const maxId = await Track.max("id");

  const payload = {
    maxId,
    ...tracks.toJSON(),
  };

  res.json(payload);
});

router.get("/count", async (req, res) => {
  const count = await Album.count();

  res.json(count);
});

router.get("/sum", async (req, res) => {
  const sum = await Album.sum("id");

  res.json(sum);
});

router.get("/avg", async (req, res) => {
  const sum = await Album.sum("id");
  const count = await Album.count();

  const average = sum / count;

  res.json(average);
});

module.exports = router;
