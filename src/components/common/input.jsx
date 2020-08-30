import React from "react";

const Input = ({ name, value, label, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}
        <input
          id={name}
          name={name}
          type={name}
          value={value}
          onChange={onChange}
          className="form-control"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </label>
    </div>
  );
};

export default Input;
