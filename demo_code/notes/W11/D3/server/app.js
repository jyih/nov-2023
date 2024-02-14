const express = require("express");
require("dotenv").config();

const selectsRouter = require("./routes/selects");
const insertsRouter = require("./routes/inserts");
const updatesAndDeletesRouter = require("./routes/updates-and-deletes");

const app = express();

app.use(express.json());
app.use("/selects", selectsRouter);
app.use("/inserts", insertsRouter);
app.use("/updates-and-deletes", updatesAndDeletesRouter);

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
