"use client";

import Link from "next/link";
import "../styles/Blogcards.css";

const blogs = [
  {
    slug: "houseshifting",
    title: "House Shifting ka Complete Guide (2026)",
    subtitle: "Packing se Unpacking tak",
    date: "28 Nov, 2024",
    author: "Nex Go Team",

    // Add image at: public/images/blog/house-shifting.jpg
    image: "/images/blog/house.png",
    excerpt:
      "Ghar shift karna ek badi zimmedari hai. Is guide mein hum aapko step-by-step batayenge ki kaise packing se lekar unpacking tak har kaam smoothly ho sakta hai.",
  },
  {
    slug: "packingtips",
    title: "Professional Packing Tips for Safe Moving",
    subtitle: "Apna Saman Safely Pack Karo",
    date: "10 Dec, 2024",
    author: "Nex Go Team",
    // Add image at: public/images/blog/packing-tips.jpg
    image: "/images/blog/packing.png",
    excerpt:
      "Sahi packing se aapka saman safe rehta hai. Yahan hum aapko professional packing tips denge jo aapki relocation ko stress-free banayenge.",
  },
];

const BlogCards = () => {
  return (
    <section className="blogcards-section">
      <div className="blogcards-inner">

        {/* Section heading */}
        <div className="blogcards-head">
          <span className="blogcards-tag">● OUR ARTICLES</span>
          <h2 className="blogcards-title">
            Tips &amp; <span className="blogcards-accent">Guides</span>
          </h2>
          <p className="blogcards-sub">
            Moving se related helpful guides aur tips padho
          </p>
        </div>

        {/* Cards grid */}
        <div className="blogcards-grid">
          {blogs.map((blog) => (
            <Link
              href={`/blog/${blog.slug}`}
              key={blog.slug}
              className="bc-card"
            >
              {/* Image */}
              <div className="bc-img-wrap">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="bc-img"
                />
                
              </div>

              {/* Body */}
              <div className="bc-body">
                <p className="bc-subtitle">{blog.subtitle}</p>
                <h3 className="bc-title">{blog.title}</h3>
                <p className="bc-excerpt">{blog.excerpt}</p>

                {/* Meta */}
                <div className="bc-meta">
                  <span className="bc-meta-item">
                    {/* Author icon */}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="4"/>
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                    </svg>
                    {blog.author}
                  </span>
                  <span className="bc-meta-item">
                    {/* Calendar icon */}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8"  y1="2" x2="8"  y2="6"/>
                      <line x1="3"  y1="10" x2="21" y2="10"/>
                    </svg>
                    {blog.date}
                  </span>
                </div>

                <span className="bc-readmore">
                  Read More <span className="bc-arrow">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogCards;