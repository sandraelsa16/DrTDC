import React from 'react'
import Carousal from '../Components/Carousal'
import Appointment from '../Components/Appointment'
import './Home.css'
function Home() {
  return (
    <div className='carousel' >
     <Carousal/>
     <div className='appointment'>
      <Appointment/>
     </div>
    </div>
  )
}

export default Home
