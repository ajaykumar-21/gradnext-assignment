const cron = require("node-cron");
const CohortSubmission = require("../models/CohortSubmission");
const {
  sendReminderEmail1,
  sendReminderEmail2,
  sendFinalReminder,
} = require("../services/emailService");

const MS_IN_A_DAY = 24 * 60 * 60 * 1000;

const runFollowUpCheck = async () => {
  console.log("📅 Running daily follow-up scheduler...");

  const users = await CohortSubmission.find({ paymentComplete: false });

  for (let user of users) {
    const now = new Date();

    // Case 1: Unopened after 2 days
    if (
      !user.emailOpened &&
      user.createdAt &&
      now - user.createdAt > 2 * MS_IN_A_DAY
    ) {
      await sendReminderEmail1(user);
      console.log("📧 Sent Reminder 1 to", user.email);
      continue;
    }

    // Case 2: Opened but not clicked
    if (user.emailOpened && !user.clickedLink) {
      await sendReminderEmail2(user);
      console.log("📧 Sent Reminder 2 to", user.email);
      continue;
    }

    // Case 3: Clicked but not paid after 2 more days
    if (
      user.clickedLink &&
      user.updatedAt &&
      now - user.updatedAt > 2 * MS_IN_A_DAY
    ) {
      await sendFinalReminder(user);
      console.log("📧 Sent Final Reminder to", user.email);
      continue;
    }
  }
  //   });
};

// ✅ Scheduled auto run daily at 10AM
const scheduleFollowUps = () => {
  cron.schedule("0 10 * * *", runFollowUpCheck);
};

module.exports = { scheduleFollowUps, runFollowUpCheck };
