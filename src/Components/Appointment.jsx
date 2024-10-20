import React from 'react'
import './Appointment.css'
import { Button, Form } from 'react-bootstrap'

function Appointment() {
  return (
    <div>
      <h3 className='text-center headings'>Book an Appointment for Home Collection</h3>
      <div className='container1'>
      <Form.Control className='mb-3' type="text" placeholder="Enter patient name" />
      <div className='d-flex justify-content-between'>
        <Form.Control className='mb-3 me-3 w-50' type="tel" placeholder="Phone Number " />
        <Form.Control className='mb-3 w-50' type="number" placeholder="Age" />
      </div>
      <div className='d-flex justify-content-evenly mb-1'>
       <div>
          <input type="radio" id="male" name="gender" value="Male"/>
          <label htmlFor="male">Male</label>
       </div>
       <div>
          <input type="radio" id="female" name="gender" value="Female"/>
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
        <Form.Control className='mb-3 me-3 w-50' type="date"  />
        <Form.Control className='mb-3 w-50' type="time" />
      </div>
      <div className='d-flex justify-content-between'>
        <Form.Control className='mb-3 me-3 w-50' type="text"  placeholder="Enter Dr's Name" />
        <select className='w-50 h-50 py-2'>
          <option selected hidden value="Select Area">Select Area</option>
          <option value="Pulikeezhu">Pulikeezhu</option>
          <option value="Panachamoodu,Niranam">Panachamoodu,Niranam</option>
          <option value="Chakkulathkaavu">Chakkulathkaavu</option>
        </select>
      </div>
      <div className='d-flex'>
          <p className='captcha'> 0000</p>
          <Form.Control className='mb-3 me-3 w-50' type="text" placeholder='Enter Captcha'/>
          <Button className='w-50 btn-success'  style={{ height: '50px' }}>Submit</Button>
          </div>
          
      </div>
      </div>
   
  )
}

export default Appointment
