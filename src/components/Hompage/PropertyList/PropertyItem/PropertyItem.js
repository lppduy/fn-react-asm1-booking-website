import './PropertyItem.css';

import React from 'react';

const PropertyItem = ({ name, count, image }) => {
  return (
    <div className="p-list__item">
      <img src={image} alt={name} className="p-list__img" />
      <div className="p-list__titles">
        <h1>{name}</h1>
        <h2>{count} hotels</h2>
      </div>
    </div>
  );
};

export default PropertyItem;
