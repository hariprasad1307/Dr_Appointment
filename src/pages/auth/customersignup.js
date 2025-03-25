import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Axios for API requests
import "../styles/signup.css"; // Import custom CSS file

const CustomerSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form inputs
  const validateInputs = () => {
    const { name, age, gender, phoneNumber, email, password } = formData;

    if (!name || !age || !gender || !phoneNumber || !email || !password) {
      return "All fields are required.";
    }
    if (isNaN(age) || age < 1) {
      return "Please enter a valid age.";
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      return "Phone number must be 10 digits.";
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return "Invalid email format.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    return null;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/signup", formData);
      console.log("Signup successful:", response.data);
      alert("Signup successful!");
      navigate("/login"); // Redirect to login page
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Customer Signup</h2>

        {error && <p className="error-message">{error}</p>}

        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default CustomerSignup;
