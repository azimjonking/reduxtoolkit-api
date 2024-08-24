import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slice/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
