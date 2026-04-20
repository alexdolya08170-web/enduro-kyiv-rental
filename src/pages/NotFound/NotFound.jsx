import { useEffect, useMemo } from 'react';

export default function NotFound() {
  // Inject styles dynamically
  useEffect(() => {
    const styleId = 'nf-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', system-ui, -apple-system, sans-serif; background: #07090d; color: #e6ecf3; min-height: 100vh; overflow: hidden; position: relative; }
        .bg-grid { position: fixed; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px); background-size: 64px 64px; -webkit-mask-image: radial-gradient(ellipse 60% 55% at 50% 45%, black 30%, transparent 75%); mask-image: radial-gradient(ellipse 60% 55% at 50% 45%, black 30%, transparent 75%); z-index: 0; }
        .bg-orb { position: fixed; border-radius: 50%; filter: blur(100px); opacity: 0.45; pointer-events: none; z-index: 0; }
        .bg-orb--blue { width: 520px; height: 520px; background: radial-gradient(circle, #388bff, transparent 70%); top: -120px; left: -100px; animation: nf-orbBlue 12s ease-in-out infinite alternate; }
        .bg-orb--cyan { width: 420px; height: 420px; background: radial-gradient(circle, #22d3ee, transparent 70%); bottom: -80px; right: -60px; animation: nf-orbCyan 14s ease-in-out infinite alternate; }
        .bg-orb--violet { width: 300px; height: 300px; background: radial-gradient(circle, #8b5cf6, transparent 70%); top: 55%; left: 65%; opacity: 0.25; animation: nf-orbViolet 10s ease-in-out infinite alternate; }
        @keyframes nf-orbBlue { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(60px, 40px) scale(1.15); } }
        @keyframes nf-orbCyan { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(-50px, -35px) scale(1.1); } }
        @keyframes nf-orbViolet { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(-30px, 50px) scale(1.2); } }
        .particles { position: fixed; inset: 0; z-index: 0; overflow: hidden; }
        .particle { position: absolute; width: 2px; height: 2px; border-radius: 50%; animation: nf-particleRise linear infinite; }
        @keyframes nf-particleRise { 0% { transform: translateY(0) scale(1); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-105vh) scale(0.3); opacity: 0; } }
        .not-found { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 2rem 1.5rem; }
        .brand { position: absolute; top: 2rem; left: 2rem; display: flex; align-items: center; gap: 0.6rem; text-decoration: none; color: #e6ecf3; font-weight: 700; font-size: 1.15rem; letter-spacing: 0.08em; z-index: 2; }
        .code { font-size: clamp(7rem, 18vw, 14rem); font-weight: 800; line-height: 0.85; letter-spacing: -0.04em; position: relative; user-select: none; background: linear-gradient(180deg, #e6ecf3 20%, #3d4f66 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 1.2rem; animation: nf-codeAppear 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .code::before, .code::after { content: '404'; position: absolute; inset: 0; background: inherit; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .code::before { animation: nf-glitchTop 3s infinite linear alternate-reverse; clip-path: inset(0 0 65% 0); opacity: 0; }
        .code::after { animation: nf-glitchBottom 3s infinite linear alternate-reverse; clip-path: inset(65% 0 0 0); opacity: 0; }
        @keyframes nf-glitchTop { 0%, 90%, 100% { opacity: 0; transform: none; } 92% { opacity: 0.6; transform: translate(-3px, -1px); } 94% { opacity: 0; } 96% { opacity: 0.5; transform: translate(2px, 1px); } 98% { opacity: 0; } }
        @keyframes nf-glitchBottom { 0%, 88%, 100% { opacity: 0; transform: none; } 90% { opacity: 0.5; transform: translate(3px, 1px); } 93% { opacity: 0; } 95% { opacity: 0.4; transform: translate(-2px, -1px); } 97% { opacity: 0; } }
        .code__scanline { position: absolute; inset: 0; background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(56, 139, 255, 0.03) 3px, rgba(56, 139, 255, 0.03) 4px); pointer-events: none; border-radius: 4px; }
        @keyframes nf-codeAppear { from { opacity: 0; transform: translateY(20px) scale(0.95); filter: blur(6px); } to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } }
        .divider { width: 64px; height: 2px; background: linear-gradient(90deg, transparent, #388bff, #8b5cf6, transparent); border-radius: 1px; margin-bottom: 1.5rem; animation: nf-dividerIn 0.8s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes nf-dividerIn { from { width: 0; opacity: 0; } to { width: 64px; opacity: 1; } }
        .heading { font-size: clamp(1.35rem, 3vw, 1.75rem); font-weight: 700; margin-bottom: 0.6rem; text-align: center; animation: nf-fadeUp 0.5s 0.35s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .subtext { font-size: 1rem; color: #7b8da3; text-align: center; max-width: 400px; line-height: 1.65; margin-bottom: 2.5rem; animation: nf-fadeUp 0.5s 0.45s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes nf-fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .btn { position: relative; display: inline-flex; align-items: center; gap: 0.55rem; padding: 0.9rem 2rem; background: linear-gradient(135deg, #388bff, #6366f1); color: #fff; text-decoration: none; font-family: inherit; font-size: 1rem; font-weight: 600; border: none; border-radius: 0.85rem; cursor: pointer; transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease; box-shadow: 0 4px 20px rgba(56, 139, 255, 0.35), 0 0 0 0 rgba(56, 139, 255, 0.6); animation: nf-fadeUp 0.5s 0.55s cubic-bezier(0.16, 1, 0.3, 1) both; overflow: hidden; }
        .btn::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, #4f9bff, #818cf8); opacity: 0; transition: opacity 0.25s ease; border-radius: inherit; }
        .btn:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 30px rgba(56, 139, 255, 0.35), 0 0 40px rgba(56, 139, 255, 0.15); }
        .btn:hover::before { opacity: 1; }
        .btn:focus-visible { outline: none; box-shadow: 0 4px 20px rgba(56, 139, 255, 0.35), 0 0 0 3px rgba(56, 139, 255, 0.6); }
        .btn:active { transform: translateY(0) scale(0.98); }
        .btn span, .btn svg { position: relative; z-index: 1; }
        .btn__arrow { transition: transform 0.25s ease; }
        .btn:hover .btn__arrow { transform: translateX(3px); }
        @media (max-width: 480px) { .brand { top: 1.2rem; left: 1.2rem; } .not-found { padding: 1.5rem 1rem; } }
      `;
      document.head.appendChild(style);
    }

    // Load Font
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.1.1/300,400,500,600,700,800/index.min.css';
    document.head.appendChild(link);

    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) existingStyle.remove();
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);

  // Parallax Effect
  useEffect(() => {
    let isActive = false;
    let mx = 0, my = 0;

    const handleMouseMove = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!isActive) {
        isActive = true;
        requestAnimationFrame(updateParallax);
      }
    };

    const updateParallax = () => {
      const orbs = document.querySelectorAll('.bg-orb');
      orbs.forEach((orb, idx) => {
        const factor = (idx + 1) * 8;
        orb.style.transform = `translate(${mx * factor}px, ${my * factor}px)`;
      });
      isActive = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate Particles
  const particles = useMemo(() => Array.from({ length: 35 }).map((_, i) => {
    const left = Math.random() * 100;
    const size = Math.random() * 2.5 + 1;
    const dur = Math.random() * 14 + 10;
    const delay = Math.random() * 12;
    const hue = Math.random() > 0.6 ? '190, 100%, 65%' : '217, 100%, 60%';
    const alpha = 0.4 + Math.random() * 0.3;
    return (
      <div
        key={`nf-p-${i}`}
        className="particle"
        style={{
          left: `${left}%`,
          bottom: '-10px',
          width: `${size}px`,
          height: `${size}px`,
          background: `hsla(${hue}, ${alpha})`,
          boxShadow: `0 0 ${size * 3}px hsla(${hue}, 0.5)`,
          animationDuration: `${dur}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  }), []);

  return (
    <>
      <div className="bg-grid" />
      <div className="bg-orb bg-orb--blue" />
      <div className="bg-orb bg-orb--cyan" />
      <div className="bg-orb bg-orb--violet" />
      <div className="particles">{particles}</div>

      <nav>
        <a href="/" className="brand" aria-label="ЕТК — На головну">
          <span>ЕТК</span>
        </a>
      </nav>

      <main className="not-found" aria-labelledby="nf-heading">
        <div className="code" aria-hidden="true">
          404
          <div className="code__scanline" />
        </div>

        <div className="divider" aria-hidden="true" />

        <h1 id="nf-heading" className="heading">Сторінку не знайдено</h1>

        <p className="subtext">
          Ймовірно, її було видалено, перейменовано або вона ніколи не існувала.<br />
          Давайте повернемося туди, де все працює.
        </p>

        <a href="/" className="btn" aria-label="Перейти на головну сторінку">
          <span>На головну</span>
          <svg className="btn__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </main>
    </>
  );
}