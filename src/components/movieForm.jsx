import React, { Component } from "react";

class MovieForm extends Component {
  handleSubmit = () => {
    this.props.history.push("/movies");
  };

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>Movie Form {match.params.id}</h1>
        <button onClick={this.handleSubmit} className="btn btn-sm btn-primary">
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
