import React from "react";
import "./Appointment.css";
import { Button, Form } from "react-bootstrap";

function AppointmentDr() {
  return (
    <div>
      <h3 className="text-center headings">Book an Appointment with Doctor</h3>
      <div className="container1">
        <div className="d-flex">
          <select name="initial" id="initial" className="w-25 h-50 py-2 me-3">
          <option selected hidden value="Select Area">
              Initial
            </option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
          </select>
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Enter patient name"
          />
        </div>
        <div className="d-flex justify-content-between">
          <Form.Control
            className="mb-3 me-3 w-50"
            type="tel"
            placeholder="Phone Number "
          />
          <Form.Control className="mb-3 w-50" type="number" placeholder="Age" />
        </div>
        <div className="d-flex justify-content-evenly mb-1">
          <div>
            <input type="radio" id="male" name="gender" value="Male" />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" id="female" name="gender" value="Female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          {/* <Form.Control className='mb-3 me-3 w-50' type="date"  />
        <Form.Control className='mb-3 w-50' type="time" placeholder="Age" /> */}
          <label htmlFor="date">Date</label>
          <label htmlFor="time">
            Time
          </label>
        </div>
        <div className="d-flex justify-content-between">
          <Form.Control className="mb-3 me-3 w-50" type="date" />
          <Form.Control className="mb-3 w-50" type="time"  min="15:00" max="18:00" />
        </div>
        <div className="d-flex justify-content-between">
          <select className="w-50 h-50 py-2">
            <option selected hidden value="Select Area">
              Select Area
            </option>
            <option value="Pulikeezhu">Pulikeezhu</option>
            <option value="Panachamoodu,Niranam">Panachamoodu,Niranam</option>
            <option value="Chakkulathkaavu">Chakkulathkaavu</option>
          </select>
          <p className="captcha"> 0000</p>
          <Form.Control
            className="mb-3 me-3 w-50"
            type="text"
            placeholder="Enter Captcha"
          />
        </div>
        <div className="d-flex justify-content-center">
          <Button className="w-50 btn-success" style={{ height: "50px" }}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentDr;
