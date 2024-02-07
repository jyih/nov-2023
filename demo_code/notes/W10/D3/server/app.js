const express = require("express");
const petsRouter = require("./routes/pets");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/pets", petsRouter);

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}...`)
);
