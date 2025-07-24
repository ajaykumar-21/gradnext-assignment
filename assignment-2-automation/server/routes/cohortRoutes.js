const { Router } = require("express");
const router = Router();
const { submitCohortForm } = require("../controllers/cohortController");

router.post("/submit", submitCohortForm);

module.exports = router;
