import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AddPackage() {
  const [show, setShow] = useState(false);
  const [fields, setFields] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addField = () => {
    setFields([...fields, { id: fields.length + 1 }]);
  };

  const deleteField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  return (
    <div>
      <div className="text-center">
        <Button onClick={handleShow}>Add Packages</Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Packages</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Enter Name of Package"
            className="form-control mb-2"
          />
          <div className="d-flex gap-2">
            <div>
              <label>Enter Actual Price</label>
              <input
                type="text"
                placeholder="Enter Actual Price "
                className="form-control mb-2"
              />
            </div>
            <div>
              <label>Enter Discount Price</label>
              <input
                type="text"
                placeholder="Enter Discount Price "
                className="form-control mb-2"
              />
            </div>
          </div>
          <label htmlFor="">Enter Test Name</label>
          {fields.map((field) => (
            <div className="d-flex">
              <input
                key={field.id}
                type="text"
                placeholder={`Test Name ${field.id}`}
                className="form-control mb-2"
              />
              <button
                onClick={() => deleteField(field.id)}
                style={{
                  padding: "5px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          ))}
          <div className="text-center">
            <Button onClick={addField} className="btn btn-success">
              <i className="fa-solid fa-plus"></i> Test
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddPackage;
