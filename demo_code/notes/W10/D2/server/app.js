const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("error test");
  const error = "There was an error";
  next(error);
});

const printPath = (req, res, next) => {
  console.log(`path: ${req.path}`);
  next();
};

const checkUserInput1 = (req, res, next) => {
  req.body.stuff = "stuff";
  if (req.body.stuff) {
    next();
  } else {
    res.send("Please include a stuff property");
  }
};

const checkUserInput2 = (req, res, next) => {
  if (!req.body.stuff) {
    res.send("Please include a stuff property");
  } else {
    next();
  }
};

const checkUserInput3 = (req, res, next) => {
  if (!req.body.stuff) {
    res.send("Please include a stuff property");
  }
  next();
};

// app.use("/test", printPath);
// app.all(printPath);

app.get("/test", (req, res) => {
  res.send("Testing");
});

app.post("/", (req, res) => {
  res.send("POST");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.send(err);
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
