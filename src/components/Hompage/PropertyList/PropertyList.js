import './PropertyList.css';

import React from 'react';
import PropertyItem from './PropertyItem/PropertyItem';

const PropertyList = () => {
  const propertyData = [
    {
      name: 'Hotels',
      count: 233,
      image: './images/type_1.webp',
    },
    {
      name: 'Apartments',
      count: 2331,
      image: './images/type_2.jpg',
    },
    {
      name: 'Resorts',
      count: 2331,
      image: './images/type_3.jpg',
    },
    {
      name: 'Villas',
      count: 2331,
      image: './images/type_4.jpg',
    },
    {
      name: 'Cabins',
      count: 2331,
      image: './images/type_5.jpg',
    },
  ];

  return (
    <div className="p-list">
      {propertyData.map(data => (
        <PropertyItem name={data.name} count={data.count} image={data.image} />
      ))}
    </div>
  );
};

export default PropertyList;
