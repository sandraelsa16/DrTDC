import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Contact from "./Pages/Contact";
import Appointment from "./Components/Appointment";
import AppointmentDr from "./Components/AppointmentDr";
import HealthPackage from "./Components/HealthPackage";
import Result from "./Pages/Result";
import AdminDashboard from "./Pages/AdminDashboard";
import ViewDoctorsAppointment from "./Components/ViewDoctorsAppointment";
import ViewHomeAppointments from "./Components/ViewHomeAppointments";
import AddResult from "./Components/AddResult";
import UserAuth from "./Pages/UserAuth";
import ResultLogin from "./Components/ResultLogin";
import UserDashboard from "./Pages/UserDashboard";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<UserAuth />} />
        <Route path="/userreg" element={<UserAuth register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/appointmentdr" element={<AppointmentDr />} />
        <Route path="/healthpackage" element={<HealthPackage />} />
        <Route path="/rsltlogin" element={<ResultLogin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/result" element={<Result />} />
        <Route path="/viewdrapp" element={<ViewDoctorsAppointment />} />
        <Route path="/viewhomeapp" element={<ViewHomeAppointments />} />
        <Route path="/addresult" element={<AddResult />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
