import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const linkStyle = { marginRight: 12 };
  return (
    <nav>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/blog" style={linkStyle}>Blog</Link>
    </nav>
  );
}
