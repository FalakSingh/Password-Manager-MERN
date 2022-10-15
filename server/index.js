require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/user");
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
const PORT = 3001;
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));



mongoose.connect(DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`MongoDB Connection Established\nServer up and running on PORT:${PORT}`)
  })
}).catch((error) => {
  console.log(error);
})

const usersome = async () => {
  const user = await User.findOne({email:"singhfalak@gmail.com"});
  if (user.passwordEntries.length < 1) {
    console.log("shit again")
  }
}

usersome();