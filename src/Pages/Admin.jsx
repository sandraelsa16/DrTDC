import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI } from "../services/allAPI";

function Admin() {
  const navigate = useNavigate()
   const[adminData,setAdminData]=useState({username:"",password:""})
  const handlelogin = async()=>{
    const{username,password}=adminData;
    if(!username||!password){
      toast.info("Please fill the missing fields")
    }else {
      try {
        const result = await loginAPI({username,password});
        if(result.status===200){
          sessionStorage.setItem("username",result.data.username)
          sessionStorage.setItem("token",result.data.token)
          navigate("/admindashboard")
          setAdminData({username:"",password:""})
        }else {
          toast.warning(result.response.data);
        }
      } catch (err) {
        console.log(err);
      
      }
    }
  }
  // console.log(adminData);
  
  
  return (
    // <div className="d-flex flex-column align-items-center">
    //   <label htmlFor="uname">Username:</label>
    //   <input className="form-control w-50" type="text" />
    // </div>
    <div class="col-4 d-flex flex-column border border-secondary mx-auto p-5">
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
        onChange={(e)=>setAdminData({...adminData,username:e.target.value})}
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
        onChange={(e)=>setAdminData({...adminData,password:e.target.value})}
      />
      <br />
      <button class="btn btn-success w-50 mx-auto" onClick={handlelogin}>Log In</button>
      <ToastContainer position="top-center" autoClose={2000} theme="colored"/>
    </div>
  );
}

export default Admin;
