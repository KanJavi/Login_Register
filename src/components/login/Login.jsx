import React, { Component } from "react";
import StyleLogin from "./StyleLogin.css";
export default class Login extends Component {
  render() {
    return (
      <div id="body">
        <div id="container">
          <h1 id="h1login">Login Form</h1>
          <div className="form-control">
            <input type="text" placeholder="Username" id="userNameLogin" />
          </div>
          <div className="form-control">
            <input type="password" placeholder="Password" id="passwordLogin" />
          </div>
          <button type="submit" className="btn-submit">
            Login
          </button>
          <div className="sigup-link">
            not a member? <a href="formregister.html">Signup</a>
          </div>
        </div>
      </div>
    );
  }
}
