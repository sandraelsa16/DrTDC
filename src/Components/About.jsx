import React from 'react'

function About() {
  return (
    <div>
       <h3 className='text-center text-decoration-underline'>About Us</h3>
     <div className='d-flex align-items-center' >
      <div className='d-flex flex-wrap about justify-content-start m-5 gap-3'>
        <div>
          <img src="https://www.scripps.org/sparkle-assets/images/blood_test_samples_1200x750-59cd6b99366c6e716576ccd68351ed39.jpg" alt="bloodtest" height={"130px"}/>
          <p className='text-center'>500+ blood test</p>
        </div>
        <div>
          <img src="https://en.seamaty.com/Uploads/2021-04-25/608517fe15774.jpg" alt="bloodtest" height={"130px"}/>
          <p className='text-center'>Latest Equipments</p>
        </div>
        <div>
          <img src="https://www.cgc.ac.in/public/tiny-uploads/_Bachelor%20of%20Medical%20Laboratory%20Science%20Career%20Scope.jpg" alt="bloodtest" height={"130px"}/>
          <p className='text-center'>Experienced Technicians</p>
        </div>
        <div>
          <img src="https://www.geisinger.org/-/media/OneGeisinger/Images/Med-Labs/Patients/laboratory-services-hero.jpg?h=420&iar=0&w=790&sc_lang=en&hash=1AE959843592FBB84AF52FECC7177261" alt="bloodtest" height={"130px"}/>
          <p className='text-center'>Accurate Results</p>
        </div>
      </div>
      <div className='w-50'>
        <h4>One of the best laboratory in our area</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum sunt ipsam deserunt quos repellat corrupti eveniet iste, minus magni eum maxime, quod ad quam voluptatum optio sequi aliquam expedita nulla!
        Tempore vero itaque molestias vitae iste! Cum veniam autem dolores quo beatae dignissimos, repellat suscipit velit natus dicta obcaecati ipsa vitae totam quia ad vel impedit hic? Quaerat, corrupti consequuntur?
        Necessitatibus rerum ad magni velit ratione eligendi excepturi dignissimos blanditiis quidem doloribus et, at earum quibusdam unde deleniti eaque iusto dolore porro totam est nulla minus! Est qui reprehenderit voluptatum?</p>
      </div>
     </div>
     <div className="text-center mb-5 ">
        <button  className="btn btn-success" >
          Know More
        </button>
        </div>
    </div>
  )
}

export default About
