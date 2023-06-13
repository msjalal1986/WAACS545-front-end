import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <h4>{props.title}</h4>
      <div>{props.author}</div>
    </div>
  );
};

export default Post;
