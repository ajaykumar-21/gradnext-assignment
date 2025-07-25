const { Router } = require("express");
const router = Router();

const {
  handleSendGridWebhook,
} = require("../controllers/emaiWebhookController");

router.post("/", handleSendGridWebhook);

module.exports = router;
