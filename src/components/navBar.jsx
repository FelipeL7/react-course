import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="badge badge-pill badge-secondary">
        {props.totalCounters}
      </span>
    </nav>
  );
};
export default NavBar;
