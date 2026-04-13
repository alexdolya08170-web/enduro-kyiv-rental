import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'Чи потрібен досвід?',
    answer:
      'Ні, досвід не потрібен. Перед поїздкою ви отримаєте інструктаж від нашого інструктора. Ми адаптуємо маршрут під ваш рівень підготовки — від новачків до досвідчених райдерів.',
  },
  {
    question: 'Які мотоцикли?',
    answer:
      'У нашому парку — надійні ендуро-мотоцикли з об\'ємом двигуна 250–450 см³. Повний комплект екіпірування включено: шолом, захисні окуляри, перчатки, наколінники, куртка та мотоботи.',
  },
  {
    question: 'Де проходить маршрут?',
    answer:
      'Маршрути проходять у мальовничих лісових масивах та пересіченій місцевості в околицях Києва. Конкретна локація залежить від обраного туру та погодних умов. Координати надсилаємо після бронювання.',
  },
  {
    question: 'Що входить у вартість?',
    answer:
      'У вартість входить: оренда мотоцикла, повний комплект екіпірування, інструктаж, супровід інструктора, страхування та фото/відео з поїздки. Паливо та перекус — за бажанням.',
  },
];

const FAQItem = ({ item, isOpen, toggle }) => {
  return (
    <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
      <button
        className="faq__question"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span className="faq__question-text">{item.question}</span>
        <span className="faq__icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`faq__icon-svg ${isOpen ? 'faq__icon-svg--open' : ''}`}
          >
            <path d="M10 4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div className={`faq__answer-wrapper ${isOpen ? 'faq__answer-wrapper--open' : ''}`}>
        <p className="faq__answer">{item.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" aria-label="Часті запитання">
      <div className="faq__container">
        {/* <h2 className="faq__title">FAQ</h2>
        <p className="faq__subtitle">Часті запитання</p> */}

        <div className="faq__list">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              toggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;