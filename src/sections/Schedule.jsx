import React from 'react';

const Schedule = () => {
  const events = [
    { time: "", title: "", desc: "" },
  ];

  return (
    <section id="schedule" className="section-padding">
      <div className="container">
        <h2 className="section-title">Event Schedule</h2>

        <div className="timeline">
          {events.map((event, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <span className="timeline-time">{event.time}</span>
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, var(--primary-color), var(--secondary-color), transparent);
          transform: translateX(-50%);
        }

        .timeline-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 40px;
          position: relative;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 20px;
          height: 20px;
          background: var(--bg-darker);
          border: 4px solid var(--primary-color);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          box-shadow: 0 0 15px var(--primary-color);
        }

        .timeline-content {
          width: 45%;
          padding: 30px;
          border-radius: 20px;
          transition: var(--transition);
        }

        .timeline-content:hover {
          transform: scale(1.02);
          border-color: var(--primary-color);
        }

        .timeline-time {
          display: inline-block;
          font-weight: 700;
          color: var(--primary-glow);
          margin-bottom: 10px;
          font-size: 0.9rem;
          letter-spacing: 1px;
        }

        .timeline-content h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
        }

        .timeline-content p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 30px;
          }

          .timeline-item, .timeline-item:nth-child(even) {
            flex-direction: row;
            justify-content: flex-start;
          }

          .timeline-dot {
            left: 30px;
          }

          .timeline-content {
            width: calc(100% - 60px);
            margin-left: 60px;
          }
        }

        @media (max-width: 480px) {
          .timeline::before {
            left: 20px;
          }
          
          .timeline-dot {
            left: 20px;
            width: 16px;
            height: 16px;
          }
          
          .timeline-content {
            width: calc(100% - 40px);
            margin-left: 40px;
            padding: 20px;
          }
          
          .timeline-content h3 {
            font-size: 1.1rem;
          }

          .timeline-item {
             margin-bottom: 30px;
          }
        }
        
        @media (min-width: 1920px) {
          .timeline {
             max-width: 1000px;
          }

          .timeline-content {
             padding: 40px;
          }
          
          .timeline-content h3 {
             font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Schedule;
