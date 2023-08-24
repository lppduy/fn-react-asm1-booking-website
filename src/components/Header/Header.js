import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; //
import 'react-date-range/dist/theme/default.css'; //
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate('/search', { state: { destination, date, options } });
  };
  return (
    <div className="header">
      <div className="header-container">
        <h1 className="header-title">A lifetime of discounts? It's Genius.</h1>
        <p className="header-description">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free account
        </p>
        <button className="header-btn">Sign in / Register</button>
        <div className="header-search">
          <div className="header-search__item">
            <FontAwesomeIcon icon={faBed} className="header-icon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="header-search__input"
              onChange={e => setDestination(e.target.value)}
            />
          </div>
          <div className="header-search__item">
            <FontAwesomeIcon icon={faCalendarDays} className="header-icon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="header-search__text"
            >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
              date[0].endDate,
              'MM/dd/yyyy'
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="header-search__item">
            <FontAwesomeIcon icon={faPerson} className="header-icon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="header-search__text"
            >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            {openOptions && (
              <div className="options">
                <div className="option__item">
                  <span className="option-text">Adult</span>
                  <div className="option-counter">
                    <button
                      disabled={options.adult <= 1}
                      className="option-counter__btn"
                      onClick={() => handleOption('adult', 'd')}
                    >
                      -
                    </button>
                    <span className="option-counter__number">
                      {options.adult}
                    </span>
                    <button
                      className="option-counter__btn"
                      onClick={() => handleOption('adult', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="option__item">
                  <span className="option-text">Children</span>
                  <div className="option-counter">
                    <button
                      disabled={options.children <= 0}
                      className="option-counter__btn"
                      onClick={() => handleOption('children', 'd')}
                    >
                      -
                    </button>
                    <span className="option-counter__number">
                      {options.children}
                    </span>
                    <button
                      className="option-counter__btn"
                      onClick={() => handleOption('children', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="option__item">
                  <span className="option-text">Room</span>
                  <div className="option-counter">
                    <button
                      disabled={options.room <= 1}
                      className="option-counter__btn"
                      onClick={() => handleOption('room', 'd')}
                    >
                      -
                    </button>
                    <span className="option-counter__number">
                      {options.room}
                    </span>
                    <button
                      className="option-counter__btn"
                      onClick={() => handleOption('room', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="header-search__item">
            <button className="header-btn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
