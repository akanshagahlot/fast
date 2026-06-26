"use client";

import Link from "next/link";
import "../styles/Blogcards.css";

const blogs = [
  {
    slug: "houseshifting",
    title: "House Shifting Complete Guide (2026)",
    subtitle: "From Packing to Safe Delivery",
    date: "28 Nov, 2024",
    author: "Fast Professional Cargo Movers Team",

    image: "/images/blog/house.png",
    excerpt:
      "House shifting requires proper planning and professional handling. Our packing moving services and door to door parcel service ensure a stress-free move from packing to unloading across India.",
  },
  {
    slug: "packingtips",
    title: "Professional Packing Tips for Safe Relocation",
    subtitle: "Keep Your Belongings Safe",
    date: "10 Dec, 2024",
    author: "Fast Professional Cargo Movers Team",

    image: "/images/blog/packing.png",
    excerpt:
      "Proper packing ensures the safety of your valuable belongings. Learn techniques used by experts providing cargo transportation services and goods transport services in India, trusted for transport services Ahmedabad customers rely on.",
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
            Moving Tips &amp; <span className="blogcards-accent">Guides</span>
          </h2>
          <p className="blogcards-sub">
            Read useful articles and relocation tips from Fast Professional Cargo Movers
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
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                    {blog.author}
                  </span>

                  <span className="bc-meta-item">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
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