import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import posts from "../data/posts";

export default function BlogPost() {
  const { id } = useParams(); // get post id from URL
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
       <div>
        <h2>Post not found</h2>
        <button onClick={() => navigate("/blog")}>Back to Posts</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Back</button>
      <h2>{post.title}</h2>
      <div style={{ fontSize: 13, color: "#666" }}>by {post.author}</div>
      <p style={{ marginTop: 10 }}>{post.body}</p>
      <hr />
      <button onClick={() => navigate("/blog")}>Go to Blog List</button>
    </div>
  );
}
