import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { blogsData } from "../data/blogsData";
import "../style.css";
import "../styles/blogstyles.css";

const POSTS_PER_PAGE = 3;

function BlogPage() {
  const [pageNumber, setPageNumber] = useState(1);
  const blogsGridRef = useRef(null);

  const totalPosts = blogsData.length;
  const maxPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const offset = (pageNumber - 1) * POSTS_PER_PAGE;
  const currentPosts = blogsData.slice(offset, offset + POSTS_PER_PAGE);

  const goToPage = (newPage) => {
    if (newPage >= 1 && newPage <= maxPages) {
      setPageNumber(newPage);
      if (blogsGridRef.current) {
        blogsGridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <main className="blog-page">
      <div className="blog-section-herobanner">
        <div className="blog-container">
          <div className="blog-content">
            <p className="blog-subtitle">Blog</p>
            <hr className="underline" />
            <h1 className="blog-title" style={{ fontSize: "48px" }}>
              LVC Solutions Blog
            </h1>
            <h5 className="blog-description">
              Insights, updates, and ideas from our team.
            </h5>
          </div>
        </div>
      </div>

      <div
        ref={blogsGridRef}
        className="blogs-container py-5 bg-black text-white"
      >
        <div className="d-flex justify-content-between align-items-center flex-wrap px-4 mb-3">
          <h1
            style={{ color: "#fff", textAlign: "start", margin: 0 }}
            className="blog-herotitle text-white p-0"
          >
            Keep Up With Blogs
          </h1>
          <span className="text-secondary small">
            Showing {offset + 1}–{Math.min(offset + POSTS_PER_PAGE, totalPosts)} of {totalPosts} articles
          </span>
        </div>
        <hr className="underline-2" />

        <div className="blog-posts-container">
          {currentPosts.map((post) => (
            <article key={post.id} className="blog-posts text-white">
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/blog/${post.id}`}
                state={{ post, image: post.image }}
              >
                <div className="blog-post-card-inner">
                  <img
                    className="blog-posts-imgs"
                    src={post.image.src}
                    alt={post.image.alt}
                    loading="lazy"
                  />
                  <div className="p-2">
                    <h2 className="text-white blog-card-title">{post.title}</h2>
                    <small className="text-secondary blog-date d-block mb-2">
                      {post.date}
                    </small>
                    <p className="blog-desc text-secondary">
                      {post.excerpt ||
                        post.content.replace(/<[^>]*>/g, "").slice(0, 110) + "..."}
                      <br />
                      <strong className="text-info mt-1 d-inline-block">Read more →</strong>
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="blog-pagination-wrapper my-5">
          <div className="blog-arrows d-flex align-items-center justify-content-center gap-3">
            {/* Previous Arrow */}
            <button
              type="button"
              className={`pagination-arrow-btn ${pageNumber === 1 ? "disabled" : ""}`}
              onClick={() => goToPage(pageNumber - 1)}
              disabled={pageNumber === 1}
              aria-label="Previous page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                />
              </svg>
            </button>

            {/* Page Number Pills */}
            <div className="pagination-numbers-list d-flex gap-2">
              {Array.from({ length: maxPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  className={`page-pill-btn ${pageNumber === pageNum ? "active" : ""}`}
                  onClick={() => goToPage(pageNum)}
                  aria-label={`Go to page ${pageNum}`}
                  aria-current={pageNumber === pageNum ? "page" : undefined}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            {/* Next Arrow */}
            <button
              type="button"
              className={`pagination-arrow-btn ${pageNumber === maxPages ? "disabled" : ""}`}
              onClick={() => goToPage(pageNumber + 1)}
              disabled={pageNumber === maxPages}
              aria-label="Next page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </button>
          </div>
          <div className="text-center text-secondary small mt-2">
            Page {pageNumber} of {maxPages}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default BlogPage;
