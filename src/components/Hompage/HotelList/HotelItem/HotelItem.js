import './HotelItem.css';

import React from 'react';

const HotelItem = props => {
  const { name, city, price, rate, type, image_url } = props.hotel;
  return (
    <div className="hotel-item">
      <img src={image_url} alt={name} className="hotel-image" />
      <span className="hotel-name">
        <a href="./detail/" target="_blank">
          {name}
        </a>
      </span>
      <span className="hotel-city">{city}</span>
      <span className="hotel-price">Starting from ${price}</span>
      <div className="hotel-rating">
        <button>{rate}</button>
        <span>{type}</span>
      </div>
    </div>
  );
};

export default HotelItem;
