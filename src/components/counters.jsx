import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        {/* <Counter />
        <Counter />
        <Counter /> */}
        {this.state.counters.map((c) => (
          <Counter key={c.id} value={c.value} selected={true}>
            <h1>Title</h1>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
