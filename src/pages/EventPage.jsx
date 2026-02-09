import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Code2, Globe, Brain, Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RegistrationModal from '../components/RegistrationModal';
import ScrollToTop from '../components/ScrollToTop';
import { AuthContext } from '../context/AuthContext';

const EventPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const eventData = {
        'dsa': {
            title: "DSA Hackathon",
            icon: <Code2 size={60} />,
            description: "Solve complex algorithmic problems and optimize solutions in this competitive programming challenge. Test your data structures and algorithms knowledge against the best.",
            longDescription: "The DSA Hackathon is the ultimate test of your problem-solving skills. usage of efficient algorithms and data structures is key. Participants will be given a set of problems ranging from easy to hard difficulty. Points will be awarded based on the number of test cases passed and the time complexity of the solution.",
            details: [
                "Individual Participation",
                "Duration: 3 Hours",
                "Platform: HackerRank/LeetCode (TBD)",
                "Languages: C++, Java, Python"
            ],
            schedule: "10:00 AM - 1:00 PM",
            venue: "Computer Lab 1"
        },
        'web': {
            title: "WEB Hackathon",
            icon: <Globe size={60} />,
            description: "Build responsive, dynamic, and innovative web applications in this full-stack development contest.",
            longDescription: "Unleash your creativity in the Web Hackathon. You will be given a theme at the start of the event, and your goal is to build a fully functional, responsive, and visually appealing web application within the time limit. Judging will be based on design, functionality, code quality, and innovation.",
            details: [
                "Team Size: 1-3 Members",
                "Duration: 6 Hours",
                "Theme: Revealed on spot",
                "Tech Stack: Open (React, Angular, Vue, etc.)"
            ],
            schedule: "9:00 AM - 5:00 PM",
            venue: "Innovation Center"
        },
        'aptitude': {
            title: "Aptitude Test",
            icon: <Brain size={60} />,
            description: "Test your logical reasoning, quantitative ability, and problem-solving skills in this rapid-fire round.",
            longDescription: "The Aptitude Test is designed to evaluate your logical thinking and quantitative aptitude. This round is crucial for placements and competitive exams. Speed and accuracy are your best friends here. The test comprises multiple-choice questions covering various topics.",
            details: [
                "Individual Participation",
                "Duration: 60 Minutes",
                "No Negative Marking",
                "Sections: Quant, Logical, Verbal"
            ],
            schedule: "2:00 PM - 3:00 PM",
            venue: "Seminar Hall"
        }
    };

    const event = eventData[id];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        window.scrollTo(0, 0);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [id]);

    const handleRegister = () => {
        if (!user) {
            navigate('/login');
            return;
        }
        setIsModalOpen(true);
    };

    if (!event) {
        return (
            <div className="app">
                <Navbar isScrolled={true} />
                <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <h2>Event not found</h2>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="app">
            <Navbar isScrolled={isScrolled} />

            <main className="event-page">
                <section className="event-hero">
                    <div className="container event-hero-content">
                        <div className="event-icon-large fade-in-up">
                            {event.icon}
                        </div>
                        <h1 className="event-title fade-in-up delay-1">{event.title}</h1>
                        <p className="event-subtitle fade-in-up delay-2">{event.description}</p>

                        <div className="event-meta fade-in-up delay-3">
                            <div className="meta-item">
                                <Clock size={20} />
                                <span>{event.schedule}</span>
                            </div>
                            <div className="meta-item">
                                <MapPin size={20} />
                                <span>{event.venue}</span>
                            </div>
                        </div>

                        <button className="btn btn-primary btn-lg pulse-anim fade-in-up delay-4" onClick={handleRegister}>
                            Register Now
                        </button>
                    </div>
                    <div className="hero-bg-glow"></div>
                </section>

                <section className="event-content section-padding">
                    <div className="container">
                        <div className="content-grid">
                            <div className="main-info">
                                <h2>About the Event</h2>
                                <p>{event.longDescription}</p>
                            </div>

                            <div className="details-card glass">
                                <h3>Key Highlights</h3>
                                <ul className="details-list">
                                    {event.details.map((detail, index) => (
                                        <li key={index}>
                                            <CheckCircle size={18} className="check-icon" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                category={event.title}
            />

            <Footer />
            <ScrollToTop />

            <style>{`
                .event-page {
                    min-height: 100vh;
                    padding-top: 80px;
                }

                .event-hero {
                    position: relative;
                    padding: 80px 0;
                    text-align: center;
                    overflow: hidden;
                }

                .event-hero-content {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .event-icon-large {
                    width: 120px;
                    height: 120px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary-color);
                    margin-bottom: 30px;
                    border: 1px solid var(--glass-border);
                    box-shadow: 0 0 30px rgba(99, 102, 241, 0.2);
                }

                .event-title {
                    font-size: 3.5rem;
                    margin-bottom: 20px;
                    background: linear-gradient(to right, #fff, var(--primary-color));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .event-subtitle {
                    font-size: 1.2rem;
                    color: var(--text-muted);
                    max-width: 700px;
                    margin-bottom: 40px;
                    line-height: 1.6;
                }

                .event-meta {
                    display: flex;
                    gap: 30px;
                    margin-bottom: 40px;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(255, 255, 255, 0.05);
                    padding: 10px 20px;
                    border-radius: 50px;
                    border: 1px solid var(--glass-border);
                    color: var(--text-main);
                }

                .hero-bg-glow {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
                    pointer-events: none;
                    z-index: 1;
                }

                .content-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 50px;
                    align-items: start;
                }

                .main-info h2 {
                    font-size: 2rem;
                    margin-bottom: 20px;
                    color: white;
                }

                .main-info p {
                    color: var(--text-muted);
                    line-height: 1.8;
                    font-size: 1.05rem;
                }

                .details-card {
                    padding: 30px;
                    border-radius: 20px;
                }

                .details-card h3 {
                    font-size: 1.5rem;
                    margin-bottom: 20px;
                    color: white;
                    border-bottom: 1px solid var(--glass-border);
                    padding-bottom: 15px;
                }

                .details-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .details-list li {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: var(--text-muted);
                    font-size: 1rem;
                }

                .check-icon {
                    color: var(--secondary-color);
                    flex-shrink: 0;
                }

                .fade-in-up {
                    opacity: 0;
                    animation: fadeInUp 0.8s ease forwards;
                }

                .delay-1 { animation-delay: 0.1s; }
                .delay-2 { animation-delay: 0.2s; }
                .delay-3 { animation-delay: 0.3s; }
                .delay-4 { animation-delay: 0.4s; }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 992px) {
                    .content-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .event-title {
                        font-size: 2.5rem;
                    }
                    
                    .event-meta {
                         gap: 15px;
                    }
                }

                @media (max-width: 480px) {
                    .event-title {
                        font-size: 1.8rem;
                    }
                    .event-subtitle {
                        font-size: 1rem;
                    }
                    .event-hero {
                        padding: 60px 0;
                    }
                    .details-card {
                        padding: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default EventPage;
