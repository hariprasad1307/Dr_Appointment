import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/booknow.css"; // Import custom styles

const availableDates = ["2025-02-16", "2025-02-17", "2025-02-18"];
const availableTimes = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];

const BookNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state?.doctor || { name: "Unknown", specialty: "Unknown" };

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time.");
      return;
    }
    alert(`Appointment booked with ${doctor.name} on ${selectedDate} at ${selectedTime}.`);
    navigate("/customer-home"); // Redirect to customer home after booking
  };

  return (
    <div className="booknow-container">
      <h1 className="title">Book Appointment</h1>
      <h3 className="doctor-info">
        {doctor.name} - {doctor.specialty}
      </h3>

      <label className="label">Select Date:</label>
      <select className="dropdown" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
        <option value="">-- Select Date --</option>
        {availableDates.map((date, index) => (
          <option key={index} value={date}>
            {date}
          </option>
        ))}
      </select>

      <label className="label">Select Time:</label>
      <select className="dropdown" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
        <option value="">-- Select Time --</option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      <button className="confirm-button" onClick={handleConfirmBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default BookNow;
