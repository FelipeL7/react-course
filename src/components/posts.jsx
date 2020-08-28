import React from "react";
import queryString from "query-string";

// this.props.match.params
const Posts = ({ match, location }) => {
  // Can pass location.search ou location.hash directly
  // This return an object based on the query string
  const result = queryString.parse(location.search);
  console.log(result);
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year} , Month: {match.params.month}
    </div>
  );
};

export default Posts;
