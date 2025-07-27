const CohortSubmission = require("../models/CohortSubmission");
const { sendConfirmationEmail } = require("../services/emailService");

// Controller function to handle cohort form submission
const submitCohortForm = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Save the submission data to the database
    const newCohortSubmission = await CohortSubmission.create({
      name,
      email,
      phone,
    });

    // Construct a dynamic payment link using the newly created user's ID
    const paymentLink = `https://gradnext-assignment.onrender.com/payment?userId=${newCohortSubmission._id}`;

    // Send confirmation email to the user with the payment link
    sendConfirmationEmail(newCohortSubmission, paymentLink);

    res.status(201).json({ message: "Form submitted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = {
  submitCohortForm,
};
