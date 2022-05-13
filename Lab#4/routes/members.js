const router = require("express").Router();
const uuid = require("uuid");

const members = [
  { id: uuid.v4(), name: "Mario", email: "mario@mail.com" },
  { id: uuid.v4(), name: "Luigi", email: "luigi@mail.com" },
  { id: uuid.v4(), name: "Yoshi", email: "yoshi@mail.com" },
];

router.get("/", (_, res) => res.render("index", { members }));

router.get("/:id", (req, res) => {
  const member = members.find((member) => member.id == req.params.id);

  if (member) {
    res.render("member", { member });
  } else {
    res.render("404");
  }
});

router.post("/", (req, res) => {
  const newData = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
  };

  members.push(newData);
  res.render("index", { members });
});

router.post("/update/:id", (req, res) => {
  const member = members.find((member) => member.id == req.params.id);

  if (member) {
    const { name, email } = req.body;

    res.render("member", { member: { ...member, name, email } });
  } else {
    res.render("404");
  }
});

router.post("/delete/:id", (req, res) => {
  const found = members.some((member) => member.id === req.params.id);

  if (found) {
    members.splice(
      members.findIndex((member) => member.id === req.params.id),
      1
    );

    res.redirect("/api/members");
  } else {
    res.render("404");
  }
});

module.exports = router;
