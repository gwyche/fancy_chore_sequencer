import React from "react";
import { Buttons } from "../../components/Buttons";
import { LoginFormInput } from "../../components/LoginFormInput";
import { StatusBar } from "../../components/StatusBar";
import "./style.css";

export const LoginLandingPage = () => {
  return (
    <div className="login-landing-page">
      <StatusBar
        className="status-bar-placeholder"
        leftSideClassName="status-bar-instance"
      />
      <div className="overlap-group">
        <p className="fancy-chore">
          <span className="span">
            Fancy
            <br />
          </span>

          <span className="text-wrapper-2">Chore Sequencer</span>
        </p>

        <img
          className="lucide-pencil-ruler"
          alt="Lucide pencil ruler"
          src="https://c.animaapp.com/AsaqrlLh/img/lucide-pencil-ruler.svg"
        />
      </div>

      <LoginFormInput
        className="login-form-input-instance"
        inputField="Email"
        inputFieldHeader="Email"
        state="default"
      />
      <LoginFormInput
        className="design-component-instance-node"
        inputField="Password"
        inputFieldHeader="Password"
        state="default"
      />
      <div className="div">Forget Password?</div>

      <Buttons
        className="buttons-instance"
        state="default"
        text="Login"
        type="primary"
      />
      <div className="frame-2">
        <img
          className="line"
          alt="Line"
          src="https://c.animaapp.com/AsaqrlLh/img/line-16.svg"
        />

        <img
          className="img"
          alt="Line"
          src="https://c.animaapp.com/AsaqrlLh/img/line-16.svg"
        />

        <div className="text-wrapper-3">or</div>
      </div>

      <div className="frame-3">
        <img
          className="img-2"
          alt="Mdi facebook"
          src="https://c.animaapp.com/AsaqrlLh/img/mdi-facebook.svg"
        />

        <div className="text-wrapper-4">Login with Facebook</div>
      </div>

      <div className="frame-4">
        <img
          className="img-2"
          alt="Flat color icons"
          src="https://c.animaapp.com/AsaqrlLh/img/flat-color-icons-google.svg"
        />

        <div className="text-wrapper-4">Login with Google</div>
      </div>
    </div>
  );
};
