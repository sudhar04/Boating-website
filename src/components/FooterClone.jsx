import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Anchor,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Rides", path: "/rides" },
  { name: "Book Now", path: "/booking" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const destinations = [
  "Fishing Harbour",
  "Mangrove Forest",
  "Arikamedu",
  "Ocean Mouth",
  "Sunset Ride",
];

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/",
  },
];

export default function FooterClone() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <footer style={styles.footer}>
      <div style={styles.topBorder} />

      <div style={styles.container}>
        <div className="footer-grid" style={styles.grid}>
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
              Experience the best boat rides in Pondicherry. Safe, enjoyable,
              and memorable adventures await you.
            </p>

            <div style={styles.socialRow}>
              {socialLinks.map(({ name, icon: Icon, url }, index) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{
                    ...styles.socialIcon,
                    background:
                      hoveredSocial === index ? "#f97316" : "#1e293b",
                    transform:
                      hoveredSocial === index
                        ? "translateY(-5px)"
                        : "translateY(0)",
                    boxShadow:
                      hoveredSocial === index
                        ? "0 12px 25px rgba(249, 115, 22, 0.35)"
                        : "none",
                  }}
                >
                  <Icon
                    size={18}
                    color={
                      hoveredSocial === index ? "#ffffff" : "#cbd5e1"
                    }
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div style={styles.linkCol}>
            <h4 style={styles.colTitle}>
              <Anchor size={16} />
              Quick Links
            </h4>

            <ul style={styles.linkList}>
              {quickLinks.map((item, index) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                      ...styles.linkItem,
                      color:
                        hoveredLink === `quick-${index}`
                          ? "#f97316"
                          : "#cbd5e1",
                      transform:
                        hoveredLink === `quick-${index}`
                          ? "translateX(6px)"
                          : "translateX(0)",
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
              <MapPin size={16} />
              Destinations
            </h4>

            <ul style={styles.linkList}>
              {destinations.map((item, index) => (
                <li
                  key={item}
                  onMouseEnter={() => setHoveredLink(`destination-${index}`)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    ...styles.linkItem,
                    color:
                      hoveredLink === `destination-${index}`
                        ? "#f97316"
                        : "#cbd5e1",
                    transform:
                      hoveredLink === `destination-${index}`
                        ? "translateX(6px)"
                        : "translateX(0)",
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
              <Phone size={16} />
              Contact Us
            </h4>

            <a href="tel:9361250941" style={styles.contactItem}>
              <Phone size={15} />
              <span>93612 50941</span>
            </a>

            <a href="tel:8870214342" style={styles.contactItem}>
              <Phone size={15} />
              <span>88702 14342</span>
            </a>

            <a href="tel:9486183148" style={styles.contactItem}>
              <Phone size={15} />
              <span>94861 83148</span>
            </a>

            <a
              href="mailto:pondymarinabienvenueboating@gmail.com"
              style={styles.contactItem}
            >
              <Mail size={15} />
              <span>pondymarinabienvenueboating@gmail.com</span>
            </a>

            <div style={styles.contactItem}>
              <MapPin size={15} />
              <span>Expo Ground Upplam, Pondicherry - 605 001</span>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom" style={styles.bottomRow}>
          <p style={styles.bottomText}>
            © 2026 RS Boating Adventure. All rights reserved.
          </p>

          <p style={styles.bottomText}>
            Designed and Developed by RS Teams
          </p>
        </div>
      </div>

      <style>
        {`
          .footer-grid {
            grid-template-columns: 1.3fr 1fr 1fr 1.3fr;
          }

          .footer-bottom {
            flex-direction: row;
            text-align: left;
          }

          @media (max-width: 1024px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr;
              gap: 40px;
            }
          }

          @media (max-width: 768px) {
            .footer-grid {
              grid-template-columns: 1fr;
              gap: 35px;
            }

            .footer-bottom {
              flex-direction: column;
              text-align: center;
              align-items: center;
            }
          }
        `}
      </style>
    </footer>
  );
}

const styles = {
  footer: {
    width: "100%",
    background: "linear-gradient(90deg, #071229, #020617)",
    color: "#e2e8f0",
    position: "relative",
    marginTop: 0,
  },

  topBorder: {
    width: "100%",
    height: "3px",
    background: "linear-gradient(90deg, #f97316, #3b82f6)",
  },

  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px 35px",
  },

  grid: {
    display: "grid",
    gap: "50px",
  },

  brandCol: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },

  brandHeader: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "18px",
  },

  logoBox: {
    width: "48px",
    height: "48px",
    flexShrink: 0,
    borderRadius: "10px",
    background: "#f1f5f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  brandTitle: {
    margin: 0,
    fontSize: "21px",
    fontWeight: 700,
    color: "#ffffff",
  },

  brandSub: {
    margin: 0,
    fontSize: "11px",
    letterSpacing: "1px",
    color: "#f97316",
    fontWeight: 700,
  },

  brandText: {
    maxWidth: "290px",
    margin: "0 0 22px",
    fontSize: "14px",
    lineHeight: 1.7,
    color: "#cbd5e1",
  },

  socialRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },

  socialIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "9px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },

  linkCol: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },

  contactCol: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },

  colTitle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    margin: "0 0 18px",
    fontSize: "16px",
    fontWeight: 700,
    color: "#ffffff",
  },

  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "11px",
  },

  linkItem: {
    display: "inline-block",
    width: "fit-content",
    fontSize: "14px",
    lineHeight: 1.5,
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "9px",
    marginBottom: "12px",
    color: "#cbd5e1",
    fontSize: "14px",
    lineHeight: 1.5,
    textDecoration: "none",
    overflowWrap: "anywhere",
  },

  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "45px",
    paddingTop: "20px",
    borderTop: "1px solid rgba(255, 255, 255, 0.12)",
  },

  bottomText: {
    margin: 0,
    fontSize: "13px",
    color: "#94a3b8",
    lineHeight: 1.6,
  },
};
