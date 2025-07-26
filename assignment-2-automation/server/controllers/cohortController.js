const CohortSubmission = require("../models/CohortSubmission");
const { sendConfirmationEmail } = require("../services/emailService");

const submitCohortForm = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newCohortSubmission = await CohortSubmission.create({
      name,
      email,
      phone,
    });

    // Send confirmation email with dummy payment link
    const paymentLink = `https://490e43736aca.ngrok-free.app/payment/success?userId=${newCohortSubmission._id}`;

    sendConfirmationEmail(newCohortSubmission, paymentLink);

    res.status(201).json({ message: "Form submitted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = {
  submitCohortForm,
};
