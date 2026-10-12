import { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { getBlogPostById } from "../data/blogsData";
import Footer from "./footer";

function BlogArticle() {
  const location = useLocation();
  const { blogId } = useParams();
  const navigate = useNavigate();

  const statePost = location.state?.post;
  const stateImage = location.state?.image;

  // Resolve post either from location.state or from blogsData using blogId
  const post = statePost || getBlogPostById(blogId);
  const image = stateImage || post?.image;

  const [sec, setSec] = useState(8);

  const redirect = useCallback(() => {
    navigate("/blog", { replace: true });
  }, [navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (post) {
      document.title = `${post.title} | LVC Solutions Blog`;
    }
  }, [post]);

  useEffect(() => {
    let timer;
    if (!post) {
      const timeout = setTimeout(redirect, 8000);
      timer = setInterval(() => {
        setSec((prevSec) => prevSec - 1);
      }, 1000);
      return () => {
        clearTimeout(timeout);
        clearInterval(timer);
      };
    }
  }, [post, redirect]);

  return (
    <div className="blog-post-page bg-black text-white min-vh-100">
      <div className="blog-post-container bg-black pt-5">
        {post && image ? (
          <div className="container py-4">
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-secondary text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/blog" className="text-secondary text-decoration-none">
                    Blog
                  </Link>
                </li>
                <li className="breadcrumb-item active text-info" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>

            <div className="blog-post-headings text-center mb-4">
              <h1 className="display-5 fw-bold text-white mb-3">{post.title}</h1>
              <p className="text-secondary">{post.date}</p>
            </div>

            <div className="blog-post-img-container mb-5">
              <img
                className="blog-post-img w-100"
                alt={image.alt || post.title}
                src={image.src}
              />
            </div>

            <div className="blog-post-content text-start">
              <div
                style={{ color: "#e2e8f0", lineHeight: "1.9" }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-5 pt-4 border-top border-secondary text-center">
                <Link to="/blog" className="btn btn-outline-light px-4 py-2">
                  ← Back to All Blogs
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="blog-post-error text-center py-5">
            <div className="blog-post-error-content container">
              <p style={{ color: "white", fontSize: "1.3rem" }}>
                We couldn't find the requested blog article.
                <br />
                Redirecting back to the blog in {sec} {sec === 1 ? "second" : "seconds"}...
              </p>
              <button onClick={redirect} className="btn btn-primary mt-3">
                Return to Blog Now
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default BlogArticle;
