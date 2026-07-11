import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logonew.svg";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderNavbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Rides", path: "/rides" },
    { name: "Booking", path: "/booking" },
    { name: "Offers", path: "/offers" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const NAV_DARK = "rgba(30, 41, 59, 0.95)";
  const ORANGE = "#ff6a00";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(30, 41, 59, 0.75);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .navbar-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
        }

        @media (min-width: 1024px) {
          .navbar-wrapper {
            padding: 16px 40px;
          }
        }

        .nav-center {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          padding: 8px 16px;
          border-radius: 20px;
          transition: all 0.25s ease;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
        }

        .book-btn {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #ff8a00, #ff5d00);
          color: white;
          border: none;
          padding: 10px 24px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 50px;
          box-shadow: 0 6px 20px rgba(255, 106, 0, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .book-btn:hover {
          transform: translateY(-2px);
          box-sizing: border-box;
          box-shadow: 0 8px 25px rgba(255, 106, 0, 0.45);
        }

        /* Mobile Dropdown Styling */
        .mobile-menu {
          background: ${NAV_DARK};
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 20px;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          z-index: 999;
          animation: slideDown 0.3s ease-out forwards;
        }

        .mobile-menu .nav-link {
          padding: 12px 20px;
          border-radius: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        .mobile-menu .book-btn {
          margin-top: 10px;
          text-align: center;
          width: 100%;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <header className="navbar-container">
        <div className="navbar-wrapper">
          
          {/* LEFT: LOGO + COMPANY TEXT */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                background: "#fff",
                padding: "6px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{
                  height: isMobile ? 36 : 42,
                  width: isMobile ? 36 : 42,
                  objectFit: "contain"
                }}
              />
            </div>
            <div>
              <h1
                style={{
                  fontSize: isMobile ? 20 : 24,
                  fontWeight: 700,
                  margin: 0,
                  color: "#fff",
                  lineHeight: 1.1
                }}
              >
                RS
              </h1>
              <div
                style={{
                  fontSize: isMobile ? 9 : 10,
                  letterSpacing: "2.5px",
                  marginTop: 3,
                  fontWeight: 600,
                  color: ORANGE
                }}
              >
                BOATING ADVENTURE
              </div>
            </div>
          </div>

          {/* CENTER LINKS (DESKTOP ONLY) */}
          {!isMobile && (
            <nav className="nav-center">
              {navLinks.map((item) => (
                <Link key={item.name} to={item.path} className="nav-link">
                  {item.name}
                </Link>
              ))}
            </nav>
          )}

          {/* RIGHT SIDE */}
          {!isMobile ? (
            <button className="book-btn" onClick={() => navigate("/booking")}>
              Book Now
            </button>
          ) : (
            <div 
              onClick={() => setMenuOpen(!menuOpen)} 
              style={{ cursor: "pointer", display: "flex", alignItems: "center", padding: "4px" }}
            >
              {menuOpen ? <FaTimes size={22} color="#ffffff" /> : <FaBars size={22} color="#ffffff" />}
            </div>
          )}
        </div>

        {/* MOBILE DROPDOWN */}
        {isMobile && menuOpen && (
          <nav className="mobile-menu">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button 
              className="book-btn" 
              onClick={() => {
                setMenuOpen(false);
                navigate("/booking");
              }}
            >
              Book Now
            </button>
          </nav>
        )}
      </header>
      {/* Spacer item ensures page content doesn't tuck behind fixed header */}
      <div style={{ height: isMobile ? "68px" : "78px" }} />
    </>
  );
}