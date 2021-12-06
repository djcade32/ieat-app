import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./LoginPage.css";
import { USERS_LIST } from "../../data/Users/UsersList";
import RestaurantPage from "../RestaurantPage/RestaurantPage";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailInputHandler(event) {
    setEmail(event.target.value);
  }

  function passwordInputHandler(event) {
    setPassword(event.target.value);
  }

  function signInHandler() {
    const identifiedUser = USERS_LIST.find((u) => u.email === email);
    if (!identifiedUser) {
      return console.log("incorrect credentials");
    } else if (identifiedUser.password === password) {
      console.log("Succesfully logged in");
    }
  }
  return (
    <div className="login-page">
      <div className="login-page-card">
        <h2 className="login-page-title">Log In</h2>
        <div className="login-page-input-wrapper">
          <input
            onChange={emailInputHandler}
            type="email"
            placeholder="Email"
            value={email}
          />
        </div>
        <div className="login-page-input-wrapper">
          <input
            onChange={passwordInputHandler}
            type="password"
            placeholder="Password"
            value={password}
          />
        </div>
        <div className="login-page-action-buttons">
          <button
            className="login-page-button login-page-sign-in-button"
            onClick={signInHandler}
          >
            SIGN IN
          </button>
          <button className="login-page-button login-page-sign-up-button">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
