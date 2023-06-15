import { useRef, useState } from "react";
import axios from "axios";
import api from "./api";

export default function NewPost(props) {
  
  const formRef = useRef(null);

  const onAddPost = (event) => {
    event.preventDefault();
    //save data
    saveNewPost();
  };

  const saveNewPost = () => {
    const form = formRef.current;
    const newPostData = {
      title: form["title"].value,
      content: form["content"].value,
      author: form["author"].value,
      userId: 1,
    };
    console.log("newPostData: ", newPostData);

    axios
      .post(api.postsUrl, newPostData)
      .then((res) => {
        console.log("saveNewPosts data: ", res.data);
        //reload data in dashboard
        props.onAddPost();
      })
      .catch((err) => {
        console.log("saveNewPost error: ", err);
      });
  };

  return (
    <div className="content-detail">
      <h1>Add a Post</h1>

      <form ref={formRef} onSubmit={onAddPost}>
        <div>
          <label>Title</label>
          <input type="text"  name={"title"} />
        </div>
        <div>
          <label>Content</label>
          <input type="text" name={"content"} />
        </div>
        <div>
          <label>Author</label>
          <input type="text"  name={"author"} />
        </div>
        <button>Add Post </button>
      </form>
    </div>
  );
}
