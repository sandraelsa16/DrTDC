import React from "react";
import { Card } from "react-bootstrap";
function PackageCard() {
  return (
    <div>
      <div className="m-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://t4.ftcdn.net/jpg/07/69/03/01/360_F_769030143_YBHGHFZHhXtBiULOP44pObEJknSqKH0v.jpg"
          />
          <Card.Body>
            <Card.Title className="text-center">
              Cardiac Health Screen
            </Card.Title>
            <Card.Text>Rs.1950</Card.Text>
          </Card.Body>

          <ul>
            <li>CBC+ ESR</li>
            <li>Fasting Blood Glucose</li>
            <li>PP Blood Glucose</li>
            <li>Nefro-C (Cystatin-C)</li>
            <li>Lipid Profile Tests</li>
            <li>ECG</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default PackageCard;
