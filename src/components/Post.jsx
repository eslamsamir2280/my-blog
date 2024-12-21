import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => (
  <div className="post">
    <h2>{post.title}</h2>
    <p>{post.excerpt}</p>
    <Link to={`/post/${post.slug}`}>اقرأ المزيد</Link>
  </div>
);

export default Post;
