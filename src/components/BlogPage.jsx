import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/blogs")
      .then(res => setBlogs(res.data));
  }, []);

  return (
    <section className="blog-section">
        <style>{`
             
             .blog-section {
  padding: 120px 6%;
  background: #f8fafc;
}

.blog-title {
  text-align: center;
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 60px;
  background: linear-gradient(90deg,#ff7a00,#6a5cff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
  gap: 40px;
}

.blog-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  transition: 0.4s ease;
}

.blog-card:hover {
  transform: translateY(-10px);
}

.blog-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.blog-content {
  padding: 25px;
}

.read-more {
  display: inline-block;
  margin-top: 15px;
  font-weight: 600;
  color: #ff7a00;
}

.share-icons {
  margin-top: 20px;
  display: flex;
  gap: 15px;
  font-size: 20px;
}

        `}</style>
      <h2 className="blog-title">Our Latest Insights</h2>

      <div className="blog-grid">
        {blogs.map(blog => (
          <div className="blog-card" key={blog._id}>
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.content.slice(0,120)}...</p>

              <Link to={`/blog/${blog._id}`} className="read-more">
                Read More →
              </Link>

              <div className="share-icons">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank">
                  <FaFacebook />
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank">
                  <FaTwitter />
                </a>
                <a href={`https://wa.me/?text=${window.location.href}`} target="_blank">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
