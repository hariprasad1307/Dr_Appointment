import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CustomerLogin from "./pages/auth/customerlogin";
import CustomerSignup from "./pages/auth/customersignup";
import DoctorSignup from "./pages/auth/doctorsignup";
import CustomerHome from "./pages/customer/home";
import DoctorHome from "./pages/doctor/home";
import Attendance from "./pages/doctor/attendance";
import Approver from "./pages/admin/approver";
import Booking from "./pages/customer/booking";
import Profile from "./pages/customer/profile";
import MyAppointments from "./pages/customer/myappointment";
import BookNow from "./pages/customer/booknow";
import DoctorLogin from "./pages/auth/doctorlogin";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Default route */}
        <Route path="/login" element={<CustomerLogin  />} />
        <Route path="/doctor-login" element={<DoctorLogin  />} />
        <Route path="/signup" element={<CustomerSignup  />} />
        <Route path="/doctor-signup" element={<DoctorSignup  />} />
        <Route path="/customer-home" element={<CustomerHome />} />
        <Route path="/doctor-home" element={<DoctorHome />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/approve-doctors" element={<Approver />} />
        <Route path="/book-appointment" element={<Booking />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
      </Routes>
    </Router>
  );
}

export default App;