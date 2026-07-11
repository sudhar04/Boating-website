import React, { useState, useEffect } from "react";
import harbor from "../assets/harbour.jpg";
import sunset from "../assets/sunset.png";
import mangrove from "../assets/mangrove.jpg";
import ocean from "../assets/ocean.png";
import arikamedu from "../assets/image1.jpeg";
import { FaShip } from "react-icons/fa";
import { GiAnchor } from "react-icons/gi";
import { useNavigate } from "react-router-dom";


export default function HeroSection() {
  const slides = [
    {
      image: mangrove,
      title: "Mangrove Forest",
      desc: "Navigate through the serene backwaters",
      overlay: "rgba(0, 128, 0, 0.50)", // GREEN
    },
    {
      image: harbor,
      title: "Fishing Harbour",
      desc: "Experience the vibrant local fishing culture",
      overlay: "rgba(0, 85, 170, 0.50)", // BLUE
    },
    {
      image: arikamedu,
      title: "Arikamedu ",
      desc: "Explore the ancient Roman trade port",
      overlay: "rgba(255, 106, 0, 0.50)", // ORANGE
    },
    {
      image: ocean,
      title: "Ocean Adventure",
      desc: "Feel the thrill of open sea exploration",
      overlay: "rgba(0, 85, 170, 0.50)", // BLUE
    },
    {
      image: sunset,
      title: "Sunset Boat Ride",
      desc: "Magical golden hour on the waters",
      overlay: "rgba(255, 106, 0, 0.10)", // ORANGE
    },
  ];
  const navigate = useNavigate();


  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="hero-wrapper">
      <style>
        {`
        .hero-wrapper {
          position: relative;
          width: 100%;
          height: 110vh; /* increased height for desktop */
          overflow: hidden;
        }

        .hero-slide {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: opacity 1s ease-in-out;
          opacity: 0;
          image-rendering: auto;
        }

        .hero-slide.active {
          opacity: 1;
          z-index: 1;
        }

        /* DYNAMIC LEFT SHADE */
        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
        }

        .hero-content {
          position: absolute;
          z-index: 3;
          top: 30%;
          left: 8%;
          transform: translateY(-50%);
          color: #ffffff;
          max-width: 650px;
        }

        .fade-up {
          animation: fadeUp 0.9s ease forwards;
        }

        .hero-subtitle {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
         
          letter-spacing: 2px;
          color: #ffae00;
          margin-bottom: 15px;
        }

        .boat-icon {
          font-size: 16px;
        }

        .hero-title {
          font-size: 68px;
          font-weight: 700;
          margin: 0 0 15px;
        }

        .hero-desc {
          font-size: 20px;
          margin-bottom: 30px;
        }

        .hero-btn {
          background: linear-gradient(135deg, #ff7a00, #ff5e00);
          padding: 14px 36px;
          border-radius: 999px;
          color: white;
          border: none;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(255,106,0,0.5);
          transition: all 0.3s ease;
        }

        .hero-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(255,106,0,0.6);
        }

        .anchor-icon {
          margin-right: 8px;
        }

        .hero-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(6px);
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 4;
          color: white;
          font-size: 20px;
        }

        .hero-arrow.left { left: 20px; }
        .hero-arrow.right { right: 20px; }

        .hero-dots {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 4;
        }

        .hero-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-dot.active {
          background: #ff7a00;
          width: 22px;
          border-radius: 10px;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-wrapper { height: 100vh; }
          .hero-title { font-size: 36px; }
          .hero-desc { font-size: 16px; }
          .hero-content { left: 6%; max-width: 90%; }
        }


        @media (max-width: 768px) {

  .hero-content {
    left: 6%;
    max-width: 85%;
    top: 35%;               /* move content slightly lower */
    transform: translateY(-50%);
  }

  .hero-subtitle {
    font-size: 14px;        /* smaller like original */
    letter-spacing: 1.5px;
    margin-bottom: 10px;
  }

  .hero-title {
    font-size: 30px;        /* smaller but bold */
    line-height: 1.2;
    margin-bottom: 12px;
  }

  .hero-desc {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .hero-btn {
    font-size: 14px;
    padding: 10px 24px;
  }

}

        `}
      </style>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* LEFT SHADE WITH MINIMAL OPACITY */}
      <div
        className="hero-overlay"
        style={{
          background: `linear-gradient(
            90deg,
            ${slides[current].overlay},
            rgba(0,0,0,0) 65%
          )`,
        }}
      />

      <div key={current} className="hero-content fade-up">
        <div className="hero-subtitle">
          <FaShip className="boat-icon" />
          BIENVENUE BOATING ADVENTURE
        </div>

        <h1 className="hero-title">
          {slides[current].title}
        </h1>

        <p className="hero-desc">
          {slides[current].desc}
        </p>

        <button 
          className="hero-btn"
          onClick={() => navigate("/booking")}
        >
          <GiAnchor className="anchor-icon" />
          Book Your Ride
        </button>

      </div>

      <div className="hero-arrow left" onClick={prevSlide}>‹</div>
      <div className="hero-arrow right" onClick={nextSlide}>›</div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`hero-dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}


