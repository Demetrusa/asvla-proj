import React from "react";
import "./LogInBox.scss";

const Login: React.FC = () => {
  return (
    <div className="loginSection">
      <div className="loginSection-Logo">
        <div className="img"></div>
      </div>
      <div className="registrationButton">
        <span>რეგისტრაცია</span>
      </div>
      <div className="loginButton">შესვლა</div>
    </div>
  );
};
export default Login;
