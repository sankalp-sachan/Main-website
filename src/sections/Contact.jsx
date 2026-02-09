import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Contact = () => {
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

          <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5"></textarea>
            </div>
            <button className="btn btn-primary">Send Message</button>
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
