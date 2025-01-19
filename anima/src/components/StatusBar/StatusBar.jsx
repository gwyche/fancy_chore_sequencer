/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const StatusBar = ({ className, leftSideClassName }) => {
  return (
    <div className={`status-bar ${className}`}>
      <img
        className="right-side"
        alt="Right side"
        src="https://c.animaapp.com/AsaqrlLh/img/right-side-1@2x.png"
      />

      <div className={`left-side ${leftSideClassName}`} />
    </div>
  );
};
