require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose= require("mongoose");


const app = express();
const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 3001;


app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/private"));


mongoose.connect(DB_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`MongoDB Connection Established\nServer up and running on PORT:${PORT}`)
  })
}).catch((error) => {
  console.log(error);
})