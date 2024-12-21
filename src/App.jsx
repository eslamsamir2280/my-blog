import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:slug" element={<PostDetails />} />
    </Routes>
  </Router>
);

export default App;
