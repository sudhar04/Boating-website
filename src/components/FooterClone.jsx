import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Anchor,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube
} from "lucide-react";

export default function FooterClone() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
const [screenWidth, setScreenWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => setScreenWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const getGridColumns = () => {
  if (screenWidth < 768) return "1fr";        // Mobile
  if (screenWidth < 1024) return "1fr 1fr";  // Tablet
  return "1.3fr 1fr 1fr 1.3fr";               // Desktop
};


  return (
    <footer style={styles.footer}>
      <div style={styles.topBorder} />

      <div style={styles.container}>
        <div
  style={{
    ...styles.grid,
    gridTemplateColumns: getGridColumns()
  }}
>

          {/* Brand Column */}
          <div style={styles.brandCol}>
            <div style={styles.brandHeader}>
              <div style={styles.logoBox}>
                <Anchor size={22} color="#0f172a" />
              </div>
              <div>
                <h3 style={styles.brandTitle}>RS</h3>
                <p style={styles.brandSub}>BOATING ADVENTURE</p>
              </div>
            </div>

            <p style={styles.brandText}>
              Experience the best boat rides in Pondicherry. Safe,
              enjoyable, and memorable adventures await you.
            </p>

            <div style={styles.socialRow}>
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredSocial(i)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{
                    ...styles.socialIcon,
                    background:
                      hoveredSocial === i ? "#f97316" : "#1e293b",
                    transform:
                      hoveredSocial === i ? "translateY(-6px)" : "none",
                    boxShadow:
                      hoveredSocial === i
                        ? "0 12px 25px rgba(249,115,22,.4)"
                        : "none"
                  }}
                >
                  <Icon
                    size={18}
                    color={hoveredSocial === i ? "#ffffff" : "#cbd5e1"}
                  />
                </div>
              ))}
            </div>
          </div>
{/* Quick Links */}
<div style={styles.linkCol}>
  <h4 style={styles.colTitle}>
    <Anchor size={16} /> Quick Links
  </h4>

  <ul style={styles.linkList}>
    {[
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Rides", path: "/rides" },
      { name: "Book Now", path: "/booking" },
      { name: "Gallery", path: "/gallery" },
      { name: "Contact", path: "/contact" }
    ].map((item, i) => (
      <li key={i}>
        <Link
          to={item.path}
          onMouseEnter={() => setHoveredLink(`quick-${i}`)}
          onMouseLeave={() => setHoveredLink(null)}
          style={{
            ...styles.linkItem,
            color:
              hoveredLink === `quick-${i}`
                ? "#f97316"
                : "#cbd5e1",
            transform:
              hoveredLink === `quick-${i}`
                ? "translateX(8px)"
                : "none",
            textDecoration: "none",
            display: "inline-block"
          }}
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>


          {/* Destinations */}
          <div style={styles.linkCol}>
            <h4 style={styles.colTitle}>
              <MapPin size={16} /> Destinations
            </h4>
            <ul style={styles.linkList}>
              {[
                "Fishing Harbour",
                "Mangrove Forest",
                "Arikamedu",
                "Ocean Mouth",
                "Sunset Ride"
              ].map((item, i) => (
                <li
                  key={i}
                  onMouseEnter={() => setHoveredLink(`dest-${i}`)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    ...styles.linkItem,
                    color:
                      hoveredLink === `dest-${i}`
                        ? "#f97316"
                        : "#cbd5e1",
                    transform:
                      hoveredLink === `dest-${i}`
                        ? "translateX(8px)"
                        : "none"
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div style={styles.contactCol}>
            <h4 style={styles.colTitle}>
              <Phone size={16} /> Contact Us
            </h4>

            <div style={styles.contactItem}><Phone size={15} /> 93612 50941</div>
            <div style={styles.contactItem}><Phone size={15} /> 88721 14342</div>
            <div style={styles.contactItem}><Phone size={15} /> 94830 83148</div>
            <div style={styles.contactItem}><Mail size={15} /> rsboating@gmail.com</div>
            <div style={styles.contactItem}><MapPin size={15} /> Expo Ground Upplam, Pondicherry - 605 001</div>
          </div>
        </div>

        {/* Bottom Row */}
        <div
  style={{
    ...styles.bottomRow,
    flexDirection: screenWidth < 768 ? "column" : "row",
    textAlign: screenWidth < 768 ? "center" : "left"
  }}
>

          <p>© 2026 RS Boating Adventure. All rights reserved.</p>
          <p>Design and Developed by RS Teams</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
  background: "linear-gradient(90deg,#071229,#020617)",
  color: "#e2e8f0",
  position: "relative",
  paddingTop: "0",
  marginTop: "0"
},

  topBorder: {
    height: "3px",
    background: "linear-gradient(90deg,#f97316,#3b82f6)"
  },
  container: {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "60px 20px 40px"
},

  grid: {
    display: "grid",
   
    gap: "50px"
  },
  brandCol: {
    display: "flex",
    flexDirection: "column"
  },
  brandHeader: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "18px"
  },
  logoBox: {
    width: "45px",
    height: "45px",
    borderRadius: "10px",
    background: "#f1f5f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  brandTitle: {
    margin: 0,
    fontSize: "20px",
    fontWeight: 700,
    color: "white"
  },
  brandSub: {
    margin: 0,
    fontSize: "12px",
    color: "#f97316",
    fontWeight: 600
  },
  brandText: {
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "20px",
    maxWidth: "280px"
  },
  socialRow: {
    display: "flex",
    gap: "14px"
  },
  socialIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all .3s ease"
  },
  linkCol: {
    display: "flex",
    flexDirection: "column"
  },
  contactCol: {
    display: "flex",
    flexDirection: "column"
  },
  colTitle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "18px",
    color: "white"
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  linkItem: {
    cursor: "pointer",
    fontSize: "14px",
    transition: "all .3s ease"
  },
  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    fontSize: "14px",
    marginBottom: "10px"
  },
  bottomRow: {
    marginTop: "50px",
    paddingTop: "20px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "10px",
    fontSize: "13px",
    color: "#94a3b8"
  }
};
