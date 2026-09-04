import React from "react";
import { MapPin, Clock, Car, Navigation } from "lucide-react";

export default function LocationSectionClone() {
  return (
    <section style={styles.section}>
      <style>{`
        .location-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 40px;
          align-items: start;
        }

        .location-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .location-card-content {
          min-width: 0;
        }

        @media (max-width: 768px) {
          .location-grid {
            grid-template-columns: 1fr;
          }

          .location-title {
            font-size: 32px !important;
          }

          .location-subtitle {
            font-size: 16px !important;
          }

          .location-map {
            min-height: 350px !important;
          }
        }

        @media (max-width: 480px) {
          .location-section {
            padding: 60px 15px !important;
          }

          .location-card {
            padding: 16px !important;
          }

          .location-icon-box {
            width: 42px !important;
            height: 42px !important;
            flex-shrink: 0;
          }

          .location-card-title {
            font-size: 16px !important;
          }

          .location-card-text,
          .location-list {
            font-size: 14px !important;
          }
        }
      `}</style>

      <div className="location-container">
        {/* Badge */}
        <div style={styles.badge}>
          <MapPin size={16} style={{ marginRight: 6 }} />
          Find Us
        </div>

        {/* Title */}
        <h2 className="location-title" style={styles.title}>
          Our <span style={styles.gradientText}>Location</span>
        </h2>

        <p className="location-subtitle" style={styles.subtitle}>
          Visit us at Expo Ground Upplam, Pondicherry
        </p>

        <div className="location-grid">
          {/* Left Information Cards */}
          <div style={styles.leftColumn}>
            {/* Address Card */}
            <div className="location-card" style={styles.card}>
              <div
                className="location-icon-box"
                style={{
                  ...styles.iconBox,
                  background: "#ff6a00",
                }}
              >
                <MapPin size={22} color="#fff" />
              </div>

              <div className="location-card-content">
                <h4 className="location-card-title" style={styles.cardTitle}>
                  Address
                </h4>

                <p className="location-card-text" style={styles.cardText}>
                  Expo Ground Upplam,
                  <br />
                  Next to Indira Gandhi Stadium,
                  <br />
                  Puducherry - 605 001
                </p>
              </div>
            </div>

            {/* Timing Card */}
            <div className="location-card" style={styles.card}>
              <div
                className="location-icon-box"
                style={{
                  ...styles.iconBox,
                  background: "#2563eb",
                }}
              >
                <Clock size={22} color="#fff" />
              </div>

              <div className="location-card-content">
                <h4 className="location-card-title" style={styles.cardTitle}>
                  Timing
                </h4>

                <p className="location-card-text" style={styles.cardText}>
                  Morning Ride: 7:00 AM
                  <br />
                  Evening Ride: 5:00 PM
                </p>

                <span style={styles.openText}>Open Every Day</span>
              </div>
            </div>

            {/* How to Reach Card */}
            <div className="location-card" style={styles.card}>
              <div
                className="location-icon-box"
                style={{
                  ...styles.iconBox,
                  background: "#16a34a",
                }}
              >
                <Car size={22} color="#fff" />
              </div>

              <div className="location-card-content">
                <h4 className="location-card-title" style={styles.cardTitle}>
                  How to Reach
                </h4>

                <ul className="location-list" style={styles.list}>
                  <li>10 min from Pondicherry Bus Stand</li>
                  <li>Near Indira Gandhi Stadium</li>
                  <li>Ample parking available</li>
                </ul>
              </div>
            </div>

            {/* Directions Button */}
            <button
              type="button"
              style={styles.button}
              onClick={() => {
                window.open(
                  "https://www.google.com/maps/search/?api=1&query=Expo+Ground+Upplam+Puducherry",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <Navigation size={18} style={{ marginRight: 8 }} />
              Get Directions
            </button>
          </div>

          {/* Right Map */}
          <div style={styles.mapWrapper}>
            <iframe
              className="location-map"
              title="RS Boating Adventure location"
              src="https://www.google.com/maps?q=Expo+Ground+Upplam,+Puducherry&output=embed"
              style={styles.map}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    background: "#f8fafc",
    fontFamily: "Inter, sans-serif",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    background: "#dcfce7",
    color: "#166534",
    padding: "8px 18px",
    borderRadius: "30px",
    fontWeight: "600",
    marginBottom: "20px",
  },

  title: {
    fontSize: "42px",
    fontWeight: "800",
    marginBottom: "10px",
    color: "#0f172a",
  },

  gradientText: {
    background: "linear-gradient(90deg,#ff6a00,#2563eb)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    fontSize: "18px",
    color: "#64748b",
    marginBottom: "50px",
  },

  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  card: {
    display: "flex",
    gap: "16px",
    background: "white",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    textAlign: "left",
  },

  iconBox: {
    width: "50px",
    height: "50px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  cardTitle: {
    margin: "0 0 6px",
    fontSize: "18px",
    fontWeight: "700",
    color: "#0f172a",
  },

  cardText: {
    margin: 0,
    color: "#475569",
    lineHeight: "1.6",
  },

  list: {
    margin: 0,
    paddingLeft: "18px",
    color: "#475569",
    lineHeight: "1.8",
  },

  openText: {
    display: "inline-block",
    marginTop: "8px",
    color: "#16a34a",
    fontWeight: "600",
  },

  button: {
    marginTop: "10px",
    background: "linear-gradient(90deg,#ff6a00,#ff8c00)",
    border: "none",
    color: "white",
    padding: "16px",
    borderRadius: "14px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(255,106,0,0.3)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },

  mapWrapper: {
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
  },

  map: {
    display: "block",
    width: "100%",
    height: "500px",
    minHeight: "500px",
    border: 0,
  },
};
