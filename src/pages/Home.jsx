import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <p>This is a simple blog built with React Router.</p>
      <p>
        Read the <Link to="/blog">latest posts</Link>.
      </p>
    </div>
  );
}
