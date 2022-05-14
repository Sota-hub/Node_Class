const router = require("express").Router();
const db = require("../services/dbsqlite");

router.get("/", (_, res) => {
  db.all("SELECT * FROM Todos ORDER BY Title", [], (err, rows) => {
    if (err) return console.error(err.message);
    res.render("index", { model: rows });
  });
});

router.get("/create", (_, res) => {
  res.render("create", { model: {} });
});

router.post("/create", (req, res) => {
  db.run("INSERT INTO Todos (Title) VALUES (?)", [req.body.Title], (err) => {
    if (err) return console.error(err.message);
    res.redirect("/");
  });
});

router.get("/edit/:id", (req, res) => {
  db.get("SELECT * FROM Todos WHERE ID = ?", [req.params.id], (err, row) => {
    if (err) return console.error(err.message);
    res.render("edit", { model: row });
  });
});

router.post("/edit/:id", (req, res) => {
  db.run(
    "UPDATE Todos SET Title = ? WHERE ID = ?",
    [req.body.Title, req.params.id],
    (err) => {
      if (err) return console.error(err.message);
      db.all("SELECT * FROM Todos ORDER BY Title", [], (err, rows) => {
        if (err) return console.error(err.message);
        res.render("index", { model: rows });
      });
    }
  );
  res.redirect("/");
});

router.post("/delete/:id", (req, res) => {
  db.run("DELETE FROM Todos WHERE ID = ?", [req.params.id], (err) => {
    if (err) return console.log(err.message);
  });
  res.redirect("/");
});

module.exports = router;
