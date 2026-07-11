import React from "react";
import { ShieldCheck, LifeBuoy, Wrench, GraduationCap, AlertTriangle } from "lucide-react";

export default function SafetySectionClone() {

     
  const features = [
    {
      icon: <LifeBuoy size={26} color="#3b82f6" />,
      title: "Certified Life Jackets",
      desc: "High-quality, certified life jackets provided for all passengers of every age group"
    },
    {
      icon: <Wrench size={26} color="#22c55e" />,
      title: "Well-Maintained Boats",
      desc: "Regular maintenance and inspection ensures our boats are always in perfect condition"
    },
    {
      icon: <GraduationCap size={26} color="#a855f7" />,
      title: "Trained Drivers",
      desc: "Our captains are experienced professionals with proper licensing and training"
    },
    {
      icon: <AlertTriangle size={26} color="#f97316" />,
      title: "Safety Briefing",
      desc: "Comprehensive safety instructions provided before every ride for your protection"
    }
  ];

  return (
    <section style={styles.section}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

         /* ===== CARD HOVER EFFECT ===== */

.safety-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 60px rgba(0,0,0,0.25);
  border: 1px solid rgba(249,115,22,0.5);
}

/* ===== ICON ROTATE ===== */

.safety-card .icon-box {
  transition: transform 0.6s ease;
}

.safety-card:hover .icon-box {
  transform: rotate(360deg);
}
      `}</style>

      <div style={styles.container}>
        {/* LEFT CONTENT */}
        <div style={styles.left}>
          <div style={styles.badge}>
            <ShieldCheck size={16} style={{marginRight:6}}/> Safety First
          </div>

          <h2 style={styles.heading}>
            Your Safety is Our <span style={styles.highlight}>Top Priority</span>
          </h2>

          <p style={styles.description}>
            We maintain the highest safety standards to ensure every ride is not just enjoyable but completely secure for you and your loved ones.
          </p>

          <ul style={styles.list}>
            {[
              "24/7 Emergency Support",
              "GPS-Tracked Boats",
              "First Aid Kits Onboard",
              "Weather Monitoring"
            ].map((item, i) => (
              <li key={i} style={styles.listItem}>
                <ShieldCheck size={18} color="#22c55e" style={{marginRight:10}}/>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT GRID */}
        <div style={styles.grid}>
          {features.map((f, i) => (
          <div
            key={i}
            style={styles.card}
            className="safety-card"
          >
              <div style={styles.iconBox} className="icon-box">{f.icon}</div>
              <h3 style={styles.cardTitle}>{f.title}</h3>
              <p style={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    fontFamily: "Poppins, sans-serif",
    background: "#1e3a8a",
    padding: "100px 20px",
    color: "white",
    backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
    backgroundSize: "28px 28px"
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "60px",
    alignItems: "center",
    justifyContent: "space-between"
  },
  left: {
    flex: "1 1 480px"
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    background: "rgba(255,255,255,0.1)",
    padding: "8px 14px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: 500,
    marginBottom: "20px"
  },
  heading: {
    fontSize: "44px",
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: "20px"
  },
  highlight: {
    color: "#f97316"
  },
  description: {
    fontSize: "16px",
    color: "#cbd5e1",
    marginBottom: "25px",
    lineHeight: 1.7
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    fontSize: "15px"
  },
  grid: {
    flex: "1 1 520px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px"
  },
 card: {
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(10px)",
  borderRadius: "20px",
  padding: "28px",
  border: "1px solid rgba(255,255,255,0.1)",
  transition: "all 0.4s ease", // ✅ updated
  cursor: "pointer"
},

  iconBox: {
    background: "white",
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "18px"
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "10px"
  },
  cardDesc: {
    fontSize: "14px",
    color: "#e2e8f0",
    lineHeight: 1.6
  }
};
