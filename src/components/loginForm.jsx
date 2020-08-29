import React, { Component } from "react";

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">
              Username
              <input id="username" type="text" className="form-control" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password
              <input type="text" id="password" className="form-control" />
            </label>
          </div>
          <button onClick={this.handleSubmit} className="btn btn-primary">
            Login
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
