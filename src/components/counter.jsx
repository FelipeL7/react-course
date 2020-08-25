import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };

  styles = {
    // Css propertys in camelCase notation
    fontSize: 40,
    fontWeight: "bold",
  };

  render() {
    return (
      <React.Fragment>
        {/* <span>{this.state.count}</span> */}
        <img src={this.state.imageUrl} alt="" />
        {/* <span className="badge badge-primary m-2">{this.formatCount()}</span> */}

        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCount = () => {
    const { count } = this.state;

    // Return a plain text like "Zero"
    return count === 0 ? "Zero" : count;

    // We can also return a jsx expression
    // return count === 0 ? <h1>Zero</h1> : count;
  };
}

export default Counter;
