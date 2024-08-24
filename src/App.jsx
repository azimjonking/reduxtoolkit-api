import React, { useState } from "react";
import PostsList from "./components/PostsList";
import "./App.css";
import AddPost from "./components/AddPost";
import { FaXmark } from "react-icons/fa6";
import Modal from "./components/modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal>
          <AddPost />
          <button onClick={() => setShowModal(false)}>
            <FaXmark />
          </button>
        </Modal>
      )}

      <div className="container">
        <button onClick={() => setShowModal(true)}>Add Post</button>

        <PostsList />
      </div>
    </>
  );
}

export default App;
