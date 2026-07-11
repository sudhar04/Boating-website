import React from "react";
import { FaUsers, FaCrown, FaCheckCircle, FaClock, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function RideTypeSection() {
  

  return (
    <section className="ride-section">
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

      .ride-section {
        font-family: 'Poppins', sans-serif;
        background: #f5f7fb;
        padding: 110px 6%;
      }

      .ride-container {
        max-width: 1250px;
        margin: 0 auto;
        text-align: center;
      }

      .section-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: #e8f0ff;
        color: #2f4ea1;
        padding: 8px 20px;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 25px;
      }

      .section-title {
        font-size: 44px;
        font-weight: 800;
        margin-bottom: 20px;
        color: #0e1b2c;
      }

      .section-title span {
        background: linear-gradient(90deg,#ff7a00,#6a5cff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .section-subtitle {
        max-width: 680px;
        margin: 0 auto 70px;
        font-size: 17px;
        color: #5c6b85;
        line-height: 1.8;
      }

      /* CARDS */

      .ride-cards {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 50px;
      }

      .ride-card {
        background: #ffffff;
        border-radius: 20px;
        padding: 45px 40px;
        text-align: left;
        box-shadow: 0 20px 45px rgba(0,0,0,0.08);
        position: relative;
        transition: 0.4s ease;
        overflow: hidden;
      }

      /* ===== ORANGE BORDER ANIMATION (NEW CODE ADDED) ===== */

.ride-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 2px;
  background: linear-gradient(135deg,#ff7a00,#ff5e00);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.ride-card:hover::before {
  opacity: 1;
}


      .ride-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 25px 60px rgba(255,106,0,0.25);
      }

      .icon-box {
        width: 70px;
        height: 70px;
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        color: white;
        margin-bottom: 25px;
      }

      .sharing-icon {
        background: linear-gradient(135deg,#3b82f6,#06b6d4);
      }

      .private-icon {
        background: linear-gradient(135deg,#ff7a00,#ff5e00);
      }

      .ride-title {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 12px;
        color: #0e1b2c;
      }

      .ride-desc {
        font-size: 15px;
        color: #6c7a92;
        margin-bottom: 25px;
        line-height: 1.7;
      }

      .ride-price {
        font-size: 34px;
        font-weight: 800;
        margin-bottom: 5px;
      }

      .sharing-price {
        color: #3b82f6;
      }

      .private-price {
        color: #ff7a00;
      }

      .per-text {
        font-size: 14px;
        color: #6c7a92;
        margin-left: 5px;
      }

      .feature-list {
        margin: 25px 0 35px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .feature-item {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        color: #5c6b85;
      }

      .feature-item svg {
        color: #22c55e;
      }

      .private-card .feature-item svg {
        color: #ff7a00;
      }

      .ride-btn {
        width: 100%;
        padding: 14px;
        border-radius: 12px;
        font-weight: 600;
        font-size: 15px;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: 0.3s ease;
        text-decoration: none;
      }

      .sharing-btn {
        background: linear-gradient(135deg,#3b82f6,#06b6d4);
        color: white;
      }

      .private-btn {
        background: linear-gradient(135deg,#ff7a00,#ff5e00);
        color: white;
      }

      .ride-btn:hover {
        transform: translateY(-3px);
      }

      .recommended {
        position: absolute;
        top: 20px;
        right: 20px;
        background: #ff7a00;
        color: white;
        font-size: 12px;
        padding: 6px 14px;
        border-radius: 20px;
        font-weight: 600;
      }

      /* TIMING BOX */

      .timing-box {
        margin-top: 70px;
        background: #2f4ea1;
        color: white;
        padding: 35px 40px;
        border-radius: 20px;
        text-align: center;
      }

      .timing-box h4 {
        font-weight: 600;
        margin-bottom: 10px;
      }

      .timing-sub {
        opacity: 0.9;
        font-size: 14px;
      }

      /* RESPONSIVE */

      @media(max-width: 992px){
        .ride-cards {
          grid-template-columns: 1fr;
        }
      }

      @media(max-width: 600px){
        .section-title {
          font-size: 30px;
        }
        .ride-card {
          padding: 30px;
        }
      }

      `}</style>

      <div className="ride-container">

        <div className="section-badge">
          <FaUsers /> Choose Your Adventure
        </div>

        <h2 className="section-title">
          Select Your <span>Ride Type</span>
        </h2>

        <p className="section-subtitle">
          Whether you want to share the adventure or enjoy privacy with your loved ones, we have the perfect option for you.
        </p>

        <div className="ride-cards">

          {/* Sharing Ride */}
          <div className="ride-card">
            <div className="icon-box sharing-icon">
              <FaUsers />
            </div>

            <div className="ride-title">Sharing Ride</div>
            <div className="ride-desc">
              Perfect for solo travelers or small groups looking to share the experience
            </div>

            <div className="ride-price sharing-price">
              ₹500 <span className="per-text">per person</span>
            </div>

            <div className="feature-list">
              <div className="feature-item"><FaCheckCircle /> Boat capacity: 14 seats</div>
              <div className="feature-item"><FaCheckCircle /> Ride duration: 1 hour</div>
              <div className="feature-item"><FaCheckCircle /> May wait until seats fill</div>
              <div className="feature-item"><FaCheckCircle /> Meet fellow travelers</div>
              <div className="feature-item"><FaCheckCircle /> Budget-friendly option</div>
            </div>
             <Link to="/booking" className="ride-btn sharing-btn">
  Book Sharing Ride <FaArrowRight />
</Link>


          </div>

          {/* Private Ride */}
          <div className="ride-card private-card">
            <div className="recommended">RECOMMENDED</div>

            <div className="icon-box private-icon">
              <FaCrown />
            </div>

            <div className="ride-title">Private Ride</div>
            <div className="ride-desc">
              Exclusive experience for your group with instant departure
            </div>

            <div className="ride-price private-price">
              ₹5,000 <span className="per-text">per boat</span>
            </div>

            <div className="feature-list">
              <div className="feature-item"><FaCheckCircle /> Entire boat reserved</div>
              <div className="feature-item"><FaCheckCircle /> Ride duration: 1 hour</div>
              <div className="feature-item"><FaCheckCircle /> No waiting time</div>
              <div className="feature-item"><FaCheckCircle /> Personal guide</div>
              <div className="feature-item"><FaCheckCircle /> Premium experience</div>
            </div>

<Link to="/booking" className="ride-btn private-btn">
  Book Private Ride <FaArrowRight />
</Link>
          </div>

        </div>

        {/* Timing Box */}
        <div className="timing-box">
          <h4><FaClock /> Timing: 7:00 AM & 5:00 PM (Every Day)</h4>
          <div className="timing-sub">
            Package includes: Ocean Mouth • Mangrove Forest • Fishing Harbour • Arikamedu
          </div>
        </div>

      </div>
    </section>
  );
}
