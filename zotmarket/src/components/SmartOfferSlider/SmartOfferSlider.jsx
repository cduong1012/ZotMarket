import React, { useState } from 'react';
import '../../styles/SmartOfferSlider.css';

function SmartOfferSlider({ basePrice, onOfferSubmit }) {
  const [offer, setOffer] = useState(basePrice);
  const handleChange = (e) => {
    const newOffer = parseInt(e.target.value);
    setOffer(newOffer);
  };

  const getPrompt = () => {
    const diff = basePrice - offer;
    const percent = Math.round((diff / basePrice) * 100);
    if (percent === 0) return 'You are offering full price';
    if (percent <= 10) return `This offer is ${percent}% below asking`;
    if (percent <= 30) return `Sellers usually accept ${basePrice - basePrice * 0.2}`;
    return 'This offer may be too low';
  };

  return (
    <div className="smart-offer-slider">
      <h3>Make an Offer</h3>
      <input
        type="range"
        min={Math.floor(basePrice * 0.5)}
        max={basePrice}
        value={offer}
        onChange={handleChange}
        className="slider"
      />
      <div className="offer-value">${offer}</div>
      <div className="offer-prompt">{getPrompt()}</div>
      <button onClick={() => onOfferSubmit(offer)} className="submit-offer">Submit Offer</button>
    </div>
  );
}

export default SmartOfferSlider;