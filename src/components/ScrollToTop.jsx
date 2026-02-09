import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <ArrowUp size={24} />
            <style>{`
        .scroll-to-top {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 50px;
          height: 50px;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: var(--transition);
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }

        .scroll-to-top.visible {
          opacity: 1;
          visibility: visible;
        }

        .scroll-to-top:hover {
          transform: translateY(-5px);
          background: var(--primary-glow);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.6);
        }

        @media (max-width: 768px) {
          .scroll-to-top {
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
        </div>
    );
};

export default ScrollToTop;
