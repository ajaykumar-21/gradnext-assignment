const express = require("express");
const CohortSubmission = require("../models/CohortSubmission");
const router = express.Router();

// GET route to confirm and simulate payment process
router.get("/", async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).send("Missing userId");
  }

  // Fetch the user submission using the userId
  const user = await CohortSubmission.findById(userId);
  if (!user) {
    return res.status(404).send("User not found");
  }

  // If user has already completed the payment
  if (user.paymentComplete) {
    // Already paid – show success message directly
    return res.send(`
      <html>
        <body style="text-align:center;font-family:sans-serif;padding:50px;">
          <h2>✅ Payment Already Completed</h2>
          <p>You’ve already been enrolled in the cohort.</p>
        </body>
      </html>
    `);
  }

  // Otherwise, show a simple HTML page with confirmation buttons
  res.send(`
    <html>
      <head>
        <title>Confirm Payment</title>
      </head>
      <body style="font-family:sans-serif; text-align:center; padding:50px;">
        <h2>💰 Confirm Your Payment</h2>
        <p>Are you ready to complete payment for the GradNext Cohort?</p>
        <a href="/payment/success?userId=${userId}" 
           style="display:inline-block;margin:10px 20px;padding:10px 20px;background:#22c55e;color:white;text-decoration:none;border-radius:8px;">
           ✅ Pay
        </a>
        <a onclick="window.close()" 
           style="display:inline-block;margin:10px 20px;padding:10px 20px;background:#ef4444;color:white;text-decoration:none;border-radius:8px;">
           ❌ Cancel
        </a>
      </body>
    </html>
  `);
});

// GET route to simulate a successful payment
router.get("/success", async (req, res) => {
  const { userId } = req.query;

  if (!userId) return res.status(400).send("Missing userId");

  // Update user's payment status to true in the database
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
