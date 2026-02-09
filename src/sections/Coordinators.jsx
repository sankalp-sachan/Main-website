import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { User, Linkedin, Mail, Award } from 'lucide-react';

const Coordinators = () => {
    const [activeTab, setActiveTab] = useState('team'); // 'faculty', 'team', 'volunteers'
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tab = params.get('tab');
        if (tab && ['faculty', 'team', 'volunteers'].includes(tab)) {
            setActiveTab(tab);
        }
    }, [location]);

    // Placeholder data
    const data = {
        faculty: [
            {
                name: "Mr. Ravikant Mishra",
                role: "Faculty Advisor",
                dept: "Computer Application",
                image: "rkm.png" 
            },
            {
                name: "Mr. Anand Kumar Mishra",
                role: "Event Coordinator",
                dept: "Computer Application",
                image: "akm.png"
            }
        ],
        team: [
            {
                name: "Sankalp Sachan",
                role: "Technical Head & Organizing Lead ",
                year: "1st Year",
                image: "Sankalp.jpeg"
            },
            {
                name: "Aditya Singh",
                role: "Designing Head & Organizing Lead",
                year: "1st Year",
                image: "aditya.jpeg"
            },
            {
                name: "Tech Lead",
                role: "Technical Head",
                year: "3rd Year",
                image: null
            },
        ],
        volunteers: [
            {
                name: "Volunteer 1",
                role: "Event Support",
                year: "2nd Year",
                image: null
            },
            
        ]
    };

    return (
        <section id="coordinators" className="section-padding">
            <div className="container">
                <h2 className="section-title">Meet the Team</h2>

                <div className="tabs-container">
                    <button
                        className={`tab-btn ${activeTab === 'faculty' ? 'active' : ''}`}
                        onClick={() => setActiveTab('faculty')}
                    >
                        Faculty Coordinators
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'team' ? 'active' : ''}`}
                        onClick={() => setActiveTab('team')}
                    >
                        Core Team
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'volunteers' ? 'active' : ''}`}
                        onClick={() => setActiveTab('volunteers')}
                    >
                        Volunteers
                    </button>
                </div>

                <div className="coordinators-grid fade-in-up">
                    {data[activeTab].map((member, index) => (
                        <div key={index} className="coordinator-card glass">
                            <div className="member-img-wrapper">
                                {member.image ? (
                                    <img src={member.image} alt={member.name} className="member-img" />
                                ) : (
                                    <div className="member-placeholder">
                                        <User size={50} />
                                    </div>
                                )}
                            </div>
                            <div className="member-info">
                                <h3>{member.name}</h3>
                                <div className="member-role">{member.role}</div>
                                <div className="member-detail">{member.dept || member.year}</div>

                                <div className="member-links">
                                    <button className="icon-btn"><Linkedin size={18} /></button>
                                    <button className="icon-btn"><Mail size={18} /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .tabs-container {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin-bottom: 50px;
                    flex-wrap: wrap;
                }

                .tab-btn {
                    padding: 10px 24px;
                    border-radius: 50px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid var(--glass-border);
                    color: var(--text-muted);
                    font-weight: 500;
                    font-size: 0.95rem;
                    transition: var(--transition);
                }

                .tab-btn:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                }

                .tab-btn.active {
                    background: var(--primary-color);
                    color: white;
                    border-color: var(--primary-color);
                    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
                }

                .coordinators-grid {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 30px;
                    animation: fadeInUp 0.5s ease forwards;
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .coordinator-card {
                    width: 100%;
                    max-width: 300px;
                    flex: 1 1 250px;
                    padding: 24px;
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    transition: var(--transition);
                    border: 1px solid transparent;
                }

                .coordinator-card:hover {
                    background: rgba(30, 41, 59, 0.8);
                    border-color: rgba(99, 102, 241, 0.3);
                    transform: translateY(-5px);
                }

                .member-img-wrapper {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    margin-bottom: 16px;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0.05);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-muted);
                }

                .member-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .member-info {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }

                .member-info h3 {
                    font-size: 1.1rem;
                    margin-bottom: 4px;
                    color: white;
                }

                .member-role {
                    color: var(--primary-color);
                    font-size: 0.85rem;
                    font-weight: 600;
                    margin-bottom: 4px;
                }

                .member-detail {
                    color: var(--text-muted);
                    font-size: 0.85rem;
                    margin-bottom: 12px;
                }

                .member-links {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    opacity: 0.7;
                    transition: var(--transition);
                    width: 100%;
                }

                .coordinator-card:hover .member-links {
                    opacity: 1;
                }

                .icon-btn {
                    background: transparent;
                    color: var(--text-muted);
                    padding: 5px;
                    border-radius: 50%;
                    transition: var(--transition);
                }

                .icon-btn:hover {
                    color: white;
                    background: rgba(255, 255, 255, 0.1);
                }

                @media (max-width: 480px) {
                    .tabs-container {
                        gap: 10px;
                    }
                    
                    .tab-btn {
                        padding: 8px 16px;
                        font-size: 0.85rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Coordinators;
