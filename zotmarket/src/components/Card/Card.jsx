import React from 'react';
import '../../styles/Card.css';

function Card( { name, price, location, tag}) {
  return (
    <div className="listing-card">
        <div className='listing-img'></div>
      {/* <div className="listing-img" style={{ backgroundImage: `url(${image})` }}></div> */}
      <div className="listing-info">
        <div className="listing-title">
            <div className="left">
                <span className="listing-name">{name}</span>
            </div>
            <div className="right">
                <span className="listing-new">{tag}</span>
                <span className="listing-price">${price}</span>
            </div>
        </div>
        <div className="listing-location">{location}</div>
      </div>
    </div>
  )
}

export default Card;
