const express = require("express");
const bcrypt = require("bcryptjs");
const Customer = require("../models/customer");

const router = express.Router();

// ✅ Customer Signup Route
router.post("/signup", async (req, res) => {
  const { name, age, gender, phoneNumber, email, password } = req.body;

  try {
    // ✅ Check if email already exists
    const existingUser = await Customer.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "Email already registered." });
    }

    // ✅ Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create New Customer
    const newCustomer = new Customer({
      name,
      age,
      gender,
      phoneNumber,
      email,
      password: hashedPassword,
    });

    await newCustomer.save();
    res.json({ success: true, message: "Signup successful!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
