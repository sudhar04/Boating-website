import React, { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Deepa Menon",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "Took my kids for the morning ride and they loved it! Very safe environment and the captain was very patient with the children. Wonderful memories!"
  },
  {
    id: 2,
    name: "Anitha R",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text:
      "We booked a private ride for our anniversary and it was perfect. The team arranged everything beautifully. Thank you Bienvenue Boating!"
  }
];

export default function TestimonialsClone() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.badge}>⭐ Customer Reviews</div>

        <h2 style={styles.title}>
          What Our <span style={styles.gradientText}>Customers Say</span>
        </h2>

        <p style={styles.subtitle}>
          Real experiences from real travelers who chose Bienvenue Boating
        </p>

        <div style={styles.carousel}>
          <button style={{ ...styles.nav, left: 0 }} onClick={prevSlide}>
            ‹
          </button>

          <div style={styles.card}>
            <div style={styles.quoteIcon}>❝</div>
            <div style={styles.stars}>★★★★★</div>
            <p style={styles.text}>
              "{testimonials[index].text}"
            </p>

            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              style={styles.avatar}
            />

            <h4 style={styles.name}>{testimonials[index].name}</h4>
            <span style={styles.google}>Google Reviews</span>
          </div>

          <button style={{ ...styles.nav, right: 0 }} onClick={nextSlide}>
            ›
          </button>
        </div>

        <div style={styles.dots}>
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              style={{
                ...styles.dot,
                ...(i === index ? styles.activeDot : {})
              }}
            />
          ))}
        </div>

        <div style={styles.ratingBox}>
          <span style={styles.star}>★</span>
          <strong style={{ fontSize: 22 }}>5.0</strong>
          <span style={{ color: "#666" }}>Based on Google Reviews</span>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    background: "linear-gradient(to bottom, #f8fafc, #f1f5f9)",
    fontFamily: "Poppins, sans-serif"
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center"
  },
  badge: {
    display: "inline-block",
    background: "#fde68a",
    color: "#92400e",
    padding: "8px 16px",
    borderRadius: 50,
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 20
  },
  title: {
    fontSize: "clamp(28px, 5vw, 44px)",
    fontWeight: 700,
    marginBottom: 10,
    color: "#111827"
  },
  gradientText: {
    background: "linear-gradient(to right, #f97316, #2563eb)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  subtitle: {
    color: "#64748b",
    fontSize: 16,
    marginBottom: 60
  },
  carousel: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    background: "#ffffff",
    borderRadius: 24,
    padding: "60px 40px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
    maxWidth: 800,
    width: "100%",
    position: "relative",
    transition: "all 0.5s ease"
  },
  quoteIcon: {
    position: "absolute",
    top: -20,
    left: 30,
    background: "#f97316",
    color: "#fff",
    width: 50,
    height: 50,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    boxShadow: "0 10px 25px rgba(249,115,22,0.4)"
  },
  stars: {
    color: "#fbbf24",
    fontSize: 22,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    lineHeight: 1.7,
    color: "#334155",
    marginBottom: 30
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    margin: "20px auto 10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.15)"
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
    margin: "5px 0"
  },
  google: {
    fontSize: 14,
    color: "#64748b"
  },
  nav: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "#fff",
    border: "none",
    width: 45,
    height: 45,
    borderRadius: "50%",
    fontSize: 22,
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
  },
  dots: {
    marginTop: 30
  },
  dot: {
    display: "inline-block",
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "#cbd5e1",
    margin: "0 5px",
    cursor: "pointer"
  },
  activeDot: {
    width: 24,
    borderRadius: 20,
    background: "#f97316"
  },
  ratingBox: {
    marginTop: 60,
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: "#fff",
    padding: "15px 25px",
    borderRadius: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
  },
  star: {
    color: "#fbbf24",
    fontSize: 24
  }
};
