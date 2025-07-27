const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");

dotenv.config({ quiet: true });

const sgMailKey = sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const emailId = process.env.FROM_EMAIL;

const sendConfirmationEmail = async (user, paymentLink) => {
  console.log(paymentLink);
  const msg = {
    to: user.email,
    from: emailId,
    subject: "You're selected for Consulting Cohort 101 🎉",
    html: `
      <p>Hi ${user.name},</p>
      <p>We're excited to have you in the <strong>Consulting Cohort 101</strong> program at GradNext!</p>
      <p>Please confirm your spot by making a payment:</p>
      <a href="${paymentLink}" alt="Click to pay" style="padding: 10px 15px; background: #007bff; color: white; border-radius: 4px; text-decoration: none;">Complete Payment</a>
      <p>If you have questions, just reply to this email.</p>
      <br/>
      <p>Cheers,<br/>Team GradNext</p>
    `,
  };

  try {
    await sgMailKey.send(msg);
    console.log("Confirmation email sent to", user.email);
  } catch (error) {
    console.error("SendGrid Error:", error.response?.body || error.message);
    throw error;
  }
};

const sendReminderEmail1 = async (user) => {
  await sgMailKey.send({
    to: user.email,
    from: emailId,
    subject: "👋 Reminder: Your seat is waiting!",
    html: `<p>Hi ${user.name},</p><p>We noticed you haven’t opened our email yet. Don’t miss out on the Consulting Cohort 101 program!</p>`,
  });
};

const sendReminderEmail2 = async (user) => {
  await sgMailKey.send({
    to: user.email,
    from: emailId,
    subject: "📢 More benefits just for you!",
    html: `<p>Hey ${user.name},</p><p>Still not sure? Here are more reasons to join the program... [add benefits here]</p>`,
  });
};

const sendFinalReminder = async (user) => {
  await sgMailKey.send({
    to: user.email,
    from: emailId,
    subject: "⚠️ Last chance to confirm your seat!",
    html: `<p>Hi ${user.name},</p><p>This is your final reminder to complete your payment and secure your spot.</p>`,
  });
};

module.exports = {
  sendConfirmationEmail,
  sendReminderEmail1,
  sendReminderEmail2,
  sendFinalReminder,
};
