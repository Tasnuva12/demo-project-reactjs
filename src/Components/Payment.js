import React from "react";
import "./Payment.css"; // Assuming you have a Payment.css file for styling
import PaypalButton from "./PaypalButton";

export default function Payment() {
  return (
    <div className="center">
      <div className="rectangle">
        <div className="button-container">
          <PaypalButton/>
          <button className="stripe-button">Pay with Stripe</button>
        </div>
      </div>
    </div>
  );
}
