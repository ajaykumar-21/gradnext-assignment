const CohortSubmission = require("../models/CohortSubmission");

const handleSendGridWebhook = async (req, res) => {
  const events = req.body;
  // console.log(events);

  try {
    for (let event of events) {
      const { email, event: eventType } = event;

      const user = await CohortSubmission.findOne({ email });
      if (!user) continue;

      if (eventType === "open") {
        if (!user.emailOpened) {
          user.emailOpened = true;
        }
      } else if (eventType === "click") {
        if (!user.clickedLink) {
          user.clickedLink = true;
        }
      } else if (eventType === "reply") {
        user.paymentComplete = true;
      }

      await user.save();
    }

    res.status(200).send("Webhook received");
  } catch (error) {
    console.error("Webhook Error:", error);
    res.status(500).send("Webhook handling failed");
  }
};

module.exports = { handleSendGridWebhook };
