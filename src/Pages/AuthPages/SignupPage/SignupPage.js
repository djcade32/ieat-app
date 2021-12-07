import React, { useState, useRef } from "react";
import { USERS_LIST } from "../../../data/Users/UsersList";
import profileImg from "../../../images/profile-pic-2.jpg";

import "./SignupPage.css";

function SignupPage(props) {
  const uploadRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  function emailInputHandler(event) {
    setEmail(event.target.value);
  }

  function passwordInputHandler(event) {
    setPassword(event.target.value);
  }

  function nameInputHandler(event) {
    setName(event.target.value);
  }

  function locationInputHandler(event) {
    setLocation(event.target.value);
  }

  function loginHandler() {
    props.loginHandler();
  }

  function handleImageUploadClick() {
    uploadRef.current.click();
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    const identifiedUser = USERS_LIST.find((u) => u.email === email);
    if (!identifiedUser) {
      const newUser = {
        id: "usr" + Math.floor(Math.random() * 100),
        name: name,
        profilePic: profileImg,
        location: location,
        email: email,
        password: password,
      };
      USERS_LIST.push(newUser);
      console.log(USERS_LIST);
      console.log("Successfully signed up");
      props.loginHandler();
    } else {
      return console.log("This email is already used.");
    }
  }
  return (
    <div className="signup-page-card">
      <h2 className="signup-page-title">SIGN UP</h2>
      <form onSubmit={formSubmitHandler}>
        <div className="signup-page-input-wrapper">
          <input
            onChange={nameInputHandler}
            type="text"
            placeholder="Name"
            value={name}
          />
        </div>
        <div className="signup-page-input-wrapper">
          <input
            onChange={emailInputHandler}
            type="email"
            placeholder="Email"
            value={email}
          />
        </div>
        <div className="signup-page-input-wrapper">
          <input
            onChange={passwordInputHandler}
            type="password"
            placeholder="Password"
            value={password}
          />
        </div>
        <div className="signup-page-input-wrapper">
          <input
            onChange={locationInputHandler}
            type="text"
            placeholder="Where are you from?"
            value={location}
          />
        </div>
        <button
          type="button"
          className="signup-page-button signup-page-upload-button"
          onClick={handleImageUploadClick}
        >
          <i className="fas fa-upload upload-icon"></i> Profile Image
          <input
            className="hidden-file-upload-button"
            type="file"
            ref={uploadRef}
          />
        </button>
        <div className="signup-page-action-buttons">
          <button
            type="submit"
            className="signup-page-button signup-page-sign-up-button"
          >
            SIGN UP
          </button>
        </div>
      </form>
      <p onClick={loginHandler}> Already have an account?Log in</p>
    </div>
  );
}

export default SignupPage;
