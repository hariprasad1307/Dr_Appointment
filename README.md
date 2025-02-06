# DR. Appointment

## Project Objective
DR. Appointment is a comprehensive hospital management system designed to facilitate the booking of doctor appointments by customers and provide an efficient way for administrators to manage and monitor doctor details and employee attendance. The platform ensures seamless interaction between customers, doctors, and hospital administrators while maintaining a structured approval process for doctor registrations.

## Project Workflow and Components

### 1. Login Component (Customer Module)
   - Enables customers to log in using their registered credentials.
   - Provides authentication and security features.

### 2. Login Component (Doctor Module)
   - Allows doctors to log in with their credentials.
   - Ensures secure access to doctor-specific functionalities.

### 3. Signup Module (Customer and Doctor Module)
   - Customers can sign up and create their accounts.
   - Doctors can sign up, but their registration requires admin approval before they can access the platform.

### 4. Home Module (Customer)
   - Displays available doctors along with their specialization and appointment slots.
   - Allows customers to check doctor availability and schedule appointments accordingly.
   - Provides navigation to MyAppointments module and Profile module.

### 5. Home Module (Doctor)
   - Provides doctors with an overview of their scheduled appointments.
   - Displays their work schedule and upcoming patient appointments.
   - Provides navigation to Approver module and Attendance module.

### 6. Attendance Module (Doctor)
   - Displays leave history and available leave balance for doctors.
   - Helps doctors track their attendance and leave records.

### 7. Approver Module (Admin Access)
   - Allows administrators to approve or reject new doctor registration requests.
   - Enables monitoring of doctors' appointments and schedules.

### 8. Booking Module
   - Customers can book appointments with their preferred doctor.
   - Displays appointment fees and payment details.

### 9. Profile Module
   - Displays customer profile information.
   - Allows customers to view and update their personal details.

### 10. MyAppointment Module
   - Displays the history of booked appointments for the customer.
   - Provides details of past and upcoming appointments.

## Technologies Used
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, bcrypt

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/hariprasad1307/Dr_Appointment
   ```
2. Navigate to the project directory:
   ```bash
   cd dr.appointment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start!
   ```
