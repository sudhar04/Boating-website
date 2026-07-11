import React from "react";
import { FaShieldAlt, FaUsers, FaHeart, FaMapMarkedAlt } from "react-icons/fa";
import { FaWater } from "react-icons/fa";
import { FaAward } from "react-icons/fa";


// ✅ Use public folder image (place inside public/images/boat.jpg)
import aboutImg from "../assets/image3.jpeg";

export default function AboutSection() {
  return (
    <section className="about-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .about-section {
          font-family: 'Poppins', sans-serif;
          background: #f4f6fb;
          padding: 60px 7%;
        }

        .about-container {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 90px;
          align-items: center;
        }

        /* LEFT CONTENT */
        .about-badge {
          display: inline-flex;
          align-items: center;
          background: #e7eefc;
          color: #3d5af1;
          padding: 10px 22px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 30px;
        }

        .about-title {
          font-size: 54px;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 28px;
          color: #0e1b2c;
        }

        .about-title span {
          background: linear-gradient(90deg,#ff7a00,#6a5cff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-text {
          font-size: 17px;
          line-height: 1.9;
          color: #5b6b85;
          margin-bottom: 26px;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 30px;
          margin-top: 45px;
        }

        .feature-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .feature-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg,#ff7a00,#ff5e00);
         
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 12px 25px rgba(255,106,0,0.35);
          flex-shrink: 0;
        }

        /* 🔥 FORCE ICON COLOR */
.feature-icon svg {
  color: #ffffff !important;
}

        .feature-title {
          font-weight: 600;
          color: #0e1b2c;
          margin-bottom: 6px;
        }

        .feature-desc {
          font-size: 14px;
          color: #6b7a95;
        }

        /* RIGHT IMAGE RECTANGLE FRAME */
        .about-image-wrapper {
          position: relative;
        }

        .image-frame {
          background: #e9eef6;
          padding: 20px;
          border-radius: 18px; /* rectangle style */
          box-shadow: 0 30px 70px rgba(0,0,0,0.12);
        }

        .image-inner {
          overflow: hidden;
          border-radius: 12px; /* less rounded to match original */
        }

        .image-frame {
  background: #e9eef6;
  padding: 18px;
  border-radius: 28px;
  box-shadow: 0 25px 60px rgba(0,0,0,0.12);
}

/* Landscape Ratio Frame */
.image-inner {
  position: relative;
  width: 100%;
  aspect-ratio: 18 / 12;   /* 🔥 Forces Landscape Shape */
  overflow: hidden;
  border-radius: 22px;
}

.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  display: block;
}

/* Zoom inside frame only */
.image-inner:hover .about-image {
  transform: scale(1.08);
}


        .image-inner:hover .about-image {
          transform: scale(1.08);
        }

        /* HAPPY CUSTOMERS CARD (rectangle sharp like original) */
        .customers-card {
  position: absolute;
  top: 35px;
  right: -30px;
  background: linear-gradient(135deg,#ff7a00,#ff5e00);
  color: white;
  padding: 18px 28px;            /* reduced size */
  border-radius: 14px;
  font-size: 22px;               /* reduced font */
  font-weight: 700;
  box-shadow: 0 18px 45px rgba(255,106,0,0.35);
  text-align: center;
  letter-spacing: 0.5px;
}

.customers-card span {
  font-size: 13px;
  font-weight: 500;
  opacity: 0.9;
}


        /* EXPERIENCE CARD */
        .experience-card {
  position: absolute;
  bottom: -30px;
  left: 40px;
  background: white;
  padding: 14px 22px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.12);
}

        .exp-circle {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(135deg,#3d5af1,#6a5cff);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

        .exp-text {
          font-weight: 600;
          color: #0e1b2c;
        }

      
.exp-number {
  font-weight: 700;
  font-size: 18px;
  color: #0e1b2c;
}


.exp-label {
  font-size: 13px;
  color: #6b7a95;
}

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .about-container {
            grid-template-columns: 1fr;
          }

          .about-image {
            height: 400px;
          }

          .customers-card {
            right: 20px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 80px 6%;
          }

          .about-title {
            font-size: 36px;
          }

          .features {
            grid-template-columns: 1fr;
          }

          .about-image {
            height: 320px;
          }

          .customers-card {
            top: 20px;
            right: 20px;
            font-size: 22px;
            padding: 18px 26px;
          }

          .experience-card {
            left: 20px;
            bottom: -20px;
          }
        }
      `}</style>

      <div className="about-container">
        <div>
          <div className="about-badge">
  <FaWater style={{ marginRight: 8 }} />
  About Our Company
</div>


          <h2 className="about-title">
            Your Gateway to <span>Memorable Adventures</span>
          </h2>

          <p className="about-text">
            We provide safe, enjoyable, and memorable boat riding experiences for individuals, families, and groups. Our service is managed by experienced professionals who prioritize customer comfort, safety, and satisfaction.
          </p>

          <p className="about-text">
            We aim to offer a smooth booking experience and a joyful ride for every customer. From the stunning mangrove forests to the historic Arikamedu ruins, we take you on an unforgettable journey through Pondicherry's most beautiful waterways.
          </p>

          <div className="features">
            <div className="feature-item">
              <div className="feature-icon"><FaShieldAlt /></div>
              <div>
                <div className="feature-title">Safety First</div>
                <div className="feature-desc">Certified equipment and trained professionals</div>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon"><FaUsers /></div>
              <div>
                <div className="feature-title">Expert Team</div>
                <div className="feature-desc">Experienced captains and friendly crew</div>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon"><FaHeart /></div>
              <div>
                <div className="feature-title">Customer Focus</div>
                <div className="feature-desc">Your comfort is our priority</div>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon"><FaMapMarkedAlt /></div>
              <div>
                <div className="feature-title">Local Expertise</div>
                <div className="feature-desc">Deep knowledge of Pondicherry waters</div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-image-wrapper">
          <div className="image-frame">
            <div className="image-inner">
              <img src={aboutImg} alt="About" className="about-image" />
            </div>
          </div>

          <div className="customers-card">
            5000+
            <span>Happy Customers</span>
          </div>

          <div className="experience-card">
  <div className="exp-circle">
    <FaAward />
  </div>
  <div>
    <div className="exp-number">10+</div>
    <div className="exp-label">Years Experience</div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}



