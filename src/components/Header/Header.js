import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <span className="logo">Booking Website</span>
        <div className="headerItems">
          <button className="headerButton">Register</button>
          <button className="headerButton">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
