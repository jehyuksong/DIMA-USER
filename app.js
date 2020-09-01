const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

mongoose.connect("mongodb://localhost:27017/postDB", { useNewUrlParser: true, useUnifiedTopology: true });

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const postSchema = {
  title: { type: String, require: true },
  part: { type: String, require: true },
  body: { type: String, require: true },
};

const Post = mongoose.model("Post", postSchema);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/post", function (req, res) {
  res.render("post");
});

app.listen("3000", function () {
  console.log(`server is running on port 3000...`);
});
