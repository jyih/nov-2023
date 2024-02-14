const express = require("express");

const {
  User,
  Album,
  Track,
  Artist,
  Playlist,
  PlaylistTrack,
} = require("../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.findAll();

  res.json(users);
});

router.get("/attributes", async (req, res) => {
  const albums = await Album.findAll({
    attributes: ["artistId", "name"],
  });

  res.json(albums);
});

router.get("/where", async (req, res) => {
  const specificAlbums = await Album.findAll({
    attributes: ["artistId", "name"],
    where: {
      artistId: 2,
    },
    include: {
      model: Artist,
    },
  });

  res.json(specificAlbums);
});

router.get("/find-one/:name", async (req, res) => {
  const userName = req.params.name;

  const user = await User.findOne({
    where: {
      name: userName,
    },
  });

  res.json(user);
});

router.get("/find-by-pk/:id", async (req, res) => {
  const albumId = req.params.id;

  const album = await Album.findByPk(albumId);

  res.json(album);
});

router.get("/order", async (req, res) => {
  const tracks = await Track.findAll({
    order: [
      ["albumID", "DESC"],
      ["name", "ASC"],
    ],
  });

  res.json(tracks);
});

router.get("/playlist", async (req, res) => {
  const playlist = await Playlist.findAll({
    include: { model: Track },
  });

  res.json(playlist);
});

module.exports = router;
