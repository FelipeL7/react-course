import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="badge badge-pill badge-secondary">
          {this.props.totalCounters}
        </span>
      </nav>
    );
  }
}
export default NavBar;
