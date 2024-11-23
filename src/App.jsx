import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import User from "./Pages/User";
import Contact from "./Pages/Contact";
import Appointment from "./Components/Appointment";
import AppointmentDr from "./Components/AppointmentDr";
import HealthPackage from "./Components/HealthPackage";
import UserLogin from "./Components/UserLogin";
import Result from "./Pages/Result";
import AdminDashboard  from "./Pages/AdminDashboard";
import ViewDoctorsAppointment from "./Components/ViewDoctorsAppointment";
import ViewHomeAppointments from "./Components/ViewHomeAppointments";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/appointmentdr" element={<AppointmentDr />} />
        <Route path="/healthpackage" element={<HealthPackage />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/result" element={<Result />} />
        <Route path="/viewdrapp" element={<ViewDoctorsAppointment/>}/>
        <Route path="/viewhomeapp" element={<ViewHomeAppointments/>}/>
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
