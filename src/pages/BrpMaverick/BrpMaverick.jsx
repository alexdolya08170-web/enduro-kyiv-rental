import React from 'react';
import './BrpMaverick.css';

const BrpMaverick = () => {
  return (
    <section className="brp-maverick" aria-label="BRP Maverick">
      <div className="brp-maverick__container">
        <h1 className="brp-maverick__title">BRP MAVERICK</h1>
        
        <div className="brp-maverick__footer">
          <button 
            type="button" 
            className="brp-maverick__button"
            aria-label="Забронювати BRP Maverick"
          >
            Забронювати
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrpMaverick;