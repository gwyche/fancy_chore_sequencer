/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Buttons = ({ text = "Button", type, state, className }) => {
  return (
    <button className={`buttons ${className}`}>
      <div className="button">{text}</div>
    </button>
  );
};
