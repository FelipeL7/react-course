import React from "react";

const Input = ({ error, name, label, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}
        <input id={name} name={name} {...rest} className="form-control" />
        {error && <div className="alert alert-danger">{error}</div>}
      </label>
    </div>
  );
};

export default Input;
