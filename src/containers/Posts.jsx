import { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import DefaultPosts from "../components/DefaultPosts";

function Posts() {
  const [postsState, setPosts] = useState(DefaultPosts);

  return (
    <div className="center">
      <h1>Posts</h1>
      <div className="posts-container">
        {
          postsState.map(post => <Post {...post} />)
        }
      </div>
    </div>
  );
}
export default Posts;
