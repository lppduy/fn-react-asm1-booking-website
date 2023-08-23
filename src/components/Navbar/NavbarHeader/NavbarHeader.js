import './NavbarHeader.css';

function NavbarHeader() {
  return (
    <div className="navbarHeader">
      <div className="navbarHeaderContainer">
        <span className="logo">Booking Website</span>
        <div className="navbarHeaderItems">
          <button className="navbarHeaderBtn">Register</button>
          <button className="navbarHeaderBtn">Login</button>
        </div>
      </div>
    </div>
  );
}

export default NavbarHeader;
