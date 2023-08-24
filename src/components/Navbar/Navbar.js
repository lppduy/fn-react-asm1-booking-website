import './Navbar.css';
import NavbarHeader from './NavbarHeader/NavbarHeader';
import NavbarList from './NavbarList/NavbarList';

function Navbar() {
  return (
    <div className="navbar">
      <NavbarHeader />
      <div className="navbar-list">
        <NavbarList />
      </div>
    </div>
  );
}

export default Navbar;
