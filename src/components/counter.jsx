import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = (a) => {
    let value = a;
    value += 1;
    this.setState({ value });
  };

  // renderTags() {
  //   const tags = this.state.tags;
  //   if (tags.length <= 0) return <p>There are no tags!</p>;

  //   return tags.map((tag) => <li key={tag}>{tag}</li>);
  // }

  render() {
    return (
      <div className="row container">
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.state.value)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount = () => {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
