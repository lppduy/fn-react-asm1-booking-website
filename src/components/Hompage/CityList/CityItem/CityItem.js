import React from 'react';
import './CityItem.css';
const CityItem = ({ name, subText, image }) => {
  return (
    <div className="city-item">
      <img src={image} alt={name} className="city-item__img" />
      <div className="city-item__titles">
        <h1>{name}</h1>
        <h2>{subText}</h2>
      </div>
    </div>
  );
};

export default CityItem;
