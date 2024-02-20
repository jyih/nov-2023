const express = require("express");
require("dotenv").config();
const { Track } = require('./db/models');

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
})

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
