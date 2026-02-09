import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.text) setStatus({ type: '', text: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const response = await axios.post('https://main-website-backend-3zny.onrender.com/api/contact', formData);
      setStatus({ type: 'success', text: response.data.message || 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact Error:', error);
      setStatus({
        type: 'error',
        text: error.response?.data?.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Have questions? Reach out to our organizing team and we'll get back to you within 24 hours.</p>

            <div className="info-items">
              <div className="info-item">
                <Mail className="info-icon" />
                <a href="mailto:sankalpsachan2007@gmail.com">sankalpsachan2007@gmail.com</a>
              </div>
              <div className="info-item">
                <Phone className="info-icon" />
                <a href="https://wa.me/9532374168?text=Hi%20I%20have%20a%20querry%20related%20to%20the%20event!">+91 9532374168</a>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" />
                <a href="https://www.google.com/maps/dir/?api=1&destination=UIET+4+CSJM+university">Department of Computer Application (UIET-4), CSJMU</a>
              </div>
            </div>
          </div>

          <form className="contact-form glass" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status.text && (
              <div className={`status-feedback ${status.type}`}>
                {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                <span>{status.text}</span>
              </div>
            )}
          </form>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-top: 40px;
        }

        .contact-info h3 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .contact-info p {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-bottom: 40px;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 25px;
          margin-bottom: 40px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 1.1rem;
        }

        .info-icon {
          color: var(--primary-color);
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .social-icon:hover {
          color: var(--primary-color);
          transform: translateY(-5px);
          border-color: var(--primary-color);
        }

        .contact-form {
          padding: 40px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-form input, .contact-form textarea {
          width: 100%;
          padding: 14px 20px;
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
        }

        .contact-form textarea {
          resize: none;
        }

        .status-feedback {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          border-radius: 8px;
          font-size: 0.9rem;
          margin-top: 10px;
        }

        .status-feedback.success {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .status-feedback.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 480px) {
           .contact-form {
             padding: 25px;
           }

           .contact-info h3 {
             font-size: 1.5rem;
           }
        }

        @media (min-width: 1920px) {
           .contact-info h3 {
              font-size: 2.5rem;
           }

           .info-item {
              font-size: 1.3rem;
           }

           .contact-form {
              padding: 60px;
              gap: 30px;
           }
           
           .contact-form input, .contact-form textarea {
              padding: 18px 25px;
              font-size: 1.2rem;
           }
        }
      `}</style>
    </section>
  );
};

export default Contact;
