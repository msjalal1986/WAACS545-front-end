import { useContext, useEffect, useState } from "react";
import Post from "./Post";

function Posts() {
  const [postsState, setPosts] = useState([
    { id: 1, title: "MIU", author: "Jalal" },
    { id: 2, title: "Happiness", author: "Ahnaf" },
    { id: 3, title: "Enjoy Life", author: "Bangladesh" },
  ]);

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
