import React, { Component, useState } from "react";
import { BASE_URL } from "./URL";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "AdarshT") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch(`${BASE_URL}/register`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
        <table className=' table light padding table-responsive border border-secondary-100'>
        <div>
        <h3>Register</h3>
            <tr>
            <th>
          Register As<br />
          Admin
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            /></th>
            <th>
            RegionalPhem
            <input
              type="radio"
              name="UserType"
              value="RegionalPhem"
              onChange={(e) => setUserType(e.target.value)}
            /></th>
            </tr>
            <tr>
             <th> 
            SubCityPhem
            <input
              type="radio"
              name="UserType"
              value="SubCityPhem"
              onChange={(e) => setUserType(e.target.value)}
            /></th>
            <th>
            Reserch
            <input
              type="radio"
              name="UserType"
              value="Reserch"
              onChange={(e) => setUserType(e.target.value)}
            /></th>
            </tr>
            <tr>
            <th>
             IRB
            <input
              type="radio"
              name="UserType"
              value="IRB"
              onChange={(e) => setUserType(e.target.value)}
            /></th>
            <th>
              HFPhem <br />
            <input
              type="radio"
              name="UserType"
              value="HFPhem"
              onChange={(e) => setUserType(e.target.value)}
            /></th>
            </tr>
            <tr>
            <th>
             Student 
            <input
              type="radio"
              name="UserType"
              value="Student"
              onChange={(e) => setUserType(e.target.value)}
            /></th>
            <th>
           User 
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            /></th>
            </tr>
            </div>
            </table >
          
          {userType == "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/login">Login?</a>
          </p>
        </form>
      </div>
    </div>
  );
}