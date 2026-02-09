import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { q: "Who Can Participate in the competition?", a: "The competition is open to students from recognized institutions pursuing courses in Computer Science, Information Technology, or allied fields." },
    { q: "Is there any registration fee?", a: "No, the competition is free of cost. There is no registration or participation fee." },
    { q: "How do I register for the competition?", a: "Participants can register through the official competition website by filling out the online registration form. After registration, a confirmation email will be sent manually to the registered email ID." },
    { q: "Can I participate individually or in a team?", a: "Yes, participants can choose to participate individually or as part of a team, as per the options provided during registration." },
    { q: "What should I bring on the day of the competition?", a: "Participants should have a stable internet connection, a laptop/desktop (if online), and a valid student ID card. Any additional requirements will be communicated in advance." },
    { q: "Will a certificate be provided?", a: "Yes, e-certificates/certificates of participation will be provided to all eligible participants. Certificates of merit will be awarded to winners." },
    { q: "Are there any prizes for the winners?", a: "Yes, attractive prizes and/or merit certificates will be awarded to top performers, as announced by the organizing committee." },
    { q: "Whom should I contact for queries or technical issues?", a: "For any queries related to registration, rules, or technical support, participants may contact the event coordinators through the official email ID or contact number mentioned on the website." },
    { q: "", a: "" },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="container">
        <h2 className="section-title">Common Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item glass ${activeIndex === i ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(i)}>
                <h3>{faq.q}</h3>
                {activeIndex === i ? <ChevronUp /> : <ChevronDown />}
              </div>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-list {
          max-width: 800px;
          margin: 40px auto 0;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .faq-item {
          border-radius: 16px;
          overflow: hidden;
          transition: var(--transition);
        }

        .faq-question {
          padding: 24px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          user-select: none;
        }

        .faq-question h3 {
          font-size: 1.15rem;
          font-weight: 600;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0, 1, 0, 1);
          padding: 0 30px;
        }

        .faq-item.active .faq-answer {
          max-height: 500px;
          transition: max-height 0.4s cubic-bezier(1, 0, 1, 0);
          padding-bottom: 30px;
        }

        .faq-item.active {
          border-color: var(--primary-color);
          background: rgba(30, 41, 59, 1);
        }

        @media (max-width: 480px) {
          .faq-question {
            padding: 18px 20px;
          }
          
          .faq-question h3 {
            font-size: 1rem;
          }
          
          .faq-answer {
             padding: 0 20px;
          }
        }

        @media (min-width: 1920px) {
           .faq-list {
              max-width: 1000px;
           }

           .faq-question h3 {
              font-size: 1.4rem;
           }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
