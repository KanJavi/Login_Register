import React, { Component } from "react";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      comfirmPassword: "",
    };
  }
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log("handleChange", name, value);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    let a = 1;
    e.preventDefault();
    let formData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      comfirmPassword: this.state.comfirmPassword,
    };
    console.log("form data", formData);
    this.setState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  render() {
    return (
      <div id="body">
        <div id="container">
          <h1>Register Form</h1>
          <form id="form">
            <div className="form-control">
              <input
                className="form-control1"
                name="username"
                type="text"
                id="userNameRegister"
                placeholder="Username"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <div className="error-message" id="usernameError" />
            </div>
            <div className="form-control">
              <input
                className="form-control1"
                name="email"
                type="email"
                id="emailRegister"
                placeholder="Email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <div className="error-message" id="emailError" />
            </div>
            <div className="form-control">
              <input
                className="form-control1"
                type="password"
                name="password"
                id="passwordRegister"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.state.password}
              />
              <div className="error-message" id="passwordError" />
            </div>
            <div className="form-control">
              <input
                className="form-control1"
                type="password"
                name="confirmPassword"
                id="comfirmPasswordRegister"
                placeholder="Confirm password"
                onChange={this.handleChange}
                value={this.state.confirmPassword}
              />
              <div className="error-message" id="passwordConfirmError" />
            </div>
            <button
              type="submit"
              className="btn-submit"
              onClick={this.handleSubmit}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}
