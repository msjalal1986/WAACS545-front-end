import Posts from "./Posts";
import   "../components/Post.css";
import { Link } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="posts-container">
        
        <div>
          <Link to="/"> Posts</Link>|
          <Link to="/post-details">Post Details</Link>
          <Link to="/new-post"> New Post</Link>
        </div>

        
      </div>

      
    );
  };


  
  export default DashBoard;
  