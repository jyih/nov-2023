const express = require("express");
require("dotenv").config();

const selectsRouter = require("./routes/selects");

const app = express();

app.use(express.json());
app.use("/selects", selectsRouter);

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
