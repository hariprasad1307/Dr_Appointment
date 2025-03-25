const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  specialist: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  approved: { type: Boolean, default: false }, // Requires admin approval
});

module.exports = mongoose.model("doctoraccount", doctorSchema);
