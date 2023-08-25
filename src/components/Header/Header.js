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
  // Khởi tạo các state và các hàm xử lý sự kiện cho thành phần tìm kiếm khách sạn

  // State lưu trữ đích đến (destination) được khởi tạo ban đầu là chuỗi rỗng.
  const [destination, setDestination] = useState('');

  // State xác định xem DatePicker có nên hiển thị hay không, ban đầu là false (ẩn).
  const [openDate, setOpenDate] = useState(false);

  // State lưu trữ thông tin khoảng thời gian được chọn, ban đầu là ngày hiện tại.
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  // State xác định xem bảng điều khiển lựa chọn số lượng người và phòng có nên hiển thị hay không, ban đầu là false (ẩn).
  const [openOptions, setOpenOptions] = useState(false);

  // State lưu trữ thông tin về số lượng người (adult), trẻ em (children), và số phòng (room), giá trị ban đầu là 1 adult, 0 children, và 1 room.
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // Hook 'useNavigate' từ React Router được sử dụng để thực hiện chuyển hướng trong ứng dụng.
  const navigate = useNavigate();

  // Hàm xử lý thay đổi số lượng người, trẻ em, hoặc phòng dựa trên tên (name) và thao tác (operation).
  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // Hàm xử lý sự kiện khi người dùng nhấn nút "Search".
  // Nó thực hiện chuyển hướng đến trang "/search" và truyền thông tin về đích đến, khoảng thời gian, và số lượng người/phòng.
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
          {/* Phần tìm kiếm địa điểm */}
          <div className="header-search__item">
            <FontAwesomeIcon icon={faBed} className="header-icon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="header-search__input"
              onChange={e => setDestination(e.target.value)}
            />
          </div>
          {/* Phần lựa chọn khoảng thời gian */}
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
          {/* Phần lựa chọn số lượng người và phòng */}
          <div className="header-search__item">
            <FontAwesomeIcon icon={faPerson} className="header-icon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="header-search__text"
            >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            {/* Dropdown menu hiển thị khi openOptions là true */}
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
