import React, { useState } from "react";

import s from "./home.module.css"


function Home() {
  function myFunction() {
    window.location = "/video";
  }
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form className={s.logbox} onSubmit={handleSubmit}>
        <h1 className={s.login1}>Login</h1>
        <div className="input-container">
          <label>Username </label>
          <input className={s.textbox01}  type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input className={s.textbox02} type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button className={s.subbtn01} type="submit">submit</button>
        </div>
      </form>
    </div>
  );
 
  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? myFunction() : renderForm}
      </div>
      <div></div>
    </div>
  );
}

export default Home;


