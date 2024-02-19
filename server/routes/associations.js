const express = require("express");

const { Artist, Album, Playlist, Sequelize } = require("../db/models");

const router = express.Router();

router.get("/artists/:artistID/albums", async (req, res) => {
  const artist = await Artist.findByPk(req.params.artistID);

  const albums = await artist.getAlbums();

  res.json({
    artist,
    albums,
  });
});

router.get("/albums/:albumID/tracks", async (req, res) => {
  const album = await Album.findByPk(req.params.albumID);

  const tracks = await album.getTracks();

  res.json({
    album,
    tracks,
  });
});

router.post("/albums/:albumID/tracks", async (req, res) => {
  const album = await Album.findByPk(req.params.albumID);
  const { name, url } = req.body;

  const track = await album.createTrack({
    name,
    url,
  });

  res.json({
    msg: `Successfully created track ${track.name} for album ${album.name}`,
    data: track,
  });
});

router.post("/playlists/:playlistID/tracks", async (req, res) => {
  const playlist = await Playlist.findByPk(req.params.playlistID);
  const { trackIDs } = req.body;

  await playlist.addTrack(trackIDs);

  res.json({
    msg: `Successfully added tracks ${trackIDs} to playlist ${playlist.name}`,
  });
});

router.get("/playlists/:playlistID", async (req, res) => {
  const playlist = await Playlist.findByPk(req.params.playlistID);

  const tracks = await playlist.getTracks();
  res.json({ playlist, tracks });
});

module.exports = router;
