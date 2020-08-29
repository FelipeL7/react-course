import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };
  username = React.createRef();

  // componentDidMount() {
  //   this.username.current.focus();
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", this.username.current.value);
  };

  handleChange = (e) => {
    const account = this.state.account;
    account.username = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">
              Username
              <input
                autoFocus
                ref={this.username}
                onChange={this.handleChange}
                value={this.state.account.username}
                id="username"
                className="form-control"
              />
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
