import React, { useState } from "react";

const dates = Array.from({ length: 10 }, (_, i) => ({
  day: 10 + i,
  label: ["Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu"][i]
}));

const experiences = [
  { id: 1, name: "Sharing Ride", price: 500, type: "person" },
  { id: 2, name: "Private Ride", price: 5000, type: "boat" },
  { id: 3, name: "Birthday Celebration", price: 6000, type: "boat" }
];

export default function PremiumBookingFlow() {

  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const total = selectedExperience
    ? selectedExperience.type === "person"
      ? selectedSeats.length * selectedExperience.price
      : selectedExperience.price
    : 0;

  const toggleSeat = (seat) => {
    setSelectedSeats(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  return (
    <div className="booking-wrapper">
      <style>{`
        * { box-sizing: border-box; }
        body { margin:0; font-family: 'Poppins', sans-serif; }

        .booking-wrapper {
          min-height:100vh;
          padding:60px 20px;
          background: linear-gradient(135deg,#0f172a,#1e3a8a,#1e40af);
        }

        .container {
          max-width:1100px;
          margin:auto;
          color:white;
        }

        .header {
          text-align:center;
          margin-bottom:50px;
        }

        .header h1 {
          font-size:42px;
          font-weight:700;
        }

        .header span {
          color:#ff7a00;
        }

        .card {
          background:white;
          border-radius:24px;
          padding:40px;
          color:#111;
          box-shadow:0 20px 50px rgba(0,0,0,0.2);
        }

        .dates {
          display:flex;
          gap:10px;
          overflow-x:auto;
        }

        .date-btn {
          min-width:80px;
          padding:15px;
          border-radius:16px;
          border:1px solid #ddd;
          background:#f8f8f8;
          cursor:pointer;
          transition:0.3s;
        }

        .date-btn.active {
          background:#ff7a00;
          color:white;
          border-color:#ff7a00;
        }

        .experience-grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:20px;
          margin-top:30px;
        }

        .exp-card {
          padding:25px;
          border-radius:20px;
          border:1px solid #eee;
          cursor:pointer;
          transition:0.3s;
        }

        .exp-card.active {
          border-color:#ff7a00;
          background:#fff3e8;
        }

        .exp-card h3 {
          margin:0;
        }

        .exp-card .price {
          font-size:22px;
          color:#ff7a00;
          font-weight:700;
          margin-top:10px;
        }

        .seat-grid {
          display:grid;
          grid-template-columns:repeat(7,1fr);
          gap:10px;
          max-width:400px;
          margin:auto;
        }

        .seat {
          height:40px;
          border-radius:8px;
          border:1px solid #ccc;
          background:#f3f3f3;
          cursor:pointer;
        }

        .seat.active {
          background:#ff7a00;
          color:white;
          border-color:#ff7a00;
        }

        .btn {
          padding:12px 28px;
          border-radius:30px;
          border:none;
          cursor:pointer;
          font-weight:600;
        }

        .btn-primary {
          background:#ff7a00;
          color:white;
        }

        .btn-back {
          background:#eee;
        }

        .footer-actions {
          display:flex;
          justify-content:space-between;
          margin-top:30px;
        }

        @media(max-width:768px){
          .header h1{ font-size:28px; }
          .card{ padding:20px; }
        }
      `}</style>

      <div className="container">

        <div className="header">
          <h1>Reserve Your <span>Dream Ride</span></h1>
          <p>Premium booking experience</p>
        </div>

        <div className="card">

          {step===1 && (
            <>
              <h2>Select Date & Experience</h2>

              <div className="dates">
                {dates.map(d=> (
                  <button
                    key={d.day}
                    className={`date-btn ${selectedDate?.day===d.day?"active":""}`}
                    onClick={()=>setSelectedDate(d)}
                  >
                    <div>{d.label}</div>
                    <strong>{d.day}</strong>
                  </button>
                ))}
              </div>

              <div className="experience-grid">
                {experiences.map(exp=> (
                  <div
                    key={exp.id}
                    className={`exp-card ${selectedExperience?.id===exp.id?"active":""}`}
                    onClick={()=>setSelectedExperience(exp)}
                  >
                    <h3>{exp.name}</h3>
                    <div className="price">₹{exp.price}</div>
                  </div>
                ))}
              </div>

              <div className="footer-actions">
                <div />
                <button
                  className="btn btn-primary"
                  disabled={!selectedDate||!selectedExperience}
                  onClick={()=>setStep(2)}
                >Continue</button>
              </div>
            </>
          )}

          {step===2 && (
            <>
              <h2>Select Seats</h2>

              <div className="seat-grid">
                {Array.from({length:14},(_,i)=> (
                  <button
                    key={i}
                    className={`seat ${selectedSeats.includes(i)?"active":""}`}
                    onClick={()=>toggleSeat(i)}
                  >{i+1}</button>
                ))}
              </div>

              <h3 style={{textAlign:'center',marginTop:'20px'}}>₹{total}</h3>

              <div className="footer-actions">
                <button className="btn btn-back" onClick={()=>setStep(1)}>Back</button>
                <button
                  className="btn btn-primary"
                  disabled={selectedExperience?.type==="person" && selectedSeats.length===0}
                  onClick={()=>setStep(3)}
                >Continue</button>
              </div>
            </>
          )}

          {step===3 && (
            <>
              <h2>Booking Summary</h2>
              <p>Date: {selectedDate?.day}</p>
              <p>Experience: {selectedExperience?.name}</p>
              <p>Seats: {selectedSeats.length}</p>
              <h3>Total: ₹{total}</h3>

              <div className="footer-actions">
                <button className="btn btn-back" onClick={()=>setStep(2)}>Back</button>
                <button className="btn btn-primary" onClick={()=>alert("Show QR Payment Here")}>Proceed to Payment</button>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}



