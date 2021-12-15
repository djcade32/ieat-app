import React, { useState } from "react";
import "./LoginPage.css";
import { USERS_LIST } from "../../../data/Users/UsersList";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  let navigate = useNavigate();

  function emailInputHandler(event) {
    setEmail(event.target.value);
  }

  function passwordInputHandler(event) {
    setPassword(event.target.value);
  }

  function signupHandler() {
    props.signupHandler();
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    const identifiedUser = USERS_LIST.find((u) => u.email === email);
    if (!identifiedUser || identifiedUser.password !== password) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
      let route = `/${identifiedUser.id}`;
      console.log("Succesfully logged in");
      navigate(route, { replace: true });
    }
  }
  return (
    <div className="login-page-card">
      <h2 className="login-page-title">LOG IN</h2>
      <form onSubmit={formSubmitHandler} autoComplete="off">
        <div className="login-page-input-wrapper">
          <input
            onChange={emailInputHandler}
            type="email"
            placeholder="Email"
            value={email}
            autoComplete="off"
          />
        </div>
        <div className="login-page-input-wrapper">
          <input
            onChange={passwordInputHandler}
            type="password"
            placeholder="Password"
            value={password}
            autoComplete="off"
          />
        </div>
        {!isValid && (
          <p className="login-page-error">
            Credentials are incorrect. Try again.
          </p>
        )}
        <div className="login-page-action-buttons">
          <button
            type="submit"
            className="login-page-button login-page-sign-in-button"
          >
            SIGN IN
          </button>
          <button
            className="login-page-button login-page-sign-up-button"
            onClick={signupHandler}
          >
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
