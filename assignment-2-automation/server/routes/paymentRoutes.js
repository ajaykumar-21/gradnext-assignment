const express = require("express");
const CohortSubmission = require("../models/CohortSubmission");
const router = express.Router();

router.get("/success", async (req, res) => {
  const { userId } = req.query;

  if (!userId) return res.status(400).send("Missing userId");

  await CohortSubmission.findByIdAndUpdate(userId, {
    paymentComplete: true,
  });

  res.send("Payment simulated successfully!");
});

module.exports = router;
