import React, { useState, useEffect } from 'react';
import { Target, Users, Zap, Building2, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('event'); // 'event' or 'department'

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#about-department') {
        setActiveTab('department');
      } else if (window.location.hash === '#about') {
        setActiveTab('event');
      }
    };

    // Check on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const eventPoints = [
    {
      icon: <Zap />,
      title: "Fast-Paced Innovation",
      desc: "Build solutions in 36 hours of non-stop hacking."
    },
    {
      icon: <Target />,
      title: "Real World Problems",
      desc: "Tackle challenges provided by industry leaders."
    },
    {
      icon: <Users />,
      title: "Expert Mentorship",
      desc: "Get guidance from 50+ mentors and judges."
    }
  ];

  const deptStats = [
    {
      icon: <Building2 />,
      title: "Excellence",
      desc: "State-of-the-art Infrastructure"
    },
    {
      icon: <GraduationCap />,
      title: "Learning",
      desc: "Innovative Curriculum"
    },
    {
      icon: <Award />,
      title: "Achievement",
      desc: "National Recognition"
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container" style={{ position: 'relative' }}>
        <div id="about-department" style={{ position: 'absolute', top: '-100px', visibility: 'hidden' }}></div>
        <div className="section-header">
          <h2 className="section-title">
            {activeTab === 'event' ? 'About Hackover' : 'About Department'}
          </h2>

          <div className="toggle-container glass">
            <button
              className={`toggle-btn ${activeTab === 'event' ? 'active' : ''}`}
              onClick={() => setActiveTab('event')}
            >
              Details
            </button>
            <button
              className={`toggle-btn ${activeTab === 'department' ? 'active' : ''}`}
              onClick={() => setActiveTab('department')}
            >
              Department
            </button>
          </div>
        </div>

        {activeTab === 'event' ? (
          <div className="about-grid fade-in">
            <div className="about-text">
              <h3>Innovate, Code, and Transform</h3>
              <p>
                Hackover 2026 is the premier student-led hackathon designed to bring together the brightest minds
                to solve real-world problems. Join us for a weekend of creation, collaboration, and competition.
              </p>
              <p>
                Whether you are a seasoned developer or a first-time hacker, Hackover provides the platform,
                resources, and network you need to take your skills to the next level.
              </p>
            </div>

            <div className="about-cards">
              {eventPoints.map((pt, i) => (
                <div key={i} className="about-card glass">
                  <div className="about-icon">{pt.icon}</div>
                  <div className="about-info">
                    <h4>{pt.title}</h4>
                    <p>{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="about-grid fade-in">
            <div className="about-text">
              <h3>Department of Computer Application</h3>
              <p className="dept-subtitle">UIET, CSJMU Kanpur</p>
              <p>
                The Department of Computer Application at UIET, CSJMU is dedicated to fostering technical excellence
                and innovation. We strive to provide a dynamic learning environment that empowers students to
                solve real-world challenges through technology.
              </p>
              <p>
                With a focus on practical application and research, our department has been a hub for
                upcoming tech leaders and developers.
              </p>
            </div>

            <div className="about-cards">
              {deptStats.map((pt, i) => (
                <div key={i} className="about-card glass">
                  <div className="about-icon">{pt.icon}</div>
                  <div className="about-info">
                    <h4>{pt.title}</h4>
                    <p>{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .section-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-bottom: 60px;
        }
        
        .section-title {
            margin-bottom: 0;
        }

        .toggle-container {
            display: flex;
            padding: 5px;
            border-radius: 30px;
            gap: 5px;
        }

        .toggle-btn {
            padding: 8px 24px;
            border-radius: 25px;
            background: transparent;
            color: var(--text-muted);
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
        }

        .toggle-btn.active {
            background: var(--primary-color);
            color: white;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }

        .toggle-btn:not(.active):hover {
            color: var(--text-main);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .fade-in {
            animation: fadeIn 0.5s ease forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .about-text h3 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: var(--primary-glow);
        }
        
        .dept-subtitle {
            font-size: 1.2rem;
            color: var(--secondary-color);
            margin-bottom: 20px;
            font-weight: 600;
            display: block;
            margin-top: -10px;
        }

        .about-text p {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-bottom: 20px;
          line-height: 1.7;
        }

        .about-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-card {
          display: flex;
          gap: 20px;
          padding: 25px;
          border-radius: 20px;
          transition: var(--transition);
        }

        .about-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-color);
        }

        .about-icon {
          color: var(--primary-color);
          background: rgba(99, 102, 241, 0.1);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          flex-shrink: 0;
        }

        .about-info h4 {
          font-size: 1.2rem;
          margin-bottom: 8px;
        }

        .about-info p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
           .about-text h3 {
             font-size: 1.5rem;
           }

           .about-card {
             padding: 20px;
             gap: 15px;
           }
           
           .about-icon {
             width: 40px;
             height: 40px;
           }
        }

        @media (min-width: 1920px) {
          .about-text h3 {
             font-size: 3rem;
          }

          .about-text p {
             font-size: 1.4rem;
             max-width: 800px;
          }
          
          .about-card {
             padding: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
