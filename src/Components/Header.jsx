import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Prescription from "./Prescription";

function Header() {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <img
            onClick={handleNavigate}
            src="./src/assets/Lab Logo.png"
            alt="logo"
            height={"80px"}
          />

          <h2 className="heading">DOCTOR's TRUST DIAGNOSTIC CENTER</h2>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-5">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <NavDropdown title="Patients" id="basic-nav-dropdown">
                <NavDropdown.Item href="/appointment">
                  <i class="fa-regular fa-calendar-check"></i> Book for Home
                  Collection
                </NavDropdown.Item>
                <NavDropdown.Item href="/appointmentdr">
                  <i class="fa-regular fa-calendar-check"></i> Book an
                  Appointment with Doctor
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleShow}>
                  <i class="fa-solid fa-file-arrow-up"></i> Upload Prescription
                </NavDropdown.Item>
                <NavDropdown.Item href="/healthpackage">
                  <i class="fa-solid fa-ranking-star"></i> Popular
                  Tests/Packages
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  <i class="fa-solid fa-user"></i> View Result
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Doctor" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <i class="fa-regular fa-calendar-check"></i> Book an
                  Appointment
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Upload Prescription
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Popular Tests/Packages
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Existing Patients/Login
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/admin">
                Admin
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />

      <Prescription show={show} handleClose={handleClose} />
    </div>
  );
}

export default Header;
