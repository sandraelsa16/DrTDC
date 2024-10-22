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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
