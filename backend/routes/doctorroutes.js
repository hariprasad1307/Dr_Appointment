const express = require("express");
const router = express.Router();
const Doctor = require("../models/doctor");

// Doctor Signup
router.post("/signup", async (req, res) => {
  try {
    const { name, age, specialist, email, phoneNumber, password } = req.body;

    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: "Doctor already exists." });
    }

    const newDoctor = new Doctor({ name, age, specialist, email, phoneNumber, password });
    await newDoctor.save();

    res.status(201).json({ message: "Doctor signup successful. Awaiting admin approval." });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;
