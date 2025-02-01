const mongoose = require("mongoose");

const InternshipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  universityType: String,
  location: String,
  branch: String,
  mobileNumber: String,
  qualification: String,
  startDate: String,
  message: String,
  status: { type: String, default: "Pending" }, // Default status
  appliedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Internship", InternshipSchema);
