const express = require("express");
const app = express();
const dotenv = require("dotenv");

const { connectToMongoDb } = require("./config/connection");

dotenv.config({ quiet: true });

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

connectToMongoDb(MONGO_URI).then(() => console.log("Connect mongoDB"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
