import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Search.css';
// import SearchList from '../../components/SearchList/SearchList';
// import SearchPopup from '../../components/SearchPopup/SearchPopup';

import { format } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import SearchItem from '../../components/SearchItem/SearchItem';
// import SearchItem from '../../components/searchItem/SearchItem';

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

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <div className="search-container">
        <div className="search-wrapper">
          {/* SEARCH POPUP COMPONENT */}
          <div className="search-popup">
            <h1 className="search-popup__title">Search</h1>
            <div className="search-popup__item">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="search-popup__item">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                'MM/dd/yyyy'
              )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
              {openDate && (
                <DateRange
                  onChange={item => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="search-popup__item">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          {/* SEARCH LIST COMPONENT */}
          <div className="search-list">
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
