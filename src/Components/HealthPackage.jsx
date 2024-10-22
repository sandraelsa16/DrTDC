import React from "react";

import PackageCard from "./PackageCard";

function HealthPackage() {
  const packages = [1, 2, 3];
  return (
    <div>
      <h3 className="text-center text-decoration-underline">Health Packages</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {packages.map((item, index) => (
          <PackageCard />
        ))}
      </div>
    </div>
  );
}

export default HealthPackage;
