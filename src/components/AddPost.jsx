import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/slice/postsSlice";

const AddPost = () => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const handleCreatePost = () => {
    dispatch(createPost({ title: newTitle, body: newBody }));
    setNewTitle("");
    setNewBody("");
  };
  return (
    <div>
      <h2>Create a New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={newBody}
        onChange={(e) => setNewBody(e.target.value)}
      />
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default AddPost;
