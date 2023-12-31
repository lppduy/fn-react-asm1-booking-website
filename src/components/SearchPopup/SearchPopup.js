import './SearchPopup.css';

import React from 'react';
import { format } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
const SearchPopup = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <>
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
    </>
  );
};

export default SearchPopup;
