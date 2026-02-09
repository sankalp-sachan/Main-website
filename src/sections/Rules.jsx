import React from 'react';
import { Info, Gavel, Scale } from 'lucide-react';

const Rules = () => {
  const rules = [
    { title: "Mandatory Registration", desc: "All participants must complete the online registration process through the official event website before the deadline. Entries submitted after the closing date will not be accepted. Registration details provided must be accurate and complete." },
    { title: "Eligibility Criteria", desc: "The competition is open to students currently enrolled in undergraduate or postgraduate programs in Computer Science, IT, or related disciplines. Participants must carry valid institutional identification for verification, if required."},
    { title: "Time Compliance", desc: "The quiz will be conducted strictly according to the scheduled time. Participants must log in and check in at least 15 minutes before the competition begins. Late entry may not be permitted."},
    { title: "Code of Conduct", desc: "All participants are expected to maintain academic honesty and professional behavior throughout the competition. Any form of malpractice, plagiarism, use of unfair means, or disruptive behavior will result in immediate disqualification."},
    { title: "Check-in and Attendance", desc: "Participants must complete the online/manual check-in process as instructed. Failure to check in within the stipulated time may lead to cancellation of participation"},
    { title: "Use of Resources", desc: "Unless explicitly allowed, the use of external resources, internet searches, mobile phones, or assistance from others during the quiz is strictly prohibited."},
    { title: "Decision of the Organizers", desc: "The decision of the organizing committee regarding rules, evaluation, results, and prizes shall be final and binding on all participants."},
    { title: "Team Size", desc: "“Participants will take part individually, as specified during registration. Each participant must register separately, and registration details cannot be changed after submission.”"}
  ];

  return (
    <section id="rules" className="section-padding">
      <div className="container">
        <h2 className="section-title">Rules & Guidelines</h2>

        <div className="rules-grid">
          <div className="rules-sidebar glass">
            <div className="rule-info-icon"><Info size={40} /></div>
            <h3>Read Carefully</h3>
            <p>Ensure you follow these rules to maintain a fair and competitive environment.</p>
            <div className="rules-stats">
              {/* <div className="stat"><strong>48</strong><span>Hours</span></div> */}
              <div className="stat"><strong>100+</strong><span>Participants</span></div>
              <div className="stat"><strong>Fair</strong><span>Play</span></div>
            </div>
          </div>

          <div className="rules-list">
            {rules.map((rule, i) => (
              <div key={i} className="rule-item glass">
                <div className="rule-number">0{i + 1}</div>
                <div className="rule-content">
                  <h4>{rule.title}</h4>
                  <p>{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .rules-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 40px;
          margin-top: 40px;
        }

        .rules-sidebar {
          padding: 40px;
          border-radius: 24px;
          height: fit-content;
          text-align: center;
        }

        .rule-info-icon {
          color: var(--primary-color);
          margin-bottom: 20px;
        }

        .rules-sidebar h3 {
          font-size: 1.8rem;
          margin-bottom: 15px;
        }

        .rules-sidebar p {
          color: var(--text-muted);
          margin-bottom: 30px;
        }

        .rules-stats {
          display: flex;
          justify-content: space-around;
          padding-top: 30px;
          border-top: 1px solid var(--glass-border);
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat strong {
          font-size: 1.5rem;
          color: white;
        }

        .stat span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .rules-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .rule-item {
          display: flex;
          gap: 25px;
          padding: 25px;
          border-radius: 20px;
          transition: var(--transition);
        }

        .rule-item:hover {
          transform: translateX(10px);
          border-color: var(--primary-color);
        }

        .rule-number {
          font-size: 2rem;
          font-weight: 800;
          color: rgba(99, 102, 241, 0.2);
          font-family: var(--font-heading);
          line-height: 1;
        }

        .rule-content h4 {
          font-size: 1.2rem;
          margin-bottom: 8px;
          color: var(--primary-glow);
        }

        .rule-content p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        @media (max-width: 968px) {
          .rules-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
           .rules-sidebar {
             padding: 25px;
           }

           .rule-item {
             padding: 20px;
             gap: 15px;
           }

           .rule-number {
             font-size: 1.5rem;
           }
        }

        @media (min-width: 1920px) {
           .rules-sidebar {
              padding: 60px;
           }
           
           .rules-sidebar h3 {
              font-size: 2.5rem;
           }

           .rule-item {
              padding: 35px;
           }

           .rule-content h4 {
              font-size: 1.5rem;
           }
        }
      `}</style>
    </section>
  );
};

export default Rules;
