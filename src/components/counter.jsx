import React, { Component } from "react";

class Counter extends Component {
  // Here
  state = {
    value: this.props.counter.value,
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
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.handleIncrement(this.state.value)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
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
