import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      id: 'moto-standart',
      title: 'Standart',
      subtitle: 'Мотоцикл',
      price: '3 500',
      currency: '₴',
      image: 'https://etk-9eg.pages.dev/assets/gen/tour_moto_light_600w.webp',
      features: [
        { value: '20 км', label: 'км' },
        { value: '1 люд', label: 'людина' },
        { value: '2 год', label: 'години' }
      ],
      description: 'Короткий формат ендуро-прокату для швидкого перезавантаження'
    },
    {
      id: 'moto-light',
      title: 'Light',
      subtitle: 'Мотоцикл',
      price: '4 100',
      currency: '₴',
      image: 'https://etk-9eg.pages.dev/assets/gen/tour_moto_medium_600w.webp',
      features: [
        { value: '40 км', label: 'км' },
        { value: '1 люд', label: 'людина' },
        { value: '4 год', label: 'години' }
      ],
      description: 'Оптимальний баланс краєвидів, темпу та емоцій — саме те, за чим повертаються, не шукаючи знову'
    },
    {
      id: 'moto-hard',
      title: 'Hard',
      subtitle: 'Мотоцикл',
      price: '4 700',
      currency: '₴',
      image: 'https://etk-9eg.pages.dev/assets/gen/tour_moto_hard_600w.webp',
      features: [
        { value: '55 км', label: 'км' },
        { value: '1 люд', label: 'людина' },
        { value: '4 год', label: 'години' }
      ],
      description: 'Більший темп, більше виклику, більше адреналіну — без компромісів'
    },
    {
      id: 'quad-standart',
      title: 'Standart',
      subtitle: 'Квадроцикл',
      price: '4 200',
      currency: '₴',
      image: 'https://etk-9eg.pages.dev/assets/gen/tour_quad_light_600w.webp',
      features: [
        { value: '25 км', label: 'км' },
        { value: '2 люди', label: 'людей' },
        { value: '2 год', label: 'години' }
      ],
      description: 'Ідеально для сімейного відпочинку та легких прогулянок лісом'
    },
    {
      id: 'quad-light',
      title: 'Light',
      subtitle: 'Квадроцикл',
      price: '5 500',
      currency: '₴',
      image: 'https://etk-9eg.pages.dev/assets/gen/tour_quad_medium_600w.webp',
      features: [
        { value: '50 км', label: 'км' },
        { value: '2 люди', label: 'людей' },
        { value: '4 год', label: 'години' }
      ],
      description: 'Повний день пригод на потужному квадроциклі з досвідченим інструктором'
    },
    {
      id: 'quad-hard',
      title: 'Hard',
      subtitle: 'Квадроцикл',
      price: '6 800',
      currency: '₴',
      image: 'https://etk-9eg.pages.dev/assets/gen/tour_buggy_light_600w.webp',
      features: [
        { value: '70 км', label: 'км' },
        { value: '2 люди', label: 'людей' },
        { value: '5 год', label: 'годин' }
      ],
      description: 'Екстремальний маршрут через болота та круті підйоми для справжніх драйверів'
    }
  ];

  return (
    <section id='prices' className="pricing" aria-labelledby="pricing-heading">
      <header className="pricing__header">
        <h2 id="pricing-heading" className="pricing__title">
          Тарифні плани
        </h2>
        <p className="pricing__subtitle-text">
          Оберіть свій 
        </p>
      </header>

      <div className="pricing__content">
        <ul className="pricing__list" aria-label="Доступні тарифи">
          {plans.map((plan) => (
            <li key={plan.id} className="pricing__item">
              <article className="pricing__card">
                <div className="pricing__image-wrapper">
                  <img 
                    src={plan.image} 
                    alt={`${plan.subtitle} ${plan.title}`}
                    className="pricing__image"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                  <span className="pricing__type-badge">{plan.subtitle}</span>
                </div>

                <div className="pricing__body">
                  <header className="pricing__card-header">
                    <h3 className="pricing__card-title">{plan.title}</h3>
                  </header>

                  <div className="pricing__price-block">
                    <span className="pricing__price">{plan.price}</span>
                    <span className="pricing__currency" aria-label="гривня">
                      {plan.currency}
                    </span>
                  </div>

                  <ul className="pricing__features" aria-label="Характеристики тарифу">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="pricing__feature">
                        <span className="pricing__feature-value">{feature.value}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="pricing__description">{plan.description}</p>

                  <footer className="pricing__card-footer">
                    <button 
                      type="button" 
                      className="pricing__button"
                      aria-label={`Забронювати тариф ${plan.title}`}
                    >
                      Забронювати
                    </button>
                  </footer>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Pricing;