import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const PostDetails = ({ posts }) => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <p>المنشور غير موجود</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p><i>{post.date}</i></p>
      <ReactMarkdown>{post.body}</ReactMarkdown>
    </div>
  );
};

export default PostDetails;
