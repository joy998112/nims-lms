import React from "react";
import "../components/Login.css";

export default function Login() {
  return (
    <div id="login-page">
      <div id="login-div">
        <div id="login-top">
          <img src="nims.jpg" height={"50px"} alt="" />
        </div>
        <div>
          <form id="login-form">
            <div className="form-group">
              <label htmlFor="studentid">Student ID</label>
              <input
                type="text"
                className="form-control"
                id="studentid"
                placeholder="Student ID"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
              />
            </div>
            <div id="button-n-forget" >
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <a href="/">Forget Password ?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
