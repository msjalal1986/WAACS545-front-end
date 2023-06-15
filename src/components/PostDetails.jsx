import { useContext, useEffect, useState } from "react";
import DefaultPosts from "./DefaultPosts";
import { useParams } from "react-router-dom";

function PostDetails() {
    const {id}= useParams();
    const post = DefaultPosts.filter(post => post.id.toString() === id)[0];
     
      return (
        <div className="center">
          <h1>Posts</h1>
          <div className="posts-container">
            <div className="post">
            <div>Id: {post.id}</div>
            <div>Title: {post.title}</div>
            <div>Author: {post.author}</div>
            </div>
          </div>
        </div>
      );
}

export default PostDetails;
