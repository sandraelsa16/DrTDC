import React from "react";

import PackageCard from "./PackageCard";
import { Button } from "react-bootstrap";
import AddPackage from "./AddPAckage";

function HealthPackage() {
  const packages = [1, 2, 3];
 const isLoggedin = Boolean(sessionStorage.getItem('token'))
  return (
    <div>
      <h3 className="text-center text-decoration-underline">Health Packages</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {packages.map((item, index) => (
          <PackageCard key={index}/>
        ))}
       
      </div>
   {isLoggedin && (<div ><AddPackage/></div>)}
    </div>
  );
}

export default HealthPackage;
