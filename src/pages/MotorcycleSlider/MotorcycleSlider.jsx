import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './MotorcycleSlider.css';

const motorcycles = [
  {
    id: 1,
    brand: 'ROTTOR',
    model: 'PUNCHER 250',
    image: 'https://etk-9eg.pages.dev/assets/gen/moto_puncher_250_800w.webp',
    specs: {
      power: '18 к.с',
      height: '165 см',
      engine: '223 сс'
    }
  },
  {
    id: 2,
    brand: 'HONDA',
    model: 'CRF 250F',
    image: 'https://etk-9eg.pages.dev/assets/gen/moto_crf_250f_800w.webp',
    specs: {
      power: '22 к.с',
      height: '170 см',
      engine: '249 сс'
    }
  },
  {
    id: 3,
    brand: 'YAMAHA',
    model: 'WR 250F',
    image: 'https://etk-9eg.pages.dev/assets/gen/moto_titan_250_purple_800w.webp',
    specs: {
      power: '25 к.с',
      height: '168 см',
      engine: '249 сс'
    }
  },
  {
    id: 4,
    brand: 'KAWASAKI',
    model: 'KX 250',
    image: 'https://etk-9eg.pages.dev/assets/gen/moto_puncher_250_800w.webp',
    specs: {
      power: '28 к.с',
      height: '172 см',
      engine: '249 сс'
    }
  },
  {
    id: 5,
    brand: 'SUZUKI',
    model: 'RM-Z 250',
    image: 'https://etk-9eg.pages.dev/assets/gen/moto_onyx_300_red_800w.webp',
    specs: {
      power: '26 к.с',
      height: '169 см',
      engine: '249 сс'
    }
  },
  {
    id: 6,
    brand: 'KTM',
    model: '250 SX-F',
    image: 'https://etk-9eg.pages.dev/assets/gen/moto_icon_300_800w.webp',
    specs: {
      power: '30 к.с',
      height: '171 см',
      engine: '249 сс'
    }
  },
  {
    id: 7,
    brand: 'HUSQVARNA',
    model: 'FC 250',
    image: 'https://etk-9eg.pages.dev/assets/gen/moto_atom_300_800w.webp',
    specs: {
      power: '29 к.с',
      height: '170 см',
      engine: '249 сс'
    }
  },
  {
    id: 8,
    brand: 'BETA',
    model: '300 RR',
    image: 'https://etk-9eg.pages.dev/assets/gen/moto_nemesis_300_800w.webp',
    specs: {
      power: '32 к.с',
      height: '173 см',
      engine: '293 сс'
    }
  }
];

const HorseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5 4.5L17 7L14 4L11 9L8 5L5 10L2 7L4 13L2 17H6L8 13L10 16L13 12L16 15L19 10L22 13V8L19.5 4.5Z" fill="white"/>
  </svg>
);

const HeightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L8 6H11V10H13V6H16L12 2Z" fill="white"/>
    <path d="M12 22L16 18H13V14H11V18H8L12 22Z" fill="white"/>
    <path d="M11 10H13V14H11V10Z" fill="white"/>
  </svg>
);

const EngineIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8V16H8V8H6ZM18 8V16H16V8H18ZM10 10V14H14V10H10ZM8 6H16V18H8V6Z" fill="white"/>
  </svg>
);

const MotorcycleSlider = () => {
  return (
    <section id='#motorcycle' className="motorcycle-slider" aria-label="Наш автопарк мотоциклів">
      <div className="slider-wrapper">
        <header className="slider-header">
          <h2 className="slider-title">
            Наша техніка
          </h2>
          <p className="slider-description">
            Кожен проходить обслуговування
          </p>
        </header>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          slidesPerView={1}
          className="bike-swiper"
        >
          {motorcycles.map((moto) => (
            <SwiperSlide key={moto.id}>
              <div className="slide-content">
                <div className="column-left">
                  <h3 className="brand-name">{moto.brand}</h3>
                  <p className="model-name">{moto.model}</p>
                  <div className="custom-prev nav-btn" aria-label="Попередній мотоцикл">❮</div>
                </div>

                <div className="column-center">
                  <div className="bike-img-wrapper">
                    <img
                      src={moto.image}
                      alt={`${moto.brand} ${moto.model}`}
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/800x600/0d1a1a/00d4aa?text=' + encodeURIComponent(moto.model);
                      }}
                    />
                  </div>
                </div>

                <div className="column-right">
                  <div className="spec-row">
                    <HorseIcon />
                    <span>{moto.specs.power}</span>
                  </div>
                  <div className="spec-row">
                    <HeightIcon />
                    <span>{moto.specs.height}</span>
                  </div>
                  <div className="spec-row">
                    <EngineIcon />
                    <span>{moto.specs.engine}</span>
                  </div>
                  <div className="custom-next nav-btn" aria-label="Наступний мотоцикл">❯</div>
                </div>
              </div>

              <div className="bottom-action">
                <button className="book-button" aria-label={`Забронювати ${moto.brand} ${moto.model}`}>
                  Забронювати
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MotorcycleSlider;