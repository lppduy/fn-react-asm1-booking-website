import './Navbar.css';
import NavbarHeader from './NavbarHeader/NavbarHeader';
import NavbarList from './NavbarList/NavbarList';

function Navbar() {
  return (
    <div className="navbar">
      <NavbarHeader />
      <NavbarList />
    </div>
  );
}

export default Navbar;
