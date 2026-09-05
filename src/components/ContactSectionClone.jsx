import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Send,
  CheckCircle,
} from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactSectionClone() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <div className="contact-wrapper">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-badge">
            <Phone size={16} />
            <span>Get In Touch</span>
          </div>

          <h2 className="contact-title">
            Contact <span>Us</span>
          </h2>

          <p className="contact-subtitle">
            Have questions? We&apos;d love to hear from you!
          </p>

          <div className="contact-card-grid">
            {/* Call Card */}
            <div className="contact-info-card">
              <div className="contact-icon blue">
                <Phone size={22} />
              </div>

              <h3>Call Us</h3>

              <a href="tel:9584150167">95841 50167</a>
              <a href="tel:8596414374">85964 14374</a>
              <a href="tel:9455283734">94552 83734</a>

              <a className="contact-link" href="tel:9584150167">
                Get in touch →
              </a>
            </div>

            {/* Email Card */}
            <div className="contact-info-card">
              <div className="contact-icon orange">
                <Mail size={22} />
              </div>

              <h3>Email Us</h3>

              <a href="mailto:rsboating@gmail.com">
                rsboating@gmail.com
              </a>

              <a className="contact-link" href="mailto:rsboating@gmail.com">
                Get in touch →
              </a>
            </div>

            {/* Visit Card */}
            <div className="contact-info-card">
              <div className="contact-icon green">
                <MapPin size={22} />
              </div>

              <h3>Visit Us</h3>

              <p>Chunnambar Boat House</p>
              <p>Pondicherry, India</p>

              <a
                className="contact-link"
                href="https://www.google.com/maps/search/?api=1&query=Chunnambar+Boat+House+Pondicherry"
                target="_blank"
                rel="noreferrer"
              >
                Get directions →
              </a>
            </div>
          </div>

          <div className="contact-bottom-grid">
            {/* Contact Form */}
            <div className="contact-form-card">
              <h3>Send us a Message</h3>

              {submitted && (
                <div className="success-message" role="alert">
                  <CheckCircle size={20} />
                  <span>Message sent successfully!</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <button type="submit" className="send-btn">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Side Cards */}
            <div className="contact-side-cards">
              <div className="contact-small-card">
                <div className="contact-icon blue">
                  <Clock size={20} />
                </div>

                <h4>Office Hours</h4>

                <p>Monday - Friday</p>
                <strong>7:00 AM - 6:00 PM</strong>

                <p>Saturday - Sunday</p>
                <strong>6:00 AM - 7:00 PM</strong>
              </div>

              <div className="contact-small-card">
                <h4>Follow Us</h4>

                <div className="contact-socials">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>

                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>

                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>

              <a href="tel:9584150167" className="contact-call-now">
                <Phone size={24} />
                <h3>Call Now</h3>
                <p>95841 50167</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .contact-wrapper {
          width: 100%;
          padding: 80px 20px;
          background: #f1f5f9;
          color: #0f172a;
          font-family: Inter, Arial, sans-serif;
        }

        .contact-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-badge {
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 auto 20px;
          padding: 8px 16px;
          border-radius: 30px;
          background: #dbeafe;
          color: #1e40af;
          font-weight: 600;
          font-size: 14px;
        }

        .contact-title {
          margin: 0;
          text-align: center;
          color: #0f172a;
          font-size: 42px;
          line-height: 1.2;
          font-weight: 800;
        }

        .contact-title span {
          color: #f97316;
        }

        .contact-subtitle {
          margin: 14px 0 50px;
          text-align: center;
          color: #475569;
          font-size: 16px;
        }

        .contact-card-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .contact-info-card {
          min-width: 0;
          padding: 30px;
          background: #ffffff;
          border: 2px solid transparent;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
          transition: 0.3s ease;
        }

        .contact-info-card:hover {
          border-color: #f97316;
          transform: translateY(-6px);
          box-shadow: 0 15px 40px rgba(249, 115, 22, 0.15);
        }

        .contact-info-card h3 {
          margin: 0 0 15px;
          color: #0f172a;
          font-size: 21px;
        }

        .contact-info-card p,
        .contact-info-card a:not(.contact-link) {
          display: block;
          margin: 8px 0;
          color: #475569;
          font-size: 15px;
          line-height: 1.5;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .contact-info-card a:not(.contact-link):hover {
          color: #f97316;
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          border-radius: 12px;
          color: #ffffff;
        }

        .blue {
          background: linear-gradient(135deg, #2563eb, #38bdf8);
        }

        .orange {
          background: linear-gradient(135deg, #f97316, #fb923c);
        }

        .green {
          background: linear-gradient(135deg, #10b981, #22c55e);
        }

        .contact-link {
          display: inline-block;
          margin-top: 12px;
          color: #f97316;
          font-weight: 700;
          text-decoration: none;
        }

        .contact-link:hover {
          color: #ea580c;
        }

        .contact-bottom-grid {
          display: grid;
          grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
          gap: 40px;
          align-items: start;
        }

        .contact-form-card,
        .contact-small-card {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(15, 23, 42, 0.05);
        }

        .contact-form-card {
          padding: 30px;
        }

        .contact-form-card h3 {
          margin: 0 0 25px;
          color: #0f172a;
          font-size: 22px;
        }

        .contact-form-card label {
          display: block;
          margin-bottom: 8px;
          color: #0f172a;
          font-size: 14px;
          font-weight: 600;
        }

        .contact-form-card input,
        .contact-form-card textarea {
          width: 100%;
          display: block;
          margin-bottom: 20px;
          padding: 13px 14px;
          border: 1px solid #dbe3ee;
          border-radius: 10px;
          outline: none;
          background: #ffffff;
          color: #0f172a;
          font-family: inherit;
          font-size: 14px;
          transition: 0.2s ease;
        }

        .contact-form-card input {
          height: 48px;
        }

        .contact-form-card textarea {
          min-height: 130px;
          resize: vertical;
        }

        .contact-form-card input:focus,
        .contact-form-card textarea:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.12);
        }

        .send-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .send-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(249, 115, 22, 0.3);
        }

        .success-message {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
          padding: 14px 16px;
          border: 1px solid #86efac;
          border-radius: 10px;
          background: #f0fdf4;
          color: #15803d;
          font-size: 14px;
          font-weight: 600;
        }

        .contact-side-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-small-card {
          padding: 22px;
        }

        .contact-small-card h4 {
          margin: 0 0 18px;
          color: #0f172a;
          font-size: 19px;
        }

        .contact-small-card p {
          margin: 12px 0 5px;
          color: #475569;
          line-height: 1.5;
        }

        .contact-small-card strong {
          color: #0f172a;
        }

        .contact-socials {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .contact-socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f172a;
          transition: 0.2s ease;
        }

        .contact-socials a:hover {
          color: #f97316;
          transform: translateY(-2px);
        }

        .contact-call-now {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 190px;
          padding: 30px;
          border-radius: 20px;
          background: linear-gradient(135deg, #f97316, #fb923c);
          color: #ffffff;
          text-align: center;
          text-decoration: none;
          box-shadow: 0 15px 40px rgba(249, 115, 22, 0.25);
          transition: 0.3s ease;
        }

        .contact-call-now:hover {
          transform: translateY(-5px);
        }

        .contact-call-now h3 {
          margin: 15px 0 8px;
          font-size: 22px;
        }

        .contact-call-now p {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .contact-card-grid {
            grid-template-columns: 1fr;
          }

          .contact-bottom-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .contact-wrapper {
            padding: 55px 15px;
          }

          .contact-title {
            font-size: 32px;
          }

          .contact-subtitle {
            margin-bottom: 35px;
          }

          .contact-info-card,
          .contact-form-card,
          .contact-small-card {
            padding: 22px;
          }
        }
      `}</style>
    </div>
  );
}
