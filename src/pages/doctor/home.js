import React from "react";
import { Link } from "react-router-dom";
import "../styles/doctorhome.css"; // Import updated CSS

const doctor = {
  name: "Dr. John Smith",
  specialty: "Cardiologist",
};

const appointments = [
  { id: 1, customer: "Alice Johnson", age: 30, gender: "Female", time: "10:00 AM" },
  { id: 2, customer: "Bob Williams", age: 45, gender: "Male", time: "12:30 PM" },
  { id: 3, customer: "Sophia Brown", age: 29, gender: "Female", time: "3:00 PM" },
];

const DoctorHome = () => {
  return (
    <div className="doctor-home-container">
      {/* Doctor Info */}
      <h1 className="doctor-title">Welcome, {doctor.name}!</h1>
      <p className="doctor-specialty">{doctor.specialty}</p>

      {/* Navigation Cards */}
      <div className="nav-container">
        <Link to="/attendance" className="nav-card">
          <div className="nav-icon">📅</div>
          <div className="nav-text">My Attendance</div>
        </Link>
        <Link to="/approve-doctors" className="nav-card">
          <div className="nav-icon">✅</div>
          <div className="nav-text">Approve Doctors</div>
        </Link>
      </div>

      {/* Appointments List */}
      <h2 className="appointments-title">Today's Appointments</h2>
      {appointments.length > 0 ? (
        <ul className="appointment-list">
          {appointments.map((appointment) => (
            <li key={appointment.id} className="appointment-item">
              <div className="customer-info">
                <h3>{appointment.customer}</h3>
                <p><strong>Age:</strong> {appointment.age}</p>
                <p><strong>Gender:</strong> {appointment.gender}</p>
                <p><strong>Time:</strong> {appointment.time}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-appointments">No appointments scheduled for today.</p>
      )}
    </div>
  );
};

export default DoctorHome;
