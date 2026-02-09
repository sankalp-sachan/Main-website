import React from 'react';
import { Building2, GraduationCap, Award } from 'lucide-react';

const Department = () => {
    return (
        <section id="department" className="section-padding">
            <div className="container">
                <h2 className="section-title">About Department</h2>

                <div className="dept-grid">
                    <div className="dept-content">
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

                    <div className="dept-stats">
                        <div className="stat-card glass">
                            <Building2 className="stat-icon" />
                            <h4>Excellence</h4>
                            <p>State-of-the-art Infrastructure</p>
                        </div>
                        <div className="stat-card glass">
                            <GraduationCap className="stat-icon" />
                            <h4>Learning</h4>
                            <p>Innovative Curriculum</p>
                        </div>
                        <div className="stat-card glass">
                            <Award className="stat-icon" />
                            <h4>Achievement</h4>
                            <p>National Recognition</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .dept-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }

        .dept-content h3 {
            font-size: 2rem;
            margin-bottom: 10px;
            color: var(--primary-glow);
        }

        .dept-subtitle {
            font-size: 1.2rem;
            color: var(--secondary-color);
            margin-bottom: 25px;
            font-weight: 600;
        }

        .dept-content p {
            color: var(--text-muted);
            font-size: 1.1rem;
            margin-bottom: 20px;
            line-height: 1.7;
        }

        .dept-stats {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .stat-card {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 25px;
            border-radius: 20px;
            transition: var(--transition);
        }

        .stat-card:hover {
            transform: translateX(10px);
            border-color: var(--primary-color);
        }

        .stat-icon {
            color: var(--primary-color);
            width: 40px;
            height: 40px;
        }

        .stat-card h4 {
            font-size: 1.2rem;
            margin-bottom: 4px;
        }

        .stat-card p {
            color: var(--text-muted);
            font-size: 0.95rem;
        }

        @media (max-width: 968px) {
            .dept-grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 480px) {
            .dept-content h3 {
                font-size: 1.5rem;
            }
        }
      `}</style>
        </section>
    );
};

export default Department;
