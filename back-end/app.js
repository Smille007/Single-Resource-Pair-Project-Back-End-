const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());
const catController = require('./controllers/catController')
app.use('/cats', catController)
app.get("/", (req, res) => {
    res.send("Welcome to Kitty Shelter");
  });
  app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });





module.exports = app;