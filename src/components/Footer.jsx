import React from 'react';

const Footer = ({ onLegalClick }) => {
  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <span className="gradient-text">TECH</span>FEST
            </a>
            <p>Empowering students through innovation, logic, and creativity.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-legal">
            <h4>Legal</h4>
            <ul>
              <li><button onClick={() => onLegalClick('privacy')}>Privacy Policy</button></li>
              <li><button onClick={() => onLegalClick('terms')}>Terms of Service</button></li>
              <li><button onClick={() => onLegalClick('conduct')}>Code of Conduct</button></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Get the latest news and updates directly in your inbox.</p>
            <div className="newsletter-box">
              <input type="email" placeholder="Email address" />
              <button className="btn btn-primary">Join</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Tech Fest. All rights reserved.</p>
          <p>Organized by the Department of Computer Application (UIET-4), CSJMU</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--bg-darker);
          border-top: 1px solid var(--glass-border);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-brand p {
          margin-top: 20px;
          color: var(--text-muted);
          max-width: 250px;
        }

        .footer h4 {
          margin-bottom: 25px;
          font-size: 1.1rem;
        }

        .footer-links ul, .footer-legal ul {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a, .footer-legal button {
          color: var(--text-muted);
          font-size: 0.95rem;
          background: none;
          border: none;
          padding: 0;
          text-align: left;
          cursor: pointer;
          transition: var(--transition);
        }

        .footer-links a:hover, .footer-legal button:hover {
          color: var(--primary-color);
        }

        .footer-newsletter p {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 20px;
        }

        .newsletter-box {
          display: flex;
          gap: 10px;
        }

        .newsletter-box input {
          flex: 1;
          padding: 10px 15px;
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: white;
        }

        .footer-bottom {
          padding-top: 30px;
          border-top: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-brand p {
            max-width: 100%;
          }
          .footer-links ul, .footer-legal ul {
             flex-direction: row;
             justify-content: center;
             flex-wrap: wrap;
             gap: 20px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
          .newsletter-box {
            flex-direction: column;
          }
        }

        @media (min-width: 1920px) {
           .footer-grid {
              gap: 80px;
           }

           .footer h4 {
              font-size: 1.5rem;
           }

           .footer p, .footer a, .footer button {
              font-size: 1.1rem;
           }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
