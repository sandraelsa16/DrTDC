import React from 'react';
import './AdminDashboard.css'
import { Container, Button,Row,Col, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function AdminDashboard() {
  const navigate = useNavigate()
  const handlePackage=()=>{
      navigate("/healthpackage")
  }
  const handleResult=()=>{
    navigate("/result")
  }

  const handleDrApp=()=>{
    navigate("/viewdrapp")
  }

  const handleHomeApp=()=>{
    navigate("/viewhomeapp")
  }

  const handleLogout=()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("user")
    navigate('/admin')
  }
  return (
    <Container fluid>
     
        <Button onClick={handleLogout} variant="outline-danger" className='float-end' >
              Logout
            </Button>
        <h1 className='text-center'>Admin Dashboard</h1>


        <Row>
        {/* Sidebar */}
        {/* <Col md={2} className="bg-dark text-white vh-100">
          <h3 className="text-center my-4">Admin Dashboard</h3> */}
          {/* <Nav className="flex-column">
            <Nav.Link href="/healthPackage" className="text-white">Add Packages</Nav.Link>
            <Nav.Link href="#users" className="text-white">Add Results</Nav.Link>
            <Nav.Link href="#settings" className="text-white">View Doctors Appointments</Nav.Link>
            <Nav.Link href="#reports" className="text-white">View Appointment for Home Collection</Nav.Link>
          </Nav>
        </Col> */}

         <Col>
          <Container className="mt-3 d-flex flex-column justify-content-center">
              <div className='d-flex justify-content-evenly'>
                <button className='container-button ' onClick={handlePackage}>Add Packages</button>
                <button className='container-button' onClick={handleResult}>Add Result</button>
              </div>
              <div className=' mt-3 d-flex justify-content-evenly'>
                <button className='container-button ' onClick={handleDrApp}>View Doctor Appointments</button>
                <button className='container-button' onClick={handleHomeApp}>View Appointment for Home Collection</button>
              </div>
          </Container>
          </Col>
        </Row>
    </Container>
  );
};

export default AdminDashboard;

