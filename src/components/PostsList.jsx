import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/slice/postsSlice";
import { deletePost } from "../redux/slice/postsSlice";

import Modal from "./modal/Modal";
import UpdatePost from "./UpdatePost";
import { FaXmark } from "react-icons/fa6";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  const [showModal, setShowModal] = useState(false);
  const [updatePost, setUpdatePost] = useState(null);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div>
      {showModal && (
        <Modal>
          <UpdatePost updatePostData={updatePost} />
          <button
            onClick={() => {
              setShowModal(false);
              setUpdatePost(null);
            }}
          >
            <FaXmark />
          </button>
        </Modal>
      )}

      <h1>Posts</h1>
      {postStatus === "loading" && <p>Loading...</p>}
      {postStatus === "failed" && <p>Error: {error}</p>}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button
              onClick={() => {
                setUpdatePost(post);
                setShowModal(true);
              }}
            >
              Update
            </button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
