const { Router } = require("express");
const router = Router();

const CohortSubmission = require("../models/CohortSubmission");

router.get("/submissions", async (req, res) => {
  try {
    const submissions = await CohortSubmission.find().sort({ createdAt: -1 });
    res.json(submissions);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
