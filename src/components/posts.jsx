import React from "react";
// this.props.match.params
const Posts = ({ match }) => {
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year} , Month: {match.params.month}
    </div>
  );
};

export default Posts;
