import React from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, Send } from "lucide-react";

export default function ContactSectionClone() {
  return (
    <div className="contact-wrapper">
      <section className="contact-section">
        <div className="container">
          <div className="badge">
            <Phone size={16} />
            <span>Get In Touch</span>
          </div>

          <h2 className="title">
            Contact <span>Us</span>
          </h2>

          <p className="subtitle">
            Have questions? We'd love to hear from you!
          </p>

          <div className="card-grid">
            {/* Call Card */}
            <div className="info-card">
              <div className="icon blue">
                <Phone size={22} />
              </div>
              <h3>Call Us</h3>
              <p>93612 50941</p>
              <p>88702 14342</p>
              <p>94861 83148</p>
              <a href="#" className="link">Get in touch →</a>
            </div>

            {/* Email Card */}
            <div className="info-card">
              <div className="icon orange">
                <Mail size={22} />
              </div>
              <h3>Email Us</h3>
              <p>rsboating@gmail.com</p>
              <a href="#" className="link">Get in touch →</a>
            </div>

            {/* Visit Card */}
            <div className="info-card">
              <div className="icon green">
                <MapPin size={22} />
              </div>
              <h3>Visit Us</h3>
              <p>Chunnambar Boat House</p>
              <p>Pondicherry, India</p>
              <a href="#" className="link">Get in touch →</a>
            </div>
          </div>

          <div className="bottom-grid">
            {/* Form Section */}
            <div className="form-card">
              <h3>Send us a Message</h3>

              <label>Full Name *</label>
              <input type="text" placeholder="Your name" />

              <label>Email Address *</label>
              <input type="email" placeholder="your@email.com" />

              <label>Phone Number</label>
              <input type="text" placeholder="Your phone (optional)" />

              <label>Message *</label>
              <textarea placeholder="Tell us about your inquiry..."></textarea>

              <button className="send-btn">
                <Send size={18} /> Send Message
              </button>
            </div>

            {/* Side Cards */}
            <div className="side-cards">
              <div className="small-card">
                <div className="icon blue">
                  <Clock size={20} />
                </div>
                <h4>Office Hours</h4>
                <p>Monday - Friday</p>
                <strong>7:00 AM - 6:00 PM</strong>
                <p>Saturday - Sunday</p>
                <strong>6:00 AM - 7:00 PM</strong>
              </div>

              <div className="small-card">
                <h4>Follow Us</h4>
                <div className="socials">
                  <Instagram size={18} />
                  <Facebook size={18} />
                  <Twitter size={18} />
                </div>
              </div>

              <div className="call-now">
                <Phone size={24} />
                <h3>Call Now</h3>
                <p>93612 50941</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        * { box-sizing: border-box; }
        .contact-wrapper { font-family: Inter, sans-serif; background:#f1f5f9; padding:80px 20px;  color: #0f172a; }
        .container { max-width:1200px; margin:auto; text-align:center; }

        .badge {
          display:inline-flex;
          align-items:center;
          gap:8px;
          background:#dbeafe;
          color:#1e40af;
          padding:8px 16px;
          border-radius:30px;
          font-weight:600;
          margin-bottom:20px;
        }

        .title { font-size:42px; font-weight:800; margin-bottom:10px; color:#0f172a; }
        .title span { color:#f97316; }
        .subtitle { color:#64748b; margin-bottom:50px; }

        .card-grid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:30px;
          margin-bottom:60px;
        }

        .info-card {
          background:white;
          padding:30px;
          border-radius:18px;
          box-shadow:0 10px 30px rgba(0,0,0,0.05);
          text-align:left;
          transition:all .3s ease;
          border:2px solid transparent;
        }

        .info-card:hover {
          border-color:#f97316;
          transform:translateY(-6px);
          box-shadow:0 15px 40px rgba(249,115,22,.2);
        }

        .icon {
          width:50px; height:50px; border-radius:12px;
          display:flex; align-items:center; justify-content:center;
          color:white; margin-bottom:15px;
        }
        .blue { background:linear-gradient(135deg,#2563eb,#38bdf8); }
        .orange { background:linear-gradient(135deg,#f97316,#fb923c); }
        .green { background:linear-gradient(135deg,#10b981,#22c55e); }

        .link { display:inline-block; margin-top:10px; color:#f97316; font-weight:600; text-decoration:none; }

        .bottom-grid {
          display:grid;
          grid-template-columns:2fr 1fr;
          gap:40px;
          text-align:left;
        }

        .form-card {
          background:white;
          padding:30px;
          border-radius:20px;
          box-shadow:0 15px 40px rgba(0,0,0,0.05);
        }

        .form-card input,
        .form-card textarea {
          width:100%; padding:12px; margin:10px 0 20px;
          border-radius:10px; border:1px solid #e2e8f0;
          font-size:14px;
        }

        .form-card textarea { height:120px; resize:none; }

        .send-btn {
          width:100%;
          padding:14px;
          background:linear-gradient(90deg,#f97316,#fb923c);
          color:white;
          border:none;
          border-radius:12px;
          font-weight:700;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          transition:.3s;
        }
        .send-btn:hover { transform:translateY(-3px); box-shadow:0 10px 30px rgba(249,115,22,.3); }

        .side-cards { display:flex; flex-direction:column; gap:20px; }

        .small-card {
          background:white;
          padding:20px;
          border-radius:18px;
          box-shadow:0 10px 30px rgba(0,0,0,0.05);
        }

        .socials { display:flex; gap:15px; margin-top:10px; }
        .socials svg { cursor:pointer; }

        .call-now {
          background:linear-gradient(135deg,#f97316,#fb923c);
          color:white;
          padding:30px;
          border-radius:20px;
          text-align:center;
          box-shadow:0 15px 40px rgba(249,115,22,.3);
        }

        @media(max-width:1024px){
          .card-grid { grid-template-columns:1fr; }
          .bottom-grid { grid-template-columns:1fr; }
        }

        .info-card h3,
        .info-card p,
        .small-card h4,
        .small-card p {
        color: #0f172a;
        }

        .subtitle {
        color: #0f172a;
        }

        .form-card,
        .small-card,
        .info-card {
        color: #0f172a;
        }

        .form-card label,
        .form-card h3,
        .small-card h4,
        .info-card h3 {
        color: #0f172a;
        }
      `}</style>
    </div>
  );
}
