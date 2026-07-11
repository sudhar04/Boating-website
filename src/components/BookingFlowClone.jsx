import React, { useState } from "react";
import { FaCalendarAlt, FaUser, FaUsers, FaCrown, FaHeart, FaCamera, FaStar, FaShip } from "react-icons/fa";

// 🔥 FULL BOOKING FLOW CLONE (Responsive)
// Single component version (can later split into smaller components)

export default function BookingFlowClone() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const pricePerSeat = 500;
  const totalAmount = selectedSeats.length * pricePerSeat;

  const dates = Array.from({ length: 11 }, (_, i) => ({
    day: 10 + i,
    label: ["Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri"][i],
  }));

  const plans = [
    { id: 1, name: "Sharing Ride", price: 500, icon: <FaUsers />, type: "per person" },
    { id: 2, name: "Private Ride", price: 5000, icon: <FaCrown />, type: "per boat" },
    { id: 3, name: "Birthday Celebration", price: 6000, icon: <FaStar />, type: "per boat" },
    { id: 4, name: "Couple Sunset Ride", price: 3000, icon: <FaHeart />, type: "per couple" },
    { id: 5, name: "Photoshoot Ride", price: 5500, icon: <FaCamera />, type: "per session" },
    { id: 6, name: "Group Celebration", price: 7000, icon: <FaShip />, type: "per boat" },
  ];

  const toggleSeat = (index) => {
    if (selectedSeats.includes(index)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== index));
    } else {
      setSelectedSeats([...selectedSeats, index]);
    }
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", background: "#2d47a1", padding: "60px 20px" }}>

      {/* HEADER */}
      <div style={{ textAlign: "center", color: "white", marginBottom: 40 }}>
        <h1 style={{ fontSize: 42, fontWeight: 700 }}>
          Reserve Your <span style={{ color: "#ff8c1a" }}>Dream Ride</span>
        </h1>
        <p style={{ opacity: 0.9 }}>Select your preferred date, time, and experience</p>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div style={cardStyle}>
          <h2><FaCalendarAlt /> Select Date</h2>

          <div style={dateGrid}>
            {dates.map((d, i) => (
              <div
                key={i}
                onClick={() => setSelectedDate(d.day)}
                style={{
                  ...dateCard,
                  background: selectedDate === d.day ? "#ff8c1a" : "#f4f6fb",
                  color: selectedDate === d.day ? "white" : "#333"
                }}
              >
                <div>{d.label}</div>
                <strong>{d.day}</strong>
                <div>Feb</div>
              </div>
            ))}
          </div>

          {selectedDate && (
            <div style={{ marginTop: 40 }}>
              <h3>Select Experience</h3>
              <div style={planGrid}>
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan)}
                    style={{
                      ...planCard,
                      border: selectedPlan?.id === plan.id ? "2px solid #ff8c1a" : "1px solid #ddd"
                    }}
                  >
                    <div style={{ fontSize: 28 }}>{plan.icon}</div>
                    <h4>{plan.name}</h4>
                    <p>₹{plan.price} {plan.type}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedPlan && (
            <div style={{ textAlign: "right", marginTop: 30 }}>
              <button style={ctaStyle} onClick={() => setStep(2)}>Continue</button>
            </div>
          )}
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div style={cardStyle}>
          <h2>Select Your Seats</h2>

          <div style={seatGrid}>
            {Array.from({ length: 14 }).map((_, i) => (
              <div
                key={i}
                onClick={() => toggleSeat(i)}
                style={{
                  ...seatBox,
                  background: selectedSeats.includes(i) ? "#ff8c1a" : "#eee",
                  color: selectedSeats.includes(i) ? "white" : "#333"
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <h3>Total: ₹{totalAmount}</h3>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
            <button style={backBtn} onClick={() => setStep(1)}>Back</button>
            <button style={ctaStyle} onClick={() => setStep(3)}>Continue</button>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div style={cardStyle}>
          <h2>Your Details</h2>

          <input placeholder="Full Name" style={inputStyle}
            onChange={(e)=>setFormData({...formData,name:e.target.value})} />
          <input placeholder="Email" style={inputStyle}
            onChange={(e)=>setFormData({...formData,email:e.target.value})} />
          <input placeholder="Phone" style={inputStyle}
            onChange={(e)=>setFormData({...formData,phone:e.target.value})} />

          <h3>Total Amount: ₹{totalAmount}</h3>

          <button style={ctaStyle}>Proceed to Payment</button>

          <div style={{ marginTop: 30, textAlign: "center" }}>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PAYMENT" alt="QR" />
          </div>
        </div>
      )}
    </div>
  );
}

// 🔹 STYLES
const cardStyle = {
  background: "white",
  borderRadius: 20,
  padding: 40,
  maxWidth: 1100,
  margin: "auto"
};

const dateGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(90px,1fr))",
  gap: 15
};

const dateCard = {
  padding: 15,
  borderRadius: 12,
  cursor: "pointer",
  textAlign: "center"
};

const planGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: 20
};

const planCard = {
  padding: 20,
  borderRadius: 14,
  cursor: "pointer"
};

const seatGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(50px,1fr))",
  gap: 10,
  marginTop: 20
};

const seatBox = {
  padding: 15,
  borderRadius: 8,
  textAlign: "center",
  cursor: "pointer"
};

const ctaStyle = {
  background: "linear-gradient(135deg,#ff8c1a,#ff5e00)",
  color: "white",
  border: "none",
  padding: "12px 30px",
  borderRadius: 8,
  cursor: "pointer"
};

const backBtn = {
  background: "#eee",
  border: "none",
  padding: "12px 20px",
  borderRadius: 8,
  cursor: "pointer"
};

const inputStyle = {
  width: "100%",
  padding: 12,
  marginBottom: 15,
  borderRadius: 8,
  border: "1px solid #ddd"
};
