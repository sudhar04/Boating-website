import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const dates = Array.from({ length: 10 }, (_, i) => ({
  day: 10 + i,
  label: ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"][i],
}));

const experiences = [
  {
    id: 1,
    name: "Sharing Ride",
    price: 500,
    type: "person",
  },
  {
    id: 2,
    name: "Private Ride",
    price: 5000,
    type: "boat",
  },
  {
    id: 3,
    name: "Birthday Celebration",
    price: 6000,
    type: "boat",
  },
];

// Replace this with your real UPI ID
const UPI_ID = "rsboating@upi";
const BUSINESS_NAME = "RS Boating Adventure";

export default function PremiumBookingFlow() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const total = selectedExperience
    ? selectedExperience.type === "person"
      ? selectedSeats.length * selectedExperience.price
      : selectedExperience.price
    : 0;

  const upiPaymentUrl = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(
    BUSINESS_NAME
  )}&am=${total}&cu=INR`;

  const toggleSeat = (seat) => {
    setSelectedSeats((previousSeats) =>
      previousSeats.includes(seat)
        ? previousSeats.filter((item) => item !== seat)
        : [...previousSeats, seat]
    );
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedExperience(null);
    setSelectedSeats([]);
    setPaymentCompleted(false);
  };

  const handlePaymentCompleted = () => {
    setPaymentCompleted(true);
  };

  return (
    <div className="booking-wrapper">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .booking-wrapper {
          min-height: 100vh;
          padding: 60px 20px;
          background: linear-gradient(
            135deg,
            #0f172a,
            #1e3a8a,
            #1e40af
          );
          font-family: "Poppins", sans-serif;
        }

        .booking-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          color: white;
        }

        .booking-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .booking-header h1 {
          margin: 0;
          font-size: 42px;
          font-weight: 700;
        }

        .booking-header h1 span {
          color: #ff7a00;
        }

        .booking-header p {
          margin-top: 20px;
          font-size: 18px;
        }

        .booking-card {
          width: 100%;
          background: white;
          color: #111827;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .booking-card h2 {
          margin: 0 0 25px;
          font-size: 26px;
        }

        .dates {
          display: flex;
          gap: 10px;
          width: 100%;
          overflow-x: auto;
          padding-bottom: 8px;
        }

        .date-btn {
          min-width: 80px;
          padding: 15px 10px;
          border: 1px solid #d1d5db;
          border-radius: 16px;
          background: #f8fafc;
          color: #111827;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .date-btn:hover {
          border-color: #ff7a00;
        }

        .date-btn.active {
          background: #ff7a00;
          border-color: #ff7a00;
          color: white;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .exp-card {
          padding: 25px;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          background: white;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .exp-card:hover {
          transform: translateY(-4px);
          border-color: #ff7a00;
        }

        .exp-card.active {
          border-color: #ff7a00;
          background: #fff3e8;
        }

        .exp-card h3 {
          margin: 0;
          font-size: 20px;
        }

        .exp-card .price {
          margin-top: 12px;
          color: #ff7a00;
          font-size: 23px;
          font-weight: 700;
        }

        .seat-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 10px;
          width: 100%;
          max-width: 400px;
          margin: 30px auto;
        }

        .seat {
          height: 42px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          background: #f3f4f6;
          color: #111827;
          cursor: pointer;
          font-weight: 600;
        }

        .seat.active {
          background: #ff7a00;
          border-color: #ff7a00;
          color: white;
        }

        .amount {
          text-align: center;
          margin: 20px 0;
          font-size: 24px;
          font-weight: 700;
          color: #ff7a00;
        }

        .booking-summary {
          display: grid;
          gap: 15px;
          padding: 25px;
          background: #f8fafc;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
        }

        .booking-summary p {
          margin: 0;
          font-size: 17px;
        }

        .booking-summary strong {
          color: #ff7a00;
        }

        .footer-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin-top: 35px;
        }

        .btn {
          padding: 13px 28px;
          border: none;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn-primary {
          background: #ff7a00;
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          background: #e66d00;
        }

        .btn-back {
          background: #e5e7eb;
          color: #111827;
        }

        .payment-screen {
          text-align: center;
        }

        .payment-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          border-radius: 50%;
          background: #fff1e6;
          color: #ff7a00;
          font-size: 42px;
          font-weight: 700;
        }

        .payment-screen h2 {
          margin-bottom: 12px;
        }

        .payment-screen p {
          max-width: 650px;
          margin: 0 auto 25px;
          color: #64748b;
          line-height: 1.7;
        }

        .qr-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          margin: 10px auto 25px;
          background: white;
          border: 1px solid #dbeafe;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
        }

        .payment-amount {
          margin: 10px 0 25px;
          font-size: 22px;
          color: #111827;
        }

        .payment-amount strong {
          display: block;
          margin-top: 8px;
          color: #ff7a00;
          font-size: 30px;
        }

        .payment-note {
          margin: 20px auto 0;
          max-width: 550px;
          padding: 15px;
          border-radius: 12px;
          background: #fff7ed;
          color: #9a3412;
          font-size: 14px;
        }

        .success-message {
          text-align: center;
        }

        .success-circle {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          border-radius: 50%;
          background: #dcfce7;
          color: #16a34a;
          font-size: 42px;
          font-weight: 700;
        }

        .success-message h2 {
          color: #16a34a;
        }

        .success-message p {
          color: #64748b;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .booking-wrapper {
            padding: 35px 12px;
          }

          .booking-header {
            margin-bottom: 30px;
          }

          .booking-header h1 {
            font-size: 30px;
          }

          .booking-header p {
            font-size: 15px;
          }

          .booking-card {
            padding: 22px;
            border-radius: 18px;
          }

          .booking-card h2 {
            font-size: 22px;
          }

          .experience-grid {
            grid-template-columns: 1fr;
          }

          .seat-grid {
            gap: 7px;
          }

          .seat {
            height: 38px;
          }

          .footer-actions {
            flex-direction: column-reverse;
            align-items: stretch;
          }

          .btn {
            width: 100%;
          }

          .qr-wrapper {
            max-width: 100%;
            overflow: hidden;
          }
        }
      `}</style>

      <div className="booking-container">
        <div className="booking-header">
          <h1>
            Reserve Your <span>Dream Ride</span>
          </h1>
          <p>Premium booking experience</p>
        </div>

        <div className="booking-card">
          {paymentCompleted ? (
            <div className="success-message">
              <div className="success-circle">✓</div>

              <h2>Payment Completed Successfully</h2>

              <p>
                Thank you for booking with RS Boating Adventure. Your booking
                request has been received.
              </p>

              <button className="btn btn-primary" onClick={resetBooking}>
                Make Another Booking
              </button>
            </div>
          ) : (
            <>
              {step === 1 && (
                <>
                  <h2>Select Date & Experience</h2>

                  <div className="dates">
                    {dates.map((date) => (
                      <button
                        key={date.day}
                        className={`date-btn ${
                          selectedDate?.day === date.day ? "active" : ""
                        }`}
                        onClick={() => setSelectedDate(date)}
                      >
                        <div>{date.label}</div>
                        <strong>{date.day}</strong>
                      </button>
                    ))}
                  </div>

                  <div className="experience-grid">
                    {experiences.map((experience) => (
                      <div
                        key={experience.id}
                        className={`exp-card ${
                          selectedExperience?.id === experience.id
                            ? "active"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedExperience(experience);
                          setSelectedSeats([]);
                        }}
                      >
                        <h3>{experience.name}</h3>

                        <div className="price">
                          ₹{experience.price}
                          {experience.type === "person" ? " / person" : " / boat"}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="footer-actions">
                    <div />

                    <button
                      className="btn btn-primary"
                      disabled={!selectedDate || !selectedExperience}
                      onClick={() => setStep(2)}
                    >
                      Continue
                    </button>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2>
                    {selectedExperience?.type === "person"
                      ? "Select Seats"
                      : "Confirm Your Ride"}
                  </h2>

                  {selectedExperience?.type === "person" ? (
                    <>
                      <div className="seat-grid">
                        {Array.from({ length: 14 }, (_, index) => (
                          <button
                            key={index}
                            className={`seat ${
                              selectedSeats.includes(index) ? "active" : ""
                            }`}
                            onClick={() => toggleSeat(index)}
                          >
                            {index + 1}
                          </button>
                        ))}
                      </div>

                      <div className="amount">₹{total}</div>
                    </>
                  ) : (
                    <div className="booking-summary">
                      <p>
                        Experience:{" "}
                        <strong>{selectedExperience?.name}</strong>
                      </p>

                      <p>
                        Booking type: <strong>Private boat booking</strong>
                      </p>

                      <p>
                        Total amount: <strong>₹{total}</strong>
                      </p>
                    </div>
                  )}

                  <div className="footer-actions">
                    <button
                      className="btn btn-back"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </button>

                    <button
                      className="btn btn-primary"
                      disabled={
                        selectedExperience?.type === "person" &&
                        selectedSeats.length === 0
                      }
                      onClick={() => setStep(3)}
                    >
                      Continue
                    </button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2>Booking Summary</h2>

                  <div className="booking-summary">
                    <p>
                      Date: <strong>{selectedDate?.label} {selectedDate?.day}</strong>
                    </p>

                    <p>
                      Experience:{" "}
                      <strong>{selectedExperience?.name}</strong>
                    </p>

                    {selectedExperience?.type === "person" && (
                      <p>
                        Seats selected: <strong>{selectedSeats.length}</strong>
                      </p>
                    )}

                    <p>
                      Total amount: <strong>₹{total}</strong>
                    </p>
                  </div>

                  <div className="footer-actions">
                    <button
                      className="btn btn-back"
                      onClick={() => setStep(2)}
                    >
                      Back
                    </button>

                    <button
                      className="btn btn-primary"
                      onClick={() => setStep(4)}
                    >
                      Proceed to Payment
                    </button>
                  </div>
                </>
              )}

              {step === 4 && (
                <div className="payment-screen">
                  <div className="payment-icon">₹</div>

                  <h2>Complete Your Payment</h2>

                  <p>
                    Scan the QR code using Google Pay, PhonePe, Paytm, or any
                    other UPI application to complete your payment.
                  </p>

                  <div className="qr-wrapper">
                    <QRCodeSVG
                      value={upiPaymentUrl}
                      size={240}
                      bgColor="#ffffff"
                      fgColor="#111827"
                      level="H"
                      includeMargin
                    />
                  </div>

                  <div className="payment-amount">
                    Amount to pay:
                    <strong>₹{total}</strong>
                  </div>

                  <div className="payment-note">
                    After completing the payment, click the button below.
                    Payment verification should be confirmed by your booking
                    team before accepting the booking.
                  </div>

                  <div className="footer-actions">
                    <button
                      className="btn btn-back"
                      onClick={() => setStep(3)}
                    >
                      Back
                    </button>

                    <button
                      className="btn btn-primary"
                      onClick={handlePaymentCompleted}
                    >
                      Payment Completed
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}



