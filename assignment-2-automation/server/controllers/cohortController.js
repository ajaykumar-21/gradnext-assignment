const CohortSubmission = require("../models/CohortSubmission");

const submitCohortForm = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }

    await CohortSubmission.create({
      name,
      email,
      phone,
    });

    res.status(201).json({ message: "Form submitted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = {
  submitCohortForm,
};
