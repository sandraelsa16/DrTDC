import React from "react";

function AddResult() {
  return (
    <>
      <div className="text-center">
        <h1>Add Results</h1>
      </div>
      <div className="container border rounded w-25 my-5 p-3">
        <label>Enter BILL NO: </label>
        <input type="text" className="form-control mb-2" />
        <label>Enter PID NO: </label>
        <input type="text" className="form-control mb-2" />
        <label>Enter Patient Name:</label>
        <input type="text" className="form-control mb-2" />
        <label>Upload Result </label>
        <input type="file" className="form-control mb-2" />
        <div className="d-grid mt-3">
          <button className="btn btn-success">Submit Result</button>
        </div>
      </div>
    </>
  );
}

export default AddResult;
