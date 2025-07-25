const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ quiet: true });

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

app.use(
  cors({
    origin: ["http://localhost:3000", "https://gradnext-automation.vercel.app"],
    credentials: true,
  })
);

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
const submissionRoute = require("./routes/submissionRoutes");

// Middleware
app.use(express.json({ type: "application/json" }));

app.use("/api/cohort", cohortRoute);
app.use("/api/webhook/sendgrid", emailWebHookRoute);
app.use("/payment", paymentRoute);
app.use("/api", submissionRoute);

connectToMongoDb(MONGO_URI).then(() => console.log("Connect mongoDB"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
