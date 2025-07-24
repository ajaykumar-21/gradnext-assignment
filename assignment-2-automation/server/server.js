const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ quiet: true });

const { connectToMongoDb } = require("./config/connection");
const cohortRoute = require("./routes/cohortRoutes");

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());

app.use("/api/cohort", cohortRoute);

connectToMongoDb(MONGO_URI).then(() => console.log("Connect mongoDB"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
