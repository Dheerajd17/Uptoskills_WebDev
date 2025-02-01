const express = require("express");
const Internship = require("../models/Internship");
const router = express.Router();

// ✅ Submit internship application (POST request)
router.post("/", async (req, res) => {
  try {
    const newApplication = new Internship(req.body);
    await newApplication.save();
    res.status(201).json(newApplication);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all internship applications (GET request)
router.get("/", async (req, res) => {
  try {
    const applications = await Internship.find();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Update internship status (PUT request)
router.put("/:id", async (req, res) => {
  try {
    const updatedApplication = await Internship.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updatedApplication);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
