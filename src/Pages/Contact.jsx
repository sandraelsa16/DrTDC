import React from "react";

function Contact() {
  return (
    <div className="row">
      <p className="mb-5">Get in touch </p>
      <div className=" container col-8 mx-auto my-0 mt-5 d-flex justify-content-evenly">
        <input
          type="text"
          placeholder="Name*"
          // className="w-50"
          style={{ border: "none", borderBottom: "1px solid grey" }}
        />
        <input
          type="email"
          placeholder="Name*"
          // className="w-50"
          style={{ border: "none", borderBottom: "1px solid grey" }}
        />
        {/* <input
          type="email"
          placeholder="Name*"
          className="me-5"
          style={{ border: "none", borderBottom: "1px solid grey" }}
        />
        <input
          type="email"
          placeholder="Name*"
          className="me-5"
          style={{ border: "none", borderBottom: "1px solid grey" }}
        />
        <input
          type="email"
          placeholder="Name*"
          className="me-5"
          style={{ border: "none", borderBottom: "1px solid grey" }}
        />
        <input
          type="email"
          placeholder="Name*"
          className="me-5"
          style={{ border: "none", borderBottom: "1px solid grey" }}
        /> */}
      </div>
      <div className="col-4"></div>
    </div>
  );
}

export default Contact;
