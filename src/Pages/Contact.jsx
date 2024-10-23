import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="d-flex justify-content-evenly gap-3">
      <div className="ms-2 container pb-5 border">
        <p className="m-5">Get in touch </p>
        <div className=" mt-5 mb-2 d-flex flex-wrap justify-content-around gap-2 ">
          <input
            type="text"
            placeholder="Name*"
            className="w-25"
            style={{ border: "none", borderBottom: "1px solid grey" }}
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-50"
            style={{ border: "none", borderBottom: "1px solid grey" }}
          />

          <input
            type="tel"
            placeholder="Phone Number*"
            className="w-50"
            style={{ border: "none", borderBottom: "1px solid grey" }}
          />
          <select
            name="purpose"
            id=""
            style={{ border: "none", borderBottom: "1px solid grey" }}
          >
            <option selected hidden value="Select Purpose">
              Select Purpose
            </option>
            <option value="Become a Partner">Become a Partner</option>
            <option value="Feedback">Feedback</option>
            <option value="Test Enquiry">Test Enquiry</option>
            <option value="Home Visit Enquiry">Home Visit Enquiry</option>
            <option value="Request to resend the report">
              Request to resend the report
            </option>
          </select>

          <input
            type="text"
            placeholder="Enter your comments*"
            className="w-75"
            style={{ border: "none", borderBottom: "1px solid grey" }}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
      <div className="contactarea w-50 pt-5 me-2 text-center">
        <p className="fs-3">Doctor's Trust Diagnostic Center</p>
        <a href=""></a>
        <p>Doctor's Trust Diagnostic Center</p>
      </div>
    </div>
  );
}

export default Contact;
