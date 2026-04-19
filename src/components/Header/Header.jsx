import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Плавный скролл к якорю
  const scrollToAnchor = useCallback((hash) => {
    if (!hash) return;
    
    // Небольшая задержка для гарантии, что элемент отрендерился
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

  // Обработка скролла при изменении пути (для якорей)
  useEffect(() => {
    if (location.hash) {
      scrollToAnchor(location.hash);
    }
  }, [location.pathname, location.hash, scrollToAnchor]);

  // Обработчик клика для якорных ссылок
  const handleNavClick = (e, to) => {
    if (typeof to === 'string' && to.startsWith('#')) {
      e.preventDefault();
      scrollToAnchor(to);
    }
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} role="banner">
      <div className="container header__container">
        {/* Logo */}
        <Link to="/" className="header__logo">
          <div className="header__logo-icon">
            {/* ... ваш SVG ... */}
          </div>
          <span className="header__logo-text">ETK</span>
        </Link>

        {/* Navigation */}
        <nav className="header__nav" aria-label="Головна навігація">
          <ul className="header__nav-list">
            <li>
              <Link to="/prices" className={`header__nav-link ${location.pathname === '/prices' ? 'header__nav-link--active' : ''}`}>
                Про нас
              </Link>
            </li>
            <li>
              <Link to="/prices" className={`header__nav-link ${location.pathname === '/prices' ? 'header__nav-link--active' : ''}`}>
                Тарифні плани
              </Link>
            </li>
            <li>
              <Link to="/tech" className={`header__nav-link ${location.pathname === '/tech' ? 'header__nav-link--active' : ''}`}>
                Наша техніка
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

        {/* Location */}
        <div className="header__location">
          <span className="header__location-text">м.Київ</span>
        </div>

        {/* Mobile Burger */}
        <button className="header__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
          <span className={`header__burger-line ${menuOpen ? 'header__burger-line--active' : ''}`}></span>
          <span className={`header__burger-line ${menuOpen ? 'header__burger-line--active' : ''}`}></span>
          <span className={`header__burger-line ${menuOpen ? 'header__burger-line--active' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}>
        <button className="header__mobile-close" onClick={() => setMenuOpen(false)} aria-label="Закрити">✕</button>
        <nav className="header__mobile-nav">
          <Link to="/prices" className="header__mobile-link" onClick={() => setMenuOpen(false)}>Про нас</Link>
          <Link to="/prices" className="header__mobile-link" onClick={() => setMenuOpen(false)}>Тарифні плани</Link>
          <Link to="/tech" className="header__mobile-link" onClick={() => setMenuOpen(false)}>Наша техніка</Link>
          <Link 
            to="#callbacks" 
            className="header__mobile-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToAnchor('#callbacks');
              setMenuOpen(false);
            }}
          >
            Замовте дзвінок
          </Link>
          <div className="header__mobile-location">м.Київ</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;