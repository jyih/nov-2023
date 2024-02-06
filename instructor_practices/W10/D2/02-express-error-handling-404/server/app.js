const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("GET / This is the root URL");
});

app.use((req, res, next) => {
  const err = new Error("Sorry, the requested resource couldn't be found");
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err.message);
  const status = err.statusCode || 500;
  res.status(status);
  res.json({
    message: err.message || "Something went wrong...",
    statusCode: status,
    stackTrace: err.stack,
  });
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
