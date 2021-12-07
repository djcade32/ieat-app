import React, { useState } from "react";
import LoginPage from "./LoginPage/LoginPage";
import "./Auth.css";
import SignupPage from "./SignupPage/SignupPage";

function Auth() {
  const [viewLogin, setViewLogin] = useState(true);

  function loginClicked() {
    setViewLogin(true);
  }

  function signupClicked() {
    setViewLogin(false);
  }

  return (
    <div className="auth-page">
      {viewLogin ? (
        <LoginPage signupHandler={signupClicked} />
      ) : (
        <SignupPage loginHandler={loginClicked} />
      )}
    </div>
  );
}

export default Auth;
