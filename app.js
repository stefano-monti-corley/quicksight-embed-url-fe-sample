const express = require("express");
const app = express();

app.listen(4200, () => {
  console.log("Application started and Listening on port 4200");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});