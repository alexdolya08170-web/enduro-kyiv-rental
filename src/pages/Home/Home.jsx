import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <article className="home">
      <section className="hero" aria-label="Головний банер">
        <div className="hero__bg-gradient"></div>

        <div className="container hero__container">

          <div className="hero__left">
            <h1 className="hero__title">
              <span className="hero__title-top">Ендуро</span>
              <span className="hero__title-bottom">
                <span className="hero__title-cyan">прокат</span>
                <span className="hero__title-white"> в Києві</span>
              </span>
            </h1>

            <Link to="#prices" className="hero__cta hero__cta--primary">
              Обрати тур
            </Link>
          </div>

          <div className="hero__center">
            <img
              src="https://etk-9eg.pages.dev/assets/gen/hero_moto_1400w.webp"
              alt="Райдер на ендуро мотоциклі"
              className="hero__moto-img"
              loading="lazy" 
              width="600"    
              height="500"   
              decoding="async" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/600x500/0d1a1a/00d4aa?text=Enduro+Rider';
              }}
            />
            <div className="hero__dust"></div>
            <div className="hero__dust-particles">
              <span className="particle particle--1"></span>
              <span className="particle particle--2"></span>
              <span className="particle particle--3"></span>
              <span className="particle particle--4"></span>
              <span className="particle particle--5"></span>
              <span className="particle particle--6"></span>
            </div>
          </div>

          <div className="hero__right">
            <div className="hero__slogan">
              <p className="hero__slogan-main">Свобода без компромісів.</p>
              <p className="hero__slogan-sub">
                Не продаємо години — <br />
                ми даруємо спогади
              </p>
            </div>
          </div>

        </div>
      </section>
    </article>
  );
};

export default Home;
