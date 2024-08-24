import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../redux/slice/postsSlice";

const UpdatePost = ({ updatePostData }) => {
  const dispatch = useDispatch();


  const [updateId, setUpdateId] = useState(updatePostData.id);
  const [updateTitle, setUpdateTitle] = useState(updatePostData.title);
  const [updateBody, setUpdateBody] = useState(updatePostData.body);

  const handleUpdatePost = () => {
    dispatch(
      updatePost({
        id: updateId,
        updatedPost: { title: updateTitle, body: updateBody },
      })
    );
    setUpdateId(null);
    setUpdateTitle("");
    setUpdateBody("");
  };

  return (
    <div>
      <h2>Update Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={updateTitle}
        onChange={(e) => setUpdateTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={updateBody}
        onChange={(e) => setUpdateBody(e.target.value)}
      />
      <button onClick={handleUpdatePost}>Save Changes</button>
    </div>
  );
};

export default UpdatePost;
