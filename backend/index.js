const express = require("express");
const cors = require("cors");
const { create, update } = require("./template");
const { todos } = require("./database");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
  console.log("hello");
  const created = req.body;
  const parsed = create.safeParse(created);
  if (!parsed.success) {
    res.status(404).json({
      msg: "wrong input",
    });
    return;
  }

  await todos.create({
    title: created.title,
    description: created.description,
    completed: false,
  });
  res.json({
    msg: "todo created",
  });
});

app.get("/todos", async function (req, res) {
  const content = await todos.find({});
  res.json({
    content,
  });
});

app.put("/completed", async function (req, res) {
  const updated = req.body;
  const parsed = update;
  if (!parsed.success) {
    res.status(404).json({
      msg: "wrong input",
    });
    return;
  }

  await todos.update({ _id: req.body.id }, { completed: true });

  res.json({
    msg: "todo completed",
  });
  //mongodb push
});

app.listen(3000);
