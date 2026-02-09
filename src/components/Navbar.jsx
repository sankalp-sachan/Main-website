import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogIn, LogOut, ChevronDown } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const navLinks = [
    {
      name: 'About',
      type: 'dropdown',
      items: [
        { name: 'About Event', href: '/#about' },
        { name: 'About Department', href: '/#about-department' }
      ]
    },
    { name: 'Platform', href: '/#platform' },
    { name: 'Event Details', href: '/#event-details' },
    { name: 'Schedule', href: '/#schedule' },
    {
      name: 'Coordinators',
      type: 'dropdown',
      items: [
        { name: 'Faculty', href: '/coordinators?tab=faculty' },
        { name: 'Core Team', href: '/coordinators?tab=team' },
        { name: 'Volunteers', href: '/coordinators?tab=volunteers' }
      ]
    },
    { name: 'Rules', href: '/#rules' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  const toggleMobileDropdown = (name) => {
    if (window.innerWidth <= 1024) {
      setMobileDropdown(mobileDropdown === name ? null : name);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''} ${isOpen ? 'open' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/logo.png" alt="Logo" className="nav-logo" />
          <img src="/NAAC.png" alt="NAAC" className="nav-logo" />
          <img src="/UGC.png" alt="UGC" className="ugc" />
          <span><span className="gradient-text">HACK</span>OVER</span>
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <div key={link.name} className={`nav-item ${link.type === 'dropdown' ? 'dropdown' : ''}`}>
              {link.type === 'dropdown' ? (
                <>
                  <button
                    className="nav-link dropdown-trigger"
                    onClick={() => toggleMobileDropdown(link.name)}
                    aria-expanded={mobileDropdown === link.name}
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`chevron ${mobileDropdown === link.name ? 'rotate' : ''}`}
                    />
                  </button>
                  <div className={`dropdown-menu ${mobileDropdown === link.name ? 'show-mobile' : ''}`}>
                    {link.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="dropdown-item"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}

          <div className="auth-buttons-mobile">
            {user ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <button className="nav-link cta-link" onClick={handleLogout}>
                  <LogOut size={18} /> Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="nav-link" onClick={() => setIsOpen(false)}>Login</Link>
                <Link to="/signup" className="nav-link cta-link" onClick={() => setIsOpen(false)}>Sign Up</Link>
              </>
            )}
          </div>
        </div>

        <div className="desktop-auth">
          {user ? (
            <div className="user-menu">
              <span className="user-name">Hi, {user.name?.split(' ')[0] || 'User'}</span>
              <button className="logout-btn" onClick={handleLogout}>
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-link">Login</Link>
              <Link to="/signup" className="btn btn-primary btn-sm">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--nav-height);
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: var(--transition);
          padding: 0 5%;
        }

        .navbar.scrolled {
          height: 70px;
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 1920px) {
           .nav-container {
              max-width: 1600px;
           }
           .logo {
              font-size: 2.5rem;
           }
           .nav-link, .dropdown-item {
              font-size: 1.2rem;
           }
           .nav-logo {
              height: 60px;
           }
        }
           
        @media (min-width: 2560px) {
           .nav-container {
              max-width: 2000px;
           }
        }

        .logo {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: -1px;
          display: flex;
          align-items: center;
          gap: 1px;
          text-decoration: none;
          color: var(--text-main);
          margin-left: -40px;
        }

        .nav-logo {
          height: 50px;
          width: auto;
          object-fit: contain;
        }
          .ugc {
            height: 50px;
            width: auto;
            object-fit: contain;
          }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-item {
            position: relative;
        }

        .nav-link {
          font-weight: 500;
          color: var(--text-muted);
          font-size: 0.95rem;
          position: relative;
          background: none;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link:hover, .nav-link:focus, .dropdown-item:hover {
          color: var(--text-main);
        }

        .nav-link:not(.dropdown-trigger)::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-color);
          transition: var(--transition);
        }

        .nav-link:not(.dropdown-trigger):hover::after {
          width: 100%;
        }

        /* Dropdown Styles */
        .dropdown-trigger {
            cursor: pointer;
        }

        .chevron {
            transition: transform 0.3s ease;
        }

        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(20px);
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(12px);
            border: 1px solid var(--glass-border);
            border-radius: 12px;
            padding: 10px;
            min-width: 200px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .dropdown-item {
            padding: 10px 16px;
            color: var(--text-muted);
            white-space: nowrap;
            border-radius: 8px;
            transition: var(--transition);
            display: block;
            width: 100%;
            text-align: left;
        }

        .dropdown-item:hover {
            background: rgba(255, 255, 255, 0.05);
            color: var(--primary-color);
            padding-left: 20px;
        }

        /* Desktop Hover Effect */
        @media (min-width: 1025px) {
            .nav-item.dropdown:hover .dropdown-menu {
                opacity: 1;
                visibility: visible;
                transform: translateX(-50%) translateY(0);
                top: calc(100% + 15px);
            }
            /* Bridge to prevent closing when moving mouse from trigger to menu */
            .nav-item.dropdown::before {
                content: '';
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 20px;
            }
        }

        .nav-cta {
          padding: 10px 24px;
          font-size: 0.9rem;
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          color: var(--text-main);
        }

        @media (max-width: 1024px) {
          .nav-links {
            position: fixed;
            top: var(--nav-height);
            left: -100%;
            flex-direction: column;
            background: var(--bg-darker);
            width: 100%;
            height: calc(100vh - var(--nav-height));
            padding: 40px 0;
            transition: var(--transition);
            z-index: 999;
            overflow-y: auto;
          }

          .nav-links.active {
            left: 0;
          }

          .mobile-toggle {
            display: block;
          }
          
          .nav-link {
            font-size: 1.2rem;
            justify-content: center;
          }

          .desktop-auth {
             display: none;
          }
          
          .auth-buttons-mobile {
              display: flex;
              flex-direction: column;
              gap: 20px;
              margin-top: 20px;
              align-items: center;
          }

          /* Mobile Dropdown */
          .nav-item {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
          }

          .dropdown-menu {
              position: static;
              background: transparent;
              border: none;
              box-shadow: none;
              transform: none;
              opacity: 1;
              visibility: visible;
              display: none;
              width: 100%;
              align-items: center;
              padding: 10px 0;
              backdrop-filter: none;
          }

          .dropdown-menu.show-mobile {
              display: flex;
              animation: slideDown 0.3s ease forwards;
          }

          .dropdown-item {
              text-align: center;
              font-size: 1.1rem;
              padding: 10px;
              color: var(--text-muted);
          }

          .dropdown-item:hover {
              background: transparent;
              color: var(--primary-color);
              padding-left: 10px;
          }

          .chevron.rotate {
              transform: rotate(180deg);
          }
          
          @keyframes slideDown {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
          }
        }

        .desktop-auth {
            margin-left: 20px;
        }

        .auth-buttons {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        
        .login-link {
             color: var(--text-muted);
             font-weight: 500;
             transition: var(--transition);
        }

        .login-link:hover {
            color: white;
        }

        .user-menu {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .user-name {
            font-size: 0.9rem;
            color: var(--primary-color);
            font-weight: 600;
        }

        .btn-sm {
            padding: 8px 16px;
            font-size: 0.85rem;
        }
        
        .auth-buttons-mobile {
            display: none;
        }
        
        .logout-btn {
            background: none;
            border: none;
            color: var(--text-muted);
            cursor: pointer;
            padding: 0;
            display: flex;
            align-items: center;
            transition: var(--transition);
        }

        .logout-btn:hover {
            color: var(--primary-color);
        }

        @media (max-width: 1024px) {
            .auth-buttons-mobile {
                display: flex;
            }
            
            .logo {
               margin-left: 0;
               font-size: 1.4rem;
               gap: 2px;
            }

            .nav-logo {
               height: 30px;
            }

            .ugc {
               height: 40px;
            }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
