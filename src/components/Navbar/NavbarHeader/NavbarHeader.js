import './NavbarHeader.css';

function NavbarHeader() {
  return (
    <div className="navbar-header">
      <div className="navbar-header__container">
        <span className="navbrand">Booking Website</span>
        <div className="navbar-header__items">
          <button className="navbar-header__btn">Register</button>
          <button className="navbar-header__btn">Login</button>
        </div>
      </div>
    </div>
  );
}

export default NavbarHeader;
