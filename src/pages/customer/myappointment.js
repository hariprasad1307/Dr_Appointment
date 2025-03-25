import React, { useState } from "react";
import "../styles/myappointment.css"; // Import custom CSS

const initialAppointments = [
  { id: 1, doctor: "Dr. John Smith", specialty: "Cardiologist", date: "2025-02-16", time: "10:00 AM" },
  { id: 2, doctor: "Dr. Jane Doe", specialty: "Neurologist", date: "2025-02-18", time: "2:30 PM" },
];

const MyAppointments = () => {
  const [appointments, setAppointments] = useState(initialAppointments);

  const handleCancel = (id) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== id);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="appointments-container">
      <h1 className="title">My Appointments</h1>

      {appointments.length > 0 ? (
        <ul className="appointment-list">
          {appointments.map((appointment) => (
            <li key={appointment.id} className="appointment-item">
              <div className="doctor-info">
                <h3>{appointment.doctor}</h3>
                <p>{appointment.specialty}</p>
              </div>
              <div className="appointment-details">
                <p><strong>Date:</strong> {appointment.date}</p>
                <p><strong>Time:</strong> {appointment.time}</p>
              </div>
              <button onClick={() => handleCancel(appointment.id)} className="cancel-button">
                Cancel Appointment
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-appointments">No appointments scheduled.</p>
      )}
    </div>
  );
};

export default MyAppointments;
