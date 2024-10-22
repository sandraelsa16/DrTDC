import React from "react";

function Admin() {
  return (
    // <div className="d-flex flex-column align-items-center">
    //   <label htmlFor="uname">Username:</label>
    //   <input className="form-control w-50" type="text" />
    // </div>
    <div class="col-6 d-flex flex-column border border-secondary mx-auto p-5">
      <p class="text-center heading">LOG IN</p>
      <br />
      <label for="username" class="fs-4">
        Username:
      </label>
      <input
        id="username"
        type="text"
        class="form-control "
        placeholder="Username"
      />
      <br />
      <label for="" class="fs-4">
        Password :
      </label>
      <input
        id="pswd_login"
        type="password"
        class="form-control"
        placeholder="Password"
      />
      <br />
      <button class="btn btn-success w-50 mx-auto" onclick="loginacc()">
        Log In
      </button>
    </div>
  );
}

export default Admin;
