import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Code2, Brain } from 'lucide-react';

const EventDetails = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/event/${id}`);
  };

  const categories = [
    {
      id: 'dsa',
      icon: <Code2 />,
      title: "DSA Hackathon",
      desc: "Solve complex algorithmic problems and optimize solutions in this competitive programming challenge."
    },
    {
      id: 'web',
      icon: <Globe />,
      title: "WEB Hackathon",
      desc: "Build responsive, dynamic, and innovative web applications in this full-stack development contest."
    },
    {
      id: 'aptitude',
      icon: <Brain />,
      title: "Aptitude Test",
      desc: "Test your logical reasoning, quantitative ability, and problem-solving skills in this rapid-fire round."
    },
  ];

  return (
    <section id="event-details" className="section-padding">
      <div className="container">
        <h2 className="section-title">Event Categories</h2>
        <p className="section-desc">Choose your track and start building. Each category has its own dedicated registration.</p>

        <div className="categories-grid">
          {categories.map((cat, i) => (
            <div key={i} className="category-card glass" onClick={() => handleCardClick(cat.id)} style={{ cursor: 'pointer' }}>
              <div className="category-icon-wrapper">
                {cat.icon}
              </div>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <button
                className="btn btn-outline category-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(cat.id);
                }}
              >
                View Details
              </button>
              <div className="category-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .section-desc {
          text-align: center;
          color: var(--text-muted);
          max-width: 600px;
          margin: 10px auto 50px;
          font-size: 1.1rem;
        }

        .categories-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          margin-top: 40px;
        }

        .category-card {
          flex: 1 1 300px; /* Grow, shrink, base width */
          max-width: 400px;
          width: 100%; /* Ensure it doesn't overflow container */
          padding: 40px;
          border-radius: 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .category-card:hover {
          transform: translateY(-10px);
          background: rgba(30, 41, 59, 0.9);
          border-color: var(--primary-color);
        }

        .category-icon-wrapper {
          color: var(--primary-color);
          width: 70px;
          height: 70px;
          margin: 0 auto 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 50%;
          transition: var(--transition);
        }

        .category-card:hover .category-icon-wrapper {
          background: var(--primary-color);
          color: white;
          transform: scale(1.1);
        }

        .category-card h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
        }

        .category-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .category-btn {
          font-size: 0.85rem;
          padding: 8px 20px;
          border-width: 1.5px;
          opacity: 0;
          transform: translateY(10px);
          transition: var(--transition);
          margin-top: auto;
        }

        .category-card:hover .category-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .category-hover-effect {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
          transform: scaleX(0);
          transition: var(--transition);
          transform-origin: left;
        }

        .category-card:hover .category-hover-effect {
          transform: scaleX(1);
        }

        @media (max-width: 768px) {
          .categories-grid {
            grid-template-columns: 1fr;
          }
          .category-btn {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .category-card {
            padding: 25px;
          }
          
          .category-icon-wrapper {
            width: 50px;
            height: 50px;
            margin-bottom: 16px;
          }
          
          .category-card h3 {
            font-size: 1.25rem;
          }
        }

        @media (min-width: 1920px) {
           .category-card {
              padding: 60px;
           }
           
           .category-card h3 {
              font-size: 2rem;
           }

           .category-card p {
              font-size: 1.2rem;
           }
        }
      `}</style>
    </section>
  );
};

export default EventDetails;
