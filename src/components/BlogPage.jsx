import React from "react";

export default function Blog() {
  return (
    <section className="blog-section">
      <style>{`
        .blog-section {
          width: 100%;
          min-height: 55vh;
          padding: 80px 20px;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow-x: hidden;
        }

        .blog-container {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .blog-badge {
          display: inline-block;
          margin-bottom: 22px;
          padding: 9px 20px;
          border-radius: 30px;
          background: #fff1e8;
          color: #f97316;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .blog-title {
          margin: 0 0 20px;
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.15;
          font-weight: 800;
          color: #0f172a;
        }

        .blog-title span {
          background: linear-gradient(90deg, #f97316, #6a5cff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .blog-description {
          max-width: 700px;
          margin: 0 auto 35px;
          color: #64748b;
          font-size: 18px;
          line-height: 1.7;
        }

        .blog-message {
          width: 100%;
          max-width: 650px;
          margin: 0 auto;
          padding: 30px 24px;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.06);
        }

        .blog-message h3 {
          margin: 0 0 12px;
          color: #0f172a;
          font-size: 24px;
          line-height: 1.3;
          font-weight: 700;
        }

        .blog-message p {
          margin: 0;
          color: #64748b;
          font-size: 16px;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .blog-section {
            min-height: 55vh;
            padding: 65px 16px 75px;
          }

          .blog-description {
            font-size: 16px;
          }

          .blog-message {
            padding: 25px 18px;
          }

          .blog-message h3 {
            font-size: 21px;
          }

          .blog-message p {
            font-size: 15px;
          }
        }

        @media (max-width: 400px) {
          .blog-section {
            padding-left: 14px;
            padding-right: 14px;
          }

          .blog-title {
            font-size: 34px;
          }
        }
      `}</style>

      <div className="blog-container">
        <div className="blog-badge">Our Blog</div>

        <h1 className="blog-title">
          Our Latest <span>Insights</span>
        </h1>

        <p className="blog-description">
          Explore travel tips, boating guides, destination ideas, and
          unforgettable experiences from Bienvenue Boating.
        </p>

        <div className="blog-message">
          <h3>Our blog is coming soon</h3>

          <p>
            We are preparing helpful travel tips, boating updates, destination
            guides, and exciting stories. Stay tuned for our upcoming blog
            posts.
          </p>
        </div>
      </div>
    </section>
  );
}
