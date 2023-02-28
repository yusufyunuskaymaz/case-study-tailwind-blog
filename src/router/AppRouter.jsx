import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateNewPost from "../components/CreateNewPost";
import Navbar from "../components/Navbar";
import PostDetail from "../components/PostDetail";
import PostsPage from "../components/PostsPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="" element={<PostsPage />}></Route>
        <Route path="post-detail" element={<PostDetail />}></Route>
        <Route path="post-create" element={<CreateNewPost />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
