import React from "react";
// import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
// import { Link } from "react-router-dom";

function Carousal() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            src="https://www.cgc.ac.in/public/tiny-uploads/_Bachelor%20of%20Medical%20Laboratory%20Science%20Career%20Scope.jpg"
            alt="first image"
            height={"700px"}
            width={"100%"}
            style={{ margin: "0 10px" }}
          />
          {/* <Carousel.Caption >
            <p className='fs-1 fw-bold'>Trusted by Patients <br /> & Doctors</p>
            <Link to={"/appointment"}><Button style={{backgroundColor:"darkblue",color:"white",border:"2px solid black"}} className=' float-start p-3'>Make an Appointment <i class="fa-solid fa-arrow-up-right-from-square"></i></Button></Link>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.labtestingmatters.org/wp-content/uploads/2019/10/lab-id-solutions-supplies-banner-1200x520.jpg"
            alt="second image"
            height={"700px"}
            width={"100%"}
            style={{ margin: "0 10px" }}
          />
          {/* <Carousel.Caption>
          <p style={{color:"black"}} className='fs-1 fw-bold'>Most Assurable,Affordable<br/>& Accessible diagnostic center</p>
        <Link to={"/appointment"}><Button style={{backgroundColor:"darkblue",color:"white",border:"2px solid black"}} className='float-start p-3'>Make an Appointment <i class="fa-solid fa-arrow-up-right-from-square"></i></Button></Link>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://t3.ftcdn.net/jpg/06/16/26/38/240_F_616263868_UTum06vdPvdlhRmWWTlKl4dGZstiZfVx.jpg"
            alt="third image"
            height={"700px"}
            width={"100%"}
            style={{ margin: "0 10px" }}
          />
          {/* <Carousel.Caption>
        <Link to={"/appointment"}><Button style={{backgroundColor:"darkblue",color:"white",border:"2px solid black"}} className='float-start p-3'>Make an Appointment <i class="fa-solid fa-arrow-up-right-from-square"></i></Button></Link>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousal;
