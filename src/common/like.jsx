import React from "react";

const Like = ({ onLike, liked }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i style={{ cursor: "pointer" }} className={classes} onClick={onLike} />
  );
};

export default Like;
