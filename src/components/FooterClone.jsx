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
    Icon: Instagram,
    url: "https://www.instagram.com/",
  },
  {
    name: "Facebook",
    Icon: Facebook,
    url: "https://www.facebook.com/",
  },
  {
    name: "Twitter",
    Icon: Twitter,
    url: "https://twitter.com/",
  },
  {
    name: "YouTube",
    Icon: Youtube,
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
        <div style={styles.grid}>
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
              {socialLinks.map(({ name, Icon, url }, index) => (
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
                        ? "0 12px 25px rgba(249,115,22,.35)"
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
                    onMouseEnter={() =>
                      setHoveredLink(`quick-${index}`)
                    }
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

<<<<<<< HEAD
            <div style={styles.contactItem}><Phone size={15} /> 93612 50941</div>
            <div style={styles.contactItem}><Phone size={15} /> 88721 14342</div>
            <div style={styles.contactItem}><Phone size={15} /> 94830 83148</div>
            <div style={styles.contactItem}><Mail size={15} /> rsboating@gmail.com</div>
            <div style={styles.contactItem}><MapPin size={15} /> Expo Ground Upplam, Pondicherry - 605 001</div>
=======
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
>>>>>>> fff1751 (Update UI)
          </div>
        </div>

        {/* Bottom Row */}
        <div style={styles.bottomRow}>
          <p style={styles.bottomText}>
            © 2026 RS Boating Adventure. All rights reserved.
          </p>

          <p style={styles.bottomText}>
            Designed and Developed by RS Teams
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    width: "100%",
    background: "linear-gradient(90deg, #071229, #020617)",
    color: "#e2e8f0",
    fontFamily: "Arial, Helvetica, sans-serif",
    position: "relative",
    margin: 0,
    padding: 0,
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
    padding: "60px 20px 40px",
  },

  grid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr 1fr 1.3fr",
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
    width: "45px",
    height: "45px",
    flexShrink: 0,
    borderRadius: "10px",
    background: "#f1f5f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  brandTitle: {
    margin: 0,
    fontSize: "20px",
    lineHeight: 1.2,
    fontWeight: 700,
    color: "#ffffff",
  },

  brandSub: {
    margin: "4px 0 0",
    fontSize: "12px",
    lineHeight: 1.2,
    color: "#f97316",
    fontWeight: 700,
    letterSpacing: "0.5px",
  },

  brandText: {
    maxWidth: "280px",
    margin: "0 0 20px",
    fontSize: "14px",
    lineHeight: 1.7,
    color: "#cbd5e1",
  },

  socialRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
  },

  socialIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
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
    lineHeight: 1.3,
    fontWeight: 700,
    color: "#ffffff",
  },

  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  linkItem: {
    display: "inline-block",
    width: "fit-content",
    cursor: "pointer",
    fontSize: "14px",
    lineHeight: 1.5,
    transition: "all 0.3s ease",
    textDecoration: "none",
  },

  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    marginBottom: "12px",
    color: "#cbd5e1",
    fontSize: "14px",
    lineHeight: 1.5,
    textDecoration: "none",
    overflowWrap: "anywhere",
  },

  bottomRow: {
    marginTop: "50px",
    paddingTop: "20px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
  },

  bottomText: {
    margin: 0,
    color: "#94a3b8",
    fontSize: "13px",
    lineHeight: 1.5,
  },
};
