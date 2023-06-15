import "./Post.css";
import {Link} from 'react-router-dom'
import { SelectedPostContext } from "../context/postContext";

const Post = (props) => {
  const { selectedPost, setSelectedPost } = useContext(SelectedPostContext);
 
  return (
    <>
    <div className="post">
      <div><Link to={`/post-details/${props.id}`}>{props.id}</Link></div>
      <h4>{props.title}</h4>
      <div>{props.author}</div>
    </div>
    </>
  ); 
};

export default Post;
