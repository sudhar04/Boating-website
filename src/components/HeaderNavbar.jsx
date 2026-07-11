import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logonew.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// ✅ FIX: Use public folder for logo to avoid path errors
// Place logo inside: public/logo.jpg
// Then use: src="/logo.jpg"

export default function HeaderNavbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
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
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const TOP_BLUE = "#2f4ea1";
  const NAV_DARK = "#4f5b6b";
  const NAV_HOVER = "rgba(255,255,255,0.14)";
  const ORANGE = "#ff6a00";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        body { margin:0; font-family:'Poppins', sans-serif; }
        a { text-decoration:none; }

        .navbar-wrapper {
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .nav-center {
          position:absolute;
          left:50%;
          transform:translateX(-50%);
          display:flex;
          align-items:center;
          gap:6px;
        }

        .nav-link {
          font-size:15px;
          font-weight:500;
          color:#ffffff;
          padding:6px 18px;
          border-radius:999px;
          transition: background 0.25s ease;
        }

        .nav-link:hover {
          background:${NAV_HOVER};
        }

        .book-btn {
          background: linear-gradient(135deg, #ff7a00, #ff5e00);
          color:#ffffff;
          padding:8px 24px;
          border-radius:999px;
          border:none;
          font-weight:600;
          font-size:14px;
          cursor:pointer;
          box-shadow:0 6px 18px rgba(255,106,0,0.45);
          transition: all 0.3s ease;
        }

        .book-btn:hover {
          transform: translateY(-2px);
          box-shadow:0 10px 24px rgba(255,106,0,0.6);
        }

        @media(max-width:992px){
          .nav-center { display:none; }
        }
      `}</style>

      <header style={{ width: "100%" }}>

        {/* 🔵 TOP BAR (HIDDEN ON MOBILE) */}
        {!isMobile && (
          <div
            style={{
              backgroundColor: TOP_BLUE,
              color: "#ffffff",
              fontSize: "13px",
              padding: "8px 60px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaPhoneAlt size={12} />
                <span>93612 50941</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaEnvelope size={12} />
                <span>pondymarinabienvenueboating@gmail.com</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FaMapMarkerAlt size={12} />
              <span>Pondicherry, India</span>
            </div>
          </div>
        )}

        {/* 🟢 MAIN NAVBAR */}
        <div
          style={{
            backgroundColor: NAV_DARK,
            padding: isMobile ? "10px 20px" : "10px 60px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.18)"
          }}
        >
          <div className="navbar-wrapper">

            {/* LEFT: LOGO + COMPANY TEXT (VISIBLE ON MOBILE ALSO) */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ backgroundColor: "#ffffff", padding: "5px", borderRadius: "6px" }}>
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: isMobile ? "34px" : "40px", width: isMobile ? "34px" : "40px" }}
                />
              </div>
              <div>
                <h1 style={{ fontSize: isMobile ? "18px" : "22px", fontWeight: 700, margin: 0, color: "#ffffff" }}>
                  Bienvenue
                </h1>
                <div
                  style={{
                    fontSize: isMobile ? "10px" : "12px",
                    letterSpacing: "2px",
                    color: ORANGE,
                    marginTop: "3px",
                    fontWeight: 500
                  }}
                >
                  BOATING ADVENTURE
                </div>
              </div>
            </div>

            {/* CENTER LINKS (DESKTOP ONLY) */}
            {!isMobile && (
              <div className="nav-center">
                {navLinks.map((item) => (
  <Link key={item.name} to={item.path} className="nav-link">
    {item.name}
  </Link>
))}

              </div>
            )}

            {/* RIGHT SIDE */}
            {!isMobile ? (
              <button 
  className="book-btn"
  onClick={() => navigate("/booking")}
>
  Book Now
</button>

            ) : (
              <div onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: "pointer" }}>
                {menuOpen ? <FaTimes size={24} color="#ffffff" /> : <FaBars size={24} color="#ffffff" />}
              </div>
            )}
          </div>
        </div>

        {/* 📱 MOBILE DROPDOWN */}
        {isMobile && menuOpen && (
          <div
            style={{
              backgroundColor: NAV_DARK,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}
          >
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
  onClick={() => navigate("/booking")}
>
  Book Now
</button>

          </div>
        )}
      </header>
    </>
  );
}
