// src/pages/Details/Details.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Details.css';

const Details = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleCards((prev) => new Set([...prev, index]));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="details" aria-label="Переваги">
      <div className="details__container">
        <div className="details__grid">

          {/* Card 1 - Dark with helmet icon */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className={`details__card details__card--dark ${
              visibleCards.has(0) ? 'details__card--visible' : ''
            }`}
          >
            <div className="details__icon details__icon--cyan">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C7.5 2 4 5.5 4 10V12C4 16.5 7.5 20 12 20C16.5 20 20 16.5 20 12V10C20 5.5 16.5 2 12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 10H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 20V22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8 22H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="details__card-title">Преміальні байки</h3>
            <p className="details__card-text">
              Рівень і потужність,<br />
              що відчувається без<br />
              зайвих слів
            </p>
          </div>

          {/* Card 2 - Cyan gradient with trophy icon */}
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className={`details__card details__card--cyan ${
              visibleCards.has(1) ? 'details__card--visible' : ''
            }`}
          >
            <div className="details__icon details__icon--dark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9H18V7C18 5.34315 16.6569 4 15 4H9C7.34315 4 6 5.34315 6 7V9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 9V17C6 18.6569 7.34315 20 9 20H15C16.6569 20 18 18.6569 18 17V9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 13H18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M9 20V22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M15 20V22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 13V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="details__card-title details__card-title--dark">
              Спокій та впевненість
            </h3>
            <p className="details__card-text details__card-text--dark">
              Все продумано — професійний<br />
              інструктор, повний комплект<br />
              екіпірування, належне навчання,<br />
              адаптовані маршрути
            </p>
          </div>

          {/* Card 3 - Dark with mountain icon */}
          <div
            ref={(el) => (cardRefs.current[2] = el)}
            className={`details__card details__card--dark ${
              visibleCards.has(2) ? 'details__card--visible' : ''
            }`}
          >
            <div className="details__icon details__icon--cyan">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 3L4 8H9L5 14H11L8 18H16L20 13H15L19 8H13L16 3H8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 3V8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="6" r="1" fill="currentColor" />
                <path
                  d="M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="details__card-title">
              Без одноманіть і<br />
              нудьги
            </h3>
            <p className="details__card-text">
              Неповторні маршрути<br />
              як для новачків так і<br />
              для досвідчених<br />
              райдерів
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Details;