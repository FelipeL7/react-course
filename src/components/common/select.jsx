import React from "react";

const Select = ({ error, name, label, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}
        <select name={name} id={name} {...rest} className="form-control">
          <option value="" />
          {options.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>

        {error && <div className="alert alert-danger">{error}</div>}
      </label>
    </div>
  );
};

export default Select;
