import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Carousal() {
  return (
    <div>
      <Carousel fade>
      <Carousel.Item>
        <img src="https://www.cgc.ac.in/public/tiny-uploads/_Bachelor%20of%20Medical%20Laboratory%20Science%20Career%20Scope.jpg" alt="first image" height={"500px"} width={"100%"} style={{margin:"0 10px"}} />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://www.labtestingmatters.org/wp-content/uploads/2019/10/lab-id-solutions-supplies-banner-1200x520.jpg"  alt="second image" height={"500px"} width={"100%"}  style={{margin:"0 10px"}} />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://t3.ftcdn.net/jpg/06/16/26/38/240_F_616263868_UTum06vdPvdlhRmWWTlKl4dGZstiZfVx.jpg" alt="third image" height={"500px"} width={"100%"}  style={{margin:"0 10px"}}/>
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carousal
