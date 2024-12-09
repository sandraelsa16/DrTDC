import React, { useState } from "react";
import "./Appointment.css";
import { Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { addHomeCollAPI } from "../services/allAPI";
import { useEffect } from "react";

function Appointment() {
  const [homeCollData, setHomeCollData] = useState({ initial: "",name: "",phnnum: "",age: "",gender: "",date: "",time: "",address:"",drname: "",area: "" });
  console.log(homeCollData);
  const [captcha,setCaptcha]=useState("")
  const [userInput,setUserInput]=useState("")
  
  const generateCaptcha = () => {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(captcha);
  }

  useEffect(()=>{generateCaptcha()},[])

  const handleSubmit = async () => {

    const {initial,name,phnnum,age,gender,date,time,address,drname,area} = homeCollData;

    if (!initial ||!name ||!phnnum ||!age ||!gender ||!date ||!time ||!address||!drname ||!area ||!userInput) {
      toast.warn("Please fill the missing fields");
        } else if(userInput !== captcha){
           toast.error("Please re-enter the captcha")
        } else{
      try {
        const result = await addHomeCollAPI(homeCollData);
        console.log(result);
        
        if (result.status === 200) {
          setHomeCollData(result.data);
          toast.success("Appointment for Home Collection Booked")
          setHomeCollData({
            initial: "",name: "",phnnum: "",age: "",gender: "",date: "",time: "",address:"",drname: "",area: "" 
          })
          setUserInput('')
        }else
         { toast.warning(result.response.data)}
        
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <h3 className="text-center headings">
        Book an Appointment for Home Collection
      </h3>
      <div className="container1">
        <div className="d-flex">
          <select
            onChange={(e) => {
              setHomeCollData({ ...homeCollData, initial: e.target.value });
            }}
            value={homeCollData.initial}
            name="initial"
            id="initial"
            className="w-25 h-50 py-2 me-3"
          > 
            <option selected hidden value="Select Area">
              Initial
            </option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
          </select>
          <Form.Control
            onChange={(e) => {
              setHomeCollData({ ...homeCollData, name: e.target.value });
            }}
            value={homeCollData.name}
            className="mb-3"
            type="text"
            placeholder="Enter patient name"
          />
        </div>
        <div className="d-flex justify-content-between">
          <Form.Control
            onChange={(e) => {
              setHomeCollData({ ...homeCollData, phnnum: e.target.value });
            }}
            value={homeCollData.phnnum}
            className="mb-3 me-3 w-50"
            type="number"
            placeholder="Phone Number "
          />
          <Form.Control
            onChange={(e) => {
              setHomeCollData({ ...homeCollData, age: e.target.value });
            }}
            value={homeCollData.age}
            className="mb-3 w-50"
            type="number"
            placeholder="Age"
          />
        </div>
        <div className="d-flex justify-content-evenly mb-1">
          <div>
            <input
              onChange={(e) => {
                setHomeCollData({ ...homeCollData, gender: e.target.value });
              }}
              type="radio"
              id="male"
              name="gender"
              value="Male"
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              onChange={(e) => {
                setHomeCollData({ ...homeCollData, gender: e.target.value });
              }}
              type="radio"
              id="female"
              name="gender"
              value="Female"
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          {/* <Form.Control className='mb-3 me-3 w-50' type="date"  />
        <Form.Control className='mb-3 w-50' type="time" placeholder="Age" /> */}
          <label htmlFor="date">Date</label>
          <label htmlFor="time">Time</label>
        </div>
        <div className="d-flex justify-content-between">
          <Form.Control
            onChange={(e) => {
              setHomeCollData({ ...homeCollData, date: e.target.value });
            }}
            value={homeCollData.date}
            className="mb-3 me-3 w-50"
            type="date"
          />
          <Form.Control
            onChange={(e) => {
              setHomeCollData({ ...homeCollData, time: e.target.value });
            }}
            value={homeCollData.time}
            className="mb-3 w-50"
            type="time"
          />
        </div>
        <textarea className="form-control my-2" placeholder="Enter address" onChange={(e)=>{setHomeCollData({...homeCollData,address:e.target.value})}} value={homeCollData.address} ></textarea>
        <div className="d-flex justify-content-between">
          <Form.Control
            onChange={(e) => {
              setHomeCollData({ ...homeCollData, drname: e.target.value });
            }}
            value={homeCollData.drname}
            className="mb-3 me-3 w-50"
            type="text"
            placeholder="Enter Dr's Name/Self"
          />
          <select
            onChange={(e) => {
              setHomeCollData({ ...homeCollData, area: e.target.value });
            }}
            value={homeCollData.area}
            className="w-50 h-50 py-2"
          >
            <option selected hidden value="Select Area">
              Select Area
            </option>
            <option value="Pulikeezhu">Pulikeezhu</option>
            <option value="Panachamoodu,Niranam">Panachamoodu,Niranam</option>
            <option value="Chakkulathkaavu">Chakkulathkaavu</option>
          </select>
        </div>
        <div className="d-flex">
          <p className="captcha">{captcha}</p>
          <Form.Control
            onChange={(e)=>{setUserInput(e.target.value)}}
            value={userInput}
            className="mb-3 me-3 w-50"
            type="text"
            placeholder="Enter Captcha"
          />
          <Button
            className="w-50 btn-success"
            onClick={handleSubmit}
            style={{ height: "50px" }}
          >
            Submit
          </Button>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          theme="colored"
        />
      </div>
    </div>
  );
}

export default Appointment;
