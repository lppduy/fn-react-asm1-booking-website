import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Search.css';

import SearchList from '../../components/SearchList/SearchList';
import SearchPopup from '../../components/SearchPopup/SearchPopup';

const Search = () => {
  const searchData = [
    {
      name: 'Tower Street Apartments',
      distance: '500m',
      tag: 'Free airport taxi',
      type: 'Entire studio • 1 bathroom • 21m² 1 full bed',
      description: 'Studio Apartment with Air conditioning',
      free_cancel: true,
      price: 112,
      rate: 8.9,
      rate_text: 'Excellent',
      image_url: './images/hotel_search_1.webp',
    },
    {
      name: 'Comfort Suites Airport',
      distance: '200m',
      tag: 'Free Breakfast',
      type: 'Entire studio • 2 bathroom • 100m² 2 full bed',
      description: 'Studio Apartment',
      free_cancel: true,
      price: 140,
      rate: 9.3,
      rate_text: 'Exceptional',
      image_url: './images/hotel_search_2.jpg',
    },
    {
      name: 'Four Seasons Hotel',
      distance: '100m',
      tag: 'Free Parking',
      type: '1 bathroom • 51m² 2 full bed',
      description: 'Hotel in Lisbon',
      free_cancel: false,
      price: 99,
      rate: 8.8,
      rate_text: 'Excellent',
      image_url: './images/hotel_search_3.jpg',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <div className="search-container">
          <div className="search-wrapper">
            <div className="search-popup">
              <h1 className="search-popup__title">Search</h1>
              <SearchPopup />
              <button>Search</button>
            </div>
            <div className="search-list">
              <SearchList searchData={searchData} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Search;
