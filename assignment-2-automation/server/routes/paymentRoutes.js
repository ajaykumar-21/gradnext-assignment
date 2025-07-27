const express = require("express");
const CohortSubmission = require("../models/CohortSubmission");
const router = express.Router();

router.get("/payment", async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).send("Missing userId");
  }

  res.send(`
    <html>
      <head>
        <title>Confirm Payment</title>
      </head>
      <body style="font-family:sans-serif; text-align:center; padding:50px;">
        <h2>💰 Confirm Your Payment</h2>
        <p>Are you ready to complete payment for the GradNext Cohort?</p>
        <a href="/success?userId=${userId}" 
           style="display:inline-block;margin:10px 20px;padding:10px 20px;background:#22c55e;color:white;text-decoration:none;border-radius:8px;">
           ✅ Pay
        </a>
        <a href="https://gradnext.co" 
           style="display:inline-block;margin:10px 20px;padding:10px 20px;background:#ef4444;color:white;text-decoration:none;border-radius:8px;">
           ❌ Cancel
        </a>
      </body>
    </html>
  `);
});

router.get("/success", async (req, res) => {
  const { userId } = req.query;

  if (!userId) return res.status(400).send("Missing userId");

  await CohortSubmission.findByIdAndUpdate(userId, {
    paymentComplete: true,
  });

  res.send(`
    <html>
      <body style="text-align:center;font-family:sans-serif;padding:50px;">
        <h2>✅ Payment Confirmed</h2>
        <p>Thank you! You've been enrolled in the cohort.</p>
      </body>
    </html>
  `);
});

module.exports = router;
