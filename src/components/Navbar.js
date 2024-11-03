import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaBars, FaTimes, FaSeedling } from 'react-icons/fa';  // Import FaSeedling icon
import './Navbar.css';
import logo from './sgb_logo.jpg';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenuOnClick = () => {
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <h1 className="logo-text">SGB Industries</h1>
        </div>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="home" smooth={true} duration={500} onClick={scrollToTop}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={closeMenuOnClick}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={closeMenuOnClick}>Products</Link></li>
          <li><Link to="experience" smooth={true} duration={500} onClick={closeMenuOnClick}>Management Team</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={closeMenuOnClick}>Contact</Link></li>
        </div>
        <div className="theme-toggle">
          <button onClick={toggleDarkMode} className="theme-button">
            <FaSeedling style={{ color: darkMode ? 'white' : 'black' }} /> {/* FaSeedling icon for light/dark mode */}
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
