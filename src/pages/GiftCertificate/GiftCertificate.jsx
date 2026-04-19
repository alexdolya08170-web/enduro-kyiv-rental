import React from 'react';
import './GiftCertificate.css';

const GiftCertificate = () => {
  return (
    <section id='certificate' className="gift-certificate" aria-label="Подарунковий сертифікат">
      <div className="gift-certificate__container">
        
        {/* Ліва частина — зображення карток */}
        <div className="gift-certificate__visual">
          <div className="gift-certificate__cards">
            <div className="gift-certificate__card gift-certificate__card--back">
              <img
                src="https://etk-9eg.pages.dev/assets/gen/gift_card_1_800w.webp"
                alt="Подарунковий сертифікат ETK - вид ззаду"
                className="gift-certificate__image"
                loading="lazy"
                width="800"
                height="500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/800x500/1a1a2e/00d4aa?text=Gift+Card+1';
                }}
              />
            </div>
            <div className="gift-certificate__card gift-certificate__card--front">
              <img
                src="https://etk-9eg.pages.dev/assets/gen/gift_certificate_1200w.webp"
                alt="Подарунковий сертифікат ETK - головний вигляд"
                className="gift-certificate__image"
                loading="lazy"
                width="800"
                height="500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/800x500/1a1a2e/00d4aa?text=Gift+Card+2';
                }}
              />
            </div>
          </div>
        </div>

        {/* Права частина — текст */}
        <div className="gift-certificate__content">
          <h2 className="gift-certificate__title">
            Подарунковий<br />
            <span className="gift-certificate__title-accent">сертифікат</span>
          </h2>

          <div className="gift-certificate__text">
            <p className="gift-certificate__description">
              Подаруй емоції, які залишаються у серці.
            </p>

            <p className="gift-certificate__info">
              Сертифікат ETK — це ендуро-досвід без компромісів.
            </p>

            {/* <p className="gift-certificate__validity">
              Строк дії — <strong>1 рік</strong>
            </p> */}
          </div>

          <div className="gift-certificate__action">
            <button 
              type="button" 
              className="gift-certificate__button"
              aria-label="Придбати подарунковий сертифікат"
            >
              Придбати
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GiftCertificate;