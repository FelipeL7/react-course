import React from "react";
import Joi from "joi";
import { login } from "../services/authService";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().required().min(3).label("Username"),
    password: Joi.string().required().label("Password"),
  });

  doSubmit = async () => {
    const { data } = this.state;
    await login(data.username, data.password);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
