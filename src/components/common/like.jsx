import React from "react";

const Like = props => {
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
    >
      {!props.liked ? '\u2661' : '\u2665'}
    </i>
  );
};

export default Like;
