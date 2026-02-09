import React from 'react';
import { X } from 'lucide-react';

const LegalContent = ({ type, isOpen, onClose }) => {
    if (!isOpen) return null;

    const content = {
        privacy: {
            title: "Privacy Policy",
            sections: [
                {
                    heading: "Information Collection",
                    text: "We collect personal information such as Name, Email, Mobile No, Department, Year, and Course during registration for Tech Fest 2026."
                },
                {
                    heading: "Use of Information",
                    text: "The collected information is used solely for the purpose of organizing events, coordinating with participants, and issuing certificates."
                },
                {
                    heading: "Data Security",
                    text: "We implement appropriate security measures to protect your personal data from unauthorized access or disclosure."
                }
            ]
        },
        terms: {
            title: "Terms of Service",
            sections: [
                {
                    heading: "Eligibility",
                    text: "The event is open to students currently enrolled in CSJMU or its affiliated colleges. Valid student ID may be required."
                },
                {
                    heading: "Participation",
                    text: "Participants must adhere to the rules specified for each event track. Cheating or use of unfair means will lead to disqualification."
                },
                {
                    heading: "Liability",
                    text: "The organizers are not responsible for any personal belongings or equipment brought to the venue by the participants."
                }
            ]
        },
        conduct: {
            title: "Code of Conduct",
            sections: [
                {
                    heading: "Respect and Inclusivity",
                    text: "All participants, judges, and organizers must be treated with respect. Discrimination or harassment of any form is strictly prohibited."
                },
                {
                    heading: "Professionalism",
                    text: "Participants are expected to behave professionally and follow the instructions provided by event coordinators."
                },
                {
                    heading: "Reporting Issues",
                    text: "Any violations of this code of conduct should be reported immediately to the Tech Fest 2026 help desk."
                }
            ]
        }
    };

    const current = content[type] || content.privacy;

    return (
        <div className="legal-overlay">
            <div className="legal-modal glass">
                <button className="legal-close" onClick={onClose}><X size={24} /></button>
                <h2 className="gradient-text">{current.title}</h2>
                <div className="legal-scroll">
                    {current.sections.map((sec, i) => (
                        <div key={i} className="legal-section">
                            <h3>{sec.heading}</h3>
                            <p>{sec.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .legal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(2, 6, 23, 0.9);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3000;
          padding: 20px;
        }

        .legal-modal {
          width: 100%;
          max-width: 800px;
          max-height: 80vh;
          padding: 50px;
          border-radius: 30px;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .legal-close {
          position: absolute;
          top: 25px;
          right: 25px;
          background: none;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .legal-close:hover {
          color: white;
          transform: rotate(90deg);
        }

        .legal-modal h2 {
          font-size: 2.5rem;
          margin-bottom: 30px;
          text-align: center;
        }

        .legal-scroll {
          overflow-y: auto;
          padding-right: 15px;
        }

        .legal-section {
          margin-bottom: 30px;
        }

        .legal-section h3 {
          font-size: 1.2rem;
          color: var(--primary-glow);
          margin-bottom: 12px;
        }

        .legal-section p {
          color: var(--text-muted);
          line-height: 1.8;
        }

        /* Custom Scrollbar */
        .legal-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .legal-scroll::-webkit-scrollbar-thumb {
          background: var(--primary-color);
          border-radius: 10px;
        }
      `}</style>
        </div>
    );
};

export default LegalContent;
