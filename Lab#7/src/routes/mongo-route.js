const router = require("express").Router();
const { mongoConnect } = require("../services/mongo");
const ObjectId = require("mongodb").ObjectId;
const db = mongoConnect();

router.use((req, res, next) => {
  if (req.query._method === "DELETE") {
    console.log("DELETE");
    req.method = "DELETE";
    req.url = req.path;
  }
  next();
});

router.get("/", async (_, res) => {
  const fetchedTodos = await db.collection("todos").find().toArray();
  const model = fetchedTodos.map((item) => ({ ID: item._id, ...item }));
  res.render("index", { model });
});

router.get("/create", (_, res) => {
  res.render("create", { model: {} });
});

router.post("/create", async (req, res) => {
    db.collection("todos")
    .insertOne({ Title: req.body.Title })
    .then(() => {
      res.redirect("/");
    });
});

router.get("/edit/:id", async (req, res) => {
  db.collection("todos")
    .findOne({ _id: new ObjectId(req.params.id) })
    .then((model) => {
      res.render("edit", { model });
    });
});

router.post("/edit/:id", async (req, res) => {
  db.collection("todos")
    .findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      {
        $set: {
          Title: req.body.Title,
        },
      }
    )
    .then(() => {
      res.redirect("/");
    });
});

router.delete("/delete/:id", async (req, res) => {
  db.collection("todos")
    .findOneAndDelete({ _id: new ObjectId(req.params.id) })
    .then(() => {
      res.redirect("/");
    });
});

module.exports = router;