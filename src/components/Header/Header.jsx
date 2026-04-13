import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} role="banner">
      <div className="container header__container">
        {/* Logo */}
        <Link to="/" className="header__logo">
          <div className="header__logo-icon">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g clipPath="url(#clip0_1345_53)">
                <rect y="2.08337e-07" width="45" height="45" rx="22.5" fill="url(#paint0_linear_1345_53)"/>
                <rect x="9.58984" y="16.4453" width="17.0076" height="17.0076" transform="rotate(-27.8642 9.58984 16.4453)" fill="url(#pattern0_1345_53)"/>
                <path d="M4.78125 33.6324L9.4673 26.3265L16.4964 37.0458L21.5841 28.9015L22.1866 29.6201L28.6801 17.5234L36.3116 31.5364L40.596 25.009L43.006 28.9015L43.006 45.1302L4.78125 45.1302L4.78125 33.6324Z" fill="url(#paint1_linear_1345_53)"/>
                <path d="M5.30859 36.9913L9.60414 32.4954L16.0475 39.0919L20.7112 34.08L21.2635 34.5222L27.2159 27.0781L34.2115 35.7015L38.1388 31.6846L40.3479 34.08L40.3479 44.0669L5.30859 44.0669L5.30859 36.9913Z" fill="url(#paint2_linear_1345_53)"/>
              </g>
              <rect x="0.796349" y="0.796349" width="43.4073" height="43.4073" rx="21.7037" stroke="#53F4FF" strokeWidth="1.5927"/>
              <defs>
                <pattern id="pattern0_1345_53" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_1345_53" transform="scale(0.00195312)"/>
                </pattern>
                <linearGradient id="paint0_linear_1345_53" x1="22.5" y1="46.4766" x2="22.5" y2="4.80706e-07" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#040505"/>
                  <stop offset="1" stopColor="#114548"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1345_53" x1="21.718" y1="17.5234" x2="23.4907" y2="34.158" gradientUnits="userSpaceOnUse">
                  <stop offset="0.035429" stopColor="#BEF2FF"/>
                  <stop offset="1" stopColor="#1B4345"/>
                </linearGradient>
                <linearGradient id="paint2_linear_1345_53" x1="21.2466" y1="25.6008" x2="21.5824" y2="42.2454" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#A6EFFF"/>
                  <stop offset="1" stopColor="#0F2C2F"/>
                </linearGradient>
                <clipPath id="clip0_1345_53">
                  <rect y="2.08337e-07" width="45" height="45" rx="22.5" fill="white"/>
                </clipPath>
                <image id="image0_1345_53" width="512" height="512" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAQAElEQVR4AeydB3xVRfbHgRRAUQL2tir23lAhoBgTIEQQK9a/a+997TWuDbuuHXtZS6wIhgCJwUKwgB17WXsPQVBIg//3FxNMwiv33Zl733vJ5DMnc9+9M2fOnCnnzJnWrYv7cxxwHHAccBxwHHAc6HQccApApytyl2HHAccBxwHHAceBLl2cAuBqgeOA44DjgOOA40An5IBTADphobssOw44DjgOOA50bg4o904BEBccOA44DjgOOA44DnQyDjgFoJMVuMuu44DjgOOA40Bn58Bf+XcKwF98cP8dBxwHHAccBxwHOhUHnALQqQrbZdZxwHHAccBxoLNzoCX/TgFo4YTzHQccBxwHHAccBzpRB5wC0IkK22XVccBxwHHAcaCzc+Dv/DsF4G9epNRTVVVVz/Ly8i0nT568x5QpU04HbgEmAtOBmVOnTv0I/3PgZ0D+TMJO5bkE/za+n4E/YtKkSessXry4a0plzhHjOOA44DjgOJB0DjgFIOlF8BcBCPsVENijENxX41fNnz9/7qJFi97p2rXrM4S4DjgB2A3IBbZDqG+E3w9YCZC/HWELeN4X/zi+X4NfmpGR8SU456EYvAqMJZ0CKReEc85xwHHAccBxoJNxoHV2nQLQmhshPyOM+yGUzwJeR9j/gsB+DsF9Jv5ASMkCbLllQbQjcDbpTEW5qEbJmAqcBg2r8N45xwHHAccBx4FOxgGnAIRc4OPHj1+OEfmJCP2ZCOPPSf4qYHsgTDN9D5SMAuB6aPgWWp4D9iwpKcmGDuccBxwHHAccBzokB9pmyikAbfkR2C9G2hsy4v5Pz549v2WUfzMJbQekgsuEiFHA0zk5Od+hCFxSVlbWl9/OOQ44DjgOOA50YA4oh04B6MAd6OxsOwUg6UWwPw0I+1UQ2KMQ3FfjV82fP3/uokWL3unatevThLgOOAHYDcgFtkOob4TfD1gJkL8dYQt43hf/OL5fg1+akZHxJTjnoRi8CowlnQIpF4RzznHAccBxwHGgk3GgdXadAtCaGyE/I4z7IZTPAl5H2P+CwH4OwX0m/kBIyQJsuWVBtCNwNulMRbmoRsmYCpwGDavw3jnHAccBxwHHgU7GAacAhFzg48ePX44R+YkI/ZkI489J/ipgeyBMM30PlIwC4Hpo+BZangP2LCkpyYYO5xwHHAccBxwHOiQH2mbKKQBt+RHYL0baGzLi/k/Pnj2/ZZR/MwltB6SCy4SIUcDTOTk536EIXFJWVtaX3845DjgOOA44DnRgDigHTgHodE3vMuy44DjgOOA44LjQOTngFIDOfX4ud44LjgOOA44LjgudjgNOAeh0Re4y7LjgOOA44LjgudDpOOAUgE5X5C7DjguOA44DjgudjgNOAeh0Re4y7LjgOOA44LjgudDpOOAUgE5X5C7DjguOA44DjgudjgNOAeh0Re4y7LjgOOA44LjgudDpOOAUgE5X5C7DjguOA44DjgudjgNOAeh0Re4y7LjgOOA44LjgudDpOOAUgE5X5C7DjguOA44DjgudjgNOAeh0Re4y7LjgOOA44LjgudDpOOAUgE5X5C7DjguOA44DjgudjgNOAeh0Re4y7LjgOOA44LjgudDpOOAUgE5X5C7DjguOA44DjgudjgNOAeh0Re4y7LjgOOA44LjgudDpOOAUgE5X5C7DjguOA44DjgudjgNOAeh0Re4y7LjgOOA44LjgudDpOOAUgE5X5C7DjguOA44DjgudjgNOAeh0Re4y7LjgOOA44LjgudDpOOAUgE5X5C7DjguOA44DjgudjgNOAeh0Re4y7LjgOOA44LjgudDpOOAUgE5X5C7DjguOA44DjgudjgNOAeh0Re4y7LjgOOA44LjgudDpOOAUgE5X5C7DjguOA44DjgudjgNOAeh0Re4y7LjgOOA44LjgudDpOOAUgE5X5C7DjguOA44DjgudjgNOAeh0Re4y7LjgOOA44Ljgud......"/>
              </defs>
            </svg>
          </div>
          <span className="header__logo-text">ETK</span>
        </Link>

        {/* Navigation */}
        <nav className="header__nav" aria-label="Головна навігація">
          <ul className="header__nav-list">
            <li>
              <Link to="/details" className={`header__nav-link ${location.pathname === '/details' ? 'header__nav-link--active' : ''}`}>
                Деталі
              </Link>
            </li>
            <li>
              <Link to="/prices" className={`header__nav-link ${location.pathname === '/prices' ? 'header__nav-link--active' : ''}`}>
                Ціни
              </Link>
            </li>
            <li>
              <Link to="/tech" className={`header__nav-link ${location.pathname === '/tech' ? 'header__nav-link--active' : ''}`}>
                Техніка
              </Link>
            </li>
            <li>
              <Link to="/contacts" className={`header__nav-link ${location.pathname === '/contacts' ? 'header__nav-link--active' : ''}`}>
                Контакти
              </Link>
            </li>
            <li>
              <Link to="/faq" className={`header__nav-link ${location.pathname === '/faq' ? 'header__nav-link--active' : ''}`}>
                FAQ
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
          <Link to="/details" className="header__mobile-link">Деталі</Link>
          <Link to="/prices" className="header__mobile-link">Ціни</Link>
          <Link to="/tech" className="header__mobile-link">Техніка</Link>
          <Link to="/contacts" className="header__mobile-link">Контакти</Link>
          <Link to="/faq" className="header__mobile-link">FAQ</Link>
          <div className="header__mobile-location">м.Київ</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;