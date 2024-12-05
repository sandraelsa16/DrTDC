import React from "react";

function ResultLogin() {
  return (
    <div>
      <h3 className="text-center text-decoration-underline">Results</h3>
      <div className="container mx-auto my-4 p-3 w-50">
        <div className="d-flex justify-content-evenly mb-3 ">
          <label htmlFor="billid">Enter BILL NO:</label>
          <input className="form-control w-50" type="number" />
        </div>

        <div className="d-flex justify-content-evenly mb-3">
          <label htmlFor="pid">Enter PID NO:</label>
          <input className="form-control w-50" type="number" />
        </div>
        <div className="d-flex justify-content-evenly mb-3">
          <label htmlFor="name">Enter Name:</label>
          <input className="form-control w-50" type="text" />
        </div>
        <div className="d-flex justify-content-evenly mb-3">
          <button className="btn btn-primary">Submit</button>
          <button className="btn btn-warning">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default ResultLogin;
