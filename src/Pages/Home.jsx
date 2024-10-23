import React from "react";
import Carousal from "../Components/Carousal";
// import Appointment from '../Components/Appointment'
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import About from "../Components/About";
import HealthPackage from "../Components/HealthPackage";
import Contactinfo from "../Components/Contactinfo";

function Home() {
  const packages = [1, 2, 3];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/appointment");
    window.scrollTo(0, 0);
  };
  return (
    <div>
      {/* <Contactinfo /> */}
      <Carousal />
      <Button
        style={{
          backgroundColor: "lightgreen",
          color: "black",
          border: "2px solid black",
          margin: "20px auto",
        }}
        className=" d-flex justify-content-center p-3"
        onClick={handleClick}
      >
        Make an Appointment{" "}
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </Button>
      <div className="mt-5 d-flex justify-content-center">
        <img
          height={"200px"}
          className="accr_logo"
          src="https://5.imimg.com/data5/SELLER/Default/2021/12/WR/OI/EE/61112485/nabl-testing-certification-service-500x500.jpg"
          alt="accr_logo"
        />
        <p className="cert_heading mt-5 fs-5 fw-bold">
          Certified by CMC External Quality Assurance Scheme <br />
          <span className="fw-normal">by</span> <br /> Department of Clinical
          Biochemistry,CMC Vellore-632004{" "}
        </p>
      </div>

      <div className="mt-5 d-flex justify-content-center">
        <img
          height={"150px"}
          className="accr_logo"
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRc5MAm1SuhMxTsl6PLvrY5A5Rpui349kw19Ml0Z814d2IZ5lGZ"
          alt="clin_logo"
        />
        <p className="cert_heading mt-3 ms-3 fs-5 fw-bold">
          Registered Under the Provision <br />
          <span className="fw-normal">of</span> <br /> Kerala Clinical
          Establishments &#40;Regulations&#41; Act,2018
        </p>
      </div>
      <About />

      <div>
        <HealthPackage />

        <div className="text-center pb-5">
          {" "}
          <button className="btn btn-primary">All Packages</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
