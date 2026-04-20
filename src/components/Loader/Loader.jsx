import { useState, useEffect, useRef } from 'react';
import './Loader.css';

function DustParticles() {
  const particles = [];
  for (let i = 0; i < 20; i++) {
    const size = Math.random() * 4 + 1;
    const left = Math.random() * 100;
    const delay = Math.random() * 3;
    const duration = Math.random() * 2 + 2;
    particles.push(
      <div
        key={i}
        className="loader-dust-particle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          bottom: '10%',
          backgroundColor: '#4FFFFF',
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  }
  return <>{particles}</>;
}

function LoadingBar({ progress }) {
  return (
    <div className="loader-loading-section">
      <div className="loader-loading-track">
        <div
          className="loader-loading-fill"
          style={{ width: `${progress}%`, transition: 'width 0.15s ease-out' }}
        />
      </div>
      <div className="loader-loading-meta">
        <span className="loader-loading-label">Завантаження</span>
        <span className="loader-loading-percent">{Math.round(progress)}%</span>
      </div>
    </div>
  );
}

export default function Loader({ isExiting = false }) {
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    let startTime = null;
    const duration = 1200;

    const animateProgress = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const easedProgress = rawProgress < 0.5
        ? 2 * rawProgress * rawProgress
        : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2;
      
      setProgress(easedProgress * 100);
      if (rawProgress < 1) {
        animationRef.current = requestAnimationFrame(animateProgress);
      }
    };

    animationRef.current = requestAnimationFrame(animateProgress);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      className={`loader-page ${isExiting ? 'loader-page-exiting' : ''} ${
        isMounted ? 'loader-page-mounted' : ''
      }`}
      style={{
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'scale(1.02)' : 'scale(1)',
        pointerEvents: isExiting ? 'none' : 'auto',
      }}
    >
      <div className="loader-grid" />
      <div className="loader-glow-top" />
      <div className="loader-glow-bottom" />

      <div className="loader-container">
        <div
          className="loader-image-wrapper"
          style={{
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            opacity: isExiting ? 0 : 1,
            transform: isExiting ? 'translateY(20px) scale(0.98)' : 'translateY(0) scale(1)',
          }}
        >
          <div className="loader-image-container">
            <img
              className="loader-image"
              src="https://etk-9eg.pages.dev/assets/gen/hero_moto_1400w.webp"
              alt="Ендуро"
              style={{ transition: 'opacity 0.3s ease', opacity: isExiting ? 0 : 1 }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  'image/svg+xml;base64,' +
                  btoa(
                    `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'>
                      <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
                        <stop offset='0%' stop-color='%23111'/>
                        <stop offset='100%' stop-color='%231a1a2e'/>
                      </linearGradient></defs>
                      <rect fill='url(%23g)' width='600' height='400'/>
                      <text x='300' y='180' dominant-baseline='middle' text-anchor='middle' fill='%234FFFFF' font-size='32' font-family='sans-serif' font-weight='bold'>ENDURO</text>
                      <text x='300' y='230' dominant-baseline='middle' text-anchor='middle' fill='%234FFFFF80' font-size='14' font-family='sans-serif'>OFFROAD EXPERIENCE</text>
                    </svg>`
                  );
              }}
            />
            <div className="loader-dust-overlay"><DustParticles /></div>
            <div className="loader-gradient-overlay" />
          </div>
        </div>

        <div
          className="loader-text-row"
          style={{
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            opacity: isExiting ? 0 : 1,
            transform: isExiting ? 'translateY(10px)' : 'translateY(0)',
          }}
        >
          <h1 className="loader-title">
            <span className="loader-shimmer">Ендуро</span>
          </h1>
          <h2 className="loader-subtitle">прокат</h2>
          <span className="loader-location">в Києві</span>
        </div>

        <LoadingBar progress={progress} />

        <div
          className="loader-bottom-bars"
          style={{ transition: 'opacity 0.3s ease', opacity: isExiting ? 0 : 1 }}
        >
          <div className="loader-bars-container">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="loader-bar"
                style={{
                  height: `${8 + ((i * 17) % 9)}px`,
                  opacity: progress > i * 20 ? 0.8 : 0.2,
                  transition: 'opacity 0.2s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
