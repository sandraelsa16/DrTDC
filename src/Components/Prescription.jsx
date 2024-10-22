// import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Prescription({ show, handleClose }) {
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Prescription</Modal.Title>
        </Modal.Header>
        {/*
         */}

        <Modal.Body>
          <div>
            <div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  //   value={projectData.title}
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Mobile Number"

                  //   value={projectData.language}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email id"

                  //   value={projectData.github}
                />
              </div>
              <div className="d-flex mb-3">
                <select
                  className="w-50 me-2 form-control"
                  name="gender"
                  id="gender"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date of Birth"
                />
              </div>
              <div>
                <label>
                  <input type="file" />
                </label>
                {
                  <div className="mt-3 text-danger">
                    Please upload the following file extensions(jpeg/jpg/png)
                  </div>
                }
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Prescription;
