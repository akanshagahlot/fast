"use client";

import "../styles/Blogheader.css";

const BlogHeader = () => {
  return (
    <section className="blog-header">

    

      {/* Dark overlay */}
      <div className="bh-overlay" />

      {/* Grid texture */}
      <div className="bh-texture" />

      {/* Left accent bar */}
      <div className="bh-accent-bar" />

      {/* Bottom border */}
      <div className="bh-bottom-border" />

      {/* Content */}
      <div className="bh-content">
        <div className="bh-badge">
          <span className="bh-dot" />
          OUR BLOG
        </div>

        <h1 className="bh-title">
          LATEST <span className="bh-orange">ARTICLES</span>
        </h1>

        <p className="bh-sub">
          Moving tips, guides aur helpful resources padhiye
        </p>

        <nav className="bh-breadcrumb">
          <a href="/" className="bh-bc-link">Home</a>
          <span className="bh-bc-sep">»</span>
          <span className="bh-bc-active">Blog</span>
        </nav>
      </div>

    </section>
  );
};

export default BlogHeader;