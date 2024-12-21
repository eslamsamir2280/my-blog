import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const context = require.context("../content", false, /\.md$/);
      const files = context.keys().map(context);
      const posts = files.map((file) => ({
        ...file.attributes,
        slug: file.attributes.slug,
      }));
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>المدونة</h1>
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default Home;
