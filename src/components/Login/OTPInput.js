import React, { useState, useContext, useEffect } from "react";
import { RecoveryContext } from "../App";
import axios from "axios";
import "./global.component.css";

export default function OTPInput() {
  const { username, otp, setPage } = useContext(RecoveryContext);
  const [OTPinput, setOTPinput] = useState( "");

  function verifyOTP() {
    if (parseInt(OTPinput) === otp) {
      setPage("reset");
    } else {
      alert("The code you have entered is not correct, try again re-send the link");
    }
  }
  return (
    <div>
      <h3>Email Verification</h3>
      <p>We have sent a verification code to your email.</p>
      <form>
         <input type="text" value={OTPinput} onChange={(e) => { setOTPinput(e.target.value) }} /> 
          <button onClick={() => verifyOTP()}>Verify Account</button> 
          <a onClick={() => resendOTP()} > Didn't receive code? 
            {disable ? `Resend OTP in ${timerCount}s` : " Resend OTP"}
          </a> 
      </form>
    </div>
  );
}