import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import User from "./Pages/User";
import Contactinfo from "./Components/Contactinfo";
import Contact from "./Pages/Contact";
import Appointment from "./Components/Appointment";
import AppointmentDr from "./Components/AppointmentDr";
import HealthPackage from "./Components/HealthPackage";

function App() {
  return (
    <>
      <Contactinfo />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/appointmentdr" element={<AppointmentDr />} />
        <Route path="/healthpackage" element={<HealthPackage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
