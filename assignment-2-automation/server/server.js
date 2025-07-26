const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ quiet: true });

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

const {
  scheduleFollowUps,
  runFollowUpCheck,
} = require("./cron/followUpScheduler");
scheduleFollowUps(); // For daily automatic run at 10am

// Run manually on startup for testing
runFollowUpCheck();

const { connectToMongoDb } = require("./config/connection");
const cohortRoute = require("./routes/cohortRoutes");
const emailWebHookRoute = require("./routes/emailWebhookRoutes");
const paymentRoute = require("./routes/paymentRoutes");
// Middleware
app.use(express.json({ type: "application/json" }));

app.use("/api/cohort", cohortRoute);
app.use("/api/webhook/sendgrid", emailWebHookRoute);
app.use("/payment", paymentRoute);

connectToMongoDb(MONGO_URI).then(() => console.log("Connect mongoDB"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
