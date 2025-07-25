const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");

dotenv.config({ quiet: true });

const sgMailKey = sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const emailId = process.env.FROM_EMAIL;

const sendConfirmationEmail = async (user, paymentLink) => {
  const msg = {
    to: user.email,
    from: emailId,
    subject: "You're selected for Consulting Cohort 101 🎉",
    html: `
      <p>Hi ${user.name},</p>
      <p>We're excited to have you in the <strong>Consulting Cohort 101</strong> program at GradNext!</p>
      <p>Please confirm your spot by making a payment:</p>
      <a href="${paymentLink}" style="padding: 10px 15px; background: #007bff; color: white; border-radius: 4px; text-decoration: none;">Complete Payment</a>
      <p>If you have questions, just reply to this email.</p>
      <br/>
      <p>Cheers,<br/>Team GradNext</p>
    `,
  };

  try {
    const mssg = await sgMailKey.send(msg);
    console.log(mssg);
    console.log("Confirmation email sent to", user.email);
  } catch (error) {
    console.error("SendGrid Error:", error.response?.body || error.message);
    throw error;
  }
};

module.exports = {
  sendConfirmationEmail,
};
