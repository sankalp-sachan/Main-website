import React from 'react';
import { ExternalLink, Terminal, Shield, Cpu, Globe, Rocket, Code2, Brain } from 'lucide-react';

const Platform = () => {
    const platforms = [
        {
            id: 'codeminati',
            name: 'CODEMINATI',
            tagline: 'The Ultimate DSA Judge',
            icon: <Code2 size={40} />,
            desc: 'Our proprietary judge for Data Structures and Algorithms. Compete in real-time, solve complex problems, and see where you stand on the global leaderboard.',
            link: '/login',
            features: ['Real-time Execution', 'Sandboxed Testing', 'Global Ranking'],
            color: 'var(--primary-color)'
        },
        {
            id: 'quiz-app',
            name: 'QUIZ HUB',
            tagline: 'Aptitude & MCQs',
            icon: <Brain size={40} />,
            desc: 'A robust platform for rapid-fire technical quizzes. Test your core computer science knowledge and aptitude with timed challenges and instant results.',
            link: '/login',
            features: ['Timed Rounds', 'Instant Results', 'Multi-category'],
            color: 'var(--secondary-color)'
        }
    ];

    return (
        <section id="platform" className="section-padding platform-section">
            <div className="container">
                <div className="section-header text-center mb-12">
                    <div className="badge animate-pulse mb-4">
                        <Rocket size={14} className="mr-2" /> Competition Ecosystem
                    </div>
                    <h2 className="section-title">
                        Our <span className="gradient-text">Platforms</span>
                    </h2>
                    <p className="section-desc mx-auto">
                        Hackover is powered by specialized platforms designed to provide a seamless competition experience
                        tailored to each event category.
                    </p>
                </div>

                <div className="platforms-grid">
                    {platforms.map((platform, index) => (
                        <div key={platform.id} className="platform-card glass-hover">
                            <div className="platform-icon-wrapper" style={{ '--accent': platform.color }}>
                                {platform.icon}
                            </div>
                            <div className="platform-info">
                                <span className="platform-tagline" style={{ color: platform.color }}>{platform.tagline}</span>
                                <h3>{platform.name}</h3>
                                <p>{platform.desc}</p>

                                <div className="platform-features-list">
                                    {platform.features.map((feature, fIdx) => (
                                        <span key={fIdx} className="feature-pill">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <a href={platform.link} className="platform-link-btn group">
                                    Access Platform
                                    <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                            <div className="card-shine"></div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .platform-section {
          background: radial-gradient(circle at 50% -20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
          position: relative;
          overflow: hidden;
        }

        .section-desc {
          color: var(--text-muted);
          max-width: 600px;
          font-size: 1.1rem;
          margin-bottom: 50px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 20px;
          color: var(--primary-color);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .platforms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
          margin-top: 20px;
        }

        .platform-card {
          padding: 50px;
          border-radius: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid var(--glass-border);
          transition: var(--transition);
        }

        .platform-card:hover {
          transform: translateY(-12px);
          background: rgba(30, 41, 59, 0.6);
          border-color: var(--primary-color);
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.5);
        }

        .platform-icon-wrapper {
          width: 90px;
          height: 90px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          color: var(--accent);
          position: relative;
          z-index: 2;
          transition: var(--transition);
        }

        .platform-card:hover .platform-icon-wrapper {
          background: var(--accent);
          color: white;
          transform: rotate(10deg);
        }

        .platform-tagline {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        .platform-card h3 {
          font-size: 2.2rem;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .platform-card p {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .platform-features-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 35px;
        }

        .feature-pill {
          padding: 6px 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 30px;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .platform-link-btn {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: var(--text-main);
          padding: 12px 30px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          transition: var(--transition);
        }

        .platform-link-btn:hover {
          background: white;
          color: black;
          transform: scale(1.05);
        }

        .card-shine {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .platforms-grid {
            grid-template-columns: 1fr;
          }
          
          .platform-card {
            padding: 40px 30px;
          }
        }

        @media (max-width: 480px) {
          .platform-card h3 {
            font-size: 1.8rem;
          }
          
          .platform-icon-wrapper {
            width: 70px;
            height: 70px;
          }
        }

        @media (min-width: 1920px) {
          .platforms-grid {
            gap: 60px;
          }
          .platform-card {
            padding: 80px;
          }
          .platform-card h3 {
            font-size: 3rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Platform;
