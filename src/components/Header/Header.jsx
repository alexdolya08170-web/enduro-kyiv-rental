import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const MAP_URL = 'https://maps.google.com/?q=Kyiv,Ukraine';

  const scrollToAnchor = useCallback((hash) => {
    if (!hash) return;
    
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { 
    setMenuOpen(false); 
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      scrollToAnchor(location.hash);
    }
  }, [location.pathname, location.hash, scrollToAnchor]);

  const handleNavClick = (e, to) => {
    if (typeof to === 'string' && to.startsWith('#')) {
      e.preventDefault();
      scrollToAnchor(to);
    }
  };

  const handleMobileNavClick = (e, hash) => {
    e.preventDefault();
    scrollToAnchor(hash);
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} role="banner">
      <div className="container header__container">
        <Link to="/" className="header__logo">
          <div className="header__logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="header__logo-text">ETK</span>
        </Link>

        <nav className="header__nav" aria-label="Головна навігація">
          <ul className="header__nav-list">
            <li>
              <Link 
                to="#details" 
                className={`header__nav-link ${location.pathname === '/prices' ? 'header__nav-link--active' : ''}`}
                onClick={(e) => handleNavClick(e, '#details')}
              >
                Про нас
              </Link>
            </li>
            <li>
              <Link 
                to="#prices" 
                className={`header__nav-link ${location.pathname === '/prices' ? 'header__nav-link--active' : ''}`}
                onClick={(e) => handleNavClick(e, '#prices')}
              >
                Тарифні плани
              </Link>
            </li>
            <li>
              <Link 
                to="#callbacks" 
                className={`header__nav-link ${location.pathname === '/contacts' ? 'header__nav-link--active' : ''}`}
                onClick={(e) => handleNavClick(e, '#callbacks')}
              >
                Замовте дзвінок
              </Link>
            </li>
          </ul>
        </nav>

        <a 
          href={MAP_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="header__location-btn"
          aria-label="Відкрити карту Києва"
        >
          <svg className="header__location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span className="header__location-text">м.Київ</span>
          <svg className="header__location-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>

        <button className="header__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
          <span className={`header__burger-line ${menuOpen ? 'header__burger-line--active' : ''}`}></span>
          <span className={`header__burger-line ${menuOpen ? 'header__burger-line--active' : ''}`}></span>
          <span className={`header__burger-line ${menuOpen ? 'header__burger-line--active' : ''}`}></span>
        </button>
      </div>

      <div className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}>
        <button className="header__mobile-close" onClick={() => setMenuOpen(false)} aria-label="Закрити">✕</button>
        <nav className="header__mobile-nav">
          <Link 
            to="#details" 
            className="header__mobile-link"
            onClick={(e) => handleMobileNavClick(e, '#details')}
          >
            Про нас
          </Link>
          <Link 
            to="#prices" 
            className="header__mobile-link"
            onClick={(e) => handleMobileNavClick(e, '#prices')}
          >
            Тарифні плани
          </Link>
          <Link 
            to="#callbacks" 
            className="header__mobile-link"
            onClick={(e) => handleMobileNavClick(e, '#callbacks')}
          >
            Замовте дзвінок
          </Link>
          
          <a 
            href={MAP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="header__mobile-location-btn"
            onClick={() => setMenuOpen(false)}
          >
            <svg className="header__location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>м.Київ на карті</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
