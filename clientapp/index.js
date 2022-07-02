const mongoose = require("mongoose");
const express = require("express");

const app = express();

const DATABASE = "mongodb://mymongo:27017/testup";

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.log("DB Connection Failed", err);
  });

app.get("/", (req, res) => {
  res.json({
    message: "This is the root route",
  });
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
