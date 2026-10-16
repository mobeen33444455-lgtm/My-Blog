import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts";

export default function BlogList() {
  return (
    <div>
      <h1>All Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: 10 }}>
            <Link to={`/blog/${post.id}`}><strong>{post.title}</strong></Link>
            <div style={{ fontSize: 12, color: "#555" }}>by {post.author}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
