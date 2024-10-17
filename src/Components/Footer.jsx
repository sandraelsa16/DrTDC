import React from 'react'
import { Button } from 'react-bootstrap'
Button
function Footer() {
  return (
    <>
      <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center w-100 '>
        <div className='d-flex justify-content-evenly align-items-center w-100'>
          <div className='websites' style={{width:'200px'}}>
          {/* <h5 className='mb-1'> */}
            <img src="./src/assets/Lab Logo.png" alt="logo" height={"200px"}/>
            {/* </h5> */}
            {/* <h6 className='ms-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente porro rerum fugiat debitis quibusdam totam voluptates vitae distinctio odio, tempore cupiditate odit dolorem beatae laborum iure corrupti reiciendis a iusto.
            </h6> */}
          </div>
          <div className='links d-flex flex-column'>
            <h4 className='mb-3'>DrTDC</h4>
              <h6>About Us</h6>
              <h6>Contact Us</h6>
              <h6>Location</h6>
              <h6>Careers</h6>
          </div>
          <div>
            <h4 className='mb-3'>Patients</h4>
              <h6>Home</h6>
              <h6>Patients</h6>
              <h6>Health CheckUp Packages</h6>
              <h6>Doctors</h6>
              <h6>Contact</h6>
          </div>
          <div className='links d-flex flex-column'>
            <h4 className='mb-3'>Reach Us</h4>
              <p>St. Mary's Orthodox Church <br /> Building Pulikeezhu,<br />Podiyadi,Thiruvalla, <br /> Pathanamthitta Kerala <br />PIN:689110</p>
              
          </div>
          <div className='links d-flex flex-column'>
            <h4 className='mb-3'>HelpLine</h4>
            <p><a style={{textDecoration:"none",color:"darkblue", fontFamily:"sans-serif"}} href="tel:04692998855">0469 2998855</a></p>
            <p><a style={{textDecoration:"none",color:"darkblue", fontFamily:"sans-serif"}} href="tel:+91 8848879292">+91 88488 79292</a></p>
    
       <div className='d-flex justify-content-between'>
        <i className="fa-brands fa-facebook" style={{color:"black",fontSize:"30px",marginRight:"8px"}}></i>
        <i className="fa-brands fa-instagram" style={{color:"black",fontSize:"30px",marginRight:"8px"}}></i>
        <i className="fa-brands fa-google" style={{color:"black",fontSize:"30px",marginRight:"8px"}}></i>
        <i className="fa-regular fa-envelope" style={{color:"black",fontSize:"30px",marginRight:"8px"}}></i>
        <i className="fa-brands fa-twitter" style={{color:"black",fontSize:"30px",marginRight:"8px"}}></i>
        </div>
      </div>
    </div>
  </div>
  <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' style={{textDecoration:"none"}}>
          Doctor's Trust Diagnostic Center
        </a>
      </div>
    </>
  )
}

export default Footer
