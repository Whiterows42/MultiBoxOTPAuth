import React, { useState } from "react";
import OtpInput from "./OtpInput";

function PhoneLOgin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [setshowOtp, setSetshowOtp] = useState(false);
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    const regex = /^[6-9]\d{9}$/;

    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("invalid Phone number");
      return;
    }
    //call backend api

    setSetshowOtp(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("login successfully", otp);
  };
  return (
    <div>
      {!setshowOtp ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter Otp send to {phoneNumber} </p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
}

export default PhoneLOgin;
