require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose= require("mongoose");
const User = require("./models/user");


const app = express();
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 3001;


app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));


mongoose.connect(DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`MongoDB Connection Established\nServer up and running on PORT:${PORT}`)
  })
}).catch((error) => {
  console.log(error);
})