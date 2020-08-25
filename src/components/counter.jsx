import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    let count = this.state.count;
    count += 1;
    this.setState({ count });
  };

  // renderTags() {
  //   const tags = this.state.tags;
  //   if (tags.length <= 0) return <p>There are no tags!</p>;

  //   return tags.map((tag) => <li key={tag}>{tag}</li>);
  // }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };
}

export default Counter;
