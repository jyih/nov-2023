const express = require("express");
require("dotenv").config();

const selectsRouter = require("./routes/selects");
const insertsRouter = require("./routes/inserts");
const updatesAndDeletesRouter = require("./routes/updates-and-deletes");
const associationsRouter = require("./routes/associations");
const aggregatesRouter = require("./routes/aggregates");

const app = express();

app.use(express.json());

app.use("/selects", selectsRouter);
app.use("/inserts", insertsRouter);
app.use("/updates-and-deletes", updatesAndDeletesRouter);
app.use("/associations", associationsRouter);
app.use("/aggregates", aggregatesRouter);

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
