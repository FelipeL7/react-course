import React, { Component } from "react";
import Input from "./common/input";

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

  handleChange = ({ currentTarget: input }) => {
    // Desctruring e.currentTarget and rename it to input
    const account = this.state.account;
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form>
          <Input
            name={"username"}
            label={"Username"}
            value={account.username}
            onChange={this.handleChange}
          />
          <Input
            name={"password"}
            label={"Password"}
            value={account.password}
            onChange={this.handleChange}
          />

          {/* <div className="form-group">
            <label htmlFor="password">
              Password
              <input
                className="form-control"
                id="password"
                name="password"
                type="password"
                value={account.password}
                onChange={this.handleChange}
              />
            </label>
          </div> */}
          <button onClick={this.handleSubmit} className="btn btn-primary">
            Login
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
