require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
const token = jwt.sign({ id: "somerandomthing" }, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_EXPIRES,
});

app.get("/", (req, res) => {
  res.send(token);
});

app.post("/", (req, res) => {
  const givenToken = req.body.token;
  const tok = jwt.verify(givenToken, process.env.JWT_SECRET);
  console.log(tok);
});

app.listen(3001, () => {
  console.log("server started");
});
