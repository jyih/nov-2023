const express = require("express");
require("dotenv").config();
const { Track, Album, Playlist, PlaylistTrack, Artist } = require('./db/models');
const { Op } = require('sequelize');

const selectsRouter = require("./routes/selects");
const insertsRouter = require("./routes/inserts");
const updatesAndDeletesRouter = require("./routes/updates-and-deletes");
const associationsRouter = require("./routes/associations");
const aggregatesRouter = require("./routes/aggregates");

const app = express();

app.use(express.json());
app.use('/styling', express.static('assets/css'));

app.use("/selects", selectsRouter);
app.use("/inserts", insertsRouter);
app.use("/updates-and-deletes", updatesAndDeletesRouter);
app.use("/associations", associationsRouter);
app.use("/aggregates", aggregatesRouter);

app.get('/pagination', async (req, res) => {
  let { page, size } = req.query;
  const pagination = {};

  if (!page || isNaN(page)) page = 1;
  if (!size || isNaN(size)) size = 10;

  pagination.limit = size;
  pagination.offset = size * (page - 1);

  if (page < 1 || size < 1) {
    delete pagination.limit;
    delete pagination.offset;
  };

  const allTracks = await Track.findAll({
    ...pagination,
  });

  res.json(allTracks);
});

app.get('/search', async (req, res) => {
  const { title, maxLength, album } = req.query;

  const queryObj = {
    where: {},
    include: []
  };

  if (title) {
    queryObj.where.name = {
      [Op.substring]: title
    };
  };

  if (maxLength) {
    queryObj.where.duration = {
      [Op.lte]: maxLength
    };
  };

  if (album) {
    queryObj.include.push({
      model: Album,
      where: {
        name: album
      }
    });
  };

  const tracks = await Album.findAll({
    ...queryObj
  });

  res.json(tracks);
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
