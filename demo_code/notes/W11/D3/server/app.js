const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
