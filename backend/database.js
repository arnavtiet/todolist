const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://achaudharybe22:CbABfJWJ3ef0LkuM@cluster1.vamdc7w.mongodb.net/todo"
);
const todo = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todos = mongoose.model("todos", todo);

module.exports = {
  todos,
};
