const { Schema, model } = require("mongoose");

const CohortSubmissionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    emailOpened: {
      type: Boolean,
      default: false,
    },
    clickedLink: {
      type: Boolean,
      default: false,
    },
    paymentComplete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const CohortSubmission = model("cohortSubmission", CohortSubmissionSchema);

module.exports = CohortSubmission;
