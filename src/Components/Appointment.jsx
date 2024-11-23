import React, { useState } from 'react'
import './Appointment.css'
import { Button, Form } from 'react-bootstrap'

function Appointment() {
  const [homeCollData,setHomeCollData]=useState({initial:"",name:"",phnnum:"",age:"",gender:"",date:"",time:"",drname:"",area:"",captcha:""})
  // console.log(homeCollData);
  
  return (
    <div>
      <h3 className='text-center headings'>Book an Appointment for Home Collection</h3>
      <div className='container1'>
        <div className='d-flex'>
          <select onChange={(e)=>{setHomeCollData({...homeCollData,initial:e.target.value})}} name="initial" id="initial" className='w-25 h-50 py-2 me-3'>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          </select>
        <Form.Control onChange={(e)=>{setHomeCollData({...homeCollData,name:e.target.value})}} className='mb-3' type="text" placeholder="Enter patient name" />
        </div>
      <div className='d-flex justify-content-between'>
        <Form.Control onChange={(e)=>{setHomeCollData({...homeCollData,phnnum:e.target.value})}}   className='mb-3 me-3 w-50' type="number" placeholder="Phone Number " />
        <Form.Control onChange={(e)=>{setHomeCollData({...homeCollData,age:e.target.value})}}   className='mb-3 w-50' type="number" placeholder="Age" />
      </div>
      <div className='d-flex justify-content-evenly mb-1'>
       <div>
          <input onChange={(e)=>{setHomeCollData({...homeCollData,gender:e.target.value})}}   type="radio" id="male" name="gender" value="Male"/>
          <label htmlFor="male">Male</label>
       </div>
       <div>
          <input onChange={(e)=>{setHomeCollData({...homeCollData,gender:e.target.value})}}   type="radio" id="female" name="gender" value="Female"/>
          <label htmlFor="female">Female</label>
       </div>
     </div>  
     <div className='d-flex justify-content-around'>
        {/* <Form.Control className='mb-3 me-3 w-50' type="date"  />
        <Form.Control className='mb-3 w-50' type="time" placeholder="Age" /> */}
        <label htmlFor="date">Date</label>
        <label htmlFor="time">Time</label>
      </div>
     <div className='d-flex justify-content-between'>
        <Form.Control onChange={(e)=>{setHomeCollData({...homeCollData,date:e.target.value})}} className='mb-3 me-3 w-50' type="date"  />
        <Form.Control onChange={(e)=>{setHomeCollData({...homeCollData,time:e.target.value})}} className='mb-3 w-50' type="time" />
      </div>
      <div className='d-flex justify-content-between'>
        <Form.Control onChange={(e)=>{setHomeCollData({...homeCollData,drname:e.target.value})}} className='mb-3 me-3 w-50' type="text"  placeholder="Enter Dr's Name" />
        <select onChange={(e)=>{setHomeCollData({...homeCollData,area:e.target.value})}}className='w-50 h-50 py-2'>
          <option selected hidden value="Select Area">Select Area</option>
          <option value="Pulikeezhu">Pulikeezhu</option>
          <option value="Panachamoodu,Niranam">Panachamoodu,Niranam</option>
          <option value="Chakkulathkaavu">Chakkulathkaavu</option>
        </select>
      </div>
      <div className='d-flex'>
          <p className='captcha'> 0000</p>
          <Form.Control onChange={(e)=>{setHomeCollData({...homeCollData,captcha:e.target.value})}} className='mb-3 me-3 w-50' type="text" placeholder='Enter Captcha'/>
          <Button className='w-50 btn-success'  style={{ height: '50px' }}>Submit</Button>
          </div>
          
      </div>
      </div>
   
  )
}

export default Appointment
