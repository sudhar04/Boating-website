import React from "react";
import { CalendarDays, Instagram, RefreshCcw, Cake, Heart, Camera, Tag } from "lucide-react";

export default function PremiumOffersSection() {
  const offers = [
    { id: 1, title: "Pre-Booking Discount", desc: "Book 7 days in advance and get 10% off", badge: "10% OFF", icon: <CalendarDays size={22} />, color: "blue" },
    { id: 2, title: "Instagram Follower", desc: "Follow us on Instagram and show for 5% discount", badge: "5% OFF", icon: <Instagram size={22} />, color: "pink" },
    { id: 3, title: "Returning Customer", desc: "Come back for another adventure and save", badge: "15% OFF", icon: <RefreshCcw size={22} />, color: "green" },
    { id: 4, title: "Birthday Celebration", desc: "Celebrate your special day on the water", badge: "SPECIAL PACKAGE", icon: <Cake size={22} />, color: "purple" },
    { id: 5, title: "Couple Sunset Special", desc: "Romantic sunset ride for couples", badge: "ROMANTIC DEAL", icon: <Heart size={22} />, color: "red" },
    { id: 6, title: "Photoshoot Ride", desc: "Professional photo opportunities on water", badge: "PHOTO PACKAGE", icon: <Camera size={22} />, color: "orange" }
  ];

  const badgeColors = {
    blue: "#3b82f6",
    pink: "#ec4899",
    green: "#22c55e",
    purple: "#8b5cf6",
    red: "#ef4444",
    orange: "#f97316"
  };

  const iconGradients = {
    blue: "linear-gradient(135deg,#3b82f6,#06b6d4)",
    pink: "linear-gradient(135deg,#ec4899,#f43f5e)",
    green: "linear-gradient(135deg,#22c55e,#10b981)",
    purple: "linear-gradient(135deg,#8b5cf6,#6366f1)",
    red: "linear-gradient(135deg,#ef4444,#ec4899)",
    orange: "linear-gradient(135deg,#f97316,#f59e0b)"
  };

  return (
    <section style={{ background: "#f8fafc", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#ffedd5", color: "#ea580c", padding: "8px 16px", borderRadius: "999px", fontSize: "14px", fontWeight: 500, marginBottom: "24px" }}>
          <Tag size={16} /> Special Offers
        </div>

        <h2 style={{ fontSize: "40px", fontWeight: 700, color: "#111827", lineHeight: 1.2 }}>
          Exclusive <span style={{ background: "linear-gradient(to right,#f97316,#2563eb)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Discounts & Offers</span>
        </h2>

        <p style={{ color: "#6b7280", marginTop: "16px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto", fontSize: "18px" }}>
          Take advantage of our special deals and make your boating experience even more memorable
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "32px", marginTop: "64px" }}>
          {offers.map((offer) => (
            <div
              key={offer.id}
              style={{
                position: "relative",
                background: "#ffffff",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                border: "1px solid #e5e7eb",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.1)";
                e.currentTarget.style.border = "2px solid #f97316";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.05)";
                e.currentTarget.style.border = "1px solid #e5e7eb";
              }}
            >
              <div style={{ position: "absolute", top: "20px", right: "20px", background: badgeColors[offer.color], color: "#fff", fontSize: "12px", fontWeight: 600, padding: "6px 12px", borderRadius: "999px" }}>
                {offer.badge}
              </div>

              <div style={{ width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "14px", background: iconGradients[offer.color], color: "#fff", marginBottom: "24px" }}>
                {offer.icon}
              </div>

              <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#111827", marginBottom: "12px" }}>{offer.title}</h3>

              <p style={{ color: "#6b7280", lineHeight: 1.6 }}>{offer.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "96px", background: "linear-gradient(to right,#1e3a8a,#1e40af)", color: "#fff", borderRadius: "24px", padding: "60px 20px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.08, backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <Tag size={40} style={{ color: "#fb923c", marginBottom: "24px" }} />
            <h3 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "16px" }}>Have a Promo Code?</h3>
            <p style={{ color: "#bfdbfe", marginBottom: "32px", fontSize: "18px" }}>
              Enter your discount code during checkout to avail special offers
            </p>
            <button
              style={{
                background: "linear-gradient(to right,#f97316,#ea580c)",
                padding: "16px 40px",
                borderRadius: "999px",
                fontWeight: 600,
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Book Now & Save ✨
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

