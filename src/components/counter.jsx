import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        {/* <span>{this.state.count}</span> */}
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount = () => {
    const { count } = this.state;

    // Return a plain text like "Zero"
    // return count === 0 ? "Zero" : count;

    // We can also return a jsx expression
    return count === 0 ? <h1>Zero</h1> : count;
  };
}

export default Counter;
