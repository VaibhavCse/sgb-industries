import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSeedling } from 'react-icons/fa';
import './Navbar.css';
import logo from './Picsart_24-12-21_13-59-11-206.jpg';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <h1 className="logo-text">Avocsas</h1>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {/* Replace react-scroll Links with standard anchors */}
          <li>
            <a onClick={() => handleScroll('home')}>Home</a>
          </li>
          <li>
            <a onClick={() => handleScroll('projects')}>Security</a>
          </li>
          <li>
            <a onClick={() => handleScroll('about')}>Development</a>
          </li>
          <li>
            <a onClick={() => handleScroll('experience')}>AI Package</a>
          </li>
          <li>
            <a onClick={() => handleScroll('appexchange')}>AppExchange</a>
          </li>
          <li>
            <a onClick={() => handleScroll('contact')}>Contact</a>
          </li>
        </ul>
        <div className="theme-toggle">
          <button onClick={toggleDarkMode} className="theme-button">
            <FaSeedling style={{ color: darkMode ? 'white' : 'black' }} />
          </button>
        </div>
        {isMobile && (
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
