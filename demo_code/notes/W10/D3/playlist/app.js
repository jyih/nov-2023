const express = require("express");
const sqlite3 = require("sqlite3");

const app = express();
const db = new sqlite3.Database("playlists.db", sqlite3.OPEN_READWRITE);

app.get("/", (req, res) => {
  const sql = "SELECT * FROM artists;";
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.json(err);
    }
    res.json(rows);
  });
});

app.get("/:id", (req, res) => {
  const sql = "SELECT * FROM artists WHERE id = ?;";
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      return res.json(err);
    }
    res.json(row);
  });
});

app.listen(5000, () => console.log(`Listening on port 5000...`));
