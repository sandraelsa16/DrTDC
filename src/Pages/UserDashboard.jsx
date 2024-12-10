import React, { useState } from "react";
import "./Dashboard.css";
import Appointment from "../Components/Appointment";
import DrAppSlot from "../Components/DrAppSlot";
const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul>
          <li
            className={activeSection === "home" ? "active" : ""}
            onClick={() => setActiveSection("home")}
          >
            Home Collection
          </li>
          <li
            className={activeSection === "doctor" ? "active" : ""}
            onClick={() => setActiveSection("doctor")}
          >
            Doctor Appointment
          </li>
        </ul>
      </div>

      <div className="content">
        {activeSection === "home" && (
          <div>
            <Appointment/>
          </div>
        )}
        {activeSection === "doctor" && (
          <div>
            <DrAppSlot/>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
