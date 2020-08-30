import React, { Component } from "react";
import Joi from "joi";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().required().min(3).label("Username"),
    password: Joi.string().required().label("Password"),
  });

  validate = () => {
    const { error } = this.schema.validate(this.state.account, {
      abortEarly: false,
    });
    if (!error) return null;

    // Map the array into a object
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = Joi.object({ [name]: this.schema.extract(name) });
    const result = schema.validate(obj);
    return result.error ? result.error.details[0].message : null;

    // if (result.error) return null;
    // return result.error.details[0].message;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    // Call the server
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    // Desctruring e.currentTarget and rename it to input
    const errors = { ...this.state.errors };

    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form>
          <Input
            name={"username"}
            label={"Username"}
            value={account.username}
            error={errors.username}
            onChange={this.handleChange}
          />
          <Input
            name={"password"}
            label={"Password"}
            value={account.password}
            error={errors.password}
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
          <button
            disabled={this.validate()}
            onClick={this.handleSubmit}
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
