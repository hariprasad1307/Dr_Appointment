import React from "react";
import { Link } from "react-router-dom";
import "../styles/customerhome.css"; // Import custom CSS file

const CustomerHome = () => {
  return (
    <div className="customer-home-container">
      <header className="header">
        <h1>Welcome to Our Hospital</h1>
        <p>Providing the best healthcare services with expert doctors and modern facilities.</p>
      </header>

      <div className="content">
        <div className="appointment-section">
          <h2>Manage Your Appointments</h2>
          <div className="button-container">
            <Link to="/book-appointment" className="book-appointment-btn">
              Book Appointment
            </Link>
            <Link to="/my-appointments" className="my-appointments-btn">
              My Appointments
            </Link>
          </div>
        </div>

        <div className="about-section">
          <h2>About Our Hospital</h2>
          <p>
            Our hospital is committed to providing top-notch medical care with state-of-the-art equipment
            and experienced medical professionals. We specialize in various treatments, ensuring quality
            healthcare for all.
          </p>
        </div>

        <div className="contact-section">
          <h2>Contact Us</h2>
          <p><strong>Address:</strong> 123 Healthcare Street, City, Country</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Email:</strong> contact@hospital.com</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerHome;
