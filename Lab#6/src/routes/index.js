const uuid = require("uuid");
const router = require("express").Router();
const { client } = require("../services/redis");

router.use((req, _, next) => {
  if (req.query._method === "DELETE") {
    req.method = "DELETE";
    req.url = req.path;
  }
  next();
});

router.get("/", async (_, res) => {
  try {
    const todos = [];
    for await (const { field, value } of client.hScanIterator("todos")) {
      todos.push({ ID: field, Title: value });
    }
    res.render("index", { model: todos });
  } catch (e) {
    console.error(e);
  }
});

router.get("/create", (_, res) => {
  res.render("create", { model: {} });
});

router.post("/create", async (req, res) => {
  await client.hSet("todos", uuid.v4(), req.body.Title);
  res.redirect("/");
});

router.get("/edit/:id", async (req, res) => {
    const ID = req.params.id
    const Title = await client.hGet("todos", ID);
    res.render("edit", { model: { Title, ID }})
});

router.post("/edit/:id", async (req, res) => {
  await client.hSet("todos", req.params.id, req.body.Title);
  res.redirect("/");
});

router.delete("/delete/:id", async (req, res) => {
  await client.hDel("todos", req.params.id);
  res.redirect("/");
});

module.exports = router;