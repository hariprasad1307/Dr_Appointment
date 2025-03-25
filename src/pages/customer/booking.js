import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/booking.css";

const doctors = [
  { name: "Dr. John Doe", specialty: "Cardiologist" },
  { name: "Dr. Sarah Smith", specialty: "Neurologist" },
  { name: "Dr. Emily Johnson", specialty: "Dermatologist" },
  { name: "Dr. William Brown", specialty: "Orthopedic Surgeon" },
  { name: "Dr. Olivia Wilson", specialty: "Pediatrician" },
];

const Booking = () => {
  const navigate = useNavigate();

  const handleBookNow = (doctor) => {
    navigate("/book-now", { state: { doctor } }); // Pass doctor details to BookNow
  };

  return (
    <div className="booking-container">
      <h1 className="title">Book Appointment</h1>
      <p className="subtitle">Select a doctor and book your appointment.</p>

      <ul className="doctor-list">
        {doctors.map((doctor, index) => (
          <li key={index} className="doctor-item">
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
            </div>
            <button className="book-button" onClick={() => handleBookNow(doctor)}>
              Book Now
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booking;
