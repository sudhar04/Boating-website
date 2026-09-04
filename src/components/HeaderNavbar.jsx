import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logonew.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Rides", path: "/rides" },
  { name: "Booking", path: "/booking" },
  { name: "Offers", path: "/offers" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function HeaderNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        :root {
          --navbar-height: 72px;
        }

        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: var(--navbar-height);
          background: rgba(30, 41, 59, 0.98);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: ${
            scrolled
              ? "0 6px 25px rgba(0, 0, 0, 0.18)"
              : "0 4px 20px rgba(0, 0, 0, 0.08)"
          };
          transition: box-shadow 0.3s ease;
        }

        .navbar-wrapper {
          width: 100%;
          max-width: 1400px;
          height: 100%;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          text-decoration: none;
        }

        .navbar-logo-box {
          width: 46px;
          height: 46px;
          padding: 6px;
          border-radius: 12px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .navbar-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .navbar-brand-title {
          margin: 0;
          color: #fff;
          font-family: "Poppins", sans-serif;
          font-size: 24px;
          font-weight: 700;
          line-height: 1.1;
        }

        .navbar-brand-subtitle {
          margin: 4px 0 0;
          color: #ff7043;
          font-family: "Poppins", sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1.8px;
          line-height: 1.2;
          white-space: nowrap;
        }

        .navbar-center {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
          flex: 1;
          min-width: 0;
        }

        .navbar-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 13px;
          border-radius: 20px;
          color: rgba(255, 255, 255, 0.88);
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.25s ease, color 0.25s ease;
        }

        .navbar-link:hover,
        .navbar-link.active {
          color: #fff;
          background: rgba(255, 255, 255, 0.12);
        }

        .navbar-book-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 11px 24px;
          border: none;
          border-radius: 50px;
          background: linear-gradient(135deg, #ff8a00, #ff5d00);
          color: #fff;
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 1;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .navbar-book-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 106, 0, 0.4);
        }

        .navbar-menu-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          padding: 0;
          border: none;
          border-radius: 10px;
          background: transparent;
          color: #fff;
          cursor: pointer;
        }

        .navbar-menu-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .navbar-mobile-menu {
          display: none;
        }

        @media (max-width: 1199px) {
          .navbar-wrapper {
            padding: 0 20px;
            gap: 12px;
          }

          .navbar-link {
            padding: 9px 9px;
            font-size: 13px;
          }

          .navbar-book-btn {
            padding: 10px 18px;
            font-size: 13px;
          }
        }

        @media (max-width: 1023px) {
          :root {
            --navbar-height: 70px;
          }

          .navbar-center,
          .navbar-desktop-book {
            display: none;
          }

          .navbar-menu-btn {
            display: inline-flex;
          }

          .navbar-mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 6px;
            padding: 16px 20px 20px;
            background: #1e293b;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .navbar-mobile-menu .navbar-link {
            justify-content: flex-start;
            width: 100%;
            padding: 13px 16px;
            border-radius: 8px;
            font-size: 15px;
          }

          .navbar-mobile-menu .navbar-book-btn {
            width: 100%;
            margin-top: 8px;
            padding: 13px 20px;
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          :root {
            --navbar-height: 62px;
          }

          .navbar-wrapper {
            padding: 0 16px;
          }

          .navbar-logo-box {
            width: 40px;
            height: 40px;
            padding: 5px;
            border-radius: 10px;
          }

          .navbar-brand {
            gap: 9px;
          }

          .navbar-brand-title {
            font-size: 20px;
          }

          .navbar-brand-subtitle {
            font-size: 7px;
            letter-spacing: 1.2px;
          }

          .navbar-menu-btn {
            width: 40px;
            height: 40px;
          }

          .navbar-mobile-menu {
            padding: 12px 16px 16px;
          }
        }
      `}</style>

      <header className="navbar-container">
        <div className="navbar-wrapper">
          <Link to="/" className="navbar-brand">
            <div className="navbar-logo-box">
              <img
                src={logo}
                alt="RS Boating Adventure"
                className="navbar-logo"
              />
            </div>

            <div>
              <h1 className="navbar-brand-title">RS</h1>
              <p className="navbar-brand-subtitle">
                BOATING ADVENTURE
              </p>
            </div>
          </Link>

          <nav className="navbar-center" aria-label="Main navigation">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`navbar-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="navbar-desktop-book">
            <Link to="/booking" className="navbar-book-btn">
              Book Now
            </Link>
          </div>

          <button
            type="button"
            className="navbar-menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <FaTimes size={21} /> : <FaBars size={21} />}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="navbar-mobile-menu"
            aria-label="Mobile navigation"
          >
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`navbar-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link to="/booking" className="navbar-book-btn">
              Book Now
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}