import React, { useState, useRef, useEffect } from "react";
import { USERS_LIST } from "../../../data/Users/UsersList";
import profileImg from "../../../images/profile-pic-2.jpg";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import "./SignupPage.css";

function SignupPage(props) {
  const uploadRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidLocation, setIsValidLocation] = useState(true);
  const [isValidForm, setIsValidForm] = useState(true);

  useEffect(() => {
    console.log(location);
    if (location !== "") {
      setIsValidLocation(true);
    } else {
      setIsValidForm(false);
      setIsValidLocation(false);
    }
  }, [location]);

  function emailInputHandler(event) {
    if (/^\S+@\S+\.\S+$/.test(event.target.value)) {
      setIsValidEmail(true);
    } else {
      setIsValidForm(false);
      setIsValidEmail(false);
    }
    setEmail(event.target.value);
  }

  function passwordInputHandler(event) {
    if (event.target.value.length >= 6) {
      setIsValidPassword(true);
    } else {
      setIsValidForm(false);
      setIsValidPassword(false);
    }
    setPassword(event.target.value);
  }

  function nameInputHandler(event) {
    console.log(event.target.value.length);
    if (event.target.value.length > 0) {
      setIsValidName(true);
    } else {
      setIsValidForm(false);
      setIsValidName(false);
    }
    setName(event.target.value);
  }

  function loginHandler() {
    props.loginHandler();
  }

  function handleImageUploadClick() {
    uploadRef.current.click();
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log("name: " + isValidName);
    if (isValidEmail && isValidLocation && isValidName && isValidPassword) {
      setIsValidForm(true);
    } else {
      setIsValidLocation(false);
      return;
    }

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
          {!isValidName && (
            <p className="signup-page-error-label">Must enter a valid name.</p>
          )}
        </div>
        <div className="signup-page-input-wrapper">
          <input
            onChange={emailInputHandler}
            type="text"
            placeholder="Email"
            value={email}
          />
          {!isValidEmail && (
            <p className="signup-page-error-label">Must enter a valid email.</p>
          )}
        </div>
        <div className="signup-page-input-wrapper">
          <input
            onChange={passwordInputHandler}
            type="password"
            placeholder="Password"
            value={password}
          />
          {!isValidPassword && (
            <p className="signup-page-error-label">
              Password must have a length of at least 6.
            </p>
          )}
        </div>

        <div className="signup-page-input-wrapper">
          <GooglePlacesAutocomplete
            apiKey="AIzaSyA8La_OuuXHnsK2OE9QBqvaVSjWlmDlMr0"
            autocompletionRequest={{ types: ["geocode"] }}
            selectProps={{
              openMenuOnClick: false,
              // menuIsOpen: true,
              styles: {
                dropdownIndicator: () => ({
                  display: "none",
                }),
                indicatorSeparator: () => ({
                  display: "none",
                }),
                container: () => ({
                  fontSize: ".75rem",
                  width: "75%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  position: "relative",
                }),
                control: () => ({
                  backgroundColor: "white",
                  border: " none",
                  borderRadius: " 0.5em",
                  caretColor: " var(--font-color)",
                  fontFamily: " var(--font-family)",
                }),
              },
              placeholder: "Where are you from?",
              value: location,
              onChange: setLocation,
            }}
          />
          {!isValidLocation && (
            <p className="signup-page-error-label">
              Must enter a valid location.
            </p>
          )}
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
        {!isValidForm && (
          <p className="signup-page-error-label">Must fix invalid fields.</p>
        )}
      </form>
      <p onClick={loginHandler}> Already have an account?Log in</p>
    </div>
  );
}

export default SignupPage;
