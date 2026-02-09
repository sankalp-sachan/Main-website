import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Trophy } from 'lucide-react';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-16T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="hero-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">Registration Open 2026</div>
          <h1 className="hero-title">
            Unleash Your <span className="gradient-text">Creativity</span> <br />
            at Hackover 2026
          </h1>
          <p className="hero-subtitle">
            text have to added
          </p>

          <div className="hero-btns">
            <a href="#event-details" className="btn btn-primary">Event Details</a>
            <a href="#about" className="btn btn-outline">Learn More</a>
          </div>

          <div className="countdown">
            <div className="countdown-item">
              <span className="count">{timeLeft.days}</span>
              <span className="label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="count">{timeLeft.hours}</span>
              <span className="label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="count">{timeLeft.minutes}</span>
              <span className="label">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="count">{timeLeft.seconds}</span>
              <span className="label">Seconds</span>
            </div>
          </div>
        </div>

        <div className="hero-highlights">
          <div className="highlight-card glass">
            <Calendar className="highlight-icon" />
            <div className="highlight-info">
              <h3>Date</h3>
              <p>February 16-20, 2026</p>
            </div>
          </div>
          <div className="highlight-card glass">
            <MapPin className="highlight-icon" />
            <div className="highlight-info">
              <h3>Venue</h3>
              <p> Department of Computer Application (UIET-4), CSJMU</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .home-section {
          min-height: 100vh;
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: calc(var(--nav-height) + 40px);
          padding-bottom: 80px;
          position: relative;
        }

        .hero-glow {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid var(--primary-color);
          border-radius: 20px;
          color: var(--primary-glow);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 600px;
          margin-bottom: 40px;
        }

        .hero-btns {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
        }

        .countdown {
          display: flex;
          gap: 30px;
        }

        .countdown-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .count {
          font-size: 2.5rem;
          font-weight: 800;
          font-family: var(--font-heading);
          color: var(--text-main);
        }

        .label {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-highlights {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .highlight-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px;
          border-radius: 20px;
          transition: var(--transition);
        }

        .highlight-card:hover {
          transform: translateX(10px);
          background: rgba(30, 41, 59, 0.9);
        }

        .highlight-icon {
          color: var(--primary-color);
          width: 32px;
          height: 32px;
        }

        .highlight-info h3 {
          font-size: 1rem;
          color: var(--text-muted);
        }

        .highlight-info p {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .sponsors-container {
          margin-top: 80px;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .sponsors-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: var(--text-muted);
          margin-bottom: 30px;
          opacity: 0.7;
        }

        .sponsors-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 30px;
        }

        .sponsor-logo {
          padding: 10px 25px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-muted);
          opacity: 0.6;
          transition: var(--transition);
        }

        .sponsor-logo:hover {
          opacity: 1;
          color: white;
          border-color: var(--primary-color);
          transform: translateY(-5px);
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-btns {
            justify-content: center;
          }

          .countdown {
            justify-content: center;
          }

          .hero-title {
            font-size: 3rem;
          }

          .hero-highlights {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .countdown {
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .count {
            font-size: 1.8rem;
          }

          .sponsors-grid {
            gap: 15px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
            line-height: 1.2;
          }

          .hero-badge {
            font-size: 0.75rem;
            padding: 4px 12px;
          }

          .hero-btns {
            flex-direction: column;
            width: 100%;
          }

          .hero-btns .btn {
            width: 100%;
          }

          .countdown {
            gap: 10px;
          }

          .count {
            font-size: 1.5rem;
          }

          .label {
            font-size: 0.7rem;
          }
        }

        @media (min-width: 1920px) {
          .hero-container {
             grid-template-columns: 1fr 0.8fr;
          }
          
          .hero-title {
            font-size: 5.5rem;
          }

          .hero-subtitle {
             font-size: 1.5rem;
             max-width: 800px;
          }

          .count {
             font-size: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
