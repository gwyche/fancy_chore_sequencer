/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const LoginFormInput = ({
  inputField = "Username",
  inputFieldHeader = "Username",
  state,
  className,
}) => {
  return (
    <div className={`login-form-input ${className}`}>
      <div className="frame">
        <div className="email">{inputFieldHeader}</div>
      </div>

      <div className="frame-wrapper">
        <div className="email-wrapper">
          <div className="text-wrapper">{inputField}</div>
        </div>
      </div>
    </div>
  );
};
