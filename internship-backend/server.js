require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const internshipRoutes = require("./routes/internshipRoutes");

const app = express();
app.use(express.json());

// ✅ Fix CORS Issue: Allow frontend (`localhost:3000`) to access backend
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// ✅ Connect to MongoDB with proper error handling
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit if DB connection fails
  });

// ✅ Use Internship Routes
app.use("/api/internships", internshipRoutes);

// ✅ Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
