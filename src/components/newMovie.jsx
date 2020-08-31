import React from "react";
import Joi from "joi";
import Form from "./common/form";

class NewMovie extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {},
  };

  schema = Joi.object({
    title: Joi.string().required().label("Title"),
    numberInSotck: Joi.number().min(0).required().label("Number in Stock"),
    rate: Joi.number().required().min(0).max(10).label("Rate"),
  });

  doSubmit() {
    console.log(this.props.match.params);
    this.props.history.push("/movies");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Movie Form</h1>
          {this.renderInput("title", "Title")}
          {this.renderInput("numberInSotck", "Number In Sotck")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovie;
