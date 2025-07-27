const { Router } = require("express");
const router = Router();

const CohortSubmission = require("../models/CohortSubmission");

// Define a GET route to fetch all cohort submissions from the database
router.get("/submissions", async (req, res) => {
  try {
    const submissions = await CohortSubmission.find().sort({ createdAt: -1 }); //// Fetch all submissions, sorted by creation date (most recent first)
    res.json(submissions); // Send the fetched submissions as a JSON response
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
